// Regex function for search functionality
const escapeRegex = (string) => {
  return string.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
};
// Exporting Function
module.exports = escapeRegex;// Regex function for search functionality
