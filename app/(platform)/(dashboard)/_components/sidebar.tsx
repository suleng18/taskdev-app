'use client';

import { useOrganization, useOrganizationList } from '@clerk/nextjs';
import React from 'react';
import { useLocalStorage } from 'usehooks-ts';

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

  return <></>;
};

export default Sidebar;
