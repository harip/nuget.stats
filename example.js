var nugetStats = require('./index');
nugetStats.GetNugetPackageStats('printclassinstance').then(data => console.log(data));