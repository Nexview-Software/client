export const invert = (rgba) => {
    const colors = rgba.substring(5, rgba.length - 1).replace(/ /g, '').split(',');
    return `rgba(${ 255 - parseInt(colors[0] )}, ${ 255 - parseInt(colors[1] )}, ${ 255 - parseInt(colors[2] )}, ${ parseFloat(colors[3] )})`;
}