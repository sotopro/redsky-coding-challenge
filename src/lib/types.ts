export interface User {
  id: number;
  avatar: string;
  firstName: string;
  lastName: string;
  email: string;
}

export interface UserActions {
  handleEditUser: (id: number) => void;
  handleDeleteUser: (id: number) => void;
  handleAddUser: () => void;
}
