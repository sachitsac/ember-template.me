#### Emberjs Project setup template
=================

My Ember Template with Twitter Bootstrap

<p>####Todo: 
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
#### Installation instructions

Assuming nodejs is installed, run the following to setup the project

1. <code>npm install grunt-cli</code>

To install grunt-cli globally, use <code>-g</code> flag.

2. <code>npm install</code>

This will install dependencies listed in the package.json file.

</p>

<p>
#### Running the project

If you installed grunt-cli globally:

<code>grunt</code>

Otherwise, there's a shell script utility called grunt in the project folder. It can be used to run grunt

<code>./grunt</code>

Options: 

    <ul>
        <li>watch -- Start listening to changes and compile the project automatically</li>
        <li>default -- run the default task</li>
    </ul>
</p>