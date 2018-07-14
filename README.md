# tooly
A very small and lightweight tooltip for rendering your old boring tooltip amazing

## Running Locally

### Installing Node.js modules

Once you have Node and npm installed and this repository downloaded, you'll need
to install the application's dependencies. Do this with:

    npm install

to build for production run:

    npm run build

##### how to use:
Add this template inside ```<body>``` for each full featured tooltip, Example:

```html
<div style="display:none;" class="tooltip-content">
	<h5>Titre of example</h5>
	<p>
		Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aut, blanditiis delectus esse laudantium natus
		necessitatibus odit quia, quidem, rem rerum sunt voluptatibus. Et id necessitatibus possimus quasi sed, unde
	</p>
	<p>
		<img src="https://picsum.photos/318/180/?random" width="318" height="180" alt="Card image cap" style="width:100%; height: auto;">
	</p>
</div>
```

and target it by using ```data-tootip=".tooltip-content"``` to show the template when hovering over.

After copying The build foulder to your project,


In a new js file add ```import Tooltip from './build/js/min.js'``` to import the class 

then add this line to initialize the carousel:

```js
Tooltip.bind('a[title]');
```

### Settings

Option | Type | Default | Description
------ | ---- | ------- | -----------
selector | HTMLElement selector | none | element that should be targeted.

### Tooly screenshot

Normal tooltip

![tooly screenshot](https://github.com/shutsugan/tooly/blob/master/normal.png)

Featured tooltip

![tooly screenshot](https://github.com/shutsugan/tooly/blob/master/featured.png)

## License

MIT
