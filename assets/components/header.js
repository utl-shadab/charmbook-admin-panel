// Header Component
class MyHeader extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
      <div class="header">

            <div class="header-left">
                <a href="index.html" class="logo  fw-bold fs-2 " style="color:"#3D5EE1"">
                    <img src="assets/img/Charm-logo.png" class="d-lg-none" alt="Charmbook">
                    CharmBook
                </a>
                <a href="index.html" class="logo logo-small">
                    <img src="assets/img/Charm-logo.png" alt="Logo" width="30" height="30">
                </a>
            </div>
            
            <div class="menu-toggle">
                <a href="javascript:void(0);" id="toggle_btn">
                    <i class="fas fa-bars"></i>
                </a>
            </div>

            
            <a class="mobile_btn" id="mobile_btn">
                <i class="fas fa-bars"></i>
            </a>

            <ul class="nav user-menu">
                
                <li class="nav-item dropdown has-arrow new-user-menus">
                    <a href="#" class="dropdown-toggle nav-link" data-bs-toggle="dropdown">
                        <span class="user-img">
                            <img class="rounded-circle" src="assets/img/profiles/avatar-01.jpg" width="31"
                                alt="Rahul Yadav">
                            <div class="user-text">
                                <h6>Rahul Yadav</h6>
                                <p class="text-muted mb-0">Administrator</p>
                            </div>
                        </span>
                    </a>
                    <div class="dropdown-menu">
                        <div class="user-header">
                            <div class="avatar avatar-sm">
                                <img src="assets/img/profiles/avatar-01.jpg" alt="User Image"
                                    class="avatar-img rounded-circle">
                            </div>
                            <div class="user-text">
                                <h6>Rahul Yadav</h6>
                                <p class="text-muted mb-0">Administrator</p>
                            </div>
                        </div>
                        <a class="dropdown-item" href="profile.html">My Profile</a>
                        <a class="dropdown-item" href="login.html">Logout</a>
                    </div>
                </li>

            </ul>

        </div>
    `;
    }
  }
  customElements.define("my-header", MyHeader);