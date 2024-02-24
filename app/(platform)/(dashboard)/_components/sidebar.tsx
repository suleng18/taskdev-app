'use client';

import { Accordion } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';
import { useOrganization, useOrganizationList } from '@clerk/nextjs';
import { Plus } from 'lucide-react';
import Link from 'next/link';
import React from 'react';
import { useLocalStorage } from 'usehooks-ts';
import NavItem, { Organization } from './nav-item';

interface SidebarProps {
  storageKey: string;
}

const Sidebar = ({ storageKey = 't-sidebar-state' }: SidebarProps) => {
  const [expanded, setExpanded] = useLocalStorage<Record<string, any>>(storageKey, {});

  const { organization: activeOrganization, isLoaded: isLoadedOrd } = useOrganization();

  const { userMemberships, isLoaded: isLoadedOrdList } = useOrganizationList({
    userMemberships: {
      infinite: true,
    },
  });

  const defaultAccordionValue: string[] = Object.keys(expanded).reduce((acc: string[], key: string) => {
    if (expanded[key]) {
      acc.push(key);
    }

    return acc;
  }, []);

  const onExpand = (id: string) => {
    setExpanded((curr) => ({
      ...curr,
      [id]: !expanded[id],
    }));
  };

  if (!isLoadedOrd || !isLoadedOrdList || userMemberships.isLoading) {
    return (
      <>
        <Skeleton />
      </>
    );
  }

  return (
    <>
      <div className="flex items-center mb-1 font-medium text-xs">
        <span className="pl-4">Workspaces</span>
        <Button asChild type="button" size="icon" variant="ghost" className="ml-auto">
          <Link href="/select-org">
            <Plus className="h-4 w-4" />
          </Link>
        </Button>
      </div>

      <Accordion defaultValue={defaultAccordionValue} type="multiple" className="space-y-2">
        {userMemberships.data.map(({ organization }) => (
          <NavItem
            key={organization.id}
            isActive={activeOrganization?.id === organization.id}
            isExpanded={expanded[organization.id]}
            organization={organization as Organization}
            onExpand={onExpand}
          />
        ))}
      </Accordion>
    </>
  );
};

export default Sidebar;
// https://youtu.be/pRybm9lXW2c?t=8581
