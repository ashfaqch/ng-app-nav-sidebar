import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'My Application';
  username = 'Admin';

  toggleSidebar(): void {
    const containerSidebar = document.getElementById('container-sidebar');
    const containerBody = document.getElementById('container-body');
    const collapseIcon = document.getElementById('collapse-icon');

    if (!containerSidebar.style.width) {
      containerSidebar.style.width = '75px';
      containerBody.style.marginLeft = '75px';
      collapseIcon.classList.remove('fa-chevron-left');
      collapseIcon.classList.add('fa-chevron-right');
      return;
    }

    if (containerSidebar.style.width === '280px') {
      containerSidebar.style.width = '75px';
      containerBody.style.marginLeft = '75px';
      collapseIcon.classList.remove('fa-chevron-left');
      collapseIcon.classList.add('fa-chevron-right');
    } else {
      containerSidebar.style.width = '280px';
      containerBody.style.marginLeft = '280px';
      collapseIcon.classList.remove('fa-chevron-right');
      collapseIcon.classList.add('fa-chevron-left');
    }
  }
}
