"use strict";(self.webpackChunkchia_docs=self.webpackChunkchia_docs||[]).push([[6357],{4666:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>a,toc:()=>o});var l=n(5893),s=n(1151);n(4866),n(5162);const i={slug:"/guides/datalayer-permissions",title:"DataLayer Permissions"},r=void 0,a={id:"guides/datalayer/datalayer-permissions",title:"DataLayer Permissions",description:"Intro",source:"@site/docs/guides/datalayer/datalayer-permissions.md",sourceDirName:"guides/datalayer",slug:"/guides/datalayer-permissions",permalink:"/guides/datalayer-permissions",draft:!1,unlisted:!1,editUrl:"https://github.com/Chia-Network/chia-docs/blob/main/docs/guides/datalayer/datalayer-permissions.md",tags:[],version:"current",frontMatter:{slug:"/guides/datalayer-permissions",title:"DataLayer Permissions"},sidebar:"guides",previous:{title:"DataLayer User Guide",permalink:"/guides/datalayer-user-guide"},next:{title:"Clawback",permalink:"/guides/clawback-developer-guide"}},d={},o=[{value:"Intro",id:"intro",level:2},{value:"About DataLayer permissions",id:"about-datalayer-permissions",level:2},{value:"Chia configuration",id:"chia-configuration",level:2},{value:"REST API",id:"rest-api",level:2},{value:"<code>handle_upload</code>",id:"handle_upload",level:3},{value:"<code>handle_download</code>",id:"handle_download",level:3},{value:"<code>upload</code>",id:"upload",level:3},{value:"<code>download</code>",id:"download",level:3},{value:"<code>add_missing_files</code>",id:"add_missing_files",level:3},{value:"<code>plugin_info</code>",id:"plugin_info",level:3},{value:"The Chia S3 plugin",id:"the-chia-s3-plugin",level:2},{value:"<code>healthz</code>",id:"healthz",level:3},{value:"<code>add_store_id</code>",id:"add_store_id",level:3},{value:"<code>remove_store_id</code>",id:"remove_store_id",level:3}];function c(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(t.h2,{id:"intro",children:"Intro"}),"\n",(0,l.jsx)(t.p,{children:"Chia DataLayer\u2122 is a decentralized database that enables the redundant storage of off-chain data, auditable on the Chia blockchain. DataLayer uses an open and permissionless publish/subscribe model, which makes it possible for anyone to view and audit the data."}),"\n",(0,l.jsx)(t.p,{children:"Many users -- especially those in the enterprise space -- would like to keep their data private."}),"\n",(0,l.jsx)(t.p,{children:"DataLayer Permissions give owners of data stores a method to gate participation, thus keeping their data private. This is accomplished by using customizable plugins."}),"\n",(0,l.jsx)(t.p,{children:"This guide will show you how to get started with DataLayer Permissions. Additional resources include:"}),"\n",(0,l.jsxs)(t.ul,{children:["\n",(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.a,{href:"/guides/datalayer-user-guide",children:"DataLayer user guide"})," -- You should already be familiar with using DataLayer before working with permissions. This guide will help you to get started"]}),"\n",(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.a,{href:"https://github.com/Chia-Network/chia-blockchain/blob/main/chia/data_layer/s3_plugin_service.py",children:"S3 plugin"})," -- This is the reference plugin for Amazon S3 integration. It is ",(0,l.jsx)(t.a,{href:"#the-chia-s3-plugin",children:"discussed"})," later in this guide"]}),"\n",(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.a,{href:"https://github.com/Chia-Network/chia-blockchain/blob/main/chia/data_layer/data_layer.py",children:"Source API calls"})," -- In case you want to dig into the source code"]}),"\n",(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.a,{href:"/datalayer-cli",children:"CLI documentation"})," for DataLayer"]}),"\n",(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.a,{href:"/datalayer-rpc",children:"RPC documentation"})," for DataLayer"]}),"\n"]}),"\n",(0,l.jsx)(t.h2,{id:"about-datalayer-permissions",children:"About DataLayer permissions"}),"\n",(0,l.jsx)(t.p,{children:"Support for permissions were added to DataLayer in version 1.8.0 of the Chia reference wallet. The permissioning system requires uploader (publisher) and downloader (subscriber) plugins, which function as follows:"}),"\n",(0,l.jsxs)(t.ul,{children:["\n",(0,l.jsx)(t.li,{children:"When you push any changes to your DataLayer singleton, the uploader plugin is called"}),"\n",(0,l.jsx)(t.li,{children:"When one of your subscribed singletons makes any on-chain changes, the downloader plugin is called"}),"\n"]}),"\n",(0,l.jsx)(t.p,{children:"The uploader and downloader plugins take the form of a service that exposes a specific RESTful API that DataLayer will call. This service can be configured in multiple different ways:"}),"\n",(0,l.jsxs)(t.ul,{children:["\n",(0,l.jsx)(t.li,{children:"Uploader only"}),"\n",(0,l.jsx)(t.li,{children:"Downloader only"}),"\n",(0,l.jsx)(t.li,{children:"Both uploader and downloader"}),"\n"]}),"\n",(0,l.jsx)(t.p,{children:"Multiple instances of the same service are also possible. The service can be configured to require credentials, thereby gating access to data."}),"\n",(0,l.jsx)(t.h2,{id:"chia-configuration",children:"Chia configuration"}),"\n",(0,l.jsx)(t.p,{children:"To configure Chia to use DataLayer permissions, you need to add a list of URLs to config.yaml which allows access to the uploaders and downloaders. The settings to configure are new as of 1.8.0. To add them, you have two options:"}),"\n",(0,l.jsxs)(t.ol,{children:["\n",(0,l.jsxs)(t.li,{children:["\n",(0,l.jsx)(t.p,{children:"Start from scratch"}),"\n",(0,l.jsxs)(t.ul,{children:["\n",(0,l.jsxs)(t.li,{children:["Delete or rename ",(0,l.jsx)(t.code,{children:"~/.chia/mainnet/config/config.yaml"})]}),"\n",(0,l.jsxs)(t.li,{children:["Run ",(0,l.jsx)(t.code,{children:"chia init"}),"; a new copy of config.yaml that contains the new settings will be generated"]}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(t.li,{children:["\n",(0,l.jsx)(t.p,{children:"Add the settings manually"}),"\n",(0,l.jsxs)(t.ul,{children:["\n",(0,l.jsxs)(t.li,{children:["Edit ",(0,l.jsx)(t.code,{children:"~/.chia/mainnet/config/config.yaml"})]}),"\n",(0,l.jsxs)(t.li,{children:["Under the ",(0,l.jsx)(t.code,{children:"data_layer:"})," settings, add the following new lines:","\n",(0,l.jsxs)(t.ul,{children:["\n",(0,l.jsx)(t.li,{children:(0,l.jsx)(t.code,{children:"downloaders: []"})}),"\n",(0,l.jsx)(t.li,{children:(0,l.jsx)(t.code,{children:"uploaders: []"})}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(t.p,{children:["At this point, you can edit config.yaml and add the URL path(s) to either or both of the plugins. Be sure to remove the square brackets ",(0,l.jsx)(t.code,{children:"[]"})," if you add any URLs. For example, a snippet of config.yaml with the uploaders and downloaders configured might look like this:"]}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-yaml",children:"data_layer:\n  client_timeout: 15\n  database_path: data_layer/db/data_layer_CHALLENGE.sqlite\n  downloaders:\n  - http://localhost:9456\n  - http://localhost:3145\n...\n  uploaders:\n  - http://localhost:9456\n  - http://localhost:9384\n"})}),"\n",(0,l.jsx)(t.p,{children:"Finally, restart Chia, ensuring that DataLayer and the propagation server are both configured to run. This is the only configuration that is required in Chia itself. The rest of the configuration is left up to the plugin service."}),"\n",(0,l.jsx)(t.h2,{id:"rest-api",children:"REST API"}),"\n",(0,l.jsxs)(t.p,{children:["The expected REST API for the plugins is as follows - all requests are ",(0,l.jsx)(t.code,{children:"POST"})," requests."]}),"\n",(0,l.jsx)(t.admonition,{type:"note",children:(0,l.jsx)(t.p,{children:"TLS connections are not yet supported. They may work as long as the proper root certificates are in the Chia certificate bundle, but this is untested."})}),"\n",(0,l.jsx)(t.hr,{}),"\n",(0,l.jsx)(t.h3,{id:"handle_upload",children:(0,l.jsx)(t.code,{children:"handle_upload"})}),"\n",(0,l.jsx)(t.p,{children:"Functionality: Configure a store for uploading"}),"\n",(0,l.jsx)(t.p,{children:"Request Parameters:"}),"\n",(0,l.jsxs)(t.table,{children:[(0,l.jsx)(t.thead,{children:(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.th,{style:{textAlign:"left"},children:"Parameter"}),(0,l.jsx)(t.th,{style:{textAlign:"left"},children:"Type"}),(0,l.jsx)(t.th,{style:{textAlign:"left"},children:"Required"}),(0,l.jsx)(t.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,l.jsx)(t.tbody,{children:(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"store_id"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"STRING"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"True"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"The store ID, in hex format"})]})})]}),"\n",(0,l.jsxs)(t.p,{children:["Response: ",(0,l.jsx)(t.code,{children:'{"handle_upload": [true|false]}'})]}),"\n",(0,l.jsx)(t.hr,{}),"\n",(0,l.jsx)(t.h3,{id:"handle_download",children:(0,l.jsx)(t.code,{children:"handle_download"})}),"\n",(0,l.jsx)(t.p,{children:"Functionality: Configure a store for downloading from a mirror"}),"\n",(0,l.jsx)(t.p,{children:"Request Parameters:"}),"\n",(0,l.jsxs)(t.table,{children:[(0,l.jsx)(t.thead,{children:(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.th,{style:{textAlign:"left"},children:"Parameter"}),(0,l.jsx)(t.th,{style:{textAlign:"left"},children:"Type"}),(0,l.jsx)(t.th,{style:{textAlign:"left"},children:"Required"}),(0,l.jsx)(t.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,l.jsxs)(t.tbody,{children:[(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"store_id"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"STRING"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"True"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"The store ID, in hex format"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"url"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"STRING"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"True"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"The URL of the mirror to download from"})]})]})]}),"\n",(0,l.jsxs)(t.p,{children:["Response: ",(0,l.jsx)(t.code,{children:'Response: {"handle_download": [true|false]}'})]}),"\n",(0,l.jsx)(t.admonition,{type:"note",children:(0,l.jsx)(t.p,{children:"Technically the mirror URL is just a string. It's not required to be formatted as a URI, but it's expected it will normally be such (eg, http://, s3://, file://, ftp://, etc)"})}),"\n",(0,l.jsx)(t.hr,{}),"\n",(0,l.jsx)(t.h3,{id:"upload",children:(0,l.jsx)(t.code,{children:"upload"})}),"\n",(0,l.jsx)(t.p,{children:"Functionality: Upload data to a store"}),"\n",(0,l.jsx)(t.p,{children:"Request Parameters:"}),"\n",(0,l.jsxs)(t.table,{children:[(0,l.jsx)(t.thead,{children:(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.th,{style:{textAlign:"left"},children:"Parameter"}),(0,l.jsx)(t.th,{style:{textAlign:"left"},children:"Type"}),(0,l.jsx)(t.th,{style:{textAlign:"left"},children:"Required"}),(0,l.jsx)(t.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,l.jsxs)(t.tbody,{children:[(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"store_id"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"STRING"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"True"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"The store ID, in hex format"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"full_tree_filename"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"STRING"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"True"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Name of full tree dat file"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"diff_filename"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"STRING"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"True"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Name of delta dat file"})]})]})]}),"\n",(0,l.jsxs)(t.p,{children:["Response: ",(0,l.jsx)(t.code,{children:'{"uploaded": [true|false]}'})]}),"\n",(0,l.jsx)(t.admonition,{type:"note",children:(0,l.jsxs)(t.p,{children:["The filenames are just - names - and the plugin is expected to be configured such that it can locate these files. We do ",(0,l.jsx)(t.em,{children:"not"})," send the entire file contents. This does mean that the plugin needs access to a shared file system. Therefore, although the plugin service could technically run on a separate machine, we expect most plugin services to be run on the localhost."]})}),"\n",(0,l.jsx)(t.hr,{}),"\n",(0,l.jsx)(t.h3,{id:"download",children:(0,l.jsx)(t.code,{children:"download"})}),"\n",(0,l.jsx)(t.p,{children:"Functionality: Download a data file from a URI"}),"\n",(0,l.jsx)(t.p,{children:"Request Parameters:"}),"\n",(0,l.jsxs)(t.table,{children:[(0,l.jsx)(t.thead,{children:(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.th,{style:{textAlign:"left"},children:"Parameter"}),(0,l.jsx)(t.th,{style:{textAlign:"left"},children:"Type"}),(0,l.jsx)(t.th,{style:{textAlign:"left"},children:"Required"}),(0,l.jsx)(t.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,l.jsxs)(t.tbody,{children:[(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"url"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"STRING"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"True"}),(0,l.jsxs)(t.td,{style:{textAlign:"left"},children:["The URI for the download, eg ",(0,l.jsx)(t.code,{children:'"server_info.url"'})]})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"filename"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"STRING"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"True"}),(0,l.jsxs)(t.td,{style:{textAlign:"left"},children:["The name of the file to download, eg ",(0,l.jsx)(t.code,{children:'"file1.dat"'})]})]})]})]}),"\n",(0,l.jsxs)(t.p,{children:["Response:  ",(0,l.jsx)(t.code,{children:'{"downloaded": [true|false]}'})]}),"\n",(0,l.jsx)(t.admonition,{type:"note",children:(0,l.jsxs)(t.p,{children:["The downloader plugin ",(0,l.jsx)(t.em,{children:"must"})," place the files into the same directory that Chia DataLayer expects files - which is configured in the chia config.yaml configuration as ",(0,l.jsx)(t.code,{children:"service_files_location"})]})}),"\n",(0,l.jsx)(t.hr,{}),"\n",(0,l.jsx)(t.h3,{id:"add_missing_files",children:(0,l.jsx)(t.code,{children:"add_missing_files"})}),"\n",(0,l.jsx)(t.p,{children:"Functionality: Add missing files to a store"}),"\n",(0,l.jsx)(t.p,{children:"Request Parameters:"}),"\n",(0,l.jsxs)(t.table,{children:[(0,l.jsx)(t.thead,{children:(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.th,{style:{textAlign:"left"},children:"Parameter"}),(0,l.jsx)(t.th,{style:{textAlign:"left"},children:"Type"}),(0,l.jsx)(t.th,{style:{textAlign:"left"},children:"Required"}),(0,l.jsx)(t.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,l.jsxs)(t.tbody,{children:[(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"store_id"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"STRING"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"True"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"The store ID, in hex format"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"files"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"LIST"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"True"}),(0,l.jsxs)(t.td,{style:{textAlign:"left"},children:["The list of files to be added, for example: ",(0,l.jsx)(t.code,{children:'["file1.dat", "file2.dat"]'})]})]})]})]}),"\n",(0,l.jsxs)(t.p,{children:["Response: ",(0,l.jsx)(t.code,{children:'{"uploaded": [true|false]}'})]}),"\n",(0,l.jsx)(t.admonition,{type:"note",children:(0,l.jsxs)(t.p,{children:["Chia DataLayer will provide a complete list of DAT files for all generations from the beginning to the end that are needed to reconstruct the entire data. The plugin is expected to check its internal list of files and then upload whatever files might be missing. This is useful when adding a new uploader plugin to an existing deployment, or for troubleshooting. This is triggered automatically when ",(0,l.jsx)(t.a,{href:"/datalayer-cli#add_missing_files",children:"add_missing_files"})," is run on the CLI."]})}),"\n",(0,l.jsx)(t.hr,{}),"\n",(0,l.jsx)(t.h3,{id:"plugin_info",children:(0,l.jsx)(t.code,{children:"plugin_info"})}),"\n",(0,l.jsx)(t.p,{children:"Functionality: Show info about the plugin"}),"\n",(0,l.jsx)(t.p,{children:"Request Parameters: None"}),"\n",(0,l.jsxs)(t.p,{children:["Response: The plugin may return any information it considers useful for this call. The output will be displayed when the ",(0,l.jsx)(t.code,{children:"chia data plugins check"})," CLI command is run. As a minimum, the plugin should response with an ",(0,l.jsx)(t.code,{children:"HTTP 200"})," response code , but typically some amount of text information is also expected (name, version, etc) in JSON format."]}),"\n",(0,l.jsx)(t.h2,{id:"the-chia-s3-plugin",children:"The Chia S3 plugin"}),"\n",(0,l.jsxs)(t.p,{children:["Chia Network has released a ",(0,l.jsx)(t.a,{href:"https://github.com/Chia-Network/chia-blockchain/blob/main/chia/data_layer/s3_plugin_service.py",children:"reference S3 uploader/downloader plugin"}),", which demonstrates how to use the plugin system, and also offers support for ",(0,l.jsx)(t.a,{href:"https://aws.amazon.com/s3/",children:"Amazon S3"}),"."]}),"\n",(0,l.jsxs)(t.p,{children:["This plugin implements the REST API from the ",(0,l.jsx)(t.a,{href:"#rest-api",children:"previous section"}),". It uses the native AWS python library (",(0,l.jsx)(t.a,{href:"https://pypi.org/project/boto3/",children:"boto3"}),") to upload and download from S3. Along with this, it uses the typical credentials expected by an AWS resource."]}),"\n",(0,l.jsxs)(t.p,{children:["By providing credentials configured correctly, the plugin can do downloads with a read-only credential and uploads with a write-credential. ",(0,l.jsx)(t.strong,{children:'Without access to the credentials, the data in S3 is unavailable at large to the public - hence "permissioned".'})]}),"\n",(0,l.jsx)(t.p,{children:"A few notes about the S3 plugin:"}),"\n",(0,l.jsxs)(t.ul,{children:["\n",(0,l.jsxs)(t.li,{children:["It expects the mirror URL to use the ",(0,l.jsx)(t.code,{children:"s3://"})," scheme for downloads; it requires a bucket name for uploads."]}),"\n",(0,l.jsxs)(t.li,{children:["It expects to be configured with a list of ",(0,l.jsx)(t.code,{children:"store_ids"})," it is responsible for, along with an ",(0,l.jsx)(t.code,{children:"upload_bucket"})," and/or a list of s3 ",(0,l.jsx)(t.code,{children:"download_urls"}),"."]}),"\n",(0,l.jsxs)(t.li,{children:["Either ",(0,l.jsx)(t.code,{children:"upload_bucket"}),", or ",(0,l.jsx)(t.code,{children:"download_urls"}),", or both must be configured."]}),"\n"]}),"\n",(0,l.jsx)(t.p,{children:"Example configuration:"}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{children:'Test-Instance: # just a name for the instance\n  log_filename: "s3_plugin.log"\n  log_level: INFO \n  server_files_location: # generally this only works if set to the same location as the Chia DataLayer `server_files_location`\n  port: 8998\n  aws_credentials:\n    access_key_id: "xxx"\n    secret_access_key: "xxx"\n    region: "xxx"\n\n  stores:\n    - store_id: "7acfcbd1ed73bfe2b698508f4ea5ed353c60ace154360272ce91f9ab0c8423c3"\n      upload_bucket: "chia-datalayer-test-bucket-2"\n      download_urls: ["s3://hello", "s3://goodbye"]\n    - store_id: "a14daf55d41ced6419bcd011fbc1f74ab9567fe55340d88435aa6493d628fa47"\n      upload_bucket:\n      download_urls: ["s3://hello", "s3://goodbye"]\n'})}),"\n",(0,l.jsx)(t.p,{children:"The S3 plugin also supports the following optional endpoints. These are not called directly by the chia datalayer service, but are useful for further configuration of the plugin:"}),"\n",(0,l.jsx)(t.h3,{id:"healthz",children:(0,l.jsx)(t.code,{children:"healthz"})}),"\n",(0,l.jsx)(t.p,{children:"Functionality: Verifies that the RPC service is running"}),"\n",(0,l.jsx)(t.p,{children:"Request Parameters: None"}),"\n",(0,l.jsxs)(t.p,{children:["Response: ",(0,l.jsx)(t.code,{children:'{"success": true}'})]}),"\n",(0,l.jsx)(t.hr,{}),"\n",(0,l.jsx)(t.h3,{id:"add_store_id",children:(0,l.jsx)(t.code,{children:"add_store_id"})}),"\n",(0,l.jsx)(t.p,{children:"Functionality: Add a new store"}),"\n",(0,l.jsx)(t.p,{children:"Request Parameters:"}),"\n",(0,l.jsxs)(t.table,{children:[(0,l.jsx)(t.thead,{children:(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.th,{style:{textAlign:"left"},children:"Parameter"}),(0,l.jsx)(t.th,{style:{textAlign:"left"},children:"Type"}),(0,l.jsx)(t.th,{style:{textAlign:"left"},children:"Required"}),(0,l.jsx)(t.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,l.jsxs)(t.tbody,{children:[(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"store_id"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"STRING"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"True"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"The store ID, in hex format"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"bucket"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"STRING"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"True*"}),(0,l.jsxs)(t.td,{style:{textAlign:"left"},children:["The name of the S3 bucket [* Either ",(0,l.jsx)(t.code,{children:"bucket"})," or ",(0,l.jsx)(t.code,{children:"urls"})," or both is required]"]})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"urls"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"LIST"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"True*"}),(0,l.jsxs)(t.td,{style:{textAlign:"left"},children:["A list of s3 URLs, for example ",(0,l.jsx)(t.code,{children:'["s3://one", "s3://two"]'})," [* Either ",(0,l.jsx)(t.code,{children:"bucket"})," or ",(0,l.jsx)(t.code,{children:"urls"})," or both is required]"]})]})]})]}),"\n",(0,l.jsxs)(t.p,{children:["Success Response: ",(0,l.jsx)(t.code,{children:'{"success": true, "id": store id}'})]}),"\n",(0,l.jsxs)(t.p,{children:["Failure Response: ",(0,l.jsx)(t.code,{children:'{"success": false, "reason": "reason for failure"}'})]}),"\n",(0,l.jsx)(t.admonition,{type:"note",children:(0,l.jsxs)(t.p,{children:["Calling ",(0,l.jsx)(t.code,{children:"add_store_id"})," for a ",(0,l.jsx)(t.code,{children:"store_id"})," already in the config returns an error - there is no update option, only add and delete."]})}),"\n",(0,l.jsx)(t.hr,{}),"\n",(0,l.jsx)(t.h3,{id:"remove_store_id",children:(0,l.jsx)(t.code,{children:"remove_store_id"})}),"\n",(0,l.jsx)(t.p,{children:"Functionality: Remove a store"}),"\n",(0,l.jsx)(t.p,{children:"Request Parameters:"}),"\n",(0,l.jsxs)(t.table,{children:[(0,l.jsx)(t.thead,{children:(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.th,{style:{textAlign:"left"},children:"Parameter"}),(0,l.jsx)(t.th,{style:{textAlign:"left"},children:"Type"}),(0,l.jsx)(t.th,{style:{textAlign:"left"},children:"Required"}),(0,l.jsx)(t.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,l.jsx)(t.tbody,{children:(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"store_id"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"STRING"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"True"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"The store ID, in hex format"})]})})]}),"\n",(0,l.jsxs)(t.p,{children:["Response: ",(0,l.jsx)(t.code,{children:'{"success": [true|false], "store_id":store id in hex if successful}'})]}),"\n",(0,l.jsx)(t.admonition,{type:"note",children:(0,l.jsx)(t.p,{children:"Removing a store ID that is not present in the config returns a True success code, but is otherwise ignored"})}),"\n",(0,l.jsx)(t.hr,{})]})}function h(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(c,{...e})}):c(e)}},5162:(e,t,n)=>{n.d(t,{Z:()=>r});n(7294);var l=n(512);const s={tabItem:"tabItem_Ymn6"};var i=n(5893);function r(e){let{children:t,hidden:n,className:r}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,l.Z)(s.tabItem,r),hidden:n,children:t})}},4866:(e,t,n)=>{n.d(t,{Z:()=>v});var l=n(7294),s=n(512),i=n(2466),r=n(6550),a=n(469),d=n(1980),o=n(7392),c=n(12);function h(e){return l.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,l.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:t,children:n}=e;return(0,l.useMemo)((()=>{const e=t??function(e){return h(e).map((e=>{let{props:{value:t,label:n,attributes:l,default:s}}=e;return{value:t,label:n,attributes:l,default:s}}))}(n);return function(e){const t=(0,o.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function x(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:n}=e;const s=(0,r.k6)(),i=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,d._X)(i),(0,l.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(s.location.search);t.set(i,e),s.replace({...s.location,search:t.toString()})}),[i,s])]}function p(e){const{defaultValue:t,queryString:n=!1,groupId:s}=e,i=u(e),[r,d]=(0,l.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!x({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const l=n.find((e=>e.default))??n[0];if(!l)throw new Error("Unexpected error: 0 tabValues");return l.value}({defaultValue:t,tabValues:i}))),[o,h]=f({queryString:n,groupId:s}),[p,j]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[s,i]=(0,c.Nk)(n);return[s,(0,l.useCallback)((e=>{n&&i.set(e)}),[n,i])]}({groupId:s}),g=(()=>{const e=o??p;return x({value:e,tabValues:i})?e:null})();(0,a.Z)((()=>{g&&d(g)}),[g]);return{selectedValue:r,selectValue:(0,l.useCallback)((e=>{if(!x({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);d(e),h(e),j(e)}),[h,j,i]),tabValues:i}}var j=n(2389);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var y=n(5893);function m(e){let{className:t,block:n,selectedValue:l,selectValue:r,tabValues:a}=e;const d=[],{blockElementScrollPositionUntilNextRender:o}=(0,i.o5)(),c=e=>{const t=e.currentTarget,n=d.indexOf(t),s=a[n].value;s!==l&&(o(t),r(s))},h=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const n=d.indexOf(e.currentTarget)+1;t=d[n]??d[0];break}case"ArrowLeft":{const n=d.indexOf(e.currentTarget)-1;t=d[n]??d[d.length-1];break}}t?.focus()};return(0,y.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":n},t),children:a.map((e=>{let{value:t,label:n,attributes:i}=e;return(0,y.jsx)("li",{role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,ref:e=>d.push(e),onKeyDown:h,onClick:c,...i,className:(0,s.Z)("tabs__item",g.tabItem,i?.className,{"tabs__item--active":l===t}),children:n??t},t)}))})}function b(e){let{lazy:t,children:n,selectedValue:s}=e;const i=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=i.find((e=>e.props.value===s));return e?(0,l.cloneElement)(e,{className:"margin-top--md"}):null}return(0,y.jsx)("div",{className:"margin-top--md",children:i.map(((e,t)=>(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==s})))})}function w(e){const t=p(e);return(0,y.jsxs)("div",{className:(0,s.Z)("tabs-container",g.tabList),children:[(0,y.jsx)(m,{...e,...t}),(0,y.jsx)(b,{...e,...t})]})}function v(e){const t=(0,j.Z)();return(0,y.jsx)(w,{...e,children:h(e.children)},String(t))}},1151:(e,t,n)=>{n.d(t,{Z:()=>a,a:()=>r});var l=n(7294);const s={},i=l.createContext(s);function r(e){const t=l.useContext(i);return l.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),l.createElement(i.Provider,{value:t},e.children)}}}]);