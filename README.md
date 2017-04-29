# GetNugetPackageStats

A Node.js package that gets a nuget package statistics

## Usage

npm install nuget-getstats

Then,

var nugetStats = require('./index');
nugetStats.GetNugetPackageStats('printclassinstance').then(function(data) {
    console.log(data);
})

## License

Apache 2.0