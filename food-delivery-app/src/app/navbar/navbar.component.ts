// import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
// import { isPlatformBrowser } from '@angular/common';
// import { RouterModule } from '@angular/router';

// @Component({
//   selector: 'app-navbar',
//   standalone: true,
//   imports: [RouterModule],
//   templateUrl: './navbar.component.html',
//   styleUrls: ['./navbar.component.css']
// })
// export class NavbarComponent implements OnInit {
//   isAdminUser: boolean = false;

//   constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

//   ngOnInit() {
//     this.isAdminUser = this.isAdmin();
//   }

//   isAdmin(): boolean {
//     if (isPlatformBrowser(this.platformId)) {
//       const role = localStorage.getItem('role');
//       return role === 'admin';
//     }
//     return false; // Not in browser
//   }

//   isLoginOrRegister(): boolean {
//     // Implement this method to check if the user is on the login or register page.
//     // You can do this by checking the current route or some other logic.
//     return false; // Example default value; replace with actual logic
//   }
// }

import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CommonModule, isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  private hideRoutes = ['/login', '/register'];

  constructor(private router: Router, @Inject(PLATFORM_ID) private platformId: Object) {}

  isLoginOrRegister(): boolean {
    return this.hideRoutes.includes(this.router.url);
  }

  isAdmin(): boolean {
    if (isPlatformBrowser(this.platformId)) {
      const userRole = localStorage.getItem('role'); // Get user role from local storage
      return userRole === 'admin'; // Check if user role is 'admin'
    }
    return false;
  }

  logout(): void {
    const token = localStorage.getItem('token');
    const role = localStorage.getItem('role');
    
    if (token || role) {
      console.log('Logging out...');
      localStorage.removeItem('token');
      localStorage.removeItem('role');
      
      // Navigate to login
      this.router.navigate(['/login']).then(() => {
        console.log('Navigated to /login');
      });
    } else {
      console.log('No token or role found');
    }
    }
  }




// import { Component } from '@angular/core';
// import { Router, RouterModule } from '@angular/router'; // Import Router
// import { CommonModule } from '@angular/common'; // Import CommonModule

// @Component({
//   selector: 'app-navbar',
//   standalone: true,
//   imports: [RouterModule, CommonModule], // Add CommonModule
//   templateUrl: './navbar.component.html',
//   styleUrls: ['./navbar.component.css']
// })
// export class NavbarComponent {
//   private hideRoutes = ['/login', '/register']; // Array of routes where the navbar should be hidden

//   constructor(private router: Router) {}

//   // Method to check if current route is in the hideRoutes array
//   isLoginOrRegister(): boolean {
//     return this.hideRoutes.includes(this.router.url);
//   }
// }


