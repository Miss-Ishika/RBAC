import React, { createContext, useContext, useState } from 'react';
import { users as initialUsers, roles as initialRoles } from '../data/mockData';

const RBACContext = createContext(undefined);

export const RBACProvider = ({ children }) => {
  const [users, setUsers] = useState(initialUsers);
  const [roles, setRoles] = useState(initialRoles);

  const addUser = (userData) => {
    const newUser = {
      ...userData,
      id: (users.length + 1).toString(),
      createdAt: new Date().toISOString().split('T')[0],
    };
    setUsers([...users, newUser]);
  };

  const updateUser = (updatedUser) => {
    setUsers(users.map(user => user.id === updatedUser.id ? updatedUser : user));
  };

  const deleteUser = (id) => {
    setUsers(users.filter(user => user.id !== id));
  };

  const addRole = (roleData) => {
    const newRole = {
      ...roleData,
      id: (roles.length + 1).toString(),
    };
    setRoles([...roles, newRole]);
  };

  const updateRole = (updatedRole) => {
    setRoles(roles.map(role => role.id === updatedRole.id ? updatedRole : role));
  };

  const deleteRole = (id) => {
    // First, update any users that had this role
    setUsers(users.map(user => 
      user.roleId === id ? { ...user, roleId: 'user' } : user
    ));
    setRoles(roles.filter(role => role.id !== id));
  };

  return (
    <RBACContext.Provider value={{
      users,
      roles,
      addUser,
      updateUser,
      deleteUser,
      addRole,
      updateRole,
      deleteRole,
    }}>
      {children}
    </RBACContext.Provider>
  );
};

export const useRBAC = () => {
  const context = useContext(RBACContext);
  if (context === undefined) {
    throw new Error('useRBAC must be used within a RBACProvider');
  }
  return context;
};
