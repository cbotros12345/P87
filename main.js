var canvas = new fabric.Canvas('myCanvas');
 block_y=1;
 block_x=1;

block_image_width = 350;
block_image_height = 430;

var block_Image_object= "";

function new_Image(get_Image)
{
	fabric.Image.fromURL(get_Image, function(Img){
		block_Image_object = Img;

		block_Image_object.scaleToWidth(block_image_width);
		block_Image_object.scaleToHeight(block_image_height)
		block_Image_object.set({
			top:block_y,
			top:block_x
		});
		canvas.add(block_Image_object);
	})
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
keyPressed = e.keyCode;
console.log(keyPressed);

	if(keyPressed == '82')
	{
		new_Image("rr1.png")
		console.log("r")
	}
	if(keyPressed == '71')
	{
		new_Image("gr.png")
		console.log("g")
	}
	
	if(keyPressed == '89')
	{
		new_Image("yr.png")
		console.log("y")
	}
	if(keyPressed == '80')
	{
		new_Image("pr.png")
		console.log("p")
	}
	if(keyPressed == '66')
	{
		new_Image("br.png")
		console.log("b")
	}
	
}