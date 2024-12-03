const User = {
    id: '',
    name: '',
    email: '',
    avatar: '',
    roleId: '',
    status: 'active', // Can be 'active' or 'inactive'
    createdAt: ''
  };
  
  // Role Interface
  const Role = {
    id: '',
    name: '',
    description: '',
    permissions: [] // Array of Permission objects
  };
  
  // Permission Interface
  const Permission = {
    id: '',
    name: '',
    description: '',
    module: ''
  };
  
  // Action Type
  const Action = ['create', 'read', 'update', 'delete'];
  