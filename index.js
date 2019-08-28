$(document).ready(() => {
// displaying the html and text of the webpage
    // let myText=$('body').text();
    // let myHtml=$('body').html();
    // alert(myText)
    // alert(myHtml)
// accessing the element text through class name
    // let sub_heading = $('.sub-heading').text();
    // alert(sub_heading)

//appending data to an element
    let add_data_end = $('.paragraph').append('Some Data Added to the end.')

//prepending data to an element
    let add_data_begin = $('.paragraph').prepend('Some Data Added to the beginning.')

//changing the content of the element
    let change_heading = $('.heading').text('Heading Changed')

//changing the image
    let change_image = $('.my-image').attr("src","new_image.jpeg")

// to remove the contents of an element
    // let empty_contents = $('.icon-group').empty()

//to remove an element
    // let remove_element = $('button').remove()
})
