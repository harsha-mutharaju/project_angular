import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faUser, faEnvelope, faPhone, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule, FormsModule, FontAwesomeModule],
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  users: User[] = [];
  isLoading = false;
  isUpdateMode = false;

  userForm: { id: number | null; name: string; email: string; phone: string } = {
    id: null,
    name: '',
    email: '',
    phone: ''
  };

  // FontAwesome Icons
  faUser = faUser;
  faEnvelope = faEnvelope;
  faPhone = faPhone;
  faEdit = faEdit;
  faTrash = faTrash;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.fetchUsers();
  }

  fetchUsers(): void {
    this.isLoading = true;
    this.userService.getUsers().subscribe(users => {
      this.users = users;
      this.isLoading = false;
    });
  }

  addUser(): void {
    const { name, email, phone } = this.userForm;
    this.userService.addUser({ name, email, phone }).subscribe(() => {
      this.fetchUsers();
      this.resetForm();
    });
  }

  updateUser(): void {
    this.userService.updateUser(this.userForm as User).subscribe(() => {
      this.fetchUsers();
      this.resetForm();
    });
  }

  deleteUser(id: number): void {
    this.userService.deleteUser(id).subscribe(() => this.fetchUsers());
  }

  editUser(user: User): void {
    this.userForm = { ...user };
    this.isUpdateMode = true;
  }

  resetForm(): void {
    this.userForm = {
      id: null,
      name: '',
      email: '',
      phone: ''
    };
    this.isUpdateMode = false;
  }
}
