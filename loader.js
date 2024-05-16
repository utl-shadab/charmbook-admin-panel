// loader.js

function loadCSS(href) {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = href;
    document.head.appendChild(link);
}

function loadScript(src, callback) {
    const script = document.createElement('script');
    script.src = src;
    script.onload = callback || function(){};
    document.body.appendChild(script);
}

// Load CSS Files
loadCSS('assets/plugins/bootstrap/css/bootstrap.min.css');
loadCSS('assets/plugins/feather/feather.css');
loadCSS('assets/plugins/icons/flags/flags.css');
loadCSS('assets/plugins/fontawesome/css/fontawesome.min.css');
loadCSS('assets/plugins/fontawesome/css/all.min.css');
loadCSS('<link rel="stylesheet" href="assets/plugins/datatables/datatables.min.css">');
loadCSS('assets/css/style.css');

// Load JavaScript Files
loadScript('assets/js/jquery-3.6.0.min.js', function() {
    loadScript('assets/plugins/bootstrap/js/bootstrap.bundle.min.js', function() {
        loadScript('assets/js/feather.min.js');
        loadScript('assets/plugins/slimscroll/jquery.slimscroll.min.js');
        loadScript('assets/plugins/datatables/jquery.dataTables.min.js');
        loadScript('assets/plugins/datatables/datatables.min.js');
        loadScript('assets/plugins/apexchart/apexcharts.min.js', function() {
            loadScript('assets/plugins/apexchart/chart-data.js');
            loadScript('assets/components/header.js');
            loadScript('assets/components/footer.js');
            loadScript('assets/components/sidebar.js');
            loadScript('assets/js/script.js');
        });
    });
});
