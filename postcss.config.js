import autoprefixer from 'autoprefixer'; // Import autoprefixer for vendor prefixing
import cssnano from 'cssnano'; // Import cssnano for CSS minification

export default {
  plugins: [
    autoprefixer(), // Add vendor prefixes
    cssnano({ preset: 'default' }), // Minify the CSS
  ],
};