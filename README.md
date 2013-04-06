<h1>Emberjs Project setup template</h1>

My Ember Template with Twitter Bootstrap

<p<h4>Todo:</h4>
    <ul> 
        <li>Compile less files</li>
        <li>Lint on javascript file</li>
        <li>Live reload setup</li>
        <li>Precompile handlebar template</li>
        <li>Unit testing task</li>
        <li>Add require js for amd loading of modules</li>
    </ul>
</p>

<p>
<h3>Installation instructions</h3>

Assuming nodejs is installed, run the following to setup the project <br />

1. <code>npm install grunt-cli</code> <br />

To install grunt-cli globally, use <code>-g</code> flag. <br />

2. <code>npm install</code> <br />

This will install dependencies listed in the package.json file. <br />

</p>

<p>
<h3>Running the project</h3> <br />

If you installed grunt-cli globally: <br />

<code>grunt</code> <br />

Otherwise, there's a shell script utility called grunt in the project folder. It can be used to run grunt <br />

<code>./grunt</code> <br />

Options:  <br />

    <ul>
        <li>watch -- Start listening to changes and compile the project automatically</li>
        <li>default -- run the default task</li>
    </ul>
</p>