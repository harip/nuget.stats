var fetch = require('qajax');
var PackageStats = require('./packageModel');

var URL_Base = 'https://api-v2v3search-0.nuget.org/query?q=packageid';

function getNugetPackageStats(packageId) {
    var packageUrl = URL_Base + ':' + packageId;
    return fetch(packageUrl)
        .then(function(data) {
            var packageData = JSON.parse(data.responseText);
            return packageData.data[0];
        })
        .then(function(data) {
            return new Promise(function(resolve, reject) {
                if (data) {
                    var packageStats = new PackageStats();
                    packageStats.Title = data.title;
                    packageStats.ProjectUrl = data.projectUrl;
                    packageStats.Version = data.version;
                    packageStats.TotalDownloads = data.totalDownloads;
                    resolve(packageStats);
                } else {
                    reject(Error('Failed to get nuget package stats for - ' + packageId))
                }
            })
        })
        .catch(function(err) {
            console.log(err);
        });
}
module.exports.GetNugetPackageStats = getNugetPackageStats;