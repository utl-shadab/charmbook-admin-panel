class MySidebar extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
      <div class="sidebar" id="sidebar">
            <div class="sidebar-inner slimscroll">
                <div id="sidebar-menu" class="sidebar-menu">
                    <ul>
                        <li class="menu-title">
                            <span>Main Menu</span>
                        </li>
                        <li class="submenu active">
                            <a href="javascript:void(0);"><i class="feather-grid"></i> <span> Dashboard</span> <span
                                    class="menu-arrow"></span></a>
                            <ul>
                                <li><a href="index.html" class="active">Admin Dashboard</a></li>
                            </ul>
                        </li>
                        <li class="submenu">
                            <a href="javascript:void(0);"><i class="fas fa-graduation-cap"></i> <span> Students</span> <span
                                    class="menu-arrow"></span></a>
                            <ul>
                                <li><a href="students.html">Student List</a></li>
                                <li><a href="student-details.html">Student View</a></li>
                                <li><a href="add-student.html">Student Add</a></li>
                                <li><a href="edit-student.html">Student Edit</a></li>
                            </ul>
                        </li>
                        <li class="submenu">
                            <a href="javascript:void(0);"><i class="fas fa-chalkboard-teacher"></i> <span> Teachers</span> <span
                                    class="menu-arrow"></span></a>
                            <ul>
                                <li><a href="teachers.html">Teacher List</a></li>
                                <li><a href="teacher-details.html">Teacher View</a></li>
                                <li><a href="add-teacher.html">Teacher Add</a></li>
                                <li><a href="edit-teacher.html">Teacher Edit</a></li>
                            </ul>
                        </li>
                        <li class="submenu">
                            <a href="javascript:void(0);"><i class="fas fa-building"></i> <span> Classess</span> <span
                                    class="menu-arrow"></span></a>
                            <ul>
                                <li><a href="classes.html">Classes List</a></li>
                                <li><a href="add-classes.html">Classes Add</a></li>
                                <li><a href="edit-classes.html">Classes Edit</a></li>
                            </ul>
                        </li>
                        <li class="submenu">
                            <a href="javascript:void(0);"><i class="fas fa-book-reader"></i> <span> Subjects</span> <span
                                    class="menu-arrow"></span></a>
                            <ul>
                                <li><a href="subjects.html">Subject List</a></li>
                                <li><a href="add-subject.html">Subject Add</a></li>
                                <li><a href="edit-subject.html">Subject Edit</a></li>
                            </ul>
                        </li>
                        <li class="submenu">
                            <a href="javascript:void(0);"><i class="fas fa-book"></i> <span>Books</span> <span
                                    class="menu-arrow"></span></a>
                            <ul>
                                <li><a href="books.html">Books List</a></li>
                                <li><a href="add-books.html"> Add Books</a></li>
                                <li><a href="edit-books.html"> Edit Books</a></li>
                            </ul>
                        </li>
                        <li>
                        <a href="event.html"><i class="fas fa-calendar-day"></i> <span>Events</span></a>
                        </li>
                        <li class="menu-title">
                            <span>Management</span>
                        </li>
                        <li>
                            <a href="holiday.html"><i class="fas fa-holly-berry"></i> <span>Holiday</span></a>
                        </li>
                        
                       
                       
                        <li>
                            <a href="time-table.html"><i class="fas fa-table"></i> <span>Time Table</span></a>
                        </li>
                        <li>
                            <a href="library.html"><i class="fas fa-book"></i> <span>Library</span></a>
                        </li>
                        
                        <li>
                            <a href="settings.html"><i class="fas fa-cog"></i> <span>Settings</span></a>
                        </li>
                        <li class="menu-title">
                            <span>Pages</span>
                        </li>
                        <li class="submenu">
                            <a href="javascript:void(0);"><i class="fas fa-shield-alt"></i> <span> Authentication </span> <span
                                    class="menu-arrow"></span></a>
                            <ul>
                                <li><a href="login.html">Login</a></li>
                                <li><a href="register.html">Register</a></li>
                                <li><a href="forgot-password.html">Forgot Password</a></li>
                                <li><a href="error-404.html">Error Page</a></li>
                            </ul>
                        </li>
                        
                   
                    </ul>
                </div>
            </div>
        </div>
    `;
    }
  }
  customElements.define("my-sidebar", MySidebar);