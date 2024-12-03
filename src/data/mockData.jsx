// Permissions Data
const permissions = [
    {
      id: 'users_read',
      name: 'Read Users',
      description: 'View user information',
      module: 'Users'
    },
    {
      id: 'users_create',
      name: 'Create Users',
      description: 'Create new users',
      module: 'Users'
    },
    {
      id: 'users_update',
      name: 'Update Users',
      description: 'Modify user information',
      module: 'Users'
    },
    {
      id: 'users_delete',
      name: 'Delete Users',
      description: 'Remove users from the system',
      module: 'Users'
    },
    {
      id: 'roles_read',
      name: 'Read Roles',
      description: 'View role information',
      module: 'Roles'
    },
    {
      id: 'roles_create',
      name: 'Create Roles',
      description: 'Create new roles',
      module: 'Roles'
    },
    {
      id: 'roles_update',
      name: 'Update Roles',
      description: 'Modify role information',
      module: 'Roles'
    },
    {
      id: 'roles_delete',
      name: 'Delete Roles',
      description: 'Remove roles from the system',
      module: 'Roles'
    }
  ];
  
  // Roles Data
  const roles = [
    {
      id: 'admin',
      name: 'Administrator',
      description: 'Full system access',
      permissions: permissions
    },
    {
      id: 'manager',
      name: 'Manager',
      description: 'Can manage users and view roles',
      permissions: permissions.filter(p => p.module === 'Users' || p.id === 'roles_read')
    },
    {
      id: 'user',
      name: 'User',
      description: 'Basic user access',
      permissions: permissions.filter(p => p.id === 'users_read')
    }
  ];
  
  // Users Data
  const users = [
    {
      id: '1',
      name: 'John Doe',
      email: 'john@example.com',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop',
      roleId: 'admin',
      status: 'active',
      createdAt: '2024-01-15'
    },
    {
      id: '2',
      name: 'Jane Smith',
      email: 'jane@example.com',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop',
      roleId: 'manager',
      status: 'active',
      createdAt: '2024-02-01'
    },
    {
      id: '3',
      name: 'Bob Wilson',
      email: 'bob@example.com',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop',
      roleId: 'user',
      status: 'inactive',
      createdAt: '2024-02-15'
    }
  ];
  
export { permissions, roles, users };