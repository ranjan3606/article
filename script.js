const short = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];


const sortedA = short.sort(); //to call short array to sort function
 
// console.log(sortedA)
document.querySelector('#short').innerHTML = 
    sortedA
    .map(sho => `<li>${sho}</li>`)
    .join(''); //join function remove to comma(,)
// create document and queryselector to add data in #short id in ul html tag
// create map function to create li tag to show data in list 
