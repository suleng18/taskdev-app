import { create } from '@/actions/create-board';
import { db } from '@/lib/db';
import { auth } from '@clerk/nextjs';

import React from 'react';

const OrganizationIdPage = () => {
  const { userId, orgId } = auth();

  return (
    <div>
      <form action={create}>
        <input id="title" name="title" required placeholder="Enter a board title" className="border-black border p-1" />
      </form>
    </div>
  );
};

export default OrganizationIdPage;
