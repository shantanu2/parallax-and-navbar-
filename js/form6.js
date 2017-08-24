/*
var div = document.getElementById('container');
var PSV = new PhotoSphereViewer({
    panorama: './images/sun.jpg',
    container: div,
    time_anim: 3000,
    navbar: true,
    navbar_style: {
      backgroundColor: 'rgba(58, 67, 77, 0.7)'
    }
    
  
});
*/

var PSV = new PhotoSphereViewer({
    panorama: 'https://cdn.rawgit.com/mistic100/Photo-Sphere-Viewer/3.1.0/example/Bryce-Canyon-National-Park-Mark-Doliner.jpg',
    container: 'photosphere',
    loading_img: 'https://raw.githubusercontent.com/mistic100/Photo-Sphere-Viewer/3.1.0/example/photosphere-logo.gif',
    navbar: 'autorotate zoom download fullscreen',
    caption: 'Bryce Canyon National Park <b>&copy; Mark Doliner</b>',
    default_fov: 65,
    mousewheel: false,
    size: {
      height: 400
    }
  });

