(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("babylonjs"));
	else if(typeof define === 'function' && define.amd)
		define("babylonjs-loaders", ["babylonjs"], factory);
	else if(typeof exports === 'object')
		exports["babylonjs-loaders"] = factory(require("babylonjs"));
	else
		root["LOADERS"] = factory(root["BABYLON"]);
})((typeof self !== "undefined" ? self : typeof global !== "undefined" ? global : this), (__WEBPACK_EXTERNAL_MODULE_babylonjs_Misc_observable__) => {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "../../../dev/loaders/src/OBJ/index.ts":
/*!*********************************************!*\
  !*** ../../../dev/loaders/src/OBJ/index.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MTLFileLoader: () => (/* reexport safe */ _mtlFileLoader__WEBPACK_IMPORTED_MODULE_0__.MTLFileLoader),
/* harmony export */   OBJFileLoader: () => (/* reexport safe */ _objFileLoader__WEBPACK_IMPORTED_MODULE_3__.OBJFileLoader),
/* harmony export */   SolidParser: () => (/* reexport safe */ _solidParser__WEBPACK_IMPORTED_MODULE_2__.SolidParser)
/* harmony export */ });
/* harmony import */ var _mtlFileLoader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mtlFileLoader */ "../../../dev/loaders/src/OBJ/mtlFileLoader.ts");
/* harmony import */ var _objLoadingOptions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./objLoadingOptions */ "../../../dev/loaders/src/OBJ/objLoadingOptions.ts");
/* harmony import */ var _solidParser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./solidParser */ "../../../dev/loaders/src/OBJ/solidParser.ts");
/* harmony import */ var _objFileLoader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./objFileLoader */ "../../../dev/loaders/src/OBJ/objFileLoader.ts");






/***/ }),

/***/ "../../../dev/loaders/src/OBJ/mtlFileLoader.ts":
/*!*****************************************************!*\
  !*** ../../../dev/loaders/src/OBJ/mtlFileLoader.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MTLFileLoader: () => (/* binding */ MTLFileLoader)
/* harmony export */ });
/* harmony import */ var babylonjs_Maths_math_color__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babylonjs/Materials/standardMaterial */ "babylonjs/Misc/observable");
/* harmony import */ var babylonjs_Maths_math_color__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babylonjs_Maths_math_color__WEBPACK_IMPORTED_MODULE_0__);



/**
 * Class reading and parsing the MTL file bundled with the obj file.
 */
var MTLFileLoader = /** @class */ (function () {
    function MTLFileLoader() {
        /**
         * All material loaded from the mtl will be set here
         */
        this.materials = [];
    }
    /**
     * This function will read the mtl file and create each material described inside
     * This function could be improve by adding :
     * -some component missing (Ni, Tf...)
     * -including the specific options available
     *
     * @param scene defines the scene the material will be created in
     * @param data defines the mtl data to parse
     * @param rootUrl defines the rooturl to use in order to load relative dependencies
     * @param assetContainer defines the asset container to store the material in (can be null)
     */
    MTLFileLoader.prototype.parseMTL = function (scene, data, rootUrl, assetContainer) {
        if (data instanceof ArrayBuffer) {
            return;
        }
        //Split the lines from the file
        var lines = data.split("\n");
        // whitespace char ie: [ \t\r\n\f]
        var delimiter_pattern = /\s+/;
        //Array with RGB colors
        var color;
        //New material
        var material = null;
        //Look at each line
        for (var i = 0; i < lines.length; i++) {
            var line = lines[i].trim();
            // Blank line or comment
            if (line.length === 0 || line.charAt(0) === "#") {
                continue;
            }
            //Get the first parameter (keyword)
            var pos = line.indexOf(" ");
            var key = pos >= 0 ? line.substring(0, pos) : line;
            key = key.toLowerCase();
            //Get the data following the key
            var value = pos >= 0 ? line.substring(pos + 1).trim() : "";
            //This mtl keyword will create the new material
            if (key === "newmtl") {
                //Check if it is the first material.
                // Materials specifications are described after this keyword.
                if (material) {
                    //Add the previous material in the material array.
                    this.materials.push(material);
                }
                //Create a new material.
                // value is the name of the material read in the mtl file
                scene._blockEntityCollection = !!assetContainer;
                material = new babylonjs_Maths_math_color__WEBPACK_IMPORTED_MODULE_0__.StandardMaterial(value, scene);
                material._parentContainer = assetContainer;
                scene._blockEntityCollection = false;
            }
            else if (key === "kd" && material) {
                // Diffuse color (color under white light) using RGB values
                //value  = "r g b"
                color = value.split(delimiter_pattern, 3).map(parseFloat);
                //color = [r,g,b]
                //Set tghe color into the material
                material.diffuseColor = babylonjs_Maths_math_color__WEBPACK_IMPORTED_MODULE_0__.Color3.FromArray(color);
            }
            else if (key === "ka" && material) {
                // Ambient color (color under shadow) using RGB values
                //value = "r g b"
                color = value.split(delimiter_pattern, 3).map(parseFloat);
                //color = [r,g,b]
                //Set tghe color into the material
                material.ambientColor = babylonjs_Maths_math_color__WEBPACK_IMPORTED_MODULE_0__.Color3.FromArray(color);
            }
            else if (key === "ks" && material) {
                // Specular color (color when light is reflected from shiny surface) using RGB values
                //value = "r g b"
                color = value.split(delimiter_pattern, 3).map(parseFloat);
                //color = [r,g,b]
                //Set the color into the material
                material.specularColor = babylonjs_Maths_math_color__WEBPACK_IMPORTED_MODULE_0__.Color3.FromArray(color);
            }
            else if (key === "ke" && material) {
                // Emissive color using RGB values
                color = value.split(delimiter_pattern, 3).map(parseFloat);
                material.emissiveColor = babylonjs_Maths_math_color__WEBPACK_IMPORTED_MODULE_0__.Color3.FromArray(color);
            }
            else if (key === "ns" && material) {
                //value = "Integer"
                material.specularPower = parseFloat(value);
            }
            else if (key === "d" && material) {
                //d is dissolve for current material. It mean alpha for BABYLON
                material.alpha = parseFloat(value);
                //Texture
                //This part can be improved by adding the possible options of texture
            }
            else if (key === "map_ka" && material) {
                // ambient texture map with a loaded image
                //We must first get the folder of the image
                material.ambientTexture = MTLFileLoader._GetTexture(rootUrl, value, scene);
            }
            else if (key === "map_kd" && material) {
                // Diffuse texture map with a loaded image
                material.diffuseTexture = MTLFileLoader._GetTexture(rootUrl, value, scene);
            }
            else if (key === "map_ks" && material) {
                // Specular texture map with a loaded image
                //We must first get the folder of the image
                material.specularTexture = MTLFileLoader._GetTexture(rootUrl, value, scene);
            }
            else if (key === "map_ns") {
                //Specular
                //Specular highlight component
                //We must first get the folder of the image
                //
                //Not supported by BABYLON
                //
                //    continue;
            }
            else if (key === "map_bump" && material) {
                //The bump texture
                var values = value.split(delimiter_pattern);
                var bumpMultiplierIndex = values.indexOf("-bm");
                var bumpMultiplier = null;
                if (bumpMultiplierIndex >= 0) {
                    bumpMultiplier = values[bumpMultiplierIndex + 1];
                    values.splice(bumpMultiplierIndex, 2); // remove
                }
                material.bumpTexture = MTLFileLoader._GetTexture(rootUrl, values.join(" "), scene);
                if (material.bumpTexture && bumpMultiplier !== null) {
                    material.bumpTexture.level = parseFloat(bumpMultiplier);
                }
            }
            else if (key === "map_d" && material) {
                // The dissolve of the material
                material.opacityTexture = MTLFileLoader._GetTexture(rootUrl, value, scene);
                //Options for illumination
            }
            else if (key === "illum") {
                //Illumination
                if (value === "0") {
                    //That mean Kd == Kd
                }
                else if (value === "1") {
                    //Color on and Ambient on
                }
                else if (value === "2") {
                    //Highlight on
                }
                else if (value === "3") {
                    //Reflection on and Ray trace on
                }
                else if (value === "4") {
                    //Transparency: Glass on, Reflection: Ray trace on
                }
                else if (value === "5") {
                    //Reflection: Fresnel on and Ray trace on
                }
                else if (value === "6") {
                    //Transparency: Refraction on, Reflection: Fresnel off and Ray trace on
                }
                else if (value === "7") {
                    //Transparency: Refraction on, Reflection: Fresnel on and Ray trace on
                }
                else if (value === "8") {
                    //Reflection on and Ray trace off
                }
                else if (value === "9") {
                    //Transparency: Glass on, Reflection: Ray trace off
                }
                else if (value === "10") {
                    //Casts shadows onto invisible surfaces
                }
            }
            else {
                // console.log("Unhandled expression at line : " + i +'\n' + "with value : " + line);
            }
        }
        //At the end of the file, add the last material
        if (material) {
            this.materials.push(material);
        }
    };
    /**
     * Gets the texture for the material.
     *
     * If the material is imported from input file,
     * We sanitize the url to ensure it takes the texture from aside the material.
     *
     * @param rootUrl The root url to load from
     * @param value The value stored in the mtl
     * @param scene
     * @returns The Texture
     */
    MTLFileLoader._GetTexture = function (rootUrl, value, scene) {
        if (!value) {
            return null;
        }
        var url = rootUrl;
        // Load from input file.
        if (rootUrl === "file:") {
            var lastDelimiter = value.lastIndexOf("\\");
            if (lastDelimiter === -1) {
                lastDelimiter = value.lastIndexOf("/");
            }
            if (lastDelimiter > -1) {
                url += value.substr(lastDelimiter + 1);
            }
            else {
                url += value;
            }
        }
        // Not from input file.
        else {
            url += value;
        }
        return new babylonjs_Maths_math_color__WEBPACK_IMPORTED_MODULE_0__.Texture(url, scene, false, MTLFileLoader.INVERT_TEXTURE_Y);
    };
    /**
     * Invert Y-Axis of referenced textures on load
     */
    MTLFileLoader.INVERT_TEXTURE_Y = true;
    return MTLFileLoader;
}());


/***/ }),

/***/ "../../../dev/loaders/src/OBJ/objFileLoader.ts":
/*!*****************************************************!*\
  !*** ../../../dev/loaders/src/OBJ/objFileLoader.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OBJFileLoader: () => (/* binding */ OBJFileLoader)
/* harmony export */ });
/* harmony import */ var babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babylonjs/assetContainer */ "babylonjs/Misc/observable");
/* harmony import */ var babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mtlFileLoader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mtlFileLoader */ "../../../dev/loaders/src/OBJ/mtlFileLoader.ts");
/* harmony import */ var _solidParser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./solidParser */ "../../../dev/loaders/src/OBJ/solidParser.ts");






/**
 * OBJ file type loader.
 * This is a babylon scene loader plugin.
 */
var OBJFileLoader = /** @class */ (function () {
    /**
     * Creates loader for .OBJ files
     *
     * @param loadingOptions options for loading and parsing OBJ/MTL files.
     */
    function OBJFileLoader(loadingOptions) {
        /**
         * Defines the name of the plugin.
         */
        this.name = "obj";
        /**
         * Defines the extension the plugin is able to load.
         */
        this.extensions = ".obj";
        this._assetContainer = null;
        this._loadingOptions = loadingOptions || OBJFileLoader._DefaultLoadingOptions;
    }
    Object.defineProperty(OBJFileLoader, "INVERT_TEXTURE_Y", {
        /**
         * Invert Y-Axis of referenced textures on load
         */
        get: function () {
            return _mtlFileLoader__WEBPACK_IMPORTED_MODULE_1__.MTLFileLoader.INVERT_TEXTURE_Y;
        },
        set: function (value) {
            _mtlFileLoader__WEBPACK_IMPORTED_MODULE_1__.MTLFileLoader.INVERT_TEXTURE_Y = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OBJFileLoader, "_DefaultLoadingOptions", {
        get: function () {
            return {
                computeNormals: OBJFileLoader.COMPUTE_NORMALS,
                optimizeNormals: OBJFileLoader.OPTIMIZE_NORMALS,
                importVertexColors: OBJFileLoader.IMPORT_VERTEX_COLORS,
                invertY: OBJFileLoader.INVERT_Y,
                invertTextureY: OBJFileLoader.INVERT_TEXTURE_Y,
                // eslint-disable-next-line @typescript-eslint/naming-convention
                UVScaling: OBJFileLoader.UV_SCALING,
                materialLoadingFailsSilently: OBJFileLoader.MATERIAL_LOADING_FAILS_SILENTLY,
                optimizeWithUV: OBJFileLoader.OPTIMIZE_WITH_UV,
                skipMaterials: OBJFileLoader.SKIP_MATERIALS,
            };
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Calls synchronously the MTL file attached to this obj.
     * Load function or importMesh function don't enable to load 2 files in the same time asynchronously.
     * Without this function materials are not displayed in the first frame (but displayed after).
     * In consequence it is impossible to get material information in your HTML file
     *
     * @param url The URL of the MTL file
     * @param rootUrl defines where to load data from
     * @param onSuccess Callback function to be called when the MTL file is loaded
     * @param onFailure
     */
    OBJFileLoader.prototype._loadMTL = function (url, rootUrl, onSuccess, onFailure) {
        //The complete path to the mtl file
        var pathOfFile = rootUrl + url;
        // Loads through the babylon tools to allow fileInput search.
        babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Tools.LoadFile(pathOfFile, onSuccess, undefined, undefined, false, function (request, exception) {
            onFailure(pathOfFile, exception);
        });
    };
    /**
     * Instantiates a OBJ file loader plugin.
     * @returns the created plugin
     */
    OBJFileLoader.prototype.createPlugin = function () {
        return new OBJFileLoader(OBJFileLoader._DefaultLoadingOptions);
    };
    /**
     * If the data string can be loaded directly.
     * @returns if the data can be loaded directly
     */
    OBJFileLoader.prototype.canDirectLoad = function () {
        return false;
    };
    /**
     * Imports one or more meshes from the loaded OBJ data and adds them to the scene
     * @param meshesNames a string or array of strings of the mesh names that should be loaded from the file
     * @param scene the scene the meshes should be added to
     * @param data the OBJ data to load
     * @param rootUrl root url to load from
     * @returns a promise containing the loaded meshes, particles, skeletons and animations
     */
    OBJFileLoader.prototype.importMeshAsync = function (meshesNames, scene, data, rootUrl) {
        //get the meshes from OBJ file
        return this._parseSolid(meshesNames, scene, data, rootUrl).then(function (meshes) {
            return {
                meshes: meshes,
                particleSystems: [],
                skeletons: [],
                animationGroups: [],
                transformNodes: [],
                geometries: [],
                lights: [],
            };
        });
    };
    /**
     * Imports all objects from the loaded OBJ data and adds them to the scene
     * @param scene the scene the objects should be added to
     * @param data the OBJ data to load
     * @param rootUrl root url to load from
     * @returns a promise which completes when objects have been loaded to the scene
     */
    OBJFileLoader.prototype.loadAsync = function (scene, data, rootUrl) {
        //Get the 3D model
        return this.importMeshAsync(null, scene, data, rootUrl).then(function () {
            // return void
        });
    };
    /**
     * Load into an asset container.
     * @param scene The scene to load into
     * @param data The data to import
     * @param rootUrl The root url for scene and resources
     * @returns The loaded asset container
     */
    OBJFileLoader.prototype.loadAssetContainerAsync = function (scene, data, rootUrl) {
        var _this = this;
        var container = new babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.AssetContainer(scene);
        this._assetContainer = container;
        return this.importMeshAsync(null, scene, data, rootUrl)
            .then(function (result) {
            result.meshes.forEach(function (mesh) { return container.meshes.push(mesh); });
            result.meshes.forEach(function (mesh) {
                var material = mesh.material;
                if (material) {
                    // Materials
                    if (container.materials.indexOf(material) == -1) {
                        container.materials.push(material);
                        // Textures
                        var textures = material.getActiveTextures();
                        textures.forEach(function (t) {
                            if (container.textures.indexOf(t) == -1) {
                                container.textures.push(t);
                            }
                        });
                    }
                }
            });
            _this._assetContainer = null;
            return container;
        })
            .catch(function (ex) {
            _this._assetContainer = null;
            throw ex;
        });
    };
    /**
     * Read the OBJ file and create an Array of meshes.
     * Each mesh contains all information given by the OBJ and the MTL file.
     * i.e. vertices positions and indices, optional normals values, optional UV values, optional material
     * @param meshesNames defines a string or array of strings of the mesh names that should be loaded from the file
     * @param scene defines the scene where are displayed the data
     * @param data defines the content of the obj file
     * @param rootUrl defines the path to the folder
     * @returns the list of loaded meshes
     */
    OBJFileLoader.prototype._parseSolid = function (meshesNames, scene, data, rootUrl) {
        var _this = this;
        var fileToLoad = ""; //The name of the mtlFile to load
        var materialsFromMTLFile = new _mtlFileLoader__WEBPACK_IMPORTED_MODULE_1__.MTLFileLoader();
        var materialToUse = [];
        var babylonMeshesArray = []; //The mesh for babylon
        // Main function
        var solidParser = new _solidParser__WEBPACK_IMPORTED_MODULE_2__.SolidParser(materialToUse, babylonMeshesArray, this._loadingOptions);
        solidParser.parse(meshesNames, data, scene, this._assetContainer, function (fileName) {
            fileToLoad = fileName;
        });
        // load the materials
        var mtlPromises = [];
        // Check if we have a file to load
        if (fileToLoad !== "" && !this._loadingOptions.skipMaterials) {
            //Load the file synchronously
            mtlPromises.push(new Promise(function (resolve, reject) {
                _this._loadMTL(fileToLoad, rootUrl, function (dataLoaded) {
                    try {
                        //Create materials thanks MTLLoader function
                        materialsFromMTLFile.parseMTL(scene, dataLoaded, rootUrl, _this._assetContainer);
                        //Look at each material loaded in the mtl file
                        for (var n = 0; n < materialsFromMTLFile.materials.length; n++) {
                            //Three variables to get all meshes with the same material
                            var startIndex = 0;
                            var _indices = [];
                            var _index = void 0;
                            //The material from MTL file is used in the meshes loaded
                            //Push the indice in an array
                            //Check if the material is not used for another mesh
                            while ((_index = materialToUse.indexOf(materialsFromMTLFile.materials[n].name, startIndex)) > -1) {
                                _indices.push(_index);
                                startIndex = _index + 1;
                            }
                            //If the material is not used dispose it
                            if (_index === -1 && _indices.length === 0) {
                                //If the material is not needed, remove it
                                materialsFromMTLFile.materials[n].dispose();
                            }
                            else {
                                for (var o = 0; o < _indices.length; o++) {
                                    //Apply the material to the Mesh for each mesh with the material
                                    var mesh = babylonMeshesArray[_indices[o]];
                                    var material = materialsFromMTLFile.materials[n];
                                    mesh.material = material;
                                    if (!mesh.getTotalIndices()) {
                                        // No indices, we need to turn on point cloud
                                        material.pointsCloud = true;
                                    }
                                }
                            }
                        }
                        resolve();
                    }
                    catch (e) {
                        babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Tools.Warn("Error processing MTL file: '".concat(fileToLoad, "'"));
                        if (_this._loadingOptions.materialLoadingFailsSilently) {
                            resolve();
                        }
                        else {
                            reject(e);
                        }
                    }
                }, function (pathOfFile, exception) {
                    babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Tools.Warn("Error downloading MTL file: '".concat(fileToLoad, "'"));
                    if (_this._loadingOptions.materialLoadingFailsSilently) {
                        resolve();
                    }
                    else {
                        reject(exception);
                    }
                });
            }));
        }
        //Return an array with all Mesh
        return Promise.all(mtlPromises).then(function () {
            return babylonMeshesArray;
        });
    };
    /**
     * Defines if UVs are optimized by default during load.
     */
    OBJFileLoader.OPTIMIZE_WITH_UV = true;
    /**
     * Invert model on y-axis (does a model scaling inversion)
     */
    OBJFileLoader.INVERT_Y = false;
    /**
     * Include in meshes the vertex colors available in some OBJ files.  This is not part of OBJ standard.
     */
    OBJFileLoader.IMPORT_VERTEX_COLORS = false;
    /**
     * Compute the normals for the model, even if normals are present in the file.
     */
    OBJFileLoader.COMPUTE_NORMALS = false;
    /**
     * Optimize the normals for the model. Lighting can be uneven if you use OptimizeWithUV = true because new vertices can be created for the same location if they pertain to different faces.
     * Using OptimizehNormals = true will help smoothing the lighting by averaging the normals of those vertices.
     */
    OBJFileLoader.OPTIMIZE_NORMALS = false;
    /**
     * Defines custom scaling of UV coordinates of loaded meshes.
     */
    OBJFileLoader.UV_SCALING = new babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.Vector2(1, 1);
    /**
     * Skip loading the materials even if defined in the OBJ file (materials are ignored).
     */
    OBJFileLoader.SKIP_MATERIALS = false;
    /**
     * When a material fails to load OBJ loader will silently fail and onSuccess() callback will be triggered.
     *
     * Defaults to true for backwards compatibility.
     */
    OBJFileLoader.MATERIAL_LOADING_FAILS_SILENTLY = true;
    return OBJFileLoader;
}());
if (babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.SceneLoader) {
    //Add this loader into the register plugin
    babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__.SceneLoader.RegisterPlugin(new OBJFileLoader());
}


/***/ }),

/***/ "../../../dev/loaders/src/OBJ/objLoadingOptions.ts":
/*!*********************************************************!*\
  !*** ../../../dev/loaders/src/OBJ/objLoadingOptions.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "../../../dev/loaders/src/OBJ/solidParser.ts":
/*!***************************************************!*\
  !*** ../../../dev/loaders/src/OBJ/solidParser.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SolidParser: () => (/* binding */ SolidParser)
/* harmony export */ });
/* harmony import */ var babylonjs_Buffers_buffer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babylonjs/Meshes/mesh.vertexData */ "babylonjs/Misc/observable");
/* harmony import */ var babylonjs_Buffers_buffer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babylonjs_Buffers_buffer__WEBPACK_IMPORTED_MODULE_0__);







/**
 * Class used to load mesh data from OBJ content
 */
var SolidParser = /** @class */ (function () {
    /**
     * Creates a new SolidParser
     * @param materialToUse defines the array to fill with the list of materials to use (it will be filled by the parse function)
     * @param babylonMeshesArray defines the array to fill with the list of loaded meshes (it will be filled by the parse function)
     * @param loadingOptions defines the loading options to use
     */
    function SolidParser(materialToUse, babylonMeshesArray, loadingOptions) {
        this._positions = []; //values for the positions of vertices
        this._normals = []; //Values for the normals
        this._uvs = []; //Values for the textures
        this._colors = [];
        this._meshesFromObj = []; //[mesh] Contains all the obj meshes
        this._indicesForBabylon = []; //The list of indices for VertexData
        this._wrappedPositionForBabylon = []; //The list of position in vectors
        this._wrappedUvsForBabylon = []; //Array with all value of uvs to match with the indices
        this._wrappedColorsForBabylon = []; // Array with all color values to match with the indices
        this._wrappedNormalsForBabylon = []; //Array with all value of normals to match with the indices
        this._tuplePosNorm = []; //Create a tuple with indice of Position, Normal, UV  [pos, norm, uvs]
        this._curPositionInIndices = 0;
        this._hasMeshes = false; //Meshes are defined in the file
        this._unwrappedPositionsForBabylon = []; //Value of positionForBabylon w/o Vector3() [x,y,z]
        this._unwrappedColorsForBabylon = []; // Value of colorForBabylon w/o Color4() [r,g,b,a]
        this._unwrappedNormalsForBabylon = []; //Value of normalsForBabylon w/o Vector3()  [x,y,z]
        this._unwrappedUVForBabylon = []; //Value of uvsForBabylon w/o Vector3()      [x,y,z]
        this._triangles = []; //Indices from new triangles coming from polygons
        this._materialNameFromObj = ""; //The name of the current material
        this._objMeshName = ""; //The name of the current obj mesh
        this._increment = 1; //Id for meshes created by the multimaterial
        this._isFirstMaterial = true;
        this._grayColor = new babylonjs_Buffers_buffer__WEBPACK_IMPORTED_MODULE_0__.Color4(0.5, 0.5, 0.5, 1);
        this._materialToUse = materialToUse;
        this._babylonMeshesArray = babylonMeshesArray;
        this._loadingOptions = loadingOptions;
    }
    /**
     * Search for obj in the given array.
     * This function is called to check if a couple of data already exists in an array.
     *
     * If found, returns the index of the founded tuple index. Returns -1 if not found
     * @param arr Array<{ normals: Array<number>, idx: Array<number> }>
     * @param obj Array<number>
     * @returns {boolean}
     */
    SolidParser.prototype._isInArray = function (arr, obj) {
        if (!arr[obj[0]]) {
            arr[obj[0]] = { normals: [], idx: [] };
        }
        var idx = arr[obj[0]].normals.indexOf(obj[1]);
        return idx === -1 ? -1 : arr[obj[0]].idx[idx];
    };
    SolidParser.prototype._isInArrayUV = function (arr, obj) {
        if (!arr[obj[0]]) {
            arr[obj[0]] = { normals: [], idx: [], uv: [] };
        }
        var idx = arr[obj[0]].normals.indexOf(obj[1]);
        if (idx != 1 && obj[2] === arr[obj[0]].uv[idx]) {
            return arr[obj[0]].idx[idx];
        }
        return -1;
    };
    /**
     * This function set the data for each triangle.
     * Data are position, normals and uvs
     * If a tuple of (position, normal) is not set, add the data into the corresponding array
     * If the tuple already exist, add only their indice
     *
     * @param indicePositionFromObj Integer The index in positions array
     * @param indiceUvsFromObj Integer The index in uvs array
     * @param indiceNormalFromObj Integer The index in normals array
     * @param positionVectorFromOBJ Vector3 The value of position at index objIndice
     * @param textureVectorFromOBJ Vector3 The value of uvs
     * @param normalsVectorFromOBJ Vector3 The value of normals at index objNormale
     * @param positionColorsFromOBJ
     */
    SolidParser.prototype._setData = function (indicePositionFromObj, indiceUvsFromObj, indiceNormalFromObj, positionVectorFromOBJ, textureVectorFromOBJ, normalsVectorFromOBJ, positionColorsFromOBJ) {
        //Check if this tuple already exists in the list of tuples
        var _index;
        if (this._loadingOptions.optimizeWithUV) {
            _index = this._isInArrayUV(this._tuplePosNorm, [indicePositionFromObj, indiceNormalFromObj, indiceUvsFromObj]);
        }
        else {
            _index = this._isInArray(this._tuplePosNorm, [indicePositionFromObj, indiceNormalFromObj]);
        }
        //If it not exists
        if (_index === -1) {
            //Add an new indice.
            //The array of indices is only an array with his length equal to the number of triangles - 1.
            //We add vertices data in this order
            this._indicesForBabylon.push(this._wrappedPositionForBabylon.length);
            //Push the position of vertice for Babylon
            //Each element is a Vector3(x,y,z)
            this._wrappedPositionForBabylon.push(positionVectorFromOBJ);
            //Push the uvs for Babylon
            //Each element is a Vector3(u,v)
            this._wrappedUvsForBabylon.push(textureVectorFromOBJ);
            //Push the normals for Babylon
            //Each element is a Vector3(x,y,z)
            this._wrappedNormalsForBabylon.push(normalsVectorFromOBJ);
            if (positionColorsFromOBJ !== undefined) {
                //Push the colors for Babylon
                //Each element is a BABYLON.Color4(r,g,b,a)
                this._wrappedColorsForBabylon.push(positionColorsFromOBJ);
            }
            //Add the tuple in the comparison list
            this._tuplePosNorm[indicePositionFromObj].normals.push(indiceNormalFromObj);
            this._tuplePosNorm[indicePositionFromObj].idx.push(this._curPositionInIndices++);
            if (this._loadingOptions.optimizeWithUV) {
                this._tuplePosNorm[indicePositionFromObj].uv.push(indiceUvsFromObj);
            }
        }
        else {
            //The tuple already exists
            //Add the index of the already existing tuple
            //At this index we can get the value of position, normal, color and uvs of vertex
            this._indicesForBabylon.push(_index);
        }
    };
    /**
     * Transform Vector() and BABYLON.Color() objects into numbers in an array
     */
    SolidParser.prototype._unwrapData = function () {
        //Every array has the same length
        for (var l = 0; l < this._wrappedPositionForBabylon.length; l++) {
            //Push the x, y, z values of each element in the unwrapped array
            this._unwrappedPositionsForBabylon.push(this._wrappedPositionForBabylon[l].x, this._wrappedPositionForBabylon[l].y, this._wrappedPositionForBabylon[l].z);
            this._unwrappedNormalsForBabylon.push(this._wrappedNormalsForBabylon[l].x, this._wrappedNormalsForBabylon[l].y, this._wrappedNormalsForBabylon[l].z);
            this._unwrappedUVForBabylon.push(this._wrappedUvsForBabylon[l].x, this._wrappedUvsForBabylon[l].y); //z is an optional value not supported by BABYLON
            if (this._loadingOptions.importVertexColors) {
                //Push the r, g, b, a values of each element in the unwrapped array
                this._unwrappedColorsForBabylon.push(this._wrappedColorsForBabylon[l].r, this._wrappedColorsForBabylon[l].g, this._wrappedColorsForBabylon[l].b, this._wrappedColorsForBabylon[l].a);
            }
        }
        // Reset arrays for the next new meshes
        this._wrappedPositionForBabylon.length = 0;
        this._wrappedNormalsForBabylon.length = 0;
        this._wrappedUvsForBabylon.length = 0;
        this._wrappedColorsForBabylon.length = 0;
        this._tuplePosNorm.length = 0;
        this._curPositionInIndices = 0;
    };
    /**
     * Create triangles from polygons
     * It is important to notice that a triangle is a polygon
     * We get 5 patterns of face defined in OBJ File :
     * facePattern1 = ["1","2","3","4","5","6"]
     * facePattern2 = ["1/1","2/2","3/3","4/4","5/5","6/6"]
     * facePattern3 = ["1/1/1","2/2/2","3/3/3","4/4/4","5/5/5","6/6/6"]
     * facePattern4 = ["1//1","2//2","3//3","4//4","5//5","6//6"]
     * facePattern5 = ["-1/-1/-1","-2/-2/-2","-3/-3/-3","-4/-4/-4","-5/-5/-5","-6/-6/-6"]
     * Each pattern is divided by the same method
     * @param faces Array[String] The indices of elements
     * @param v Integer The variable to increment
     */
    SolidParser.prototype._getTriangles = function (faces, v) {
        //Work for each element of the array
        for (var faceIndex = v; faceIndex < faces.length - 1; faceIndex++) {
            //Add on the triangle variable the indexes to obtain triangles
            this._triangles.push(faces[0], faces[faceIndex], faces[faceIndex + 1]);
        }
        //Result obtained after 2 iterations:
        //Pattern1 => triangle = ["1","2","3","1","3","4"];
        //Pattern2 => triangle = ["1/1","2/2","3/3","1/1","3/3","4/4"];
        //Pattern3 => triangle = ["1/1/1","2/2/2","3/3/3","1/1/1","3/3/3","4/4/4"];
        //Pattern4 => triangle = ["1//1","2//2","3//3","1//1","3//3","4//4"];
        //Pattern5 => triangle = ["-1/-1/-1","-2/-2/-2","-3/-3/-3","-1/-1/-1","-3/-3/-3","-4/-4/-4"];
    };
    /**
     * Create triangles and push the data for each polygon for the pattern 1
     * In this pattern we get vertice positions
     * @param face
     * @param v
     */
    SolidParser.prototype._setDataForCurrentFaceWithPattern1 = function (face, v) {
        //Get the indices of triangles for each polygon
        this._getTriangles(face, v);
        //For each element in the triangles array.
        //This var could contains 1 to an infinity of triangles
        for (var k = 0; k < this._triangles.length; k++) {
            // Set position indice
            var indicePositionFromObj = parseInt(this._triangles[k]) - 1;
            this._setData(indicePositionFromObj, 0, 0, // In the pattern 1, normals and uvs are not defined
            this._positions[indicePositionFromObj], // Get the vectors data
            babylonjs_Buffers_buffer__WEBPACK_IMPORTED_MODULE_0__.Vector2.Zero(), babylonjs_Buffers_buffer__WEBPACK_IMPORTED_MODULE_0__.Vector3.Up(), // Create default vectors
            this._loadingOptions.importVertexColors ? this._colors[indicePositionFromObj] : undefined);
        }
        //Reset variable for the next line
        this._triangles.length = 0;
    };
    /**
     * Create triangles and push the data for each polygon for the pattern 2
     * In this pattern we get vertice positions and uvs
     * @param face
     * @param v
     */
    SolidParser.prototype._setDataForCurrentFaceWithPattern2 = function (face, v) {
        //Get the indices of triangles for each polygon
        this._getTriangles(face, v);
        for (var k = 0; k < this._triangles.length; k++) {
            //triangle[k] = "1/1"
            //Split the data for getting position and uv
            var point = this._triangles[k].split("/"); // ["1", "1"]
            //Set position indice
            var indicePositionFromObj = parseInt(point[0]) - 1;
            //Set uv indice
            var indiceUvsFromObj = parseInt(point[1]) - 1;
            this._setData(indicePositionFromObj, indiceUvsFromObj, 0, //Default value for normals
            this._positions[indicePositionFromObj], //Get the values for each element
            this._uvs[indiceUvsFromObj], babylonjs_Buffers_buffer__WEBPACK_IMPORTED_MODULE_0__.Vector3.Up(), //Default value for normals
            this._loadingOptions.importVertexColors ? this._colors[indicePositionFromObj] : undefined);
        }
        //Reset variable for the next line
        this._triangles.length = 0;
    };
    /**
     * Create triangles and push the data for each polygon for the pattern 3
     * In this pattern we get vertice positions, uvs and normals
     * @param face
     * @param v
     */
    SolidParser.prototype._setDataForCurrentFaceWithPattern3 = function (face, v) {
        //Get the indices of triangles for each polygon
        this._getTriangles(face, v);
        for (var k = 0; k < this._triangles.length; k++) {
            //triangle[k] = "1/1/1"
            //Split the data for getting position, uv, and normals
            var point = this._triangles[k].split("/"); // ["1", "1", "1"]
            // Set position indice
            var indicePositionFromObj = parseInt(point[0]) - 1;
            // Set uv indice
            var indiceUvsFromObj = parseInt(point[1]) - 1;
            // Set normal indice
            var indiceNormalFromObj = parseInt(point[2]) - 1;
            this._setData(indicePositionFromObj, indiceUvsFromObj, indiceNormalFromObj, this._positions[indicePositionFromObj], this._uvs[indiceUvsFromObj], this._normals[indiceNormalFromObj] //Set the vector for each component
            );
        }
        //Reset variable for the next line
        this._triangles.length = 0;
    };
    /**
     * Create triangles and push the data for each polygon for the pattern 4
     * In this pattern we get vertice positions and normals
     * @param face
     * @param v
     */
    SolidParser.prototype._setDataForCurrentFaceWithPattern4 = function (face, v) {
        this._getTriangles(face, v);
        for (var k = 0; k < this._triangles.length; k++) {
            //triangle[k] = "1//1"
            //Split the data for getting position and normals
            var point = this._triangles[k].split("//"); // ["1", "1"]
            // We check indices, and normals
            var indicePositionFromObj = parseInt(point[0]) - 1;
            var indiceNormalFromObj = parseInt(point[1]) - 1;
            this._setData(indicePositionFromObj, 1, //Default value for uv
            indiceNormalFromObj, this._positions[indicePositionFromObj], //Get each vector of data
            babylonjs_Buffers_buffer__WEBPACK_IMPORTED_MODULE_0__.Vector2.Zero(), this._normals[indiceNormalFromObj], this._loadingOptions.importVertexColors ? this._colors[indicePositionFromObj] : undefined);
        }
        //Reset variable for the next line
        this._triangles.length = 0;
    };
    /*
     * Create triangles and push the data for each polygon for the pattern 3
     * In this pattern we get vertice positions, uvs and normals
     * @param face
     * @param v
     */
    SolidParser.prototype._setDataForCurrentFaceWithPattern5 = function (face, v) {
        //Get the indices of triangles for each polygon
        this._getTriangles(face, v);
        for (var k = 0; k < this._triangles.length; k++) {
            //triangle[k] = "-1/-1/-1"
            //Split the data for getting position, uv, and normals
            var point = this._triangles[k].split("/"); // ["-1", "-1", "-1"]
            // Set position indice
            var indicePositionFromObj = this._positions.length + parseInt(point[0]);
            // Set uv indice
            var indiceUvsFromObj = this._uvs.length + parseInt(point[1]);
            // Set normal indice
            var indiceNormalFromObj = this._normals.length + parseInt(point[2]);
            this._setData(indicePositionFromObj, indiceUvsFromObj, indiceNormalFromObj, this._positions[indicePositionFromObj], this._uvs[indiceUvsFromObj], this._normals[indiceNormalFromObj], //Set the vector for each component
            this._loadingOptions.importVertexColors ? this._colors[indicePositionFromObj] : undefined);
        }
        //Reset variable for the next line
        this._triangles.length = 0;
    };
    SolidParser.prototype._addPreviousObjMesh = function () {
        //Check if it is not the first mesh. Otherwise we don't have data.
        if (this._meshesFromObj.length > 0) {
            //Get the previous mesh for applying the data about the faces
            //=> in obj file, faces definition append after the name of the mesh
            this._handledMesh = this._meshesFromObj[this._meshesFromObj.length - 1];
            //Set the data into Array for the mesh
            this._unwrapData();
            // Reverse tab. Otherwise face are displayed in the wrong sens
            this._indicesForBabylon.reverse();
            //Set the information for the mesh
            //Slice the array to avoid rewriting because of the fact this is the same var which be rewrited
            this._handledMesh.indices = this._indicesForBabylon.slice();
            this._handledMesh.positions = this._unwrappedPositionsForBabylon.slice();
            this._handledMesh.normals = this._unwrappedNormalsForBabylon.slice();
            this._handledMesh.uvs = this._unwrappedUVForBabylon.slice();
            if (this._loadingOptions.importVertexColors) {
                this._handledMesh.colors = this._unwrappedColorsForBabylon.slice();
            }
            //Reset the array for the next mesh
            this._indicesForBabylon.length = 0;
            this._unwrappedPositionsForBabylon.length = 0;
            this._unwrappedColorsForBabylon.length = 0;
            this._unwrappedNormalsForBabylon.length = 0;
            this._unwrappedUVForBabylon.length = 0;
        }
    };
    SolidParser.prototype._optimizeNormals = function (mesh) {
        var positions = mesh.getVerticesData(babylonjs_Buffers_buffer__WEBPACK_IMPORTED_MODULE_0__.VertexBuffer.PositionKind);
        var normals = mesh.getVerticesData(babylonjs_Buffers_buffer__WEBPACK_IMPORTED_MODULE_0__.VertexBuffer.NormalKind);
        var mapVertices = {};
        if (!positions || !normals) {
            return;
        }
        for (var i = 0; i < positions.length / 3; i++) {
            var x = positions[i * 3 + 0];
            var y = positions[i * 3 + 1];
            var z = positions[i * 3 + 2];
            var key = x + "_" + y + "_" + z;
            var lst = mapVertices[key];
            if (!lst) {
                lst = [];
                mapVertices[key] = lst;
            }
            lst.push(i);
        }
        var normal = new babylonjs_Buffers_buffer__WEBPACK_IMPORTED_MODULE_0__.Vector3();
        for (var key in mapVertices) {
            var lst = mapVertices[key];
            if (lst.length < 2) {
                continue;
            }
            var v0Idx = lst[0];
            for (var i = 1; i < lst.length; ++i) {
                var vIdx = lst[i];
                normals[v0Idx * 3 + 0] += normals[vIdx * 3 + 0];
                normals[v0Idx * 3 + 1] += normals[vIdx * 3 + 1];
                normals[v0Idx * 3 + 2] += normals[vIdx * 3 + 2];
            }
            normal.copyFromFloats(normals[v0Idx * 3 + 0], normals[v0Idx * 3 + 1], normals[v0Idx * 3 + 2]);
            normal.normalize();
            for (var i = 0; i < lst.length; ++i) {
                var vIdx = lst[i];
                normals[vIdx * 3 + 0] = normal.x;
                normals[vIdx * 3 + 1] = normal.y;
                normals[vIdx * 3 + 2] = normal.z;
            }
        }
        mesh.setVerticesData(babylonjs_Buffers_buffer__WEBPACK_IMPORTED_MODULE_0__.VertexBuffer.NormalKind, normals);
    };
    /**
     * Function used to parse an OBJ string
     * @param meshesNames defines the list of meshes to load (all if not defined)
     * @param data defines the OBJ string
     * @param scene defines the hosting scene
     * @param assetContainer defines the asset container to load data in
     * @param onFileToLoadFound defines a callback that will be called if a MTL file is found
     */
    SolidParser.prototype.parse = function (meshesNames, data, scene, assetContainer, onFileToLoadFound) {
        var _a;
        // Split the file into lines
        var lines = data.split("\n");
        // Look at each line
        for (var i = 0; i < lines.length; i++) {
            var line = lines[i].trim().replace(/\s\s/g, " ");
            var result = void 0;
            // Comment or newLine
            if (line.length === 0 || line.charAt(0) === "#") {
                continue;
                //Get information about one position possible for the vertices
            }
            else if (SolidParser.VertexPattern.test(line)) {
                result = line.match(/[^ ]+/g); // match will return non-null due to passing regex pattern
                // Value of result with line: "v 1.0 2.0 3.0"
                // ["v", "1.0", "2.0", "3.0"]
                // Create a Vector3 with the position x, y, z
                this._positions.push(new babylonjs_Buffers_buffer__WEBPACK_IMPORTED_MODULE_0__.Vector3(parseFloat(result[1]), parseFloat(result[2]), parseFloat(result[3])));
                if (this._loadingOptions.importVertexColors) {
                    if (result.length >= 7) {
                        var r = parseFloat(result[4]);
                        var g = parseFloat(result[5]);
                        var b = parseFloat(result[6]);
                        this._colors.push(new babylonjs_Buffers_buffer__WEBPACK_IMPORTED_MODULE_0__.Color4(r > 1 ? r / 255 : r, g > 1 ? g / 255 : g, b > 1 ? b / 255 : b, result.length === 7 || result[7] === undefined ? 1 : parseFloat(result[7])));
                    }
                    else {
                        // TODO: maybe push NULL and if all are NULL to skip (and remove grayColor var).
                        this._colors.push(this._grayColor);
                    }
                }
            }
            else if ((result = SolidParser.NormalPattern.exec(line)) !== null) {
                //Create a Vector3 with the normals x, y, z
                //Value of result
                // ["vn 1.0 2.0 3.0", "1.0", "2.0", "3.0"]
                //Add the Vector in the list of normals
                this._normals.push(new babylonjs_Buffers_buffer__WEBPACK_IMPORTED_MODULE_0__.Vector3(parseFloat(result[1]), parseFloat(result[2]), parseFloat(result[3])));
            }
            else if ((result = SolidParser.UVPattern.exec(line)) !== null) {
                //Create a Vector2 with the normals u, v
                //Value of result
                // ["vt 0.1 0.2 0.3", "0.1", "0.2"]
                //Add the Vector in the list of uvs
                this._uvs.push(new babylonjs_Buffers_buffer__WEBPACK_IMPORTED_MODULE_0__.Vector2(parseFloat(result[1]) * this._loadingOptions.UVScaling.x, parseFloat(result[2]) * this._loadingOptions.UVScaling.y));
                //Identify patterns of faces
                //Face could be defined in different type of pattern
            }
            else if ((result = SolidParser.FacePattern3.exec(line)) !== null) {
                //Value of result:
                //["f 1/1/1 2/2/2 3/3/3", "1/1/1 2/2/2 3/3/3"...]
                //Set the data for this face
                this._setDataForCurrentFaceWithPattern3(result[1].trim().split(" "), // ["1/1/1", "2/2/2", "3/3/3"]
                1);
            }
            else if ((result = SolidParser.FacePattern4.exec(line)) !== null) {
                //Value of result:
                //["f 1//1 2//2 3//3", "1//1 2//2 3//3"...]
                //Set the data for this face
                this._setDataForCurrentFaceWithPattern4(result[1].trim().split(" "), // ["1//1", "2//2", "3//3"]
                1);
            }
            else if ((result = SolidParser.FacePattern5.exec(line)) !== null) {
                //Value of result:
                //["f -1/-1/-1 -2/-2/-2 -3/-3/-3", "-1/-1/-1 -2/-2/-2 -3/-3/-3"...]
                //Set the data for this face
                this._setDataForCurrentFaceWithPattern5(result[1].trim().split(" "), // ["-1/-1/-1", "-2/-2/-2", "-3/-3/-3"]
                1);
            }
            else if ((result = SolidParser.FacePattern2.exec(line)) !== null) {
                //Value of result:
                //["f 1/1 2/2 3/3", "1/1 2/2 3/3"...]
                //Set the data for this face
                this._setDataForCurrentFaceWithPattern2(result[1].trim().split(" "), // ["1/1", "2/2", "3/3"]
                1);
            }
            else if ((result = SolidParser.FacePattern1.exec(line)) !== null) {
                //Value of result
                //["f 1 2 3", "1 2 3"...]
                //Set the data for this face
                this._setDataForCurrentFaceWithPattern1(result[1].trim().split(" "), // ["1", "2", "3"]
                1);
                // Define a mesh or an object
                // Each time this keyword is analyzed, create a new Object with all data for creating a babylonMesh
            }
            else if ((result = SolidParser.LinePattern1.exec(line)) !== null) {
                //Value of result
                //["l 1 2"]
                //Set the data for this face
                this._setDataForCurrentFaceWithPattern1(result[1].trim().split(" "), // ["1", "2"]
                0);
                // Define a mesh or an object
                // Each time this keyword is analyzed, create a new Object with all data for creating a babylonMesh
            }
            else if ((result = SolidParser.LinePattern2.exec(line)) !== null) {
                //Value of result
                //["l 1/1 2/2"]
                //Set the data for this face
                this._setDataForCurrentFaceWithPattern2(result[1].trim().split(" "), // ["1/1", "2/2"]
                0);
                // Define a mesh or an object
                // Each time this keyword is analyzed, create a new Object with all data for creating a babylonMesh
            }
            else if ((result = SolidParser.LinePattern3.exec(line)) !== null) {
                //Value of result
                //["l 1/1/1 2/2/2"]
                //Set the data for this face
                this._setDataForCurrentFaceWithPattern3(result[1].trim().split(" "), // ["1/1/1", "2/2/2"]
                0);
                // Define a mesh or an object
                // Each time this keyword is analyzed, create a new Object with all data for creating a babylonMesh
            }
            else if (SolidParser.GroupDescriptor.test(line) || SolidParser.ObjectDescriptor.test(line)) {
                // Create a new mesh corresponding to the name of the group.
                // Definition of the mesh
                var objMesh = {
                    name: line.substring(2).trim(),
                    indices: undefined,
                    positions: undefined,
                    normals: undefined,
                    uvs: undefined,
                    colors: undefined,
                    materialName: this._materialNameFromObj,
                };
                this._addPreviousObjMesh();
                //Push the last mesh created with only the name
                this._meshesFromObj.push(objMesh);
                //Set this variable to indicate that now meshesFromObj has objects defined inside
                this._hasMeshes = true;
                this._isFirstMaterial = true;
                this._increment = 1;
                //Keyword for applying a material
            }
            else if (SolidParser.UseMtlDescriptor.test(line)) {
                //Get the name of the material
                this._materialNameFromObj = line.substring(7).trim();
                //If this new material is in the same mesh
                if (!this._isFirstMaterial || !this._hasMeshes) {
                    //Set the data for the previous mesh
                    this._addPreviousObjMesh();
                    //Create a new mesh
                    var objMesh = 
                    //Set the name of the current obj mesh
                    {
                        name: (this._objMeshName || "mesh") + "_mm" + this._increment.toString(),
                        indices: undefined,
                        positions: undefined,
                        normals: undefined,
                        uvs: undefined,
                        colors: undefined,
                        materialName: this._materialNameFromObj,
                    };
                    this._increment++;
                    //If meshes are already defined
                    this._meshesFromObj.push(objMesh);
                    this._hasMeshes = true;
                }
                //Set the material name if the previous line define a mesh
                if (this._hasMeshes && this._isFirstMaterial) {
                    //Set the material name to the previous mesh (1 material per mesh)
                    this._meshesFromObj[this._meshesFromObj.length - 1].materialName = this._materialNameFromObj;
                    this._isFirstMaterial = false;
                }
                // Keyword for loading the mtl file
            }
            else if (SolidParser.MtlLibGroupDescriptor.test(line)) {
                // Get the name of mtl file
                onFileToLoadFound(line.substring(7).trim());
                // Apply smoothing
            }
            else if (SolidParser.SmoothDescriptor.test(line)) {
                // smooth shading => apply smoothing
                // Today I don't know it work with babylon and with obj.
                // With the obj file  an integer is set
            }
            else {
                //If there is another possibility
                console.log("Unhandled expression at line : " + line);
            }
        }
        // At the end of the file, add the last mesh into the meshesFromObj array
        if (this._hasMeshes) {
            // Set the data for the last mesh
            this._handledMesh = this._meshesFromObj[this._meshesFromObj.length - 1];
            //Reverse indices for displaying faces in the good sense
            this._indicesForBabylon.reverse();
            //Get the good array
            this._unwrapData();
            //Set array
            this._handledMesh.indices = this._indicesForBabylon;
            this._handledMesh.positions = this._unwrappedPositionsForBabylon;
            this._handledMesh.normals = this._unwrappedNormalsForBabylon;
            this._handledMesh.uvs = this._unwrappedUVForBabylon;
            if (this._loadingOptions.importVertexColors) {
                this._handledMesh.colors = this._unwrappedColorsForBabylon;
            }
        }
        // If any o or g keyword not found, create a mesh with a random id
        if (!this._hasMeshes) {
            var newMaterial = null;
            if (this._indicesForBabylon.length) {
                // reverse tab of indices
                this._indicesForBabylon.reverse();
                //Get positions normals uvs
                this._unwrapData();
            }
            else {
                // There is no indices in the file. We will have to switch to point cloud rendering
                for (var _i = 0, _b = this._positions; _i < _b.length; _i++) {
                    var pos = _b[_i];
                    this._unwrappedPositionsForBabylon.push(pos.x, pos.y, pos.z);
                }
                if (this._normals.length) {
                    for (var _c = 0, _d = this._normals; _c < _d.length; _c++) {
                        var normal = _d[_c];
                        this._unwrappedNormalsForBabylon.push(normal.x, normal.y, normal.z);
                    }
                }
                if (this._uvs.length) {
                    for (var _e = 0, _f = this._uvs; _e < _f.length; _e++) {
                        var uv = _f[_e];
                        this._unwrappedUVForBabylon.push(uv.x, uv.y);
                    }
                }
                if (this._colors.length) {
                    for (var _g = 0, _h = this._colors; _g < _h.length; _g++) {
                        var color = _h[_g];
                        this._unwrappedColorsForBabylon.push(color.r, color.g, color.b, color.a);
                    }
                }
                if (!this._materialNameFromObj) {
                    // Create a material with point cloud on
                    newMaterial = new babylonjs_Buffers_buffer__WEBPACK_IMPORTED_MODULE_0__.StandardMaterial(babylonjs_Buffers_buffer__WEBPACK_IMPORTED_MODULE_0__.Geometry.RandomId(), scene);
                    newMaterial.pointsCloud = true;
                    this._materialNameFromObj = newMaterial.name;
                    if (!this._normals.length) {
                        newMaterial.disableLighting = true;
                        newMaterial.emissiveColor = babylonjs_Buffers_buffer__WEBPACK_IMPORTED_MODULE_0__.Color3.White();
                    }
                }
            }
            //Set data for one mesh
            this._meshesFromObj.push({
                name: babylonjs_Buffers_buffer__WEBPACK_IMPORTED_MODULE_0__.Geometry.RandomId(),
                indices: this._indicesForBabylon,
                positions: this._unwrappedPositionsForBabylon,
                colors: this._unwrappedColorsForBabylon,
                normals: this._unwrappedNormalsForBabylon,
                uvs: this._unwrappedUVForBabylon,
                materialName: this._materialNameFromObj,
                directMaterial: newMaterial,
            });
        }
        //Set data for each mesh
        for (var j = 0; j < this._meshesFromObj.length; j++) {
            //check meshesNames (stlFileLoader)
            if (meshesNames && this._meshesFromObj[j].name) {
                if (meshesNames instanceof Array) {
                    if (meshesNames.indexOf(this._meshesFromObj[j].name) === -1) {
                        continue;
                    }
                }
                else {
                    if (this._meshesFromObj[j].name !== meshesNames) {
                        continue;
                    }
                }
            }
            //Get the current mesh
            //Set the data with VertexBuffer for each mesh
            this._handledMesh = this._meshesFromObj[j];
            //Create a Mesh with the name of the obj mesh
            scene._blockEntityCollection = !!assetContainer;
            var babylonMesh = new babylonjs_Buffers_buffer__WEBPACK_IMPORTED_MODULE_0__.Mesh(this._meshesFromObj[j].name, scene);
            babylonMesh._parentContainer = assetContainer;
            scene._blockEntityCollection = false;
            //Push the name of the material to an array
            //This is indispensable for the importMesh function
            this._materialToUse.push(this._meshesFromObj[j].materialName);
            if (((_a = this._handledMesh.positions) === null || _a === void 0 ? void 0 : _a.length) === 0) {
                //Push the mesh into an array
                this._babylonMeshesArray.push(babylonMesh);
                continue;
            }
            var vertexData = new babylonjs_Buffers_buffer__WEBPACK_IMPORTED_MODULE_0__.VertexData(); //The container for the values
            //Set the data for the babylonMesh
            vertexData.uvs = this._handledMesh.uvs;
            vertexData.indices = this._handledMesh.indices;
            vertexData.positions = this._handledMesh.positions;
            if (this._loadingOptions.computeNormals) {
                var normals = new Array();
                babylonjs_Buffers_buffer__WEBPACK_IMPORTED_MODULE_0__.VertexData.ComputeNormals(this._handledMesh.positions, this._handledMesh.indices, normals);
                vertexData.normals = normals;
            }
            else {
                vertexData.normals = this._handledMesh.normals;
            }
            if (this._loadingOptions.importVertexColors) {
                vertexData.colors = this._handledMesh.colors;
            }
            //Set the data from the VertexBuffer to the current Mesh
            vertexData.applyToMesh(babylonMesh);
            if (this._loadingOptions.invertY) {
                babylonMesh.scaling.y *= -1;
            }
            if (this._loadingOptions.optimizeNormals) {
                this._optimizeNormals(babylonMesh);
            }
            //Push the mesh into an array
            this._babylonMeshesArray.push(babylonMesh);
            if (this._handledMesh.directMaterial) {
                babylonMesh.material = this._handledMesh.directMaterial;
            }
        }
    };
    // Descriptor
    /** Object descriptor */
    SolidParser.ObjectDescriptor = /^o/;
    /** Group descriptor */
    SolidParser.GroupDescriptor = /^g/;
    /** Material lib descriptor */
    SolidParser.MtlLibGroupDescriptor = /^mtllib /;
    /** Use a material descriptor */
    SolidParser.UseMtlDescriptor = /^usemtl /;
    /** Smooth descriptor */
    SolidParser.SmoothDescriptor = /^s /;
    // Patterns
    /** Pattern used to detect a vertex */
    SolidParser.VertexPattern = /^v(\s+[\d|.|+|\-|e|E]+){3,7}/;
    /** Pattern used to detect a normal */
    SolidParser.NormalPattern = /^vn(\s+[\d|.|+|\-|e|E]+)( +[\d|.|+|\-|e|E]+)( +[\d|.|+|\-|e|E]+)/;
    /** Pattern used to detect a UV set */
    SolidParser.UVPattern = /^vt(\s+[\d|.|+|\-|e|E]+)( +[\d|.|+|\-|e|E]+)/;
    /** Pattern used to detect a first kind of face (f vertex vertex vertex) */
    SolidParser.FacePattern1 = /^f\s+(([\d]{1,}[\s]?){3,})+/;
    /** Pattern used to detect a second kind of face (f vertex/uvs vertex/uvs vertex/uvs) */
    SolidParser.FacePattern2 = /^f\s+((([\d]{1,}\/[\d]{1,}[\s]?){3,})+)/;
    /** Pattern used to detect a third kind of face (f vertex/uvs/normal vertex/uvs/normal vertex/uvs/normal) */
    SolidParser.FacePattern3 = /^f\s+((([\d]{1,}\/[\d]{1,}\/[\d]{1,}[\s]?){3,})+)/;
    /** Pattern used to detect a fourth kind of face (f vertex//normal vertex//normal vertex//normal)*/
    SolidParser.FacePattern4 = /^f\s+((([\d]{1,}\/\/[\d]{1,}[\s]?){3,})+)/;
    /** Pattern used to detect a fifth kind of face (f -vertex/-uvs/-normal -vertex/-uvs/-normal -vertex/-uvs/-normal) */
    SolidParser.FacePattern5 = /^f\s+(((-[\d]{1,}\/-[\d]{1,}\/-[\d]{1,}[\s]?){3,})+)/;
    /** Pattern used to detect a line(l vertex vertex) */
    SolidParser.LinePattern1 = /^l\s+(([\d]{1,}[\s]?){2,})+/;
    /** Pattern used to detect a second kind of line (l vertex/uvs vertex/uvs) */
    SolidParser.LinePattern2 = /^l\s+((([\d]{1,}\/[\d]{1,}[\s]?){2,})+)/;
    /** Pattern used to detect a third kind of line (l vertex/uvs/normal vertex/uvs/normal) */
    SolidParser.LinePattern3 = /^l\s+((([\d]{1,}\/[\d]{1,}\/[\d]{1,}[\s]?){2,})+)/;
    return SolidParser;
}());


/***/ }),

/***/ "../../../lts/loaders/src/legacy/legacy-objFileLoader.ts":
/*!***************************************************************!*\
  !*** ../../../lts/loaders/src/legacy/legacy-objFileLoader.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MTLFileLoader: () => (/* reexport safe */ loaders_OBJ_index__WEBPACK_IMPORTED_MODULE_0__.MTLFileLoader),
/* harmony export */   OBJFileLoader: () => (/* reexport safe */ loaders_OBJ_index__WEBPACK_IMPORTED_MODULE_0__.OBJFileLoader),
/* harmony export */   SolidParser: () => (/* reexport safe */ loaders_OBJ_index__WEBPACK_IMPORTED_MODULE_0__.SolidParser)
/* harmony export */ });
/* harmony import */ var loaders_OBJ_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! loaders/OBJ/index */ "../../../dev/loaders/src/OBJ/index.ts");
/* eslint-disable import/no-internal-modules */

/**
 * This is the entry point for the UMD module.
 * The entry point for a future ESM package should be index.ts
 */
var globalObject = typeof __webpack_require__.g !== "undefined" ? __webpack_require__.g : typeof window !== "undefined" ? window : undefined;
if (typeof globalObject !== "undefined") {
    for (var key in loaders_OBJ_index__WEBPACK_IMPORTED_MODULE_0__) {
        if (!globalObject.BABYLON[key]) {
            globalObject.BABYLON[key] = loaders_OBJ_index__WEBPACK_IMPORTED_MODULE_0__[key];
        }
    }
}



/***/ }),

/***/ "babylonjs/Misc/observable":
/*!****************************************************************************************************!*\
  !*** external {"root":"BABYLON","commonjs":"babylonjs","commonjs2":"babylonjs","amd":"babylonjs"} ***!
  \****************************************************************************************************/
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE_babylonjs_Misc_observable__;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!******************************!*\
  !*** ./src/objFileLoader.ts ***!
  \******************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   loaders: () => (/* reexport module object */ _lts_loaders_legacy_legacy_objFileLoader__WEBPACK_IMPORTED_MODULE_0__)
/* harmony export */ });
/* harmony import */ var _lts_loaders_legacy_legacy_objFileLoader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @lts/loaders/legacy/legacy-objFileLoader */ "../../../lts/loaders/src/legacy/legacy-objFileLoader.ts");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_lts_loaders_legacy_legacy_objFileLoader__WEBPACK_IMPORTED_MODULE_0__);

})();

__webpack_exports__ = __webpack_exports__["default"];
/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFieWxvbi5vYmpGaWxlTG9hZGVyLmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDVkE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRkE7QUFDQTtBQUNBO0FBSUE7O0FBRUE7QUFDQTtBQUFBO0FBTUE7O0FBRUE7QUFDQTtBQStNQTtBQTdNQTs7Ozs7Ozs7OztBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7OztBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBdE5BOztBQUVBO0FBQ0E7QUFvTkE7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pPQTtBQUNBO0FBR0E7QUFDQTtBQUdBO0FBRUE7QUFHQTs7O0FBR0E7QUFDQTtBQTZEQTs7OztBQUlBO0FBQ0E7QUFsQkE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFFQTtBQVVBO0FBQ0E7QUF4REE7QUFIQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7O0FBSkE7QUF3REE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFBQTtBQUVBOzs7Ozs7Ozs7O0FBVUE7QUFDQTtBQU1BO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7O0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7O0FBTUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7Ozs7QUFTQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBMVNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBWUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBRUE7Ozs7QUFJQTtBQUNBO0FBNlBBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsVUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFnQkE7O0FBRUE7QUFDQTtBQWlFQTs7Ozs7QUFLQTtBQUNBO0FBakNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFXQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7OztBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7Ozs7Ozs7O0FBYUE7QUFDQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7Ozs7Ozs7QUFZQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7O0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFJQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7OztBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBSUE7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7O0FBS0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUdBO0FBRUE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7OztBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQU9BO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7O0FBT0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBR0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBR0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBR0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBR0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBR0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWwwQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFpeUJBO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2gyQkE7QUFDQTtBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7QUNoQkE7Ozs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQ3ZCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUNQQTs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ05BO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL0xPQURFUlMvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL0xPQURFUlMvLi4vLi4vLi4vZGV2L2xvYWRlcnMvc3JjL09CSi9pbmRleC50cyIsIndlYnBhY2s6Ly9MT0FERVJTLy4uLy4uLy4uL2Rldi9sb2FkZXJzL3NyYy9PQkovbXRsRmlsZUxvYWRlci50cyIsIndlYnBhY2s6Ly9MT0FERVJTLy4uLy4uLy4uL2Rldi9sb2FkZXJzL3NyYy9PQkovb2JqRmlsZUxvYWRlci50cyIsIndlYnBhY2s6Ly9MT0FERVJTLy4uLy4uLy4uL2Rldi9sb2FkZXJzL3NyYy9PQkovc29saWRQYXJzZXIudHMiLCJ3ZWJwYWNrOi8vTE9BREVSUy8uLi8uLi8uLi9sdHMvbG9hZGVycy9zcmMvbGVnYWN5L2xlZ2FjeS1vYmpGaWxlTG9hZGVyLnRzIiwid2VicGFjazovL0xPQURFUlMvZXh0ZXJuYWwgdW1kIHtcInJvb3RcIjpcIkJBQllMT05cIixcImNvbW1vbmpzXCI6XCJiYWJ5bG9uanNcIixcImNvbW1vbmpzMlwiOlwiYmFieWxvbmpzXCIsXCJhbWRcIjpcImJhYnlsb25qc1wifSIsIndlYnBhY2s6Ly9MT0FERVJTL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL0xPQURFUlMvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vTE9BREVSUy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vTE9BREVSUy93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL0xPQURFUlMvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9MT0FERVJTL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vTE9BREVSUy8uL3NyYy9vYmpGaWxlTG9hZGVyLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcImJhYnlsb25qc1wiKSk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShcImJhYnlsb25qcy1sb2FkZXJzXCIsIFtcImJhYnlsb25qc1wiXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJiYWJ5bG9uanMtbG9hZGVyc1wiXSA9IGZhY3RvcnkocmVxdWlyZShcImJhYnlsb25qc1wiKSk7XG5cdGVsc2Vcblx0XHRyb290W1wiTE9BREVSU1wiXSA9IGZhY3Rvcnkocm9vdFtcIkJBQllMT05cIl0pO1xufSkoKHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiID8gc2VsZiA6IHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIgPyBnbG9iYWwgOiB0aGlzKSwgKF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfYmFieWxvbmpzX01pc2Nfb2JzZXJ2YWJsZV9fKSA9PiB7XG5yZXR1cm4gIiwiZXhwb3J0ICogZnJvbSBcIi4vbXRsRmlsZUxvYWRlclwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9vYmpMb2FkaW5nT3B0aW9uc1wiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9zb2xpZFBhcnNlclwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9vYmpGaWxlTG9hZGVyXCI7XHJcbiIsImltcG9ydCB0eXBlIHsgTnVsbGFibGUgfSBmcm9tIFwiY29yZS90eXBlc1wiO1xyXG5pbXBvcnQgeyBDb2xvcjMgfSBmcm9tIFwiY29yZS9NYXRocy9tYXRoLmNvbG9yXCI7XHJcbmltcG9ydCB7IFRleHR1cmUgfSBmcm9tIFwiY29yZS9NYXRlcmlhbHMvVGV4dHVyZXMvdGV4dHVyZVwiO1xyXG5pbXBvcnQgeyBTdGFuZGFyZE1hdGVyaWFsIH0gZnJvbSBcImNvcmUvTWF0ZXJpYWxzL3N0YW5kYXJkTWF0ZXJpYWxcIjtcclxuXHJcbmltcG9ydCB0eXBlIHsgU2NlbmUgfSBmcm9tIFwiY29yZS9zY2VuZVwiO1xyXG5pbXBvcnQgdHlwZSB7IEFzc2V0Q29udGFpbmVyIH0gZnJvbSBcImNvcmUvYXNzZXRDb250YWluZXJcIjtcclxuLyoqXHJcbiAqIENsYXNzIHJlYWRpbmcgYW5kIHBhcnNpbmcgdGhlIE1UTCBmaWxlIGJ1bmRsZWQgd2l0aCB0aGUgb2JqIGZpbGUuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgTVRMRmlsZUxvYWRlciB7XHJcbiAgICAvKipcclxuICAgICAqIEludmVydCBZLUF4aXMgb2YgcmVmZXJlbmNlZCB0ZXh0dXJlcyBvbiBsb2FkXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgSU5WRVJUX1RFWFRVUkVfWSA9IHRydWU7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBbGwgbWF0ZXJpYWwgbG9hZGVkIGZyb20gdGhlIG10bCB3aWxsIGJlIHNldCBoZXJlXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBtYXRlcmlhbHM6IFN0YW5kYXJkTWF0ZXJpYWxbXSA9IFtdO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhpcyBmdW5jdGlvbiB3aWxsIHJlYWQgdGhlIG10bCBmaWxlIGFuZCBjcmVhdGUgZWFjaCBtYXRlcmlhbCBkZXNjcmliZWQgaW5zaWRlXHJcbiAgICAgKiBUaGlzIGZ1bmN0aW9uIGNvdWxkIGJlIGltcHJvdmUgYnkgYWRkaW5nIDpcclxuICAgICAqIC1zb21lIGNvbXBvbmVudCBtaXNzaW5nIChOaSwgVGYuLi4pXHJcbiAgICAgKiAtaW5jbHVkaW5nIHRoZSBzcGVjaWZpYyBvcHRpb25zIGF2YWlsYWJsZVxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBzY2VuZSBkZWZpbmVzIHRoZSBzY2VuZSB0aGUgbWF0ZXJpYWwgd2lsbCBiZSBjcmVhdGVkIGluXHJcbiAgICAgKiBAcGFyYW0gZGF0YSBkZWZpbmVzIHRoZSBtdGwgZGF0YSB0byBwYXJzZVxyXG4gICAgICogQHBhcmFtIHJvb3RVcmwgZGVmaW5lcyB0aGUgcm9vdHVybCB0byB1c2UgaW4gb3JkZXIgdG8gbG9hZCByZWxhdGl2ZSBkZXBlbmRlbmNpZXNcclxuICAgICAqIEBwYXJhbSBhc3NldENvbnRhaW5lciBkZWZpbmVzIHRoZSBhc3NldCBjb250YWluZXIgdG8gc3RvcmUgdGhlIG1hdGVyaWFsIGluIChjYW4gYmUgbnVsbClcclxuICAgICAqL1xyXG4gICAgcHVibGljIHBhcnNlTVRMKHNjZW5lOiBTY2VuZSwgZGF0YTogc3RyaW5nIHwgQXJyYXlCdWZmZXIsIHJvb3RVcmw6IHN0cmluZywgYXNzZXRDb250YWluZXI6IE51bGxhYmxlPEFzc2V0Q29udGFpbmVyPik6IHZvaWQge1xyXG4gICAgICAgIGlmIChkYXRhIGluc3RhbmNlb2YgQXJyYXlCdWZmZXIpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy9TcGxpdCB0aGUgbGluZXMgZnJvbSB0aGUgZmlsZVxyXG4gICAgICAgIGNvbnN0IGxpbmVzID0gZGF0YS5zcGxpdChcIlxcblwiKTtcclxuICAgICAgICAvLyB3aGl0ZXNwYWNlIGNoYXIgaWU6IFsgXFx0XFxyXFxuXFxmXVxyXG4gICAgICAgIGNvbnN0IGRlbGltaXRlcl9wYXR0ZXJuID0gL1xccysvO1xyXG4gICAgICAgIC8vQXJyYXkgd2l0aCBSR0IgY29sb3JzXHJcbiAgICAgICAgbGV0IGNvbG9yOiBudW1iZXJbXTtcclxuICAgICAgICAvL05ldyBtYXRlcmlhbFxyXG4gICAgICAgIGxldCBtYXRlcmlhbDogTnVsbGFibGU8U3RhbmRhcmRNYXRlcmlhbD4gPSBudWxsO1xyXG5cclxuICAgICAgICAvL0xvb2sgYXQgZWFjaCBsaW5lXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsaW5lcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBjb25zdCBsaW5lID0gbGluZXNbaV0udHJpbSgpO1xyXG5cclxuICAgICAgICAgICAgLy8gQmxhbmsgbGluZSBvciBjb21tZW50XHJcbiAgICAgICAgICAgIGlmIChsaW5lLmxlbmd0aCA9PT0gMCB8fCBsaW5lLmNoYXJBdCgwKSA9PT0gXCIjXCIpIHtcclxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvL0dldCB0aGUgZmlyc3QgcGFyYW1ldGVyIChrZXl3b3JkKVxyXG4gICAgICAgICAgICBjb25zdCBwb3MgPSBsaW5lLmluZGV4T2YoXCIgXCIpO1xyXG4gICAgICAgICAgICBsZXQga2V5ID0gcG9zID49IDAgPyBsaW5lLnN1YnN0cmluZygwLCBwb3MpIDogbGluZTtcclxuICAgICAgICAgICAga2V5ID0ga2V5LnRvTG93ZXJDYXNlKCk7XHJcblxyXG4gICAgICAgICAgICAvL0dldCB0aGUgZGF0YSBmb2xsb3dpbmcgdGhlIGtleVxyXG4gICAgICAgICAgICBjb25zdCB2YWx1ZTogc3RyaW5nID0gcG9zID49IDAgPyBsaW5lLnN1YnN0cmluZyhwb3MgKyAxKS50cmltKCkgOiBcIlwiO1xyXG5cclxuICAgICAgICAgICAgLy9UaGlzIG10bCBrZXl3b3JkIHdpbGwgY3JlYXRlIHRoZSBuZXcgbWF0ZXJpYWxcclxuICAgICAgICAgICAgaWYgKGtleSA9PT0gXCJuZXdtdGxcIikge1xyXG4gICAgICAgICAgICAgICAgLy9DaGVjayBpZiBpdCBpcyB0aGUgZmlyc3QgbWF0ZXJpYWwuXHJcbiAgICAgICAgICAgICAgICAvLyBNYXRlcmlhbHMgc3BlY2lmaWNhdGlvbnMgYXJlIGRlc2NyaWJlZCBhZnRlciB0aGlzIGtleXdvcmQuXHJcbiAgICAgICAgICAgICAgICBpZiAobWF0ZXJpYWwpIHtcclxuICAgICAgICAgICAgICAgICAgICAvL0FkZCB0aGUgcHJldmlvdXMgbWF0ZXJpYWwgaW4gdGhlIG1hdGVyaWFsIGFycmF5LlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubWF0ZXJpYWxzLnB1c2gobWF0ZXJpYWwpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy9DcmVhdGUgYSBuZXcgbWF0ZXJpYWwuXHJcbiAgICAgICAgICAgICAgICAvLyB2YWx1ZSBpcyB0aGUgbmFtZSBvZiB0aGUgbWF0ZXJpYWwgcmVhZCBpbiB0aGUgbXRsIGZpbGVcclxuXHJcbiAgICAgICAgICAgICAgICBzY2VuZS5fYmxvY2tFbnRpdHlDb2xsZWN0aW9uID0gISFhc3NldENvbnRhaW5lcjtcclxuICAgICAgICAgICAgICAgIG1hdGVyaWFsID0gbmV3IFN0YW5kYXJkTWF0ZXJpYWwodmFsdWUsIHNjZW5lKTtcclxuICAgICAgICAgICAgICAgIG1hdGVyaWFsLl9wYXJlbnRDb250YWluZXIgPSBhc3NldENvbnRhaW5lcjtcclxuICAgICAgICAgICAgICAgIHNjZW5lLl9ibG9ja0VudGl0eUNvbGxlY3Rpb24gPSBmYWxzZTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChrZXkgPT09IFwia2RcIiAmJiBtYXRlcmlhbCkge1xyXG4gICAgICAgICAgICAgICAgLy8gRGlmZnVzZSBjb2xvciAoY29sb3IgdW5kZXIgd2hpdGUgbGlnaHQpIHVzaW5nIFJHQiB2YWx1ZXNcclxuXHJcbiAgICAgICAgICAgICAgICAvL3ZhbHVlICA9IFwiciBnIGJcIlxyXG4gICAgICAgICAgICAgICAgY29sb3IgPSA8bnVtYmVyW10+dmFsdWUuc3BsaXQoZGVsaW1pdGVyX3BhdHRlcm4sIDMpLm1hcChwYXJzZUZsb2F0KTtcclxuICAgICAgICAgICAgICAgIC8vY29sb3IgPSBbcixnLGJdXHJcbiAgICAgICAgICAgICAgICAvL1NldCB0Z2hlIGNvbG9yIGludG8gdGhlIG1hdGVyaWFsXHJcbiAgICAgICAgICAgICAgICBtYXRlcmlhbC5kaWZmdXNlQ29sb3IgPSBDb2xvcjMuRnJvbUFycmF5KGNvbG9yKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChrZXkgPT09IFwia2FcIiAmJiBtYXRlcmlhbCkge1xyXG4gICAgICAgICAgICAgICAgLy8gQW1iaWVudCBjb2xvciAoY29sb3IgdW5kZXIgc2hhZG93KSB1c2luZyBSR0IgdmFsdWVzXHJcblxyXG4gICAgICAgICAgICAgICAgLy92YWx1ZSA9IFwiciBnIGJcIlxyXG4gICAgICAgICAgICAgICAgY29sb3IgPSA8bnVtYmVyW10+dmFsdWUuc3BsaXQoZGVsaW1pdGVyX3BhdHRlcm4sIDMpLm1hcChwYXJzZUZsb2F0KTtcclxuICAgICAgICAgICAgICAgIC8vY29sb3IgPSBbcixnLGJdXHJcbiAgICAgICAgICAgICAgICAvL1NldCB0Z2hlIGNvbG9yIGludG8gdGhlIG1hdGVyaWFsXHJcbiAgICAgICAgICAgICAgICBtYXRlcmlhbC5hbWJpZW50Q29sb3IgPSBDb2xvcjMuRnJvbUFycmF5KGNvbG9yKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChrZXkgPT09IFwia3NcIiAmJiBtYXRlcmlhbCkge1xyXG4gICAgICAgICAgICAgICAgLy8gU3BlY3VsYXIgY29sb3IgKGNvbG9yIHdoZW4gbGlnaHQgaXMgcmVmbGVjdGVkIGZyb20gc2hpbnkgc3VyZmFjZSkgdXNpbmcgUkdCIHZhbHVlc1xyXG5cclxuICAgICAgICAgICAgICAgIC8vdmFsdWUgPSBcInIgZyBiXCJcclxuICAgICAgICAgICAgICAgIGNvbG9yID0gPG51bWJlcltdPnZhbHVlLnNwbGl0KGRlbGltaXRlcl9wYXR0ZXJuLCAzKS5tYXAocGFyc2VGbG9hdCk7XHJcbiAgICAgICAgICAgICAgICAvL2NvbG9yID0gW3IsZyxiXVxyXG4gICAgICAgICAgICAgICAgLy9TZXQgdGhlIGNvbG9yIGludG8gdGhlIG1hdGVyaWFsXHJcbiAgICAgICAgICAgICAgICBtYXRlcmlhbC5zcGVjdWxhckNvbG9yID0gQ29sb3IzLkZyb21BcnJheShjb2xvcik7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoa2V5ID09PSBcImtlXCIgJiYgbWF0ZXJpYWwpIHtcclxuICAgICAgICAgICAgICAgIC8vIEVtaXNzaXZlIGNvbG9yIHVzaW5nIFJHQiB2YWx1ZXNcclxuICAgICAgICAgICAgICAgIGNvbG9yID0gdmFsdWUuc3BsaXQoZGVsaW1pdGVyX3BhdHRlcm4sIDMpLm1hcChwYXJzZUZsb2F0KTtcclxuICAgICAgICAgICAgICAgIG1hdGVyaWFsLmVtaXNzaXZlQ29sb3IgPSBDb2xvcjMuRnJvbUFycmF5KGNvbG9yKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChrZXkgPT09IFwibnNcIiAmJiBtYXRlcmlhbCkge1xyXG4gICAgICAgICAgICAgICAgLy92YWx1ZSA9IFwiSW50ZWdlclwiXHJcbiAgICAgICAgICAgICAgICBtYXRlcmlhbC5zcGVjdWxhclBvd2VyID0gcGFyc2VGbG9hdCh2YWx1ZSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoa2V5ID09PSBcImRcIiAmJiBtYXRlcmlhbCkge1xyXG4gICAgICAgICAgICAgICAgLy9kIGlzIGRpc3NvbHZlIGZvciBjdXJyZW50IG1hdGVyaWFsLiBJdCBtZWFuIGFscGhhIGZvciBCQUJZTE9OXHJcbiAgICAgICAgICAgICAgICBtYXRlcmlhbC5hbHBoYSA9IHBhcnNlRmxvYXQodmFsdWUpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vVGV4dHVyZVxyXG4gICAgICAgICAgICAgICAgLy9UaGlzIHBhcnQgY2FuIGJlIGltcHJvdmVkIGJ5IGFkZGluZyB0aGUgcG9zc2libGUgb3B0aW9ucyBvZiB0ZXh0dXJlXHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoa2V5ID09PSBcIm1hcF9rYVwiICYmIG1hdGVyaWFsKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBhbWJpZW50IHRleHR1cmUgbWFwIHdpdGggYSBsb2FkZWQgaW1hZ2VcclxuICAgICAgICAgICAgICAgIC8vV2UgbXVzdCBmaXJzdCBnZXQgdGhlIGZvbGRlciBvZiB0aGUgaW1hZ2VcclxuICAgICAgICAgICAgICAgIG1hdGVyaWFsLmFtYmllbnRUZXh0dXJlID0gTVRMRmlsZUxvYWRlci5fR2V0VGV4dHVyZShyb290VXJsLCB2YWx1ZSwgc2NlbmUpO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGtleSA9PT0gXCJtYXBfa2RcIiAmJiBtYXRlcmlhbCkge1xyXG4gICAgICAgICAgICAgICAgLy8gRGlmZnVzZSB0ZXh0dXJlIG1hcCB3aXRoIGEgbG9hZGVkIGltYWdlXHJcbiAgICAgICAgICAgICAgICBtYXRlcmlhbC5kaWZmdXNlVGV4dHVyZSA9IE1UTEZpbGVMb2FkZXIuX0dldFRleHR1cmUocm9vdFVybCwgdmFsdWUsIHNjZW5lKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChrZXkgPT09IFwibWFwX2tzXCIgJiYgbWF0ZXJpYWwpIHtcclxuICAgICAgICAgICAgICAgIC8vIFNwZWN1bGFyIHRleHR1cmUgbWFwIHdpdGggYSBsb2FkZWQgaW1hZ2VcclxuICAgICAgICAgICAgICAgIC8vV2UgbXVzdCBmaXJzdCBnZXQgdGhlIGZvbGRlciBvZiB0aGUgaW1hZ2VcclxuICAgICAgICAgICAgICAgIG1hdGVyaWFsLnNwZWN1bGFyVGV4dHVyZSA9IE1UTEZpbGVMb2FkZXIuX0dldFRleHR1cmUocm9vdFVybCwgdmFsdWUsIHNjZW5lKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChrZXkgPT09IFwibWFwX25zXCIpIHtcclxuICAgICAgICAgICAgICAgIC8vU3BlY3VsYXJcclxuICAgICAgICAgICAgICAgIC8vU3BlY3VsYXIgaGlnaGxpZ2h0IGNvbXBvbmVudFxyXG4gICAgICAgICAgICAgICAgLy9XZSBtdXN0IGZpcnN0IGdldCB0aGUgZm9sZGVyIG9mIHRoZSBpbWFnZVxyXG4gICAgICAgICAgICAgICAgLy9cclxuICAgICAgICAgICAgICAgIC8vTm90IHN1cHBvcnRlZCBieSBCQUJZTE9OXHJcbiAgICAgICAgICAgICAgICAvL1xyXG4gICAgICAgICAgICAgICAgLy8gICAgY29udGludWU7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoa2V5ID09PSBcIm1hcF9idW1wXCIgJiYgbWF0ZXJpYWwpIHtcclxuICAgICAgICAgICAgICAgIC8vVGhlIGJ1bXAgdGV4dHVyZVxyXG4gICAgICAgICAgICAgICAgY29uc3QgdmFsdWVzID0gdmFsdWUuc3BsaXQoZGVsaW1pdGVyX3BhdHRlcm4pO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgYnVtcE11bHRpcGxpZXJJbmRleCA9IHZhbHVlcy5pbmRleE9mKFwiLWJtXCIpO1xyXG4gICAgICAgICAgICAgICAgbGV0IGJ1bXBNdWx0aXBsaWVyOiBOdWxsYWJsZTxzdHJpbmc+ID0gbnVsbDtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoYnVtcE11bHRpcGxpZXJJbmRleCA+PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYnVtcE11bHRpcGxpZXIgPSB2YWx1ZXNbYnVtcE11bHRpcGxpZXJJbmRleCArIDFdO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlcy5zcGxpY2UoYnVtcE11bHRpcGxpZXJJbmRleCwgMik7IC8vIHJlbW92ZVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIG1hdGVyaWFsLmJ1bXBUZXh0dXJlID0gTVRMRmlsZUxvYWRlci5fR2V0VGV4dHVyZShyb290VXJsLCB2YWx1ZXMuam9pbihcIiBcIiksIHNjZW5lKTtcclxuICAgICAgICAgICAgICAgIGlmIChtYXRlcmlhbC5idW1wVGV4dHVyZSAmJiBidW1wTXVsdGlwbGllciAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIG1hdGVyaWFsLmJ1bXBUZXh0dXJlLmxldmVsID0gcGFyc2VGbG9hdChidW1wTXVsdGlwbGllcik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoa2V5ID09PSBcIm1hcF9kXCIgJiYgbWF0ZXJpYWwpIHtcclxuICAgICAgICAgICAgICAgIC8vIFRoZSBkaXNzb2x2ZSBvZiB0aGUgbWF0ZXJpYWxcclxuICAgICAgICAgICAgICAgIG1hdGVyaWFsLm9wYWNpdHlUZXh0dXJlID0gTVRMRmlsZUxvYWRlci5fR2V0VGV4dHVyZShyb290VXJsLCB2YWx1ZSwgc2NlbmUpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vT3B0aW9ucyBmb3IgaWxsdW1pbmF0aW9uXHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoa2V5ID09PSBcImlsbHVtXCIpIHtcclxuICAgICAgICAgICAgICAgIC8vSWxsdW1pbmF0aW9uXHJcbiAgICAgICAgICAgICAgICBpZiAodmFsdWUgPT09IFwiMFwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy9UaGF0IG1lYW4gS2QgPT0gS2RcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodmFsdWUgPT09IFwiMVwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy9Db2xvciBvbiBhbmQgQW1iaWVudCBvblxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh2YWx1ZSA9PT0gXCIyXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAvL0hpZ2hsaWdodCBvblxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh2YWx1ZSA9PT0gXCIzXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAvL1JlZmxlY3Rpb24gb24gYW5kIFJheSB0cmFjZSBvblxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh2YWx1ZSA9PT0gXCI0XCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAvL1RyYW5zcGFyZW5jeTogR2xhc3Mgb24sIFJlZmxlY3Rpb246IFJheSB0cmFjZSBvblxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh2YWx1ZSA9PT0gXCI1XCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAvL1JlZmxlY3Rpb246IEZyZXNuZWwgb24gYW5kIFJheSB0cmFjZSBvblxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh2YWx1ZSA9PT0gXCI2XCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAvL1RyYW5zcGFyZW5jeTogUmVmcmFjdGlvbiBvbiwgUmVmbGVjdGlvbjogRnJlc25lbCBvZmYgYW5kIFJheSB0cmFjZSBvblxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh2YWx1ZSA9PT0gXCI3XCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAvL1RyYW5zcGFyZW5jeTogUmVmcmFjdGlvbiBvbiwgUmVmbGVjdGlvbjogRnJlc25lbCBvbiBhbmQgUmF5IHRyYWNlIG9uXHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHZhbHVlID09PSBcIjhcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vUmVmbGVjdGlvbiBvbiBhbmQgUmF5IHRyYWNlIG9mZlxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh2YWx1ZSA9PT0gXCI5XCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAvL1RyYW5zcGFyZW5jeTogR2xhc3Mgb24sIFJlZmxlY3Rpb246IFJheSB0cmFjZSBvZmZcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodmFsdWUgPT09IFwiMTBcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vQ2FzdHMgc2hhZG93cyBvbnRvIGludmlzaWJsZSBzdXJmYWNlc1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJVbmhhbmRsZWQgZXhwcmVzc2lvbiBhdCBsaW5lIDogXCIgKyBpICsnXFxuJyArIFwid2l0aCB2YWx1ZSA6IFwiICsgbGluZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLy9BdCB0aGUgZW5kIG9mIHRoZSBmaWxlLCBhZGQgdGhlIGxhc3QgbWF0ZXJpYWxcclxuICAgICAgICBpZiAobWF0ZXJpYWwpIHtcclxuICAgICAgICAgICAgdGhpcy5tYXRlcmlhbHMucHVzaChtYXRlcmlhbCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogR2V0cyB0aGUgdGV4dHVyZSBmb3IgdGhlIG1hdGVyaWFsLlxyXG4gICAgICpcclxuICAgICAqIElmIHRoZSBtYXRlcmlhbCBpcyBpbXBvcnRlZCBmcm9tIGlucHV0IGZpbGUsXHJcbiAgICAgKiBXZSBzYW5pdGl6ZSB0aGUgdXJsIHRvIGVuc3VyZSBpdCB0YWtlcyB0aGUgdGV4dHVyZSBmcm9tIGFzaWRlIHRoZSBtYXRlcmlhbC5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gcm9vdFVybCBUaGUgcm9vdCB1cmwgdG8gbG9hZCBmcm9tXHJcbiAgICAgKiBAcGFyYW0gdmFsdWUgVGhlIHZhbHVlIHN0b3JlZCBpbiB0aGUgbXRsXHJcbiAgICAgKiBAcGFyYW0gc2NlbmVcclxuICAgICAqIEByZXR1cm5zIFRoZSBUZXh0dXJlXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgc3RhdGljIF9HZXRUZXh0dXJlKHJvb3RVcmw6IHN0cmluZywgdmFsdWU6IHN0cmluZywgc2NlbmU6IFNjZW5lKTogTnVsbGFibGU8VGV4dHVyZT4ge1xyXG4gICAgICAgIGlmICghdmFsdWUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgdXJsID0gcm9vdFVybDtcclxuICAgICAgICAvLyBMb2FkIGZyb20gaW5wdXQgZmlsZS5cclxuICAgICAgICBpZiAocm9vdFVybCA9PT0gXCJmaWxlOlwiKSB7XHJcbiAgICAgICAgICAgIGxldCBsYXN0RGVsaW1pdGVyID0gdmFsdWUubGFzdEluZGV4T2YoXCJcXFxcXCIpO1xyXG4gICAgICAgICAgICBpZiAobGFzdERlbGltaXRlciA9PT0gLTEpIHtcclxuICAgICAgICAgICAgICAgIGxhc3REZWxpbWl0ZXIgPSB2YWx1ZS5sYXN0SW5kZXhPZihcIi9cIik7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChsYXN0RGVsaW1pdGVyID4gLTEpIHtcclxuICAgICAgICAgICAgICAgIHVybCArPSB2YWx1ZS5zdWJzdHIobGFzdERlbGltaXRlciArIDEpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdXJsICs9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIE5vdCBmcm9tIGlucHV0IGZpbGUuXHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHVybCArPSB2YWx1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBuZXcgVGV4dHVyZSh1cmwsIHNjZW5lLCBmYWxzZSwgTVRMRmlsZUxvYWRlci5JTlZFUlRfVEVYVFVSRV9ZKTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgdHlwZSB7IE51bGxhYmxlIH0gZnJvbSBcImNvcmUvdHlwZXNcIjtcclxuaW1wb3J0IHsgVmVjdG9yMiB9IGZyb20gXCJjb3JlL01hdGhzL21hdGgudmVjdG9yXCI7XHJcbmltcG9ydCB7IFRvb2xzIH0gZnJvbSBcImNvcmUvTWlzYy90b29sc1wiO1xyXG5pbXBvcnQgdHlwZSB7IEFic3RyYWN0TWVzaCB9IGZyb20gXCJjb3JlL01lc2hlcy9hYnN0cmFjdE1lc2hcIjtcclxuaW1wb3J0IHR5cGUgeyBJU2NlbmVMb2FkZXJQbHVnaW5Bc3luYywgSVNjZW5lTG9hZGVyUGx1Z2luRmFjdG9yeSwgSVNjZW5lTG9hZGVyUGx1Z2luLCBJU2NlbmVMb2FkZXJBc3luY1Jlc3VsdCB9IGZyb20gXCJjb3JlL0xvYWRpbmcvc2NlbmVMb2FkZXJcIjtcclxuaW1wb3J0IHsgU2NlbmVMb2FkZXIgfSBmcm9tIFwiY29yZS9Mb2FkaW5nL3NjZW5lTG9hZGVyXCI7XHJcbmltcG9ydCB7IEFzc2V0Q29udGFpbmVyIH0gZnJvbSBcImNvcmUvYXNzZXRDb250YWluZXJcIjtcclxuaW1wb3J0IHR5cGUgeyBTY2VuZSB9IGZyb20gXCJjb3JlL3NjZW5lXCI7XHJcbmltcG9ydCB0eXBlIHsgV2ViUmVxdWVzdCB9IGZyb20gXCJjb3JlL01pc2Mvd2ViUmVxdWVzdFwiO1xyXG5pbXBvcnQgeyBNVExGaWxlTG9hZGVyIH0gZnJvbSBcIi4vbXRsRmlsZUxvYWRlclwiO1xyXG5pbXBvcnQgdHlwZSB7IE9CSkxvYWRpbmdPcHRpb25zIH0gZnJvbSBcIi4vb2JqTG9hZGluZ09wdGlvbnNcIjtcclxuaW1wb3J0IHsgU29saWRQYXJzZXIgfSBmcm9tIFwiLi9zb2xpZFBhcnNlclwiO1xyXG5pbXBvcnQgdHlwZSB7IE1lc2ggfSBmcm9tIFwiY29yZS9NZXNoZXMvbWVzaFwiO1xyXG5cclxuLyoqXHJcbiAqIE9CSiBmaWxlIHR5cGUgbG9hZGVyLlxyXG4gKiBUaGlzIGlzIGEgYmFieWxvbiBzY2VuZSBsb2FkZXIgcGx1Z2luLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIE9CSkZpbGVMb2FkZXIgaW1wbGVtZW50cyBJU2NlbmVMb2FkZXJQbHVnaW5Bc3luYywgSVNjZW5lTG9hZGVyUGx1Z2luRmFjdG9yeSB7XHJcbiAgICAvKipcclxuICAgICAqIERlZmluZXMgaWYgVVZzIGFyZSBvcHRpbWl6ZWQgYnkgZGVmYXVsdCBkdXJpbmcgbG9hZC5cclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBPUFRJTUlaRV9XSVRIX1VWID0gdHJ1ZTtcclxuICAgIC8qKlxyXG4gICAgICogSW52ZXJ0IG1vZGVsIG9uIHktYXhpcyAoZG9lcyBhIG1vZGVsIHNjYWxpbmcgaW52ZXJzaW9uKVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIElOVkVSVF9ZID0gZmFsc2U7XHJcbiAgICAvKipcclxuICAgICAqIEludmVydCBZLUF4aXMgb2YgcmVmZXJlbmNlZCB0ZXh0dXJlcyBvbiBsb2FkXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IElOVkVSVF9URVhUVVJFX1koKSB7XHJcbiAgICAgICAgcmV0dXJuIE1UTEZpbGVMb2FkZXIuSU5WRVJUX1RFWFRVUkVfWTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIHNldCBJTlZFUlRfVEVYVFVSRV9ZKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICAgICAgTVRMRmlsZUxvYWRlci5JTlZFUlRfVEVYVFVSRV9ZID0gdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBJbmNsdWRlIGluIG1lc2hlcyB0aGUgdmVydGV4IGNvbG9ycyBhdmFpbGFibGUgaW4gc29tZSBPQkogZmlsZXMuICBUaGlzIGlzIG5vdCBwYXJ0IG9mIE9CSiBzdGFuZGFyZC5cclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBJTVBPUlRfVkVSVEVYX0NPTE9SUyA9IGZhbHNlO1xyXG4gICAgLyoqXHJcbiAgICAgKiBDb21wdXRlIHRoZSBub3JtYWxzIGZvciB0aGUgbW9kZWwsIGV2ZW4gaWYgbm9ybWFscyBhcmUgcHJlc2VudCBpbiB0aGUgZmlsZS5cclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBDT01QVVRFX05PUk1BTFMgPSBmYWxzZTtcclxuICAgIC8qKlxyXG4gICAgICogT3B0aW1pemUgdGhlIG5vcm1hbHMgZm9yIHRoZSBtb2RlbC4gTGlnaHRpbmcgY2FuIGJlIHVuZXZlbiBpZiB5b3UgdXNlIE9wdGltaXplV2l0aFVWID0gdHJ1ZSBiZWNhdXNlIG5ldyB2ZXJ0aWNlcyBjYW4gYmUgY3JlYXRlZCBmb3IgdGhlIHNhbWUgbG9jYXRpb24gaWYgdGhleSBwZXJ0YWluIHRvIGRpZmZlcmVudCBmYWNlcy5cclxuICAgICAqIFVzaW5nIE9wdGltaXplaE5vcm1hbHMgPSB0cnVlIHdpbGwgaGVscCBzbW9vdGhpbmcgdGhlIGxpZ2h0aW5nIGJ5IGF2ZXJhZ2luZyB0aGUgbm9ybWFscyBvZiB0aG9zZSB2ZXJ0aWNlcy5cclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBPUFRJTUlaRV9OT1JNQUxTID0gZmFsc2U7XHJcbiAgICAvKipcclxuICAgICAqIERlZmluZXMgY3VzdG9tIHNjYWxpbmcgb2YgVVYgY29vcmRpbmF0ZXMgb2YgbG9hZGVkIG1lc2hlcy5cclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBVVl9TQ0FMSU5HID0gbmV3IFZlY3RvcjIoMSwgMSk7XHJcbiAgICAvKipcclxuICAgICAqIFNraXAgbG9hZGluZyB0aGUgbWF0ZXJpYWxzIGV2ZW4gaWYgZGVmaW5lZCBpbiB0aGUgT0JKIGZpbGUgKG1hdGVyaWFscyBhcmUgaWdub3JlZCkuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgU0tJUF9NQVRFUklBTFMgPSBmYWxzZTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFdoZW4gYSBtYXRlcmlhbCBmYWlscyB0byBsb2FkIE9CSiBsb2FkZXIgd2lsbCBzaWxlbnRseSBmYWlsIGFuZCBvblN1Y2Nlc3MoKSBjYWxsYmFjayB3aWxsIGJlIHRyaWdnZXJlZC5cclxuICAgICAqXHJcbiAgICAgKiBEZWZhdWx0cyB0byB0cnVlIGZvciBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eS5cclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBNQVRFUklBTF9MT0FESU5HX0ZBSUxTX1NJTEVOVExZID0gdHJ1ZTtcclxuICAgIC8qKlxyXG4gICAgICogRGVmaW5lcyB0aGUgbmFtZSBvZiB0aGUgcGx1Z2luLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgbmFtZSA9IFwib2JqXCI7XHJcbiAgICAvKipcclxuICAgICAqIERlZmluZXMgdGhlIGV4dGVuc2lvbiB0aGUgcGx1Z2luIGlzIGFibGUgdG8gbG9hZC5cclxuICAgICAqL1xyXG4gICAgcHVibGljIGV4dGVuc2lvbnMgPSBcIi5vYmpcIjtcclxuXHJcbiAgICBwcml2YXRlIF9hc3NldENvbnRhaW5lcjogTnVsbGFibGU8QXNzZXRDb250YWluZXI+ID0gbnVsbDtcclxuXHJcbiAgICBwcml2YXRlIF9sb2FkaW5nT3B0aW9uczogT0JKTG9hZGluZ09wdGlvbnM7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGVzIGxvYWRlciBmb3IgLk9CSiBmaWxlc1xyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBsb2FkaW5nT3B0aW9ucyBvcHRpb25zIGZvciBsb2FkaW5nIGFuZCBwYXJzaW5nIE9CSi9NVEwgZmlsZXMuXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKGxvYWRpbmdPcHRpb25zPzogT0JKTG9hZGluZ09wdGlvbnMpIHtcclxuICAgICAgICB0aGlzLl9sb2FkaW5nT3B0aW9ucyA9IGxvYWRpbmdPcHRpb25zIHx8IE9CSkZpbGVMb2FkZXIuX0RlZmF1bHRMb2FkaW5nT3B0aW9ucztcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHN0YXRpYyBnZXQgX0RlZmF1bHRMb2FkaW5nT3B0aW9ucygpOiBPQkpMb2FkaW5nT3B0aW9ucyB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgY29tcHV0ZU5vcm1hbHM6IE9CSkZpbGVMb2FkZXIuQ09NUFVURV9OT1JNQUxTLFxyXG4gICAgICAgICAgICBvcHRpbWl6ZU5vcm1hbHM6IE9CSkZpbGVMb2FkZXIuT1BUSU1JWkVfTk9STUFMUyxcclxuICAgICAgICAgICAgaW1wb3J0VmVydGV4Q29sb3JzOiBPQkpGaWxlTG9hZGVyLklNUE9SVF9WRVJURVhfQ09MT1JTLFxyXG4gICAgICAgICAgICBpbnZlcnRZOiBPQkpGaWxlTG9hZGVyLklOVkVSVF9ZLFxyXG4gICAgICAgICAgICBpbnZlcnRUZXh0dXJlWTogT0JKRmlsZUxvYWRlci5JTlZFUlRfVEVYVFVSRV9ZLFxyXG4gICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25hbWluZy1jb252ZW50aW9uXHJcbiAgICAgICAgICAgIFVWU2NhbGluZzogT0JKRmlsZUxvYWRlci5VVl9TQ0FMSU5HLFxyXG4gICAgICAgICAgICBtYXRlcmlhbExvYWRpbmdGYWlsc1NpbGVudGx5OiBPQkpGaWxlTG9hZGVyLk1BVEVSSUFMX0xPQURJTkdfRkFJTFNfU0lMRU5UTFksXHJcbiAgICAgICAgICAgIG9wdGltaXplV2l0aFVWOiBPQkpGaWxlTG9hZGVyLk9QVElNSVpFX1dJVEhfVVYsXHJcbiAgICAgICAgICAgIHNraXBNYXRlcmlhbHM6IE9CSkZpbGVMb2FkZXIuU0tJUF9NQVRFUklBTFMsXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIENhbGxzIHN5bmNocm9ub3VzbHkgdGhlIE1UTCBmaWxlIGF0dGFjaGVkIHRvIHRoaXMgb2JqLlxyXG4gICAgICogTG9hZCBmdW5jdGlvbiBvciBpbXBvcnRNZXNoIGZ1bmN0aW9uIGRvbid0IGVuYWJsZSB0byBsb2FkIDIgZmlsZXMgaW4gdGhlIHNhbWUgdGltZSBhc3luY2hyb25vdXNseS5cclxuICAgICAqIFdpdGhvdXQgdGhpcyBmdW5jdGlvbiBtYXRlcmlhbHMgYXJlIG5vdCBkaXNwbGF5ZWQgaW4gdGhlIGZpcnN0IGZyYW1lIChidXQgZGlzcGxheWVkIGFmdGVyKS5cclxuICAgICAqIEluIGNvbnNlcXVlbmNlIGl0IGlzIGltcG9zc2libGUgdG8gZ2V0IG1hdGVyaWFsIGluZm9ybWF0aW9uIGluIHlvdXIgSFRNTCBmaWxlXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHVybCBUaGUgVVJMIG9mIHRoZSBNVEwgZmlsZVxyXG4gICAgICogQHBhcmFtIHJvb3RVcmwgZGVmaW5lcyB3aGVyZSB0byBsb2FkIGRhdGEgZnJvbVxyXG4gICAgICogQHBhcmFtIG9uU3VjY2VzcyBDYWxsYmFjayBmdW5jdGlvbiB0byBiZSBjYWxsZWQgd2hlbiB0aGUgTVRMIGZpbGUgaXMgbG9hZGVkXHJcbiAgICAgKiBAcGFyYW0gb25GYWlsdXJlXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgX2xvYWRNVEwoXHJcbiAgICAgICAgdXJsOiBzdHJpbmcsXHJcbiAgICAgICAgcm9vdFVybDogc3RyaW5nLFxyXG4gICAgICAgIG9uU3VjY2VzczogKHJlc3BvbnNlOiBzdHJpbmcgfCBBcnJheUJ1ZmZlciwgcmVzcG9uc2VVcmw/OiBzdHJpbmcpID0+IGFueSxcclxuICAgICAgICBvbkZhaWx1cmU6IChwYXRoT2ZGaWxlOiBzdHJpbmcsIGV4Y2VwdGlvbj86IGFueSkgPT4gdm9pZFxyXG4gICAgKSB7XHJcbiAgICAgICAgLy9UaGUgY29tcGxldGUgcGF0aCB0byB0aGUgbXRsIGZpbGVcclxuICAgICAgICBjb25zdCBwYXRoT2ZGaWxlID0gcm9vdFVybCArIHVybDtcclxuXHJcbiAgICAgICAgLy8gTG9hZHMgdGhyb3VnaCB0aGUgYmFieWxvbiB0b29scyB0byBhbGxvdyBmaWxlSW5wdXQgc2VhcmNoLlxyXG4gICAgICAgIFRvb2xzLkxvYWRGaWxlKHBhdGhPZkZpbGUsIG9uU3VjY2VzcywgdW5kZWZpbmVkLCB1bmRlZmluZWQsIGZhbHNlLCAocmVxdWVzdD86IFdlYlJlcXVlc3QgfCB1bmRlZmluZWQsIGV4Y2VwdGlvbj86IGFueSkgPT4ge1xyXG4gICAgICAgICAgICBvbkZhaWx1cmUocGF0aE9mRmlsZSwgZXhjZXB0aW9uKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEluc3RhbnRpYXRlcyBhIE9CSiBmaWxlIGxvYWRlciBwbHVnaW4uXHJcbiAgICAgKiBAcmV0dXJucyB0aGUgY3JlYXRlZCBwbHVnaW5cclxuICAgICAqL1xyXG4gICAgY3JlYXRlUGx1Z2luKCk6IElTY2VuZUxvYWRlclBsdWdpbkFzeW5jIHwgSVNjZW5lTG9hZGVyUGx1Z2luIHtcclxuICAgICAgICByZXR1cm4gbmV3IE9CSkZpbGVMb2FkZXIoT0JKRmlsZUxvYWRlci5fRGVmYXVsdExvYWRpbmdPcHRpb25zKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIElmIHRoZSBkYXRhIHN0cmluZyBjYW4gYmUgbG9hZGVkIGRpcmVjdGx5LlxyXG4gICAgICogQHJldHVybnMgaWYgdGhlIGRhdGEgY2FuIGJlIGxvYWRlZCBkaXJlY3RseVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgY2FuRGlyZWN0TG9hZCgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBJbXBvcnRzIG9uZSBvciBtb3JlIG1lc2hlcyBmcm9tIHRoZSBsb2FkZWQgT0JKIGRhdGEgYW5kIGFkZHMgdGhlbSB0byB0aGUgc2NlbmVcclxuICAgICAqIEBwYXJhbSBtZXNoZXNOYW1lcyBhIHN0cmluZyBvciBhcnJheSBvZiBzdHJpbmdzIG9mIHRoZSBtZXNoIG5hbWVzIHRoYXQgc2hvdWxkIGJlIGxvYWRlZCBmcm9tIHRoZSBmaWxlXHJcbiAgICAgKiBAcGFyYW0gc2NlbmUgdGhlIHNjZW5lIHRoZSBtZXNoZXMgc2hvdWxkIGJlIGFkZGVkIHRvXHJcbiAgICAgKiBAcGFyYW0gZGF0YSB0aGUgT0JKIGRhdGEgdG8gbG9hZFxyXG4gICAgICogQHBhcmFtIHJvb3RVcmwgcm9vdCB1cmwgdG8gbG9hZCBmcm9tXHJcbiAgICAgKiBAcmV0dXJucyBhIHByb21pc2UgY29udGFpbmluZyB0aGUgbG9hZGVkIG1lc2hlcywgcGFydGljbGVzLCBza2VsZXRvbnMgYW5kIGFuaW1hdGlvbnNcclxuICAgICAqL1xyXG4gICAgcHVibGljIGltcG9ydE1lc2hBc3luYyhtZXNoZXNOYW1lczogYW55LCBzY2VuZTogU2NlbmUsIGRhdGE6IGFueSwgcm9vdFVybDogc3RyaW5nKTogUHJvbWlzZTxJU2NlbmVMb2FkZXJBc3luY1Jlc3VsdD4ge1xyXG4gICAgICAgIC8vZ2V0IHRoZSBtZXNoZXMgZnJvbSBPQkogZmlsZVxyXG4gICAgICAgIHJldHVybiB0aGlzLl9wYXJzZVNvbGlkKG1lc2hlc05hbWVzLCBzY2VuZSwgZGF0YSwgcm9vdFVybCkudGhlbigobWVzaGVzKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICBtZXNoZXM6IG1lc2hlcyxcclxuICAgICAgICAgICAgICAgIHBhcnRpY2xlU3lzdGVtczogW10sXHJcbiAgICAgICAgICAgICAgICBza2VsZXRvbnM6IFtdLFxyXG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uR3JvdXBzOiBbXSxcclxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybU5vZGVzOiBbXSxcclxuICAgICAgICAgICAgICAgIGdlb21ldHJpZXM6IFtdLFxyXG4gICAgICAgICAgICAgICAgbGlnaHRzOiBbXSxcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEltcG9ydHMgYWxsIG9iamVjdHMgZnJvbSB0aGUgbG9hZGVkIE9CSiBkYXRhIGFuZCBhZGRzIHRoZW0gdG8gdGhlIHNjZW5lXHJcbiAgICAgKiBAcGFyYW0gc2NlbmUgdGhlIHNjZW5lIHRoZSBvYmplY3RzIHNob3VsZCBiZSBhZGRlZCB0b1xyXG4gICAgICogQHBhcmFtIGRhdGEgdGhlIE9CSiBkYXRhIHRvIGxvYWRcclxuICAgICAqIEBwYXJhbSByb290VXJsIHJvb3QgdXJsIHRvIGxvYWQgZnJvbVxyXG4gICAgICogQHJldHVybnMgYSBwcm9taXNlIHdoaWNoIGNvbXBsZXRlcyB3aGVuIG9iamVjdHMgaGF2ZSBiZWVuIGxvYWRlZCB0byB0aGUgc2NlbmVcclxuICAgICAqL1xyXG4gICAgcHVibGljIGxvYWRBc3luYyhzY2VuZTogU2NlbmUsIGRhdGE6IHN0cmluZywgcm9vdFVybDogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgLy9HZXQgdGhlIDNEIG1vZGVsXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaW1wb3J0TWVzaEFzeW5jKG51bGwsIHNjZW5lLCBkYXRhLCByb290VXJsKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgLy8gcmV0dXJuIHZvaWRcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIExvYWQgaW50byBhbiBhc3NldCBjb250YWluZXIuXHJcbiAgICAgKiBAcGFyYW0gc2NlbmUgVGhlIHNjZW5lIHRvIGxvYWQgaW50b1xyXG4gICAgICogQHBhcmFtIGRhdGEgVGhlIGRhdGEgdG8gaW1wb3J0XHJcbiAgICAgKiBAcGFyYW0gcm9vdFVybCBUaGUgcm9vdCB1cmwgZm9yIHNjZW5lIGFuZCByZXNvdXJjZXNcclxuICAgICAqIEByZXR1cm5zIFRoZSBsb2FkZWQgYXNzZXQgY29udGFpbmVyXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBsb2FkQXNzZXRDb250YWluZXJBc3luYyhzY2VuZTogU2NlbmUsIGRhdGE6IHN0cmluZywgcm9vdFVybDogc3RyaW5nKTogUHJvbWlzZTxBc3NldENvbnRhaW5lcj4ge1xyXG4gICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IG5ldyBBc3NldENvbnRhaW5lcihzY2VuZSk7XHJcbiAgICAgICAgdGhpcy5fYXNzZXRDb250YWluZXIgPSBjb250YWluZXI7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLmltcG9ydE1lc2hBc3luYyhudWxsLCBzY2VuZSwgZGF0YSwgcm9vdFVybClcclxuICAgICAgICAgICAgLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmVzdWx0Lm1lc2hlcy5mb3JFYWNoKChtZXNoKSA9PiBjb250YWluZXIubWVzaGVzLnB1c2gobWVzaCkpO1xyXG4gICAgICAgICAgICAgICAgcmVzdWx0Lm1lc2hlcy5mb3JFYWNoKChtZXNoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbWF0ZXJpYWwgPSBtZXNoLm1hdGVyaWFsO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChtYXRlcmlhbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBNYXRlcmlhbHNcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNvbnRhaW5lci5tYXRlcmlhbHMuaW5kZXhPZihtYXRlcmlhbCkgPT0gLTEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRhaW5lci5tYXRlcmlhbHMucHVzaChtYXRlcmlhbCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gVGV4dHVyZXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRleHR1cmVzID0gbWF0ZXJpYWwuZ2V0QWN0aXZlVGV4dHVyZXMoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHR1cmVzLmZvckVhY2goKHQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoY29udGFpbmVyLnRleHR1cmVzLmluZGV4T2YodCkgPT0gLTEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGFpbmVyLnRleHR1cmVzLnB1c2godCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2Fzc2V0Q29udGFpbmVyID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIHJldHVybiBjb250YWluZXI7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaCgoZXgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2Fzc2V0Q29udGFpbmVyID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIHRocm93IGV4O1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFJlYWQgdGhlIE9CSiBmaWxlIGFuZCBjcmVhdGUgYW4gQXJyYXkgb2YgbWVzaGVzLlxyXG4gICAgICogRWFjaCBtZXNoIGNvbnRhaW5zIGFsbCBpbmZvcm1hdGlvbiBnaXZlbiBieSB0aGUgT0JKIGFuZCB0aGUgTVRMIGZpbGUuXHJcbiAgICAgKiBpLmUuIHZlcnRpY2VzIHBvc2l0aW9ucyBhbmQgaW5kaWNlcywgb3B0aW9uYWwgbm9ybWFscyB2YWx1ZXMsIG9wdGlvbmFsIFVWIHZhbHVlcywgb3B0aW9uYWwgbWF0ZXJpYWxcclxuICAgICAqIEBwYXJhbSBtZXNoZXNOYW1lcyBkZWZpbmVzIGEgc3RyaW5nIG9yIGFycmF5IG9mIHN0cmluZ3Mgb2YgdGhlIG1lc2ggbmFtZXMgdGhhdCBzaG91bGQgYmUgbG9hZGVkIGZyb20gdGhlIGZpbGVcclxuICAgICAqIEBwYXJhbSBzY2VuZSBkZWZpbmVzIHRoZSBzY2VuZSB3aGVyZSBhcmUgZGlzcGxheWVkIHRoZSBkYXRhXHJcbiAgICAgKiBAcGFyYW0gZGF0YSBkZWZpbmVzIHRoZSBjb250ZW50IG9mIHRoZSBvYmogZmlsZVxyXG4gICAgICogQHBhcmFtIHJvb3RVcmwgZGVmaW5lcyB0aGUgcGF0aCB0byB0aGUgZm9sZGVyXHJcbiAgICAgKiBAcmV0dXJucyB0aGUgbGlzdCBvZiBsb2FkZWQgbWVzaGVzXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgX3BhcnNlU29saWQobWVzaGVzTmFtZXM6IGFueSwgc2NlbmU6IFNjZW5lLCBkYXRhOiBzdHJpbmcsIHJvb3RVcmw6IHN0cmluZyk6IFByb21pc2U8QXJyYXk8QWJzdHJhY3RNZXNoPj4ge1xyXG4gICAgICAgIGxldCBmaWxlVG9Mb2FkOiBzdHJpbmcgPSBcIlwiOyAvL1RoZSBuYW1lIG9mIHRoZSBtdGxGaWxlIHRvIGxvYWRcclxuICAgICAgICBjb25zdCBtYXRlcmlhbHNGcm9tTVRMRmlsZTogTVRMRmlsZUxvYWRlciA9IG5ldyBNVExGaWxlTG9hZGVyKCk7XHJcbiAgICAgICAgY29uc3QgbWF0ZXJpYWxUb1VzZTogc3RyaW5nW10gPSBbXTtcclxuICAgICAgICBjb25zdCBiYWJ5bG9uTWVzaGVzQXJyYXk6IEFycmF5PE1lc2g+ID0gW107IC8vVGhlIG1lc2ggZm9yIGJhYnlsb25cclxuXHJcbiAgICAgICAgLy8gTWFpbiBmdW5jdGlvblxyXG4gICAgICAgIGNvbnN0IHNvbGlkUGFyc2VyID0gbmV3IFNvbGlkUGFyc2VyKG1hdGVyaWFsVG9Vc2UsIGJhYnlsb25NZXNoZXNBcnJheSwgdGhpcy5fbG9hZGluZ09wdGlvbnMpO1xyXG5cclxuICAgICAgICBzb2xpZFBhcnNlci5wYXJzZShtZXNoZXNOYW1lcywgZGF0YSwgc2NlbmUsIHRoaXMuX2Fzc2V0Q29udGFpbmVyLCAoZmlsZU5hbWU6IHN0cmluZykgPT4ge1xyXG4gICAgICAgICAgICBmaWxlVG9Mb2FkID0gZmlsZU5hbWU7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIGxvYWQgdGhlIG1hdGVyaWFsc1xyXG4gICAgICAgIGNvbnN0IG10bFByb21pc2VzOiBBcnJheTxQcm9taXNlPHZvaWQ+PiA9IFtdO1xyXG4gICAgICAgIC8vIENoZWNrIGlmIHdlIGhhdmUgYSBmaWxlIHRvIGxvYWRcclxuICAgICAgICBpZiAoZmlsZVRvTG9hZCAhPT0gXCJcIiAmJiAhdGhpcy5fbG9hZGluZ09wdGlvbnMuc2tpcE1hdGVyaWFscykge1xyXG4gICAgICAgICAgICAvL0xvYWQgdGhlIGZpbGUgc3luY2hyb25vdXNseVxyXG4gICAgICAgICAgICBtdGxQcm9taXNlcy5wdXNoKFxyXG4gICAgICAgICAgICAgICAgbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2xvYWRNVEwoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbGVUb0xvYWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvb3RVcmwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIChkYXRhTG9hZGVkKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vQ3JlYXRlIG1hdGVyaWFscyB0aGFua3MgTVRMTG9hZGVyIGZ1bmN0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF0ZXJpYWxzRnJvbU1UTEZpbGUucGFyc2VNVEwoc2NlbmUsIGRhdGFMb2FkZWQsIHJvb3RVcmwsIHRoaXMuX2Fzc2V0Q29udGFpbmVyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL0xvb2sgYXQgZWFjaCBtYXRlcmlhbCBsb2FkZWQgaW4gdGhlIG10bCBmaWxlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgbiA9IDA7IG4gPCBtYXRlcmlhbHNGcm9tTVRMRmlsZS5tYXRlcmlhbHMubGVuZ3RoOyBuKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9UaHJlZSB2YXJpYWJsZXMgdG8gZ2V0IGFsbCBtZXNoZXMgd2l0aCB0aGUgc2FtZSBtYXRlcmlhbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgc3RhcnRJbmRleCA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IF9pbmRpY2VzID0gW107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBfaW5kZXg7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL1RoZSBtYXRlcmlhbCBmcm9tIE1UTCBmaWxlIGlzIHVzZWQgaW4gdGhlIG1lc2hlcyBsb2FkZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9QdXNoIHRoZSBpbmRpY2UgaW4gYW4gYXJyYXlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9DaGVjayBpZiB0aGUgbWF0ZXJpYWwgaXMgbm90IHVzZWQgZm9yIGFub3RoZXIgbWVzaFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aGlsZSAoKF9pbmRleCA9IG1hdGVyaWFsVG9Vc2UuaW5kZXhPZihtYXRlcmlhbHNGcm9tTVRMRmlsZS5tYXRlcmlhbHNbbl0ubmFtZSwgc3RhcnRJbmRleCkpID4gLTEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9pbmRpY2VzLnB1c2goX2luZGV4KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0SW5kZXggPSBfaW5kZXggKyAxO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vSWYgdGhlIG1hdGVyaWFsIGlzIG5vdCB1c2VkIGRpc3Bvc2UgaXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKF9pbmRleCA9PT0gLTEgJiYgX2luZGljZXMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL0lmIHRoZSBtYXRlcmlhbCBpcyBub3QgbmVlZGVkLCByZW1vdmUgaXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hdGVyaWFsc0Zyb21NVExGaWxlLm1hdGVyaWFsc1tuXS5kaXNwb3NlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBvID0gMDsgbyA8IF9pbmRpY2VzLmxlbmd0aDsgbysrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9BcHBseSB0aGUgbWF0ZXJpYWwgdG8gdGhlIE1lc2ggZm9yIGVhY2ggbWVzaCB3aXRoIHRoZSBtYXRlcmlhbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG1lc2ggPSBiYWJ5bG9uTWVzaGVzQXJyYXlbX2luZGljZXNbb11dO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG1hdGVyaWFsID0gbWF0ZXJpYWxzRnJvbU1UTEZpbGUubWF0ZXJpYWxzW25dO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc2gubWF0ZXJpYWwgPSBtYXRlcmlhbDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFtZXNoLmdldFRvdGFsSW5kaWNlcygpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIE5vIGluZGljZXMsIHdlIG5lZWQgdG8gdHVybiBvbiBwb2ludCBjbG91ZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXRlcmlhbC5wb2ludHNDbG91ZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBUb29scy5XYXJuKGBFcnJvciBwcm9jZXNzaW5nIE1UTCBmaWxlOiAnJHtmaWxlVG9Mb2FkfSdgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5fbG9hZGluZ09wdGlvbnMubWF0ZXJpYWxMb2FkaW5nRmFpbHNTaWxlbnRseSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgKHBhdGhPZkZpbGU6IHN0cmluZywgZXhjZXB0aW9uPzogYW55KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBUb29scy5XYXJuKGBFcnJvciBkb3dubG9hZGluZyBNVEwgZmlsZTogJyR7ZmlsZVRvTG9hZH0nYCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5fbG9hZGluZ09wdGlvbnMubWF0ZXJpYWxMb2FkaW5nRmFpbHNTaWxlbnRseSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGV4Y2VwdGlvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy9SZXR1cm4gYW4gYXJyYXkgd2l0aCBhbGwgTWVzaFxyXG4gICAgICAgIHJldHVybiBQcm9taXNlLmFsbChtdGxQcm9taXNlcykudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBiYWJ5bG9uTWVzaGVzQXJyYXk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmlmIChTY2VuZUxvYWRlcikge1xyXG4gICAgLy9BZGQgdGhpcyBsb2FkZXIgaW50byB0aGUgcmVnaXN0ZXIgcGx1Z2luXHJcbiAgICBTY2VuZUxvYWRlci5SZWdpc3RlclBsdWdpbihuZXcgT0JKRmlsZUxvYWRlcigpKTtcclxufVxyXG4iLCJpbXBvcnQgdHlwZSB7IEFzc2V0Q29udGFpbmVyIH0gZnJvbSBcImNvcmUvYXNzZXRDb250YWluZXJcIjtcclxuaW1wb3J0IHsgVmVydGV4QnVmZmVyIH0gZnJvbSBcImNvcmUvQnVmZmVycy9idWZmZXJcIjtcclxuaW1wb3J0IHR5cGUgeyBNYXRlcmlhbCB9IGZyb20gXCJjb3JlL01hdGVyaWFscy9tYXRlcmlhbFwiO1xyXG5pbXBvcnQgeyBTdGFuZGFyZE1hdGVyaWFsIH0gZnJvbSBcImNvcmUvTWF0ZXJpYWxzL3N0YW5kYXJkTWF0ZXJpYWxcIjtcclxuaW1wb3J0IHsgQ29sb3IzLCBDb2xvcjQgfSBmcm9tIFwiY29yZS9NYXRocy9tYXRoLmNvbG9yXCI7XHJcbmltcG9ydCB7IFZlY3RvcjIsIFZlY3RvcjMgfSBmcm9tIFwiY29yZS9NYXRocy9tYXRoLnZlY3RvclwiO1xyXG5pbXBvcnQgdHlwZSB7IEFic3RyYWN0TWVzaCB9IGZyb20gXCJjb3JlL01lc2hlcy9hYnN0cmFjdE1lc2hcIjtcclxuaW1wb3J0IHsgR2VvbWV0cnkgfSBmcm9tIFwiY29yZS9NZXNoZXMvZ2VvbWV0cnlcIjtcclxuaW1wb3J0IHsgTWVzaCB9IGZyb20gXCJjb3JlL01lc2hlcy9tZXNoXCI7XHJcbmltcG9ydCB7IFZlcnRleERhdGEgfSBmcm9tIFwiY29yZS9NZXNoZXMvbWVzaC52ZXJ0ZXhEYXRhXCI7XHJcbmltcG9ydCB0eXBlIHsgU2NlbmUgfSBmcm9tIFwiY29yZS9zY2VuZVwiO1xyXG5pbXBvcnQgdHlwZSB7IEZsb2F0QXJyYXksIEluZGljZXNBcnJheSwgTnVsbGFibGUgfSBmcm9tIFwiY29yZS90eXBlc1wiO1xyXG5pbXBvcnQgdHlwZSB7IE9CSkxvYWRpbmdPcHRpb25zIH0gZnJvbSBcIi4vb2JqTG9hZGluZ09wdGlvbnNcIjtcclxuXHJcbnR5cGUgTWVzaE9iamVjdCA9IHtcclxuICAgIG5hbWU6IHN0cmluZztcclxuICAgIGluZGljZXM/OiBBcnJheTxudW1iZXI+O1xyXG4gICAgcG9zaXRpb25zPzogQXJyYXk8bnVtYmVyPjtcclxuICAgIG5vcm1hbHM/OiBBcnJheTxudW1iZXI+O1xyXG4gICAgY29sb3JzPzogQXJyYXk8bnVtYmVyPjtcclxuICAgIHV2cz86IEFycmF5PG51bWJlcj47XHJcbiAgICBtYXRlcmlhbE5hbWU6IHN0cmluZztcclxuICAgIGRpcmVjdE1hdGVyaWFsPzogTnVsbGFibGU8TWF0ZXJpYWw+O1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIENsYXNzIHVzZWQgdG8gbG9hZCBtZXNoIGRhdGEgZnJvbSBPQkogY29udGVudFxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIFNvbGlkUGFyc2VyIHtcclxuICAgIC8vIERlc2NyaXB0b3JcclxuICAgIC8qKiBPYmplY3QgZGVzY3JpcHRvciAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBPYmplY3REZXNjcmlwdG9yID0gL15vLztcclxuICAgIC8qKiBHcm91cCBkZXNjcmlwdG9yICovXHJcbiAgICBwdWJsaWMgc3RhdGljIEdyb3VwRGVzY3JpcHRvciA9IC9eZy87XHJcbiAgICAvKiogTWF0ZXJpYWwgbGliIGRlc2NyaXB0b3IgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgTXRsTGliR3JvdXBEZXNjcmlwdG9yID0gL15tdGxsaWIgLztcclxuICAgIC8qKiBVc2UgYSBtYXRlcmlhbCBkZXNjcmlwdG9yICovXHJcbiAgICBwdWJsaWMgc3RhdGljIFVzZU10bERlc2NyaXB0b3IgPSAvXnVzZW10bCAvO1xyXG4gICAgLyoqIFNtb290aCBkZXNjcmlwdG9yICovXHJcbiAgICBwdWJsaWMgc3RhdGljIFNtb290aERlc2NyaXB0b3IgPSAvXnMgLztcclxuXHJcbiAgICAvLyBQYXR0ZXJuc1xyXG4gICAgLyoqIFBhdHRlcm4gdXNlZCB0byBkZXRlY3QgYSB2ZXJ0ZXggKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgVmVydGV4UGF0dGVybiA9IC9edihcXHMrW1xcZHwufCt8XFwtfGV8RV0rKXszLDd9LztcclxuICAgIC8qKiBQYXR0ZXJuIHVzZWQgdG8gZGV0ZWN0IGEgbm9ybWFsICovXHJcbiAgICBwdWJsaWMgc3RhdGljIE5vcm1hbFBhdHRlcm4gPSAvXnZuKFxccytbXFxkfC58K3xcXC18ZXxFXSspKCArW1xcZHwufCt8XFwtfGV8RV0rKSggK1tcXGR8LnwrfFxcLXxlfEVdKykvO1xyXG4gICAgLyoqIFBhdHRlcm4gdXNlZCB0byBkZXRlY3QgYSBVViBzZXQgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgVVZQYXR0ZXJuID0gL152dChcXHMrW1xcZHwufCt8XFwtfGV8RV0rKSggK1tcXGR8LnwrfFxcLXxlfEVdKykvO1xyXG4gICAgLyoqIFBhdHRlcm4gdXNlZCB0byBkZXRlY3QgYSBmaXJzdCBraW5kIG9mIGZhY2UgKGYgdmVydGV4IHZlcnRleCB2ZXJ0ZXgpICovXHJcbiAgICBwdWJsaWMgc3RhdGljIEZhY2VQYXR0ZXJuMSA9IC9eZlxccysoKFtcXGRdezEsfVtcXHNdPyl7Myx9KSsvO1xyXG4gICAgLyoqIFBhdHRlcm4gdXNlZCB0byBkZXRlY3QgYSBzZWNvbmQga2luZCBvZiBmYWNlIChmIHZlcnRleC91dnMgdmVydGV4L3V2cyB2ZXJ0ZXgvdXZzKSAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBGYWNlUGF0dGVybjIgPSAvXmZcXHMrKCgoW1xcZF17MSx9XFwvW1xcZF17MSx9W1xcc10/KXszLH0pKykvO1xyXG4gICAgLyoqIFBhdHRlcm4gdXNlZCB0byBkZXRlY3QgYSB0aGlyZCBraW5kIG9mIGZhY2UgKGYgdmVydGV4L3V2cy9ub3JtYWwgdmVydGV4L3V2cy9ub3JtYWwgdmVydGV4L3V2cy9ub3JtYWwpICovXHJcbiAgICBwdWJsaWMgc3RhdGljIEZhY2VQYXR0ZXJuMyA9IC9eZlxccysoKChbXFxkXXsxLH1cXC9bXFxkXXsxLH1cXC9bXFxkXXsxLH1bXFxzXT8pezMsfSkrKS87XHJcbiAgICAvKiogUGF0dGVybiB1c2VkIHRvIGRldGVjdCBhIGZvdXJ0aCBraW5kIG9mIGZhY2UgKGYgdmVydGV4Ly9ub3JtYWwgdmVydGV4Ly9ub3JtYWwgdmVydGV4Ly9ub3JtYWwpKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgRmFjZVBhdHRlcm40ID0gL15mXFxzKygoKFtcXGRdezEsfVxcL1xcL1tcXGRdezEsfVtcXHNdPyl7Myx9KSspLztcclxuICAgIC8qKiBQYXR0ZXJuIHVzZWQgdG8gZGV0ZWN0IGEgZmlmdGgga2luZCBvZiBmYWNlIChmIC12ZXJ0ZXgvLXV2cy8tbm9ybWFsIC12ZXJ0ZXgvLXV2cy8tbm9ybWFsIC12ZXJ0ZXgvLXV2cy8tbm9ybWFsKSAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBGYWNlUGF0dGVybjUgPSAvXmZcXHMrKCgoLVtcXGRdezEsfVxcLy1bXFxkXXsxLH1cXC8tW1xcZF17MSx9W1xcc10/KXszLH0pKykvO1xyXG4gICAgLyoqIFBhdHRlcm4gdXNlZCB0byBkZXRlY3QgYSBsaW5lKGwgdmVydGV4IHZlcnRleCkgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgTGluZVBhdHRlcm4xID0gL15sXFxzKygoW1xcZF17MSx9W1xcc10/KXsyLH0pKy87XHJcbiAgICAvKiogUGF0dGVybiB1c2VkIHRvIGRldGVjdCBhIHNlY29uZCBraW5kIG9mIGxpbmUgKGwgdmVydGV4L3V2cyB2ZXJ0ZXgvdXZzKSAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBMaW5lUGF0dGVybjIgPSAvXmxcXHMrKCgoW1xcZF17MSx9XFwvW1xcZF17MSx9W1xcc10/KXsyLH0pKykvO1xyXG4gICAgLyoqIFBhdHRlcm4gdXNlZCB0byBkZXRlY3QgYSB0aGlyZCBraW5kIG9mIGxpbmUgKGwgdmVydGV4L3V2cy9ub3JtYWwgdmVydGV4L3V2cy9ub3JtYWwpICovXHJcbiAgICBwdWJsaWMgc3RhdGljIExpbmVQYXR0ZXJuMyA9IC9ebFxccysoKChbXFxkXXsxLH1cXC9bXFxkXXsxLH1cXC9bXFxkXXsxLH1bXFxzXT8pezIsfSkrKS87XHJcblxyXG4gICAgcHJpdmF0ZSBfbG9hZGluZ09wdGlvbnM6IE9CSkxvYWRpbmdPcHRpb25zO1xyXG4gICAgcHJpdmF0ZSBfcG9zaXRpb25zOiBBcnJheTxWZWN0b3IzPiA9IFtdOyAvL3ZhbHVlcyBmb3IgdGhlIHBvc2l0aW9ucyBvZiB2ZXJ0aWNlc1xyXG4gICAgcHJpdmF0ZSBfbm9ybWFsczogQXJyYXk8VmVjdG9yMz4gPSBbXTsgLy9WYWx1ZXMgZm9yIHRoZSBub3JtYWxzXHJcbiAgICBwcml2YXRlIF91dnM6IEFycmF5PFZlY3RvcjI+ID0gW107IC8vVmFsdWVzIGZvciB0aGUgdGV4dHVyZXNcclxuICAgIHByaXZhdGUgX2NvbG9yczogQXJyYXk8Q29sb3I0PiA9IFtdO1xyXG4gICAgcHJpdmF0ZSBfbWVzaGVzRnJvbU9iajogQXJyYXk8TWVzaE9iamVjdD4gPSBbXTsgLy9bbWVzaF0gQ29udGFpbnMgYWxsIHRoZSBvYmogbWVzaGVzXHJcbiAgICBwcml2YXRlIF9oYW5kbGVkTWVzaDogTWVzaE9iamVjdDsgLy9UaGUgY3VycmVudCBtZXNoIG9mIG1lc2hlcyBhcnJheVxyXG4gICAgcHJpdmF0ZSBfaW5kaWNlc0ZvckJhYnlsb246IEFycmF5PG51bWJlcj4gPSBbXTsgLy9UaGUgbGlzdCBvZiBpbmRpY2VzIGZvciBWZXJ0ZXhEYXRhXHJcbiAgICBwcml2YXRlIF93cmFwcGVkUG9zaXRpb25Gb3JCYWJ5bG9uOiBBcnJheTxWZWN0b3IzPiA9IFtdOyAvL1RoZSBsaXN0IG9mIHBvc2l0aW9uIGluIHZlY3RvcnNcclxuICAgIHByaXZhdGUgX3dyYXBwZWRVdnNGb3JCYWJ5bG9uOiBBcnJheTxWZWN0b3IyPiA9IFtdOyAvL0FycmF5IHdpdGggYWxsIHZhbHVlIG9mIHV2cyB0byBtYXRjaCB3aXRoIHRoZSBpbmRpY2VzXHJcbiAgICBwcml2YXRlIF93cmFwcGVkQ29sb3JzRm9yQmFieWxvbjogQXJyYXk8Q29sb3I0PiA9IFtdOyAvLyBBcnJheSB3aXRoIGFsbCBjb2xvciB2YWx1ZXMgdG8gbWF0Y2ggd2l0aCB0aGUgaW5kaWNlc1xyXG4gICAgcHJpdmF0ZSBfd3JhcHBlZE5vcm1hbHNGb3JCYWJ5bG9uOiBBcnJheTxWZWN0b3IzPiA9IFtdOyAvL0FycmF5IHdpdGggYWxsIHZhbHVlIG9mIG5vcm1hbHMgdG8gbWF0Y2ggd2l0aCB0aGUgaW5kaWNlc1xyXG4gICAgcHJpdmF0ZSBfdHVwbGVQb3NOb3JtOiBBcnJheTx7IG5vcm1hbHM6IEFycmF5PG51bWJlcj47IGlkeDogQXJyYXk8bnVtYmVyPjsgdXY6IEFycmF5PG51bWJlcj4gfT4gPSBbXTsgLy9DcmVhdGUgYSB0dXBsZSB3aXRoIGluZGljZSBvZiBQb3NpdGlvbiwgTm9ybWFsLCBVViAgW3Bvcywgbm9ybSwgdXZzXVxyXG4gICAgcHJpdmF0ZSBfY3VyUG9zaXRpb25JbkluZGljZXMgPSAwO1xyXG4gICAgcHJpdmF0ZSBfaGFzTWVzaGVzOiBCb29sZWFuID0gZmFsc2U7IC8vTWVzaGVzIGFyZSBkZWZpbmVkIGluIHRoZSBmaWxlXHJcbiAgICBwcml2YXRlIF91bndyYXBwZWRQb3NpdGlvbnNGb3JCYWJ5bG9uOiBBcnJheTxudW1iZXI+ID0gW107IC8vVmFsdWUgb2YgcG9zaXRpb25Gb3JCYWJ5bG9uIHcvbyBWZWN0b3IzKCkgW3gseSx6XVxyXG4gICAgcHJpdmF0ZSBfdW53cmFwcGVkQ29sb3JzRm9yQmFieWxvbjogQXJyYXk8bnVtYmVyPiA9IFtdOyAvLyBWYWx1ZSBvZiBjb2xvckZvckJhYnlsb24gdy9vIENvbG9yNCgpIFtyLGcsYixhXVxyXG4gICAgcHJpdmF0ZSBfdW53cmFwcGVkTm9ybWFsc0ZvckJhYnlsb246IEFycmF5PG51bWJlcj4gPSBbXTsgLy9WYWx1ZSBvZiBub3JtYWxzRm9yQmFieWxvbiB3L28gVmVjdG9yMygpICBbeCx5LHpdXHJcbiAgICBwcml2YXRlIF91bndyYXBwZWRVVkZvckJhYnlsb246IEFycmF5PG51bWJlcj4gPSBbXTsgLy9WYWx1ZSBvZiB1dnNGb3JCYWJ5bG9uIHcvbyBWZWN0b3IzKCkgICAgICBbeCx5LHpdXHJcbiAgICBwcml2YXRlIF90cmlhbmdsZXM6IEFycmF5PHN0cmluZz4gPSBbXTsgLy9JbmRpY2VzIGZyb20gbmV3IHRyaWFuZ2xlcyBjb21pbmcgZnJvbSBwb2x5Z29uc1xyXG4gICAgcHJpdmF0ZSBfbWF0ZXJpYWxOYW1lRnJvbU9iajogc3RyaW5nID0gXCJcIjsgLy9UaGUgbmFtZSBvZiB0aGUgY3VycmVudCBtYXRlcmlhbFxyXG4gICAgcHJpdmF0ZSBfb2JqTWVzaE5hbWU6IHN0cmluZyA9IFwiXCI7IC8vVGhlIG5hbWUgb2YgdGhlIGN1cnJlbnQgb2JqIG1lc2hcclxuICAgIHByaXZhdGUgX2luY3JlbWVudDogbnVtYmVyID0gMTsgLy9JZCBmb3IgbWVzaGVzIGNyZWF0ZWQgYnkgdGhlIG11bHRpbWF0ZXJpYWxcclxuICAgIHByaXZhdGUgX2lzRmlyc3RNYXRlcmlhbDogYm9vbGVhbiA9IHRydWU7XHJcbiAgICBwcml2YXRlIF9ncmF5Q29sb3IgPSBuZXcgQ29sb3I0KDAuNSwgMC41LCAwLjUsIDEpO1xyXG4gICAgcHJpdmF0ZSBfbWF0ZXJpYWxUb1VzZTogc3RyaW5nW107XHJcbiAgICBwcml2YXRlIF9iYWJ5bG9uTWVzaGVzQXJyYXk6IEFycmF5PE1lc2g+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlcyBhIG5ldyBTb2xpZFBhcnNlclxyXG4gICAgICogQHBhcmFtIG1hdGVyaWFsVG9Vc2UgZGVmaW5lcyB0aGUgYXJyYXkgdG8gZmlsbCB3aXRoIHRoZSBsaXN0IG9mIG1hdGVyaWFscyB0byB1c2UgKGl0IHdpbGwgYmUgZmlsbGVkIGJ5IHRoZSBwYXJzZSBmdW5jdGlvbilcclxuICAgICAqIEBwYXJhbSBiYWJ5bG9uTWVzaGVzQXJyYXkgZGVmaW5lcyB0aGUgYXJyYXkgdG8gZmlsbCB3aXRoIHRoZSBsaXN0IG9mIGxvYWRlZCBtZXNoZXMgKGl0IHdpbGwgYmUgZmlsbGVkIGJ5IHRoZSBwYXJzZSBmdW5jdGlvbilcclxuICAgICAqIEBwYXJhbSBsb2FkaW5nT3B0aW9ucyBkZWZpbmVzIHRoZSBsb2FkaW5nIG9wdGlvbnMgdG8gdXNlXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcihtYXRlcmlhbFRvVXNlOiBzdHJpbmdbXSwgYmFieWxvbk1lc2hlc0FycmF5OiBBcnJheTxNZXNoPiwgbG9hZGluZ09wdGlvbnM6IE9CSkxvYWRpbmdPcHRpb25zKSB7XHJcbiAgICAgICAgdGhpcy5fbWF0ZXJpYWxUb1VzZSA9IG1hdGVyaWFsVG9Vc2U7XHJcbiAgICAgICAgdGhpcy5fYmFieWxvbk1lc2hlc0FycmF5ID0gYmFieWxvbk1lc2hlc0FycmF5O1xyXG4gICAgICAgIHRoaXMuX2xvYWRpbmdPcHRpb25zID0gbG9hZGluZ09wdGlvbnM7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTZWFyY2ggZm9yIG9iaiBpbiB0aGUgZ2l2ZW4gYXJyYXkuXHJcbiAgICAgKiBUaGlzIGZ1bmN0aW9uIGlzIGNhbGxlZCB0byBjaGVjayBpZiBhIGNvdXBsZSBvZiBkYXRhIGFscmVhZHkgZXhpc3RzIGluIGFuIGFycmF5LlxyXG4gICAgICpcclxuICAgICAqIElmIGZvdW5kLCByZXR1cm5zIHRoZSBpbmRleCBvZiB0aGUgZm91bmRlZCB0dXBsZSBpbmRleC4gUmV0dXJucyAtMSBpZiBub3QgZm91bmRcclxuICAgICAqIEBwYXJhbSBhcnIgQXJyYXk8eyBub3JtYWxzOiBBcnJheTxudW1iZXI+LCBpZHg6IEFycmF5PG51bWJlcj4gfT5cclxuICAgICAqIEBwYXJhbSBvYmogQXJyYXk8bnVtYmVyPlxyXG4gICAgICogQHJldHVybnMge2Jvb2xlYW59XHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgX2lzSW5BcnJheShhcnI6IEFycmF5PHsgbm9ybWFsczogQXJyYXk8bnVtYmVyPjsgaWR4OiBBcnJheTxudW1iZXI+IH0+LCBvYmo6IEFycmF5PG51bWJlcj4pIHtcclxuICAgICAgICBpZiAoIWFycltvYmpbMF1dKSB7XHJcbiAgICAgICAgICAgIGFycltvYmpbMF1dID0geyBub3JtYWxzOiBbXSwgaWR4OiBbXSB9O1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBpZHggPSBhcnJbb2JqWzBdXS5ub3JtYWxzLmluZGV4T2Yob2JqWzFdKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGlkeCA9PT0gLTEgPyAtMSA6IGFycltvYmpbMF1dLmlkeFtpZHhdO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2lzSW5BcnJheVVWKGFycjogQXJyYXk8eyBub3JtYWxzOiBBcnJheTxudW1iZXI+OyBpZHg6IEFycmF5PG51bWJlcj47IHV2OiBBcnJheTxudW1iZXI+IH0+LCBvYmo6IEFycmF5PG51bWJlcj4pIHtcclxuICAgICAgICBpZiAoIWFycltvYmpbMF1dKSB7XHJcbiAgICAgICAgICAgIGFycltvYmpbMF1dID0geyBub3JtYWxzOiBbXSwgaWR4OiBbXSwgdXY6IFtdIH07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGlkeCA9IGFycltvYmpbMF1dLm5vcm1hbHMuaW5kZXhPZihvYmpbMV0pO1xyXG5cclxuICAgICAgICBpZiAoaWR4ICE9IDEgJiYgb2JqWzJdID09PSBhcnJbb2JqWzBdXS51dltpZHhdKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBhcnJbb2JqWzBdXS5pZHhbaWR4XTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIC0xO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhpcyBmdW5jdGlvbiBzZXQgdGhlIGRhdGEgZm9yIGVhY2ggdHJpYW5nbGUuXHJcbiAgICAgKiBEYXRhIGFyZSBwb3NpdGlvbiwgbm9ybWFscyBhbmQgdXZzXHJcbiAgICAgKiBJZiBhIHR1cGxlIG9mIChwb3NpdGlvbiwgbm9ybWFsKSBpcyBub3Qgc2V0LCBhZGQgdGhlIGRhdGEgaW50byB0aGUgY29ycmVzcG9uZGluZyBhcnJheVxyXG4gICAgICogSWYgdGhlIHR1cGxlIGFscmVhZHkgZXhpc3QsIGFkZCBvbmx5IHRoZWlyIGluZGljZVxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBpbmRpY2VQb3NpdGlvbkZyb21PYmogSW50ZWdlciBUaGUgaW5kZXggaW4gcG9zaXRpb25zIGFycmF5XHJcbiAgICAgKiBAcGFyYW0gaW5kaWNlVXZzRnJvbU9iaiBJbnRlZ2VyIFRoZSBpbmRleCBpbiB1dnMgYXJyYXlcclxuICAgICAqIEBwYXJhbSBpbmRpY2VOb3JtYWxGcm9tT2JqIEludGVnZXIgVGhlIGluZGV4IGluIG5vcm1hbHMgYXJyYXlcclxuICAgICAqIEBwYXJhbSBwb3NpdGlvblZlY3RvckZyb21PQkogVmVjdG9yMyBUaGUgdmFsdWUgb2YgcG9zaXRpb24gYXQgaW5kZXggb2JqSW5kaWNlXHJcbiAgICAgKiBAcGFyYW0gdGV4dHVyZVZlY3RvckZyb21PQkogVmVjdG9yMyBUaGUgdmFsdWUgb2YgdXZzXHJcbiAgICAgKiBAcGFyYW0gbm9ybWFsc1ZlY3RvckZyb21PQkogVmVjdG9yMyBUaGUgdmFsdWUgb2Ygbm9ybWFscyBhdCBpbmRleCBvYmpOb3JtYWxlXHJcbiAgICAgKiBAcGFyYW0gcG9zaXRpb25Db2xvcnNGcm9tT0JKXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgX3NldERhdGEoXHJcbiAgICAgICAgaW5kaWNlUG9zaXRpb25Gcm9tT2JqOiBudW1iZXIsXHJcbiAgICAgICAgaW5kaWNlVXZzRnJvbU9iajogbnVtYmVyLFxyXG4gICAgICAgIGluZGljZU5vcm1hbEZyb21PYmo6IG51bWJlcixcclxuICAgICAgICBwb3NpdGlvblZlY3RvckZyb21PQko6IFZlY3RvcjMsXHJcbiAgICAgICAgdGV4dHVyZVZlY3RvckZyb21PQko6IFZlY3RvcjIsXHJcbiAgICAgICAgbm9ybWFsc1ZlY3RvckZyb21PQko6IFZlY3RvcjMsXHJcbiAgICAgICAgcG9zaXRpb25Db2xvcnNGcm9tT0JKPzogQ29sb3I0XHJcbiAgICApIHtcclxuICAgICAgICAvL0NoZWNrIGlmIHRoaXMgdHVwbGUgYWxyZWFkeSBleGlzdHMgaW4gdGhlIGxpc3Qgb2YgdHVwbGVzXHJcbiAgICAgICAgbGV0IF9pbmRleDogbnVtYmVyO1xyXG4gICAgICAgIGlmICh0aGlzLl9sb2FkaW5nT3B0aW9ucy5vcHRpbWl6ZVdpdGhVVikge1xyXG4gICAgICAgICAgICBfaW5kZXggPSB0aGlzLl9pc0luQXJyYXlVVih0aGlzLl90dXBsZVBvc05vcm0sIFtpbmRpY2VQb3NpdGlvbkZyb21PYmosIGluZGljZU5vcm1hbEZyb21PYmosIGluZGljZVV2c0Zyb21PYmpdKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBfaW5kZXggPSB0aGlzLl9pc0luQXJyYXkodGhpcy5fdHVwbGVQb3NOb3JtLCBbaW5kaWNlUG9zaXRpb25Gcm9tT2JqLCBpbmRpY2VOb3JtYWxGcm9tT2JqXSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvL0lmIGl0IG5vdCBleGlzdHNcclxuICAgICAgICBpZiAoX2luZGV4ID09PSAtMSkge1xyXG4gICAgICAgICAgICAvL0FkZCBhbiBuZXcgaW5kaWNlLlxyXG4gICAgICAgICAgICAvL1RoZSBhcnJheSBvZiBpbmRpY2VzIGlzIG9ubHkgYW4gYXJyYXkgd2l0aCBoaXMgbGVuZ3RoIGVxdWFsIHRvIHRoZSBudW1iZXIgb2YgdHJpYW5nbGVzIC0gMS5cclxuICAgICAgICAgICAgLy9XZSBhZGQgdmVydGljZXMgZGF0YSBpbiB0aGlzIG9yZGVyXHJcbiAgICAgICAgICAgIHRoaXMuX2luZGljZXNGb3JCYWJ5bG9uLnB1c2godGhpcy5fd3JhcHBlZFBvc2l0aW9uRm9yQmFieWxvbi5sZW5ndGgpO1xyXG4gICAgICAgICAgICAvL1B1c2ggdGhlIHBvc2l0aW9uIG9mIHZlcnRpY2UgZm9yIEJhYnlsb25cclxuICAgICAgICAgICAgLy9FYWNoIGVsZW1lbnQgaXMgYSBWZWN0b3IzKHgseSx6KVxyXG4gICAgICAgICAgICB0aGlzLl93cmFwcGVkUG9zaXRpb25Gb3JCYWJ5bG9uLnB1c2gocG9zaXRpb25WZWN0b3JGcm9tT0JKKTtcclxuICAgICAgICAgICAgLy9QdXNoIHRoZSB1dnMgZm9yIEJhYnlsb25cclxuICAgICAgICAgICAgLy9FYWNoIGVsZW1lbnQgaXMgYSBWZWN0b3IzKHUsdilcclxuICAgICAgICAgICAgdGhpcy5fd3JhcHBlZFV2c0ZvckJhYnlsb24ucHVzaCh0ZXh0dXJlVmVjdG9yRnJvbU9CSik7XHJcbiAgICAgICAgICAgIC8vUHVzaCB0aGUgbm9ybWFscyBmb3IgQmFieWxvblxyXG4gICAgICAgICAgICAvL0VhY2ggZWxlbWVudCBpcyBhIFZlY3RvcjMoeCx5LHopXHJcbiAgICAgICAgICAgIHRoaXMuX3dyYXBwZWROb3JtYWxzRm9yQmFieWxvbi5wdXNoKG5vcm1hbHNWZWN0b3JGcm9tT0JKKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChwb3NpdGlvbkNvbG9yc0Zyb21PQkogIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgLy9QdXNoIHRoZSBjb2xvcnMgZm9yIEJhYnlsb25cclxuICAgICAgICAgICAgICAgIC8vRWFjaCBlbGVtZW50IGlzIGEgQkFCWUxPTi5Db2xvcjQocixnLGIsYSlcclxuICAgICAgICAgICAgICAgIHRoaXMuX3dyYXBwZWRDb2xvcnNGb3JCYWJ5bG9uLnB1c2gocG9zaXRpb25Db2xvcnNGcm9tT0JKKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy9BZGQgdGhlIHR1cGxlIGluIHRoZSBjb21wYXJpc29uIGxpc3RcclxuICAgICAgICAgICAgdGhpcy5fdHVwbGVQb3NOb3JtW2luZGljZVBvc2l0aW9uRnJvbU9ial0ubm9ybWFscy5wdXNoKGluZGljZU5vcm1hbEZyb21PYmopO1xyXG4gICAgICAgICAgICB0aGlzLl90dXBsZVBvc05vcm1baW5kaWNlUG9zaXRpb25Gcm9tT2JqXS5pZHgucHVzaCh0aGlzLl9jdXJQb3NpdGlvbkluSW5kaWNlcysrKTtcclxuICAgICAgICAgICAgaWYgKHRoaXMuX2xvYWRpbmdPcHRpb25zLm9wdGltaXplV2l0aFVWKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl90dXBsZVBvc05vcm1baW5kaWNlUG9zaXRpb25Gcm9tT2JqXS51di5wdXNoKGluZGljZVV2c0Zyb21PYmopO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgLy9UaGUgdHVwbGUgYWxyZWFkeSBleGlzdHNcclxuICAgICAgICAgICAgLy9BZGQgdGhlIGluZGV4IG9mIHRoZSBhbHJlYWR5IGV4aXN0aW5nIHR1cGxlXHJcbiAgICAgICAgICAgIC8vQXQgdGhpcyBpbmRleCB3ZSBjYW4gZ2V0IHRoZSB2YWx1ZSBvZiBwb3NpdGlvbiwgbm9ybWFsLCBjb2xvciBhbmQgdXZzIG9mIHZlcnRleFxyXG4gICAgICAgICAgICB0aGlzLl9pbmRpY2VzRm9yQmFieWxvbi5wdXNoKF9pbmRleCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVHJhbnNmb3JtIFZlY3RvcigpIGFuZCBCQUJZTE9OLkNvbG9yKCkgb2JqZWN0cyBpbnRvIG51bWJlcnMgaW4gYW4gYXJyYXlcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBfdW53cmFwRGF0YSgpIHtcclxuICAgICAgICAvL0V2ZXJ5IGFycmF5IGhhcyB0aGUgc2FtZSBsZW5ndGhcclxuICAgICAgICBmb3IgKGxldCBsID0gMDsgbCA8IHRoaXMuX3dyYXBwZWRQb3NpdGlvbkZvckJhYnlsb24ubGVuZ3RoOyBsKyspIHtcclxuICAgICAgICAgICAgLy9QdXNoIHRoZSB4LCB5LCB6IHZhbHVlcyBvZiBlYWNoIGVsZW1lbnQgaW4gdGhlIHVud3JhcHBlZCBhcnJheVxyXG4gICAgICAgICAgICB0aGlzLl91bndyYXBwZWRQb3NpdGlvbnNGb3JCYWJ5bG9uLnB1c2godGhpcy5fd3JhcHBlZFBvc2l0aW9uRm9yQmFieWxvbltsXS54LCB0aGlzLl93cmFwcGVkUG9zaXRpb25Gb3JCYWJ5bG9uW2xdLnksIHRoaXMuX3dyYXBwZWRQb3NpdGlvbkZvckJhYnlsb25bbF0ueik7XHJcbiAgICAgICAgICAgIHRoaXMuX3Vud3JhcHBlZE5vcm1hbHNGb3JCYWJ5bG9uLnB1c2godGhpcy5fd3JhcHBlZE5vcm1hbHNGb3JCYWJ5bG9uW2xdLngsIHRoaXMuX3dyYXBwZWROb3JtYWxzRm9yQmFieWxvbltsXS55LCB0aGlzLl93cmFwcGVkTm9ybWFsc0ZvckJhYnlsb25bbF0ueik7XHJcbiAgICAgICAgICAgIHRoaXMuX3Vud3JhcHBlZFVWRm9yQmFieWxvbi5wdXNoKHRoaXMuX3dyYXBwZWRVdnNGb3JCYWJ5bG9uW2xdLngsIHRoaXMuX3dyYXBwZWRVdnNGb3JCYWJ5bG9uW2xdLnkpOyAvL3ogaXMgYW4gb3B0aW9uYWwgdmFsdWUgbm90IHN1cHBvcnRlZCBieSBCQUJZTE9OXHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9sb2FkaW5nT3B0aW9ucy5pbXBvcnRWZXJ0ZXhDb2xvcnMpIHtcclxuICAgICAgICAgICAgICAgIC8vUHVzaCB0aGUgciwgZywgYiwgYSB2YWx1ZXMgb2YgZWFjaCBlbGVtZW50IGluIHRoZSB1bndyYXBwZWQgYXJyYXlcclxuICAgICAgICAgICAgICAgIHRoaXMuX3Vud3JhcHBlZENvbG9yc0ZvckJhYnlsb24ucHVzaChcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl93cmFwcGVkQ29sb3JzRm9yQmFieWxvbltsXS5yLFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3dyYXBwZWRDb2xvcnNGb3JCYWJ5bG9uW2xdLmcsXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fd3JhcHBlZENvbG9yc0ZvckJhYnlsb25bbF0uYixcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl93cmFwcGVkQ29sb3JzRm9yQmFieWxvbltsXS5hXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIFJlc2V0IGFycmF5cyBmb3IgdGhlIG5leHQgbmV3IG1lc2hlc1xyXG4gICAgICAgIHRoaXMuX3dyYXBwZWRQb3NpdGlvbkZvckJhYnlsb24ubGVuZ3RoID0gMDtcclxuICAgICAgICB0aGlzLl93cmFwcGVkTm9ybWFsc0ZvckJhYnlsb24ubGVuZ3RoID0gMDtcclxuICAgICAgICB0aGlzLl93cmFwcGVkVXZzRm9yQmFieWxvbi5sZW5ndGggPSAwO1xyXG4gICAgICAgIHRoaXMuX3dyYXBwZWRDb2xvcnNGb3JCYWJ5bG9uLmxlbmd0aCA9IDA7XHJcbiAgICAgICAgdGhpcy5fdHVwbGVQb3NOb3JtLmxlbmd0aCA9IDA7XHJcbiAgICAgICAgdGhpcy5fY3VyUG9zaXRpb25JbkluZGljZXMgPSAwO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlIHRyaWFuZ2xlcyBmcm9tIHBvbHlnb25zXHJcbiAgICAgKiBJdCBpcyBpbXBvcnRhbnQgdG8gbm90aWNlIHRoYXQgYSB0cmlhbmdsZSBpcyBhIHBvbHlnb25cclxuICAgICAqIFdlIGdldCA1IHBhdHRlcm5zIG9mIGZhY2UgZGVmaW5lZCBpbiBPQkogRmlsZSA6XHJcbiAgICAgKiBmYWNlUGF0dGVybjEgPSBbXCIxXCIsXCIyXCIsXCIzXCIsXCI0XCIsXCI1XCIsXCI2XCJdXHJcbiAgICAgKiBmYWNlUGF0dGVybjIgPSBbXCIxLzFcIixcIjIvMlwiLFwiMy8zXCIsXCI0LzRcIixcIjUvNVwiLFwiNi82XCJdXHJcbiAgICAgKiBmYWNlUGF0dGVybjMgPSBbXCIxLzEvMVwiLFwiMi8yLzJcIixcIjMvMy8zXCIsXCI0LzQvNFwiLFwiNS81LzVcIixcIjYvNi82XCJdXHJcbiAgICAgKiBmYWNlUGF0dGVybjQgPSBbXCIxLy8xXCIsXCIyLy8yXCIsXCIzLy8zXCIsXCI0Ly80XCIsXCI1Ly81XCIsXCI2Ly82XCJdXHJcbiAgICAgKiBmYWNlUGF0dGVybjUgPSBbXCItMS8tMS8tMVwiLFwiLTIvLTIvLTJcIixcIi0zLy0zLy0zXCIsXCItNC8tNC8tNFwiLFwiLTUvLTUvLTVcIixcIi02Ly02Ly02XCJdXHJcbiAgICAgKiBFYWNoIHBhdHRlcm4gaXMgZGl2aWRlZCBieSB0aGUgc2FtZSBtZXRob2RcclxuICAgICAqIEBwYXJhbSBmYWNlcyBBcnJheVtTdHJpbmddIFRoZSBpbmRpY2VzIG9mIGVsZW1lbnRzXHJcbiAgICAgKiBAcGFyYW0gdiBJbnRlZ2VyIFRoZSB2YXJpYWJsZSB0byBpbmNyZW1lbnRcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBfZ2V0VHJpYW5nbGVzKGZhY2VzOiBBcnJheTxzdHJpbmc+LCB2OiBudW1iZXIpIHtcclxuICAgICAgICAvL1dvcmsgZm9yIGVhY2ggZWxlbWVudCBvZiB0aGUgYXJyYXlcclxuICAgICAgICBmb3IgKGxldCBmYWNlSW5kZXggPSB2OyBmYWNlSW5kZXggPCBmYWNlcy5sZW5ndGggLSAxOyBmYWNlSW5kZXgrKykge1xyXG4gICAgICAgICAgICAvL0FkZCBvbiB0aGUgdHJpYW5nbGUgdmFyaWFibGUgdGhlIGluZGV4ZXMgdG8gb2J0YWluIHRyaWFuZ2xlc1xyXG4gICAgICAgICAgICB0aGlzLl90cmlhbmdsZXMucHVzaChmYWNlc1swXSwgZmFjZXNbZmFjZUluZGV4XSwgZmFjZXNbZmFjZUluZGV4ICsgMV0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy9SZXN1bHQgb2J0YWluZWQgYWZ0ZXIgMiBpdGVyYXRpb25zOlxyXG4gICAgICAgIC8vUGF0dGVybjEgPT4gdHJpYW5nbGUgPSBbXCIxXCIsXCIyXCIsXCIzXCIsXCIxXCIsXCIzXCIsXCI0XCJdO1xyXG4gICAgICAgIC8vUGF0dGVybjIgPT4gdHJpYW5nbGUgPSBbXCIxLzFcIixcIjIvMlwiLFwiMy8zXCIsXCIxLzFcIixcIjMvM1wiLFwiNC80XCJdO1xyXG4gICAgICAgIC8vUGF0dGVybjMgPT4gdHJpYW5nbGUgPSBbXCIxLzEvMVwiLFwiMi8yLzJcIixcIjMvMy8zXCIsXCIxLzEvMVwiLFwiMy8zLzNcIixcIjQvNC80XCJdO1xyXG4gICAgICAgIC8vUGF0dGVybjQgPT4gdHJpYW5nbGUgPSBbXCIxLy8xXCIsXCIyLy8yXCIsXCIzLy8zXCIsXCIxLy8xXCIsXCIzLy8zXCIsXCI0Ly80XCJdO1xyXG4gICAgICAgIC8vUGF0dGVybjUgPT4gdHJpYW5nbGUgPSBbXCItMS8tMS8tMVwiLFwiLTIvLTIvLTJcIixcIi0zLy0zLy0zXCIsXCItMS8tMS8tMVwiLFwiLTMvLTMvLTNcIixcIi00Ly00Ly00XCJdO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlIHRyaWFuZ2xlcyBhbmQgcHVzaCB0aGUgZGF0YSBmb3IgZWFjaCBwb2x5Z29uIGZvciB0aGUgcGF0dGVybiAxXHJcbiAgICAgKiBJbiB0aGlzIHBhdHRlcm4gd2UgZ2V0IHZlcnRpY2UgcG9zaXRpb25zXHJcbiAgICAgKiBAcGFyYW0gZmFjZVxyXG4gICAgICogQHBhcmFtIHZcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBfc2V0RGF0YUZvckN1cnJlbnRGYWNlV2l0aFBhdHRlcm4xKGZhY2U6IEFycmF5PHN0cmluZz4sIHY6IG51bWJlcikge1xyXG4gICAgICAgIC8vR2V0IHRoZSBpbmRpY2VzIG9mIHRyaWFuZ2xlcyBmb3IgZWFjaCBwb2x5Z29uXHJcbiAgICAgICAgdGhpcy5fZ2V0VHJpYW5nbGVzKGZhY2UsIHYpO1xyXG4gICAgICAgIC8vRm9yIGVhY2ggZWxlbWVudCBpbiB0aGUgdHJpYW5nbGVzIGFycmF5LlxyXG4gICAgICAgIC8vVGhpcyB2YXIgY291bGQgY29udGFpbnMgMSB0byBhbiBpbmZpbml0eSBvZiB0cmlhbmdsZXNcclxuICAgICAgICBmb3IgKGxldCBrID0gMDsgayA8IHRoaXMuX3RyaWFuZ2xlcy5sZW5ndGg7IGsrKykge1xyXG4gICAgICAgICAgICAvLyBTZXQgcG9zaXRpb24gaW5kaWNlXHJcbiAgICAgICAgICAgIGNvbnN0IGluZGljZVBvc2l0aW9uRnJvbU9iaiA9IHBhcnNlSW50KHRoaXMuX3RyaWFuZ2xlc1trXSkgLSAxO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5fc2V0RGF0YShcclxuICAgICAgICAgICAgICAgIGluZGljZVBvc2l0aW9uRnJvbU9iaixcclxuICAgICAgICAgICAgICAgIDAsXHJcbiAgICAgICAgICAgICAgICAwLCAvLyBJbiB0aGUgcGF0dGVybiAxLCBub3JtYWxzIGFuZCB1dnMgYXJlIG5vdCBkZWZpbmVkXHJcbiAgICAgICAgICAgICAgICB0aGlzLl9wb3NpdGlvbnNbaW5kaWNlUG9zaXRpb25Gcm9tT2JqXSwgLy8gR2V0IHRoZSB2ZWN0b3JzIGRhdGFcclxuICAgICAgICAgICAgICAgIFZlY3RvcjIuWmVybygpLFxyXG4gICAgICAgICAgICAgICAgVmVjdG9yMy5VcCgpLCAvLyBDcmVhdGUgZGVmYXVsdCB2ZWN0b3JzXHJcbiAgICAgICAgICAgICAgICB0aGlzLl9sb2FkaW5nT3B0aW9ucy5pbXBvcnRWZXJ0ZXhDb2xvcnMgPyB0aGlzLl9jb2xvcnNbaW5kaWNlUG9zaXRpb25Gcm9tT2JqXSA6IHVuZGVmaW5lZFxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvL1Jlc2V0IHZhcmlhYmxlIGZvciB0aGUgbmV4dCBsaW5lXHJcbiAgICAgICAgdGhpcy5fdHJpYW5nbGVzLmxlbmd0aCA9IDA7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGUgdHJpYW5nbGVzIGFuZCBwdXNoIHRoZSBkYXRhIGZvciBlYWNoIHBvbHlnb24gZm9yIHRoZSBwYXR0ZXJuIDJcclxuICAgICAqIEluIHRoaXMgcGF0dGVybiB3ZSBnZXQgdmVydGljZSBwb3NpdGlvbnMgYW5kIHV2c1xyXG4gICAgICogQHBhcmFtIGZhY2VcclxuICAgICAqIEBwYXJhbSB2XHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgX3NldERhdGFGb3JDdXJyZW50RmFjZVdpdGhQYXR0ZXJuMihmYWNlOiBBcnJheTxzdHJpbmc+LCB2OiBudW1iZXIpIHtcclxuICAgICAgICAvL0dldCB0aGUgaW5kaWNlcyBvZiB0cmlhbmdsZXMgZm9yIGVhY2ggcG9seWdvblxyXG4gICAgICAgIHRoaXMuX2dldFRyaWFuZ2xlcyhmYWNlLCB2KTtcclxuICAgICAgICBmb3IgKGxldCBrID0gMDsgayA8IHRoaXMuX3RyaWFuZ2xlcy5sZW5ndGg7IGsrKykge1xyXG4gICAgICAgICAgICAvL3RyaWFuZ2xlW2tdID0gXCIxLzFcIlxyXG4gICAgICAgICAgICAvL1NwbGl0IHRoZSBkYXRhIGZvciBnZXR0aW5nIHBvc2l0aW9uIGFuZCB1dlxyXG4gICAgICAgICAgICBjb25zdCBwb2ludCA9IHRoaXMuX3RyaWFuZ2xlc1trXS5zcGxpdChcIi9cIik7IC8vIFtcIjFcIiwgXCIxXCJdXHJcbiAgICAgICAgICAgIC8vU2V0IHBvc2l0aW9uIGluZGljZVxyXG4gICAgICAgICAgICBjb25zdCBpbmRpY2VQb3NpdGlvbkZyb21PYmogPSBwYXJzZUludChwb2ludFswXSkgLSAxO1xyXG4gICAgICAgICAgICAvL1NldCB1diBpbmRpY2VcclxuICAgICAgICAgICAgY29uc3QgaW5kaWNlVXZzRnJvbU9iaiA9IHBhcnNlSW50KHBvaW50WzFdKSAtIDE7XHJcblxyXG4gICAgICAgICAgICB0aGlzLl9zZXREYXRhKFxyXG4gICAgICAgICAgICAgICAgaW5kaWNlUG9zaXRpb25Gcm9tT2JqLFxyXG4gICAgICAgICAgICAgICAgaW5kaWNlVXZzRnJvbU9iaixcclxuICAgICAgICAgICAgICAgIDAsIC8vRGVmYXVsdCB2YWx1ZSBmb3Igbm9ybWFsc1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fcG9zaXRpb25zW2luZGljZVBvc2l0aW9uRnJvbU9ial0sIC8vR2V0IHRoZSB2YWx1ZXMgZm9yIGVhY2ggZWxlbWVudFxyXG4gICAgICAgICAgICAgICAgdGhpcy5fdXZzW2luZGljZVV2c0Zyb21PYmpdLFxyXG4gICAgICAgICAgICAgICAgVmVjdG9yMy5VcCgpLCAvL0RlZmF1bHQgdmFsdWUgZm9yIG5vcm1hbHNcclxuICAgICAgICAgICAgICAgIHRoaXMuX2xvYWRpbmdPcHRpb25zLmltcG9ydFZlcnRleENvbG9ycyA/IHRoaXMuX2NvbG9yc1tpbmRpY2VQb3NpdGlvbkZyb21PYmpdIDogdW5kZWZpbmVkXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvL1Jlc2V0IHZhcmlhYmxlIGZvciB0aGUgbmV4dCBsaW5lXHJcbiAgICAgICAgdGhpcy5fdHJpYW5nbGVzLmxlbmd0aCA9IDA7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGUgdHJpYW5nbGVzIGFuZCBwdXNoIHRoZSBkYXRhIGZvciBlYWNoIHBvbHlnb24gZm9yIHRoZSBwYXR0ZXJuIDNcclxuICAgICAqIEluIHRoaXMgcGF0dGVybiB3ZSBnZXQgdmVydGljZSBwb3NpdGlvbnMsIHV2cyBhbmQgbm9ybWFsc1xyXG4gICAgICogQHBhcmFtIGZhY2VcclxuICAgICAqIEBwYXJhbSB2XHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgX3NldERhdGFGb3JDdXJyZW50RmFjZVdpdGhQYXR0ZXJuMyhmYWNlOiBBcnJheTxzdHJpbmc+LCB2OiBudW1iZXIpIHtcclxuICAgICAgICAvL0dldCB0aGUgaW5kaWNlcyBvZiB0cmlhbmdsZXMgZm9yIGVhY2ggcG9seWdvblxyXG4gICAgICAgIHRoaXMuX2dldFRyaWFuZ2xlcyhmYWNlLCB2KTtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgayA9IDA7IGsgPCB0aGlzLl90cmlhbmdsZXMubGVuZ3RoOyBrKyspIHtcclxuICAgICAgICAgICAgLy90cmlhbmdsZVtrXSA9IFwiMS8xLzFcIlxyXG4gICAgICAgICAgICAvL1NwbGl0IHRoZSBkYXRhIGZvciBnZXR0aW5nIHBvc2l0aW9uLCB1diwgYW5kIG5vcm1hbHNcclxuICAgICAgICAgICAgY29uc3QgcG9pbnQgPSB0aGlzLl90cmlhbmdsZXNba10uc3BsaXQoXCIvXCIpOyAvLyBbXCIxXCIsIFwiMVwiLCBcIjFcIl1cclxuICAgICAgICAgICAgLy8gU2V0IHBvc2l0aW9uIGluZGljZVxyXG4gICAgICAgICAgICBjb25zdCBpbmRpY2VQb3NpdGlvbkZyb21PYmogPSBwYXJzZUludChwb2ludFswXSkgLSAxO1xyXG4gICAgICAgICAgICAvLyBTZXQgdXYgaW5kaWNlXHJcbiAgICAgICAgICAgIGNvbnN0IGluZGljZVV2c0Zyb21PYmogPSBwYXJzZUludChwb2ludFsxXSkgLSAxO1xyXG4gICAgICAgICAgICAvLyBTZXQgbm9ybWFsIGluZGljZVxyXG4gICAgICAgICAgICBjb25zdCBpbmRpY2VOb3JtYWxGcm9tT2JqID0gcGFyc2VJbnQocG9pbnRbMl0pIC0gMTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuX3NldERhdGEoXHJcbiAgICAgICAgICAgICAgICBpbmRpY2VQb3NpdGlvbkZyb21PYmosXHJcbiAgICAgICAgICAgICAgICBpbmRpY2VVdnNGcm9tT2JqLFxyXG4gICAgICAgICAgICAgICAgaW5kaWNlTm9ybWFsRnJvbU9iaixcclxuICAgICAgICAgICAgICAgIHRoaXMuX3Bvc2l0aW9uc1tpbmRpY2VQb3NpdGlvbkZyb21PYmpdLFxyXG4gICAgICAgICAgICAgICAgdGhpcy5fdXZzW2luZGljZVV2c0Zyb21PYmpdLFxyXG4gICAgICAgICAgICAgICAgdGhpcy5fbm9ybWFsc1tpbmRpY2VOb3JtYWxGcm9tT2JqXSAvL1NldCB0aGUgdmVjdG9yIGZvciBlYWNoIGNvbXBvbmVudFxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvL1Jlc2V0IHZhcmlhYmxlIGZvciB0aGUgbmV4dCBsaW5lXHJcbiAgICAgICAgdGhpcy5fdHJpYW5nbGVzLmxlbmd0aCA9IDA7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGUgdHJpYW5nbGVzIGFuZCBwdXNoIHRoZSBkYXRhIGZvciBlYWNoIHBvbHlnb24gZm9yIHRoZSBwYXR0ZXJuIDRcclxuICAgICAqIEluIHRoaXMgcGF0dGVybiB3ZSBnZXQgdmVydGljZSBwb3NpdGlvbnMgYW5kIG5vcm1hbHNcclxuICAgICAqIEBwYXJhbSBmYWNlXHJcbiAgICAgKiBAcGFyYW0gdlxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIF9zZXREYXRhRm9yQ3VycmVudEZhY2VXaXRoUGF0dGVybjQoZmFjZTogQXJyYXk8c3RyaW5nPiwgdjogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5fZ2V0VHJpYW5nbGVzKGZhY2UsIHYpO1xyXG5cclxuICAgICAgICBmb3IgKGxldCBrID0gMDsgayA8IHRoaXMuX3RyaWFuZ2xlcy5sZW5ndGg7IGsrKykge1xyXG4gICAgICAgICAgICAvL3RyaWFuZ2xlW2tdID0gXCIxLy8xXCJcclxuICAgICAgICAgICAgLy9TcGxpdCB0aGUgZGF0YSBmb3IgZ2V0dGluZyBwb3NpdGlvbiBhbmQgbm9ybWFsc1xyXG4gICAgICAgICAgICBjb25zdCBwb2ludCA9IHRoaXMuX3RyaWFuZ2xlc1trXS5zcGxpdChcIi8vXCIpOyAvLyBbXCIxXCIsIFwiMVwiXVxyXG4gICAgICAgICAgICAvLyBXZSBjaGVjayBpbmRpY2VzLCBhbmQgbm9ybWFsc1xyXG4gICAgICAgICAgICBjb25zdCBpbmRpY2VQb3NpdGlvbkZyb21PYmogPSBwYXJzZUludChwb2ludFswXSkgLSAxO1xyXG4gICAgICAgICAgICBjb25zdCBpbmRpY2VOb3JtYWxGcm9tT2JqID0gcGFyc2VJbnQocG9pbnRbMV0pIC0gMTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuX3NldERhdGEoXHJcbiAgICAgICAgICAgICAgICBpbmRpY2VQb3NpdGlvbkZyb21PYmosXHJcbiAgICAgICAgICAgICAgICAxLCAvL0RlZmF1bHQgdmFsdWUgZm9yIHV2XHJcbiAgICAgICAgICAgICAgICBpbmRpY2VOb3JtYWxGcm9tT2JqLFxyXG4gICAgICAgICAgICAgICAgdGhpcy5fcG9zaXRpb25zW2luZGljZVBvc2l0aW9uRnJvbU9ial0sIC8vR2V0IGVhY2ggdmVjdG9yIG9mIGRhdGFcclxuICAgICAgICAgICAgICAgIFZlY3RvcjIuWmVybygpLFxyXG4gICAgICAgICAgICAgICAgdGhpcy5fbm9ybWFsc1tpbmRpY2VOb3JtYWxGcm9tT2JqXSxcclxuICAgICAgICAgICAgICAgIHRoaXMuX2xvYWRpbmdPcHRpb25zLmltcG9ydFZlcnRleENvbG9ycyA/IHRoaXMuX2NvbG9yc1tpbmRpY2VQb3NpdGlvbkZyb21PYmpdIDogdW5kZWZpbmVkXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vUmVzZXQgdmFyaWFibGUgZm9yIHRoZSBuZXh0IGxpbmVcclxuICAgICAgICB0aGlzLl90cmlhbmdsZXMubGVuZ3RoID0gMDtcclxuICAgIH1cclxuXHJcbiAgICAvKlxyXG4gICAgICogQ3JlYXRlIHRyaWFuZ2xlcyBhbmQgcHVzaCB0aGUgZGF0YSBmb3IgZWFjaCBwb2x5Z29uIGZvciB0aGUgcGF0dGVybiAzXHJcbiAgICAgKiBJbiB0aGlzIHBhdHRlcm4gd2UgZ2V0IHZlcnRpY2UgcG9zaXRpb25zLCB1dnMgYW5kIG5vcm1hbHNcclxuICAgICAqIEBwYXJhbSBmYWNlXHJcbiAgICAgKiBAcGFyYW0gdlxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIF9zZXREYXRhRm9yQ3VycmVudEZhY2VXaXRoUGF0dGVybjUoZmFjZTogQXJyYXk8c3RyaW5nPiwgdjogbnVtYmVyKSB7XHJcbiAgICAgICAgLy9HZXQgdGhlIGluZGljZXMgb2YgdHJpYW5nbGVzIGZvciBlYWNoIHBvbHlnb25cclxuICAgICAgICB0aGlzLl9nZXRUcmlhbmdsZXMoZmFjZSwgdik7XHJcblxyXG4gICAgICAgIGZvciAobGV0IGsgPSAwOyBrIDwgdGhpcy5fdHJpYW5nbGVzLmxlbmd0aDsgaysrKSB7XHJcbiAgICAgICAgICAgIC8vdHJpYW5nbGVba10gPSBcIi0xLy0xLy0xXCJcclxuICAgICAgICAgICAgLy9TcGxpdCB0aGUgZGF0YSBmb3IgZ2V0dGluZyBwb3NpdGlvbiwgdXYsIGFuZCBub3JtYWxzXHJcbiAgICAgICAgICAgIGNvbnN0IHBvaW50ID0gdGhpcy5fdHJpYW5nbGVzW2tdLnNwbGl0KFwiL1wiKTsgLy8gW1wiLTFcIiwgXCItMVwiLCBcIi0xXCJdXHJcbiAgICAgICAgICAgIC8vIFNldCBwb3NpdGlvbiBpbmRpY2VcclxuICAgICAgICAgICAgY29uc3QgaW5kaWNlUG9zaXRpb25Gcm9tT2JqID0gdGhpcy5fcG9zaXRpb25zLmxlbmd0aCArIHBhcnNlSW50KHBvaW50WzBdKTtcclxuICAgICAgICAgICAgLy8gU2V0IHV2IGluZGljZVxyXG4gICAgICAgICAgICBjb25zdCBpbmRpY2VVdnNGcm9tT2JqID0gdGhpcy5fdXZzLmxlbmd0aCArIHBhcnNlSW50KHBvaW50WzFdKTtcclxuICAgICAgICAgICAgLy8gU2V0IG5vcm1hbCBpbmRpY2VcclxuICAgICAgICAgICAgY29uc3QgaW5kaWNlTm9ybWFsRnJvbU9iaiA9IHRoaXMuX25vcm1hbHMubGVuZ3RoICsgcGFyc2VJbnQocG9pbnRbMl0pO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5fc2V0RGF0YShcclxuICAgICAgICAgICAgICAgIGluZGljZVBvc2l0aW9uRnJvbU9iaixcclxuICAgICAgICAgICAgICAgIGluZGljZVV2c0Zyb21PYmosXHJcbiAgICAgICAgICAgICAgICBpbmRpY2VOb3JtYWxGcm9tT2JqLFxyXG4gICAgICAgICAgICAgICAgdGhpcy5fcG9zaXRpb25zW2luZGljZVBvc2l0aW9uRnJvbU9ial0sXHJcbiAgICAgICAgICAgICAgICB0aGlzLl91dnNbaW5kaWNlVXZzRnJvbU9ial0sXHJcbiAgICAgICAgICAgICAgICB0aGlzLl9ub3JtYWxzW2luZGljZU5vcm1hbEZyb21PYmpdLCAvL1NldCB0aGUgdmVjdG9yIGZvciBlYWNoIGNvbXBvbmVudFxyXG4gICAgICAgICAgICAgICAgdGhpcy5fbG9hZGluZ09wdGlvbnMuaW1wb3J0VmVydGV4Q29sb3JzID8gdGhpcy5fY29sb3JzW2luZGljZVBvc2l0aW9uRnJvbU9ial0gOiB1bmRlZmluZWRcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy9SZXNldCB2YXJpYWJsZSBmb3IgdGhlIG5leHQgbGluZVxyXG4gICAgICAgIHRoaXMuX3RyaWFuZ2xlcy5sZW5ndGggPSAwO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2FkZFByZXZpb3VzT2JqTWVzaCgpIHtcclxuICAgICAgICAvL0NoZWNrIGlmIGl0IGlzIG5vdCB0aGUgZmlyc3QgbWVzaC4gT3RoZXJ3aXNlIHdlIGRvbid0IGhhdmUgZGF0YS5cclxuICAgICAgICBpZiAodGhpcy5fbWVzaGVzRnJvbU9iai5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIC8vR2V0IHRoZSBwcmV2aW91cyBtZXNoIGZvciBhcHBseWluZyB0aGUgZGF0YSBhYm91dCB0aGUgZmFjZXNcclxuICAgICAgICAgICAgLy89PiBpbiBvYmogZmlsZSwgZmFjZXMgZGVmaW5pdGlvbiBhcHBlbmQgYWZ0ZXIgdGhlIG5hbWUgb2YgdGhlIG1lc2hcclxuICAgICAgICAgICAgdGhpcy5faGFuZGxlZE1lc2ggPSB0aGlzLl9tZXNoZXNGcm9tT2JqW3RoaXMuX21lc2hlc0Zyb21PYmoubGVuZ3RoIC0gMV07XHJcblxyXG4gICAgICAgICAgICAvL1NldCB0aGUgZGF0YSBpbnRvIEFycmF5IGZvciB0aGUgbWVzaFxyXG4gICAgICAgICAgICB0aGlzLl91bndyYXBEYXRhKCk7XHJcblxyXG4gICAgICAgICAgICAvLyBSZXZlcnNlIHRhYi4gT3RoZXJ3aXNlIGZhY2UgYXJlIGRpc3BsYXllZCBpbiB0aGUgd3Jvbmcgc2Vuc1xyXG4gICAgICAgICAgICB0aGlzLl9pbmRpY2VzRm9yQmFieWxvbi5yZXZlcnNlKCk7XHJcbiAgICAgICAgICAgIC8vU2V0IHRoZSBpbmZvcm1hdGlvbiBmb3IgdGhlIG1lc2hcclxuICAgICAgICAgICAgLy9TbGljZSB0aGUgYXJyYXkgdG8gYXZvaWQgcmV3cml0aW5nIGJlY2F1c2Ugb2YgdGhlIGZhY3QgdGhpcyBpcyB0aGUgc2FtZSB2YXIgd2hpY2ggYmUgcmV3cml0ZWRcclxuICAgICAgICAgICAgdGhpcy5faGFuZGxlZE1lc2guaW5kaWNlcyA9IHRoaXMuX2luZGljZXNGb3JCYWJ5bG9uLnNsaWNlKCk7XHJcbiAgICAgICAgICAgIHRoaXMuX2hhbmRsZWRNZXNoLnBvc2l0aW9ucyA9IHRoaXMuX3Vud3JhcHBlZFBvc2l0aW9uc0ZvckJhYnlsb24uc2xpY2UoKTtcclxuICAgICAgICAgICAgdGhpcy5faGFuZGxlZE1lc2gubm9ybWFscyA9IHRoaXMuX3Vud3JhcHBlZE5vcm1hbHNGb3JCYWJ5bG9uLnNsaWNlKCk7XHJcbiAgICAgICAgICAgIHRoaXMuX2hhbmRsZWRNZXNoLnV2cyA9IHRoaXMuX3Vud3JhcHBlZFVWRm9yQmFieWxvbi5zbGljZSgpO1xyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMuX2xvYWRpbmdPcHRpb25zLmltcG9ydFZlcnRleENvbG9ycykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5faGFuZGxlZE1lc2guY29sb3JzID0gdGhpcy5fdW53cmFwcGVkQ29sb3JzRm9yQmFieWxvbi5zbGljZSgpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvL1Jlc2V0IHRoZSBhcnJheSBmb3IgdGhlIG5leHQgbWVzaFxyXG4gICAgICAgICAgICB0aGlzLl9pbmRpY2VzRm9yQmFieWxvbi5sZW5ndGggPSAwO1xyXG4gICAgICAgICAgICB0aGlzLl91bndyYXBwZWRQb3NpdGlvbnNGb3JCYWJ5bG9uLmxlbmd0aCA9IDA7XHJcbiAgICAgICAgICAgIHRoaXMuX3Vud3JhcHBlZENvbG9yc0ZvckJhYnlsb24ubGVuZ3RoID0gMDtcclxuICAgICAgICAgICAgdGhpcy5fdW53cmFwcGVkTm9ybWFsc0ZvckJhYnlsb24ubGVuZ3RoID0gMDtcclxuICAgICAgICAgICAgdGhpcy5fdW53cmFwcGVkVVZGb3JCYWJ5bG9uLmxlbmd0aCA9IDA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX29wdGltaXplTm9ybWFscyhtZXNoOiBBYnN0cmFjdE1lc2gpOiB2b2lkIHtcclxuICAgICAgICBjb25zdCBwb3NpdGlvbnMgPSBtZXNoLmdldFZlcnRpY2VzRGF0YShWZXJ0ZXhCdWZmZXIuUG9zaXRpb25LaW5kKTtcclxuICAgICAgICBjb25zdCBub3JtYWxzID0gbWVzaC5nZXRWZXJ0aWNlc0RhdGEoVmVydGV4QnVmZmVyLk5vcm1hbEtpbmQpO1xyXG4gICAgICAgIGNvbnN0IG1hcFZlcnRpY2VzOiB7IFtrZXk6IHN0cmluZ106IG51bWJlcltdIH0gPSB7fTtcclxuXHJcbiAgICAgICAgaWYgKCFwb3NpdGlvbnMgfHwgIW5vcm1hbHMpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwb3NpdGlvbnMubGVuZ3RoIC8gMzsgaSsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHggPSBwb3NpdGlvbnNbaSAqIDMgKyAwXTtcclxuICAgICAgICAgICAgY29uc3QgeSA9IHBvc2l0aW9uc1tpICogMyArIDFdO1xyXG4gICAgICAgICAgICBjb25zdCB6ID0gcG9zaXRpb25zW2kgKiAzICsgMl07XHJcbiAgICAgICAgICAgIGNvbnN0IGtleSA9IHggKyBcIl9cIiArIHkgKyBcIl9cIiArIHo7XHJcblxyXG4gICAgICAgICAgICBsZXQgbHN0ID0gbWFwVmVydGljZXNba2V5XTtcclxuICAgICAgICAgICAgaWYgKCFsc3QpIHtcclxuICAgICAgICAgICAgICAgIGxzdCA9IFtdO1xyXG4gICAgICAgICAgICAgICAgbWFwVmVydGljZXNba2V5XSA9IGxzdDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBsc3QucHVzaChpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IG5vcm1hbCA9IG5ldyBWZWN0b3IzKCk7XHJcbiAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gbWFwVmVydGljZXMpIHtcclxuICAgICAgICAgICAgY29uc3QgbHN0ID0gbWFwVmVydGljZXNba2V5XTtcclxuICAgICAgICAgICAgaWYgKGxzdC5sZW5ndGggPCAyKSB7XHJcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY29uc3QgdjBJZHggPSBsc3RbMF07XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgbHN0Lmxlbmd0aDsgKytpKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB2SWR4ID0gbHN0W2ldO1xyXG4gICAgICAgICAgICAgICAgbm9ybWFsc1t2MElkeCAqIDMgKyAwXSArPSBub3JtYWxzW3ZJZHggKiAzICsgMF07XHJcbiAgICAgICAgICAgICAgICBub3JtYWxzW3YwSWR4ICogMyArIDFdICs9IG5vcm1hbHNbdklkeCAqIDMgKyAxXTtcclxuICAgICAgICAgICAgICAgIG5vcm1hbHNbdjBJZHggKiAzICsgMl0gKz0gbm9ybWFsc1t2SWR4ICogMyArIDJdO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBub3JtYWwuY29weUZyb21GbG9hdHMobm9ybWFsc1t2MElkeCAqIDMgKyAwXSwgbm9ybWFsc1t2MElkeCAqIDMgKyAxXSwgbm9ybWFsc1t2MElkeCAqIDMgKyAyXSk7XHJcbiAgICAgICAgICAgIG5vcm1hbC5ub3JtYWxpemUoKTtcclxuXHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbHN0Lmxlbmd0aDsgKytpKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB2SWR4ID0gbHN0W2ldO1xyXG4gICAgICAgICAgICAgICAgbm9ybWFsc1t2SWR4ICogMyArIDBdID0gbm9ybWFsLng7XHJcbiAgICAgICAgICAgICAgICBub3JtYWxzW3ZJZHggKiAzICsgMV0gPSBub3JtYWwueTtcclxuICAgICAgICAgICAgICAgIG5vcm1hbHNbdklkeCAqIDMgKyAyXSA9IG5vcm1hbC56O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIG1lc2guc2V0VmVydGljZXNEYXRhKFZlcnRleEJ1ZmZlci5Ob3JtYWxLaW5kLCBub3JtYWxzKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEZ1bmN0aW9uIHVzZWQgdG8gcGFyc2UgYW4gT0JKIHN0cmluZ1xyXG4gICAgICogQHBhcmFtIG1lc2hlc05hbWVzIGRlZmluZXMgdGhlIGxpc3Qgb2YgbWVzaGVzIHRvIGxvYWQgKGFsbCBpZiBub3QgZGVmaW5lZClcclxuICAgICAqIEBwYXJhbSBkYXRhIGRlZmluZXMgdGhlIE9CSiBzdHJpbmdcclxuICAgICAqIEBwYXJhbSBzY2VuZSBkZWZpbmVzIHRoZSBob3N0aW5nIHNjZW5lXHJcbiAgICAgKiBAcGFyYW0gYXNzZXRDb250YWluZXIgZGVmaW5lcyB0aGUgYXNzZXQgY29udGFpbmVyIHRvIGxvYWQgZGF0YSBpblxyXG4gICAgICogQHBhcmFtIG9uRmlsZVRvTG9hZEZvdW5kIGRlZmluZXMgYSBjYWxsYmFjayB0aGF0IHdpbGwgYmUgY2FsbGVkIGlmIGEgTVRMIGZpbGUgaXMgZm91bmRcclxuICAgICAqL1xyXG4gICAgcHVibGljIHBhcnNlKG1lc2hlc05hbWVzOiBhbnksIGRhdGE6IHN0cmluZywgc2NlbmU6IFNjZW5lLCBhc3NldENvbnRhaW5lcjogTnVsbGFibGU8QXNzZXRDb250YWluZXI+LCBvbkZpbGVUb0xvYWRGb3VuZDogKGZpbGVUb0xvYWQ6IHN0cmluZykgPT4gdm9pZCk6IHZvaWQge1xyXG4gICAgICAgIC8vIFNwbGl0IHRoZSBmaWxlIGludG8gbGluZXNcclxuICAgICAgICBjb25zdCBsaW5lcyA9IGRhdGEuc3BsaXQoXCJcXG5cIik7XHJcbiAgICAgICAgLy8gTG9vayBhdCBlYWNoIGxpbmVcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxpbmVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGxpbmUgPSBsaW5lc1tpXS50cmltKCkucmVwbGFjZSgvXFxzXFxzL2csIFwiIFwiKTtcclxuICAgICAgICAgICAgbGV0IHJlc3VsdDtcclxuXHJcbiAgICAgICAgICAgIC8vIENvbW1lbnQgb3IgbmV3TGluZVxyXG4gICAgICAgICAgICBpZiAobGluZS5sZW5ndGggPT09IDAgfHwgbGluZS5jaGFyQXQoMCkgPT09IFwiI1wiKSB7XHJcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuXHJcbiAgICAgICAgICAgICAgICAvL0dldCBpbmZvcm1hdGlvbiBhYm91dCBvbmUgcG9zaXRpb24gcG9zc2libGUgZm9yIHRoZSB2ZXJ0aWNlc1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKFNvbGlkUGFyc2VyLlZlcnRleFBhdHRlcm4udGVzdChsaW5lKSkge1xyXG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gbGluZS5tYXRjaCgvW14gXSsvZykhOyAvLyBtYXRjaCB3aWxsIHJldHVybiBub24tbnVsbCBkdWUgdG8gcGFzc2luZyByZWdleCBwYXR0ZXJuXHJcblxyXG4gICAgICAgICAgICAgICAgLy8gVmFsdWUgb2YgcmVzdWx0IHdpdGggbGluZTogXCJ2IDEuMCAyLjAgMy4wXCJcclxuICAgICAgICAgICAgICAgIC8vIFtcInZcIiwgXCIxLjBcIiwgXCIyLjBcIiwgXCIzLjBcIl1cclxuICAgICAgICAgICAgICAgIC8vIENyZWF0ZSBhIFZlY3RvcjMgd2l0aCB0aGUgcG9zaXRpb24geCwgeSwgelxyXG4gICAgICAgICAgICAgICAgdGhpcy5fcG9zaXRpb25zLnB1c2gobmV3IFZlY3RvcjMocGFyc2VGbG9hdChyZXN1bHRbMV0pLCBwYXJzZUZsb2F0KHJlc3VsdFsyXSksIHBhcnNlRmxvYXQocmVzdWx0WzNdKSkpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLl9sb2FkaW5nT3B0aW9ucy5pbXBvcnRWZXJ0ZXhDb2xvcnMpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAocmVzdWx0Lmxlbmd0aCA+PSA3KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHIgPSBwYXJzZUZsb2F0KHJlc3VsdFs0XSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGcgPSBwYXJzZUZsb2F0KHJlc3VsdFs1XSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGIgPSBwYXJzZUZsb2F0KHJlc3VsdFs2XSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9jb2xvcnMucHVzaChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBDb2xvcjQociA+IDEgPyByIC8gMjU1IDogciwgZyA+IDEgPyBnIC8gMjU1IDogZywgYiA+IDEgPyBiIC8gMjU1IDogYiwgcmVzdWx0Lmxlbmd0aCA9PT0gNyB8fCByZXN1bHRbN10gPT09IHVuZGVmaW5lZCA/IDEgOiBwYXJzZUZsb2F0KHJlc3VsdFs3XSkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gVE9ETzogbWF5YmUgcHVzaCBOVUxMIGFuZCBpZiBhbGwgYXJlIE5VTEwgdG8gc2tpcCAoYW5kIHJlbW92ZSBncmF5Q29sb3IgdmFyKS5cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fY29sb3JzLnB1c2godGhpcy5fZ3JheUNvbG9yKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoKHJlc3VsdCA9IFNvbGlkUGFyc2VyLk5vcm1hbFBhdHRlcm4uZXhlYyhsaW5lKSkgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIC8vQ3JlYXRlIGEgVmVjdG9yMyB3aXRoIHRoZSBub3JtYWxzIHgsIHksIHpcclxuICAgICAgICAgICAgICAgIC8vVmFsdWUgb2YgcmVzdWx0XHJcbiAgICAgICAgICAgICAgICAvLyBbXCJ2biAxLjAgMi4wIDMuMFwiLCBcIjEuMFwiLCBcIjIuMFwiLCBcIjMuMFwiXVxyXG4gICAgICAgICAgICAgICAgLy9BZGQgdGhlIFZlY3RvciBpbiB0aGUgbGlzdCBvZiBub3JtYWxzXHJcbiAgICAgICAgICAgICAgICB0aGlzLl9ub3JtYWxzLnB1c2gobmV3IFZlY3RvcjMocGFyc2VGbG9hdChyZXN1bHRbMV0pLCBwYXJzZUZsb2F0KHJlc3VsdFsyXSksIHBhcnNlRmxvYXQocmVzdWx0WzNdKSkpO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKChyZXN1bHQgPSBTb2xpZFBhcnNlci5VVlBhdHRlcm4uZXhlYyhsaW5lKSkgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIC8vQ3JlYXRlIGEgVmVjdG9yMiB3aXRoIHRoZSBub3JtYWxzIHUsIHZcclxuICAgICAgICAgICAgICAgIC8vVmFsdWUgb2YgcmVzdWx0XHJcbiAgICAgICAgICAgICAgICAvLyBbXCJ2dCAwLjEgMC4yIDAuM1wiLCBcIjAuMVwiLCBcIjAuMlwiXVxyXG4gICAgICAgICAgICAgICAgLy9BZGQgdGhlIFZlY3RvciBpbiB0aGUgbGlzdCBvZiB1dnNcclxuICAgICAgICAgICAgICAgIHRoaXMuX3V2cy5wdXNoKG5ldyBWZWN0b3IyKHBhcnNlRmxvYXQocmVzdWx0WzFdKSAqIHRoaXMuX2xvYWRpbmdPcHRpb25zLlVWU2NhbGluZy54LCBwYXJzZUZsb2F0KHJlc3VsdFsyXSkgKiB0aGlzLl9sb2FkaW5nT3B0aW9ucy5VVlNjYWxpbmcueSkpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vSWRlbnRpZnkgcGF0dGVybnMgb2YgZmFjZXNcclxuICAgICAgICAgICAgICAgIC8vRmFjZSBjb3VsZCBiZSBkZWZpbmVkIGluIGRpZmZlcmVudCB0eXBlIG9mIHBhdHRlcm5cclxuICAgICAgICAgICAgfSBlbHNlIGlmICgocmVzdWx0ID0gU29saWRQYXJzZXIuRmFjZVBhdHRlcm4zLmV4ZWMobGluZSkpICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAvL1ZhbHVlIG9mIHJlc3VsdDpcclxuICAgICAgICAgICAgICAgIC8vW1wiZiAxLzEvMSAyLzIvMiAzLzMvM1wiLCBcIjEvMS8xIDIvMi8yIDMvMy8zXCIuLi5dXHJcblxyXG4gICAgICAgICAgICAgICAgLy9TZXQgdGhlIGRhdGEgZm9yIHRoaXMgZmFjZVxyXG4gICAgICAgICAgICAgICAgdGhpcy5fc2V0RGF0YUZvckN1cnJlbnRGYWNlV2l0aFBhdHRlcm4zKFxyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdFsxXS50cmltKCkuc3BsaXQoXCIgXCIpLCAvLyBbXCIxLzEvMVwiLCBcIjIvMi8yXCIsIFwiMy8zLzNcIl1cclxuICAgICAgICAgICAgICAgICAgICAxXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKChyZXN1bHQgPSBTb2xpZFBhcnNlci5GYWNlUGF0dGVybjQuZXhlYyhsaW5lKSkgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIC8vVmFsdWUgb2YgcmVzdWx0OlxyXG4gICAgICAgICAgICAgICAgLy9bXCJmIDEvLzEgMi8vMiAzLy8zXCIsIFwiMS8vMSAyLy8yIDMvLzNcIi4uLl1cclxuXHJcbiAgICAgICAgICAgICAgICAvL1NldCB0aGUgZGF0YSBmb3IgdGhpcyBmYWNlXHJcbiAgICAgICAgICAgICAgICB0aGlzLl9zZXREYXRhRm9yQ3VycmVudEZhY2VXaXRoUGF0dGVybjQoXHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0WzFdLnRyaW0oKS5zcGxpdChcIiBcIiksIC8vIFtcIjEvLzFcIiwgXCIyLy8yXCIsIFwiMy8vM1wiXVxyXG4gICAgICAgICAgICAgICAgICAgIDFcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoKHJlc3VsdCA9IFNvbGlkUGFyc2VyLkZhY2VQYXR0ZXJuNS5leGVjKGxpbmUpKSAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgLy9WYWx1ZSBvZiByZXN1bHQ6XHJcbiAgICAgICAgICAgICAgICAvL1tcImYgLTEvLTEvLTEgLTIvLTIvLTIgLTMvLTMvLTNcIiwgXCItMS8tMS8tMSAtMi8tMi8tMiAtMy8tMy8tM1wiLi4uXVxyXG5cclxuICAgICAgICAgICAgICAgIC8vU2V0IHRoZSBkYXRhIGZvciB0aGlzIGZhY2VcclxuICAgICAgICAgICAgICAgIHRoaXMuX3NldERhdGFGb3JDdXJyZW50RmFjZVdpdGhQYXR0ZXJuNShcclxuICAgICAgICAgICAgICAgICAgICByZXN1bHRbMV0udHJpbSgpLnNwbGl0KFwiIFwiKSwgLy8gW1wiLTEvLTEvLTFcIiwgXCItMi8tMi8tMlwiLCBcIi0zLy0zLy0zXCJdXHJcbiAgICAgICAgICAgICAgICAgICAgMVxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmICgocmVzdWx0ID0gU29saWRQYXJzZXIuRmFjZVBhdHRlcm4yLmV4ZWMobGluZSkpICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAvL1ZhbHVlIG9mIHJlc3VsdDpcclxuICAgICAgICAgICAgICAgIC8vW1wiZiAxLzEgMi8yIDMvM1wiLCBcIjEvMSAyLzIgMy8zXCIuLi5dXHJcblxyXG4gICAgICAgICAgICAgICAgLy9TZXQgdGhlIGRhdGEgZm9yIHRoaXMgZmFjZVxyXG4gICAgICAgICAgICAgICAgdGhpcy5fc2V0RGF0YUZvckN1cnJlbnRGYWNlV2l0aFBhdHRlcm4yKFxyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdFsxXS50cmltKCkuc3BsaXQoXCIgXCIpLCAvLyBbXCIxLzFcIiwgXCIyLzJcIiwgXCIzLzNcIl1cclxuICAgICAgICAgICAgICAgICAgICAxXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKChyZXN1bHQgPSBTb2xpZFBhcnNlci5GYWNlUGF0dGVybjEuZXhlYyhsaW5lKSkgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIC8vVmFsdWUgb2YgcmVzdWx0XHJcbiAgICAgICAgICAgICAgICAvL1tcImYgMSAyIDNcIiwgXCIxIDIgM1wiLi4uXVxyXG5cclxuICAgICAgICAgICAgICAgIC8vU2V0IHRoZSBkYXRhIGZvciB0aGlzIGZhY2VcclxuICAgICAgICAgICAgICAgIHRoaXMuX3NldERhdGFGb3JDdXJyZW50RmFjZVdpdGhQYXR0ZXJuMShcclxuICAgICAgICAgICAgICAgICAgICByZXN1bHRbMV0udHJpbSgpLnNwbGl0KFwiIFwiKSwgLy8gW1wiMVwiLCBcIjJcIiwgXCIzXCJdXHJcbiAgICAgICAgICAgICAgICAgICAgMVxyXG4gICAgICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBEZWZpbmUgYSBtZXNoIG9yIGFuIG9iamVjdFxyXG4gICAgICAgICAgICAgICAgLy8gRWFjaCB0aW1lIHRoaXMga2V5d29yZCBpcyBhbmFseXplZCwgY3JlYXRlIGEgbmV3IE9iamVjdCB3aXRoIGFsbCBkYXRhIGZvciBjcmVhdGluZyBhIGJhYnlsb25NZXNoXHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoKHJlc3VsdCA9IFNvbGlkUGFyc2VyLkxpbmVQYXR0ZXJuMS5leGVjKGxpbmUpKSAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgLy9WYWx1ZSBvZiByZXN1bHRcclxuICAgICAgICAgICAgICAgIC8vW1wibCAxIDJcIl1cclxuXHJcbiAgICAgICAgICAgICAgICAvL1NldCB0aGUgZGF0YSBmb3IgdGhpcyBmYWNlXHJcbiAgICAgICAgICAgICAgICB0aGlzLl9zZXREYXRhRm9yQ3VycmVudEZhY2VXaXRoUGF0dGVybjEoXHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0WzFdLnRyaW0oKS5zcGxpdChcIiBcIiksIC8vIFtcIjFcIiwgXCIyXCJdXHJcbiAgICAgICAgICAgICAgICAgICAgMFxyXG4gICAgICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBEZWZpbmUgYSBtZXNoIG9yIGFuIG9iamVjdFxyXG4gICAgICAgICAgICAgICAgLy8gRWFjaCB0aW1lIHRoaXMga2V5d29yZCBpcyBhbmFseXplZCwgY3JlYXRlIGEgbmV3IE9iamVjdCB3aXRoIGFsbCBkYXRhIGZvciBjcmVhdGluZyBhIGJhYnlsb25NZXNoXHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoKHJlc3VsdCA9IFNvbGlkUGFyc2VyLkxpbmVQYXR0ZXJuMi5leGVjKGxpbmUpKSAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgLy9WYWx1ZSBvZiByZXN1bHRcclxuICAgICAgICAgICAgICAgIC8vW1wibCAxLzEgMi8yXCJdXHJcblxyXG4gICAgICAgICAgICAgICAgLy9TZXQgdGhlIGRhdGEgZm9yIHRoaXMgZmFjZVxyXG4gICAgICAgICAgICAgICAgdGhpcy5fc2V0RGF0YUZvckN1cnJlbnRGYWNlV2l0aFBhdHRlcm4yKFxyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdFsxXS50cmltKCkuc3BsaXQoXCIgXCIpLCAvLyBbXCIxLzFcIiwgXCIyLzJcIl1cclxuICAgICAgICAgICAgICAgICAgICAwXHJcbiAgICAgICAgICAgICAgICApO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIERlZmluZSBhIG1lc2ggb3IgYW4gb2JqZWN0XHJcbiAgICAgICAgICAgICAgICAvLyBFYWNoIHRpbWUgdGhpcyBrZXl3b3JkIGlzIGFuYWx5emVkLCBjcmVhdGUgYSBuZXcgT2JqZWN0IHdpdGggYWxsIGRhdGEgZm9yIGNyZWF0aW5nIGEgYmFieWxvbk1lc2hcclxuICAgICAgICAgICAgfSBlbHNlIGlmICgocmVzdWx0ID0gU29saWRQYXJzZXIuTGluZVBhdHRlcm4zLmV4ZWMobGluZSkpICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAvL1ZhbHVlIG9mIHJlc3VsdFxyXG4gICAgICAgICAgICAgICAgLy9bXCJsIDEvMS8xIDIvMi8yXCJdXHJcblxyXG4gICAgICAgICAgICAgICAgLy9TZXQgdGhlIGRhdGEgZm9yIHRoaXMgZmFjZVxyXG4gICAgICAgICAgICAgICAgdGhpcy5fc2V0RGF0YUZvckN1cnJlbnRGYWNlV2l0aFBhdHRlcm4zKFxyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdFsxXS50cmltKCkuc3BsaXQoXCIgXCIpLCAvLyBbXCIxLzEvMVwiLCBcIjIvMi8yXCJdXHJcbiAgICAgICAgICAgICAgICAgICAgMFxyXG4gICAgICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBEZWZpbmUgYSBtZXNoIG9yIGFuIG9iamVjdFxyXG4gICAgICAgICAgICAgICAgLy8gRWFjaCB0aW1lIHRoaXMga2V5d29yZCBpcyBhbmFseXplZCwgY3JlYXRlIGEgbmV3IE9iamVjdCB3aXRoIGFsbCBkYXRhIGZvciBjcmVhdGluZyBhIGJhYnlsb25NZXNoXHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoU29saWRQYXJzZXIuR3JvdXBEZXNjcmlwdG9yLnRlc3QobGluZSkgfHwgU29saWRQYXJzZXIuT2JqZWN0RGVzY3JpcHRvci50ZXN0KGxpbmUpKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBDcmVhdGUgYSBuZXcgbWVzaCBjb3JyZXNwb25kaW5nIHRvIHRoZSBuYW1lIG9mIHRoZSBncm91cC5cclxuICAgICAgICAgICAgICAgIC8vIERlZmluaXRpb24gb2YgdGhlIG1lc2hcclxuICAgICAgICAgICAgICAgIGNvbnN0IG9iak1lc2g6IE1lc2hPYmplY3QgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogbGluZS5zdWJzdHJpbmcoMikudHJpbSgpLCAvL1NldCB0aGUgbmFtZSBvZiB0aGUgY3VycmVudCBvYmogbWVzaFxyXG4gICAgICAgICAgICAgICAgICAgIGluZGljZXM6IHVuZGVmaW5lZCxcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbnM6IHVuZGVmaW5lZCxcclxuICAgICAgICAgICAgICAgICAgICBub3JtYWxzOiB1bmRlZmluZWQsXHJcbiAgICAgICAgICAgICAgICAgICAgdXZzOiB1bmRlZmluZWQsXHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3JzOiB1bmRlZmluZWQsXHJcbiAgICAgICAgICAgICAgICAgICAgbWF0ZXJpYWxOYW1lOiB0aGlzLl9tYXRlcmlhbE5hbWVGcm9tT2JqLFxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2FkZFByZXZpb3VzT2JqTWVzaCgpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vUHVzaCB0aGUgbGFzdCBtZXNoIGNyZWF0ZWQgd2l0aCBvbmx5IHRoZSBuYW1lXHJcbiAgICAgICAgICAgICAgICB0aGlzLl9tZXNoZXNGcm9tT2JqLnB1c2gob2JqTWVzaCk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy9TZXQgdGhpcyB2YXJpYWJsZSB0byBpbmRpY2F0ZSB0aGF0IG5vdyBtZXNoZXNGcm9tT2JqIGhhcyBvYmplY3RzIGRlZmluZWQgaW5zaWRlXHJcbiAgICAgICAgICAgICAgICB0aGlzLl9oYXNNZXNoZXMgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5faXNGaXJzdE1hdGVyaWFsID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2luY3JlbWVudCA9IDE7XHJcbiAgICAgICAgICAgICAgICAvL0tleXdvcmQgZm9yIGFwcGx5aW5nIGEgbWF0ZXJpYWxcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChTb2xpZFBhcnNlci5Vc2VNdGxEZXNjcmlwdG9yLnRlc3QobGluZSkpIHtcclxuICAgICAgICAgICAgICAgIC8vR2V0IHRoZSBuYW1lIG9mIHRoZSBtYXRlcmlhbFxyXG4gICAgICAgICAgICAgICAgdGhpcy5fbWF0ZXJpYWxOYW1lRnJvbU9iaiA9IGxpbmUuc3Vic3RyaW5nKDcpLnRyaW0oKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvL0lmIHRoaXMgbmV3IG1hdGVyaWFsIGlzIGluIHRoZSBzYW1lIG1lc2hcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuX2lzRmlyc3RNYXRlcmlhbCB8fCAhdGhpcy5faGFzTWVzaGVzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy9TZXQgdGhlIGRhdGEgZm9yIHRoZSBwcmV2aW91cyBtZXNoXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fYWRkUHJldmlvdXNPYmpNZXNoKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy9DcmVhdGUgYSBuZXcgbWVzaFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG9iak1lc2g6IE1lc2hPYmplY3QgPVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL1NldCB0aGUgbmFtZSBvZiB0aGUgY3VycmVudCBvYmogbWVzaFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAodGhpcy5fb2JqTWVzaE5hbWUgfHwgXCJtZXNoXCIpICsgXCJfbW1cIiArIHRoaXMuX2luY3JlbWVudC50b1N0cmluZygpLCAvL1NldCB0aGUgbmFtZSBvZiB0aGUgY3VycmVudCBvYmogbWVzaFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5kaWNlczogdW5kZWZpbmVkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb25zOiB1bmRlZmluZWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3JtYWxzOiB1bmRlZmluZWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1dnM6IHVuZGVmaW5lZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yczogdW5kZWZpbmVkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF0ZXJpYWxOYW1lOiB0aGlzLl9tYXRlcmlhbE5hbWVGcm9tT2JqLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2luY3JlbWVudCsrO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vSWYgbWVzaGVzIGFyZSBhbHJlYWR5IGRlZmluZWRcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9tZXNoZXNGcm9tT2JqLnB1c2gob2JqTWVzaCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5faGFzTWVzaGVzID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8vU2V0IHRoZSBtYXRlcmlhbCBuYW1lIGlmIHRoZSBwcmV2aW91cyBsaW5lIGRlZmluZSBhIG1lc2hcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5faGFzTWVzaGVzICYmIHRoaXMuX2lzRmlyc3RNYXRlcmlhbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vU2V0IHRoZSBtYXRlcmlhbCBuYW1lIHRvIHRoZSBwcmV2aW91cyBtZXNoICgxIG1hdGVyaWFsIHBlciBtZXNoKVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX21lc2hlc0Zyb21PYmpbdGhpcy5fbWVzaGVzRnJvbU9iai5sZW5ndGggLSAxXS5tYXRlcmlhbE5hbWUgPSB0aGlzLl9tYXRlcmlhbE5hbWVGcm9tT2JqO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2lzRmlyc3RNYXRlcmlhbCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy8gS2V5d29yZCBmb3IgbG9hZGluZyB0aGUgbXRsIGZpbGVcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChTb2xpZFBhcnNlci5NdGxMaWJHcm91cERlc2NyaXB0b3IudGVzdChsaW5lKSkge1xyXG4gICAgICAgICAgICAgICAgLy8gR2V0IHRoZSBuYW1lIG9mIG10bCBmaWxlXHJcbiAgICAgICAgICAgICAgICBvbkZpbGVUb0xvYWRGb3VuZChsaW5lLnN1YnN0cmluZyg3KS50cmltKCkpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIEFwcGx5IHNtb290aGluZ1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKFNvbGlkUGFyc2VyLlNtb290aERlc2NyaXB0b3IudGVzdChsaW5lKSkge1xyXG4gICAgICAgICAgICAgICAgLy8gc21vb3RoIHNoYWRpbmcgPT4gYXBwbHkgc21vb3RoaW5nXHJcbiAgICAgICAgICAgICAgICAvLyBUb2RheSBJIGRvbid0IGtub3cgaXQgd29yayB3aXRoIGJhYnlsb24gYW5kIHdpdGggb2JqLlxyXG4gICAgICAgICAgICAgICAgLy8gV2l0aCB0aGUgb2JqIGZpbGUgIGFuIGludGVnZXIgaXMgc2V0XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAvL0lmIHRoZXJlIGlzIGFub3RoZXIgcG9zc2liaWxpdHlcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiVW5oYW5kbGVkIGV4cHJlc3Npb24gYXQgbGluZSA6IFwiICsgbGluZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIEF0IHRoZSBlbmQgb2YgdGhlIGZpbGUsIGFkZCB0aGUgbGFzdCBtZXNoIGludG8gdGhlIG1lc2hlc0Zyb21PYmogYXJyYXlcclxuICAgICAgICBpZiAodGhpcy5faGFzTWVzaGVzKSB7XHJcbiAgICAgICAgICAgIC8vIFNldCB0aGUgZGF0YSBmb3IgdGhlIGxhc3QgbWVzaFxyXG4gICAgICAgICAgICB0aGlzLl9oYW5kbGVkTWVzaCA9IHRoaXMuX21lc2hlc0Zyb21PYmpbdGhpcy5fbWVzaGVzRnJvbU9iai5sZW5ndGggLSAxXTtcclxuXHJcbiAgICAgICAgICAgIC8vUmV2ZXJzZSBpbmRpY2VzIGZvciBkaXNwbGF5aW5nIGZhY2VzIGluIHRoZSBnb29kIHNlbnNlXHJcbiAgICAgICAgICAgIHRoaXMuX2luZGljZXNGb3JCYWJ5bG9uLnJldmVyc2UoKTtcclxuICAgICAgICAgICAgLy9HZXQgdGhlIGdvb2QgYXJyYXlcclxuICAgICAgICAgICAgdGhpcy5fdW53cmFwRGF0YSgpO1xyXG4gICAgICAgICAgICAvL1NldCBhcnJheVxyXG4gICAgICAgICAgICB0aGlzLl9oYW5kbGVkTWVzaC5pbmRpY2VzID0gdGhpcy5faW5kaWNlc0ZvckJhYnlsb247XHJcbiAgICAgICAgICAgIHRoaXMuX2hhbmRsZWRNZXNoLnBvc2l0aW9ucyA9IHRoaXMuX3Vud3JhcHBlZFBvc2l0aW9uc0ZvckJhYnlsb247XHJcbiAgICAgICAgICAgIHRoaXMuX2hhbmRsZWRNZXNoLm5vcm1hbHMgPSB0aGlzLl91bndyYXBwZWROb3JtYWxzRm9yQmFieWxvbjtcclxuICAgICAgICAgICAgdGhpcy5faGFuZGxlZE1lc2gudXZzID0gdGhpcy5fdW53cmFwcGVkVVZGb3JCYWJ5bG9uO1xyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMuX2xvYWRpbmdPcHRpb25zLmltcG9ydFZlcnRleENvbG9ycykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5faGFuZGxlZE1lc2guY29sb3JzID0gdGhpcy5fdW53cmFwcGVkQ29sb3JzRm9yQmFieWxvbjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gSWYgYW55IG8gb3IgZyBrZXl3b3JkIG5vdCBmb3VuZCwgY3JlYXRlIGEgbWVzaCB3aXRoIGEgcmFuZG9tIGlkXHJcbiAgICAgICAgaWYgKCF0aGlzLl9oYXNNZXNoZXMpIHtcclxuICAgICAgICAgICAgbGV0IG5ld01hdGVyaWFsOiBOdWxsYWJsZTxTdGFuZGFyZE1hdGVyaWFsPiA9IG51bGw7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9pbmRpY2VzRm9yQmFieWxvbi5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIC8vIHJldmVyc2UgdGFiIG9mIGluZGljZXNcclxuICAgICAgICAgICAgICAgIHRoaXMuX2luZGljZXNGb3JCYWJ5bG9uLnJldmVyc2UoKTtcclxuICAgICAgICAgICAgICAgIC8vR2V0IHBvc2l0aW9ucyBub3JtYWxzIHV2c1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fdW53cmFwRGF0YSgpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgLy8gVGhlcmUgaXMgbm8gaW5kaWNlcyBpbiB0aGUgZmlsZS4gV2Ugd2lsbCBoYXZlIHRvIHN3aXRjaCB0byBwb2ludCBjbG91ZCByZW5kZXJpbmdcclxuICAgICAgICAgICAgICAgIGZvciAoY29uc3QgcG9zIG9mIHRoaXMuX3Bvc2l0aW9ucykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3Vud3JhcHBlZFBvc2l0aW9uc0ZvckJhYnlsb24ucHVzaChwb3MueCwgcG9zLnksIHBvcy56KTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fbm9ybWFscy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IG5vcm1hbCBvZiB0aGlzLl9ub3JtYWxzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX3Vud3JhcHBlZE5vcm1hbHNGb3JCYWJ5bG9uLnB1c2gobm9ybWFsLngsIG5vcm1hbC55LCBub3JtYWwueik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLl91dnMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yIChjb25zdCB1diBvZiB0aGlzLl91dnMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fdW53cmFwcGVkVVZGb3JCYWJ5bG9uLnB1c2godXYueCwgdXYueSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLl9jb2xvcnMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yIChjb25zdCBjb2xvciBvZiB0aGlzLl9jb2xvcnMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fdW53cmFwcGVkQ29sb3JzRm9yQmFieWxvbi5wdXNoKGNvbG9yLnIsIGNvbG9yLmcsIGNvbG9yLmIsIGNvbG9yLmEpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuX21hdGVyaWFsTmFtZUZyb21PYmopIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBDcmVhdGUgYSBtYXRlcmlhbCB3aXRoIHBvaW50IGNsb3VkIG9uXHJcbiAgICAgICAgICAgICAgICAgICAgbmV3TWF0ZXJpYWwgPSBuZXcgU3RhbmRhcmRNYXRlcmlhbChHZW9tZXRyeS5SYW5kb21JZCgpLCBzY2VuZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIG5ld01hdGVyaWFsLnBvaW50c0Nsb3VkID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fbWF0ZXJpYWxOYW1lRnJvbU9iaiA9IG5ld01hdGVyaWFsLm5hbWU7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghdGhpcy5fbm9ybWFscy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3TWF0ZXJpYWwuZGlzYWJsZUxpZ2h0aW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3TWF0ZXJpYWwuZW1pc3NpdmVDb2xvciA9IENvbG9yMy5XaGl0ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy9TZXQgZGF0YSBmb3Igb25lIG1lc2hcclxuICAgICAgICAgICAgdGhpcy5fbWVzaGVzRnJvbU9iai5wdXNoKHtcclxuICAgICAgICAgICAgICAgIG5hbWU6IEdlb21ldHJ5LlJhbmRvbUlkKCksXHJcbiAgICAgICAgICAgICAgICBpbmRpY2VzOiB0aGlzLl9pbmRpY2VzRm9yQmFieWxvbixcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uczogdGhpcy5fdW53cmFwcGVkUG9zaXRpb25zRm9yQmFieWxvbixcclxuICAgICAgICAgICAgICAgIGNvbG9yczogdGhpcy5fdW53cmFwcGVkQ29sb3JzRm9yQmFieWxvbixcclxuICAgICAgICAgICAgICAgIG5vcm1hbHM6IHRoaXMuX3Vud3JhcHBlZE5vcm1hbHNGb3JCYWJ5bG9uLFxyXG4gICAgICAgICAgICAgICAgdXZzOiB0aGlzLl91bndyYXBwZWRVVkZvckJhYnlsb24sXHJcbiAgICAgICAgICAgICAgICBtYXRlcmlhbE5hbWU6IHRoaXMuX21hdGVyaWFsTmFtZUZyb21PYmosXHJcbiAgICAgICAgICAgICAgICBkaXJlY3RNYXRlcmlhbDogbmV3TWF0ZXJpYWwsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy9TZXQgZGF0YSBmb3IgZWFjaCBtZXNoXHJcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB0aGlzLl9tZXNoZXNGcm9tT2JqLmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgICAgIC8vY2hlY2sgbWVzaGVzTmFtZXMgKHN0bEZpbGVMb2FkZXIpXHJcbiAgICAgICAgICAgIGlmIChtZXNoZXNOYW1lcyAmJiB0aGlzLl9tZXNoZXNGcm9tT2JqW2pdLm5hbWUpIHtcclxuICAgICAgICAgICAgICAgIGlmIChtZXNoZXNOYW1lcyBpbnN0YW5jZW9mIEFycmF5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG1lc2hlc05hbWVzLmluZGV4T2YodGhpcy5fbWVzaGVzRnJvbU9ialtqXS5uYW1lKSA9PT0gLTEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5fbWVzaGVzRnJvbU9ialtqXS5uYW1lICE9PSBtZXNoZXNOYW1lcykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vR2V0IHRoZSBjdXJyZW50IG1lc2hcclxuICAgICAgICAgICAgLy9TZXQgdGhlIGRhdGEgd2l0aCBWZXJ0ZXhCdWZmZXIgZm9yIGVhY2ggbWVzaFxyXG4gICAgICAgICAgICB0aGlzLl9oYW5kbGVkTWVzaCA9IHRoaXMuX21lc2hlc0Zyb21PYmpbal07XHJcbiAgICAgICAgICAgIC8vQ3JlYXRlIGEgTWVzaCB3aXRoIHRoZSBuYW1lIG9mIHRoZSBvYmogbWVzaFxyXG5cclxuICAgICAgICAgICAgc2NlbmUuX2Jsb2NrRW50aXR5Q29sbGVjdGlvbiA9ICEhYXNzZXRDb250YWluZXI7XHJcbiAgICAgICAgICAgIGNvbnN0IGJhYnlsb25NZXNoID0gbmV3IE1lc2godGhpcy5fbWVzaGVzRnJvbU9ialtqXS5uYW1lLCBzY2VuZSk7XHJcbiAgICAgICAgICAgIGJhYnlsb25NZXNoLl9wYXJlbnRDb250YWluZXIgPSBhc3NldENvbnRhaW5lcjtcclxuICAgICAgICAgICAgc2NlbmUuX2Jsb2NrRW50aXR5Q29sbGVjdGlvbiA9IGZhbHNlO1xyXG5cclxuICAgICAgICAgICAgLy9QdXNoIHRoZSBuYW1lIG9mIHRoZSBtYXRlcmlhbCB0byBhbiBhcnJheVxyXG4gICAgICAgICAgICAvL1RoaXMgaXMgaW5kaXNwZW5zYWJsZSBmb3IgdGhlIGltcG9ydE1lc2ggZnVuY3Rpb25cclxuICAgICAgICAgICAgdGhpcy5fbWF0ZXJpYWxUb1VzZS5wdXNoKHRoaXMuX21lc2hlc0Zyb21PYmpbal0ubWF0ZXJpYWxOYW1lKTtcclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9oYW5kbGVkTWVzaC5wb3NpdGlvbnM/Lmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgLy9QdXNoIHRoZSBtZXNoIGludG8gYW4gYXJyYXlcclxuICAgICAgICAgICAgICAgIHRoaXMuX2JhYnlsb25NZXNoZXNBcnJheS5wdXNoKGJhYnlsb25NZXNoKTtcclxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjb25zdCB2ZXJ0ZXhEYXRhOiBWZXJ0ZXhEYXRhID0gbmV3IFZlcnRleERhdGEoKTsgLy9UaGUgY29udGFpbmVyIGZvciB0aGUgdmFsdWVzXHJcbiAgICAgICAgICAgIC8vU2V0IHRoZSBkYXRhIGZvciB0aGUgYmFieWxvbk1lc2hcclxuICAgICAgICAgICAgdmVydGV4RGF0YS51dnMgPSB0aGlzLl9oYW5kbGVkTWVzaC51dnMgYXMgRmxvYXRBcnJheTtcclxuICAgICAgICAgICAgdmVydGV4RGF0YS5pbmRpY2VzID0gdGhpcy5faGFuZGxlZE1lc2guaW5kaWNlcyBhcyBJbmRpY2VzQXJyYXk7XHJcbiAgICAgICAgICAgIHZlcnRleERhdGEucG9zaXRpb25zID0gdGhpcy5faGFuZGxlZE1lc2gucG9zaXRpb25zIGFzIEZsb2F0QXJyYXk7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9sb2FkaW5nT3B0aW9ucy5jb21wdXRlTm9ybWFscykge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgbm9ybWFsczogQXJyYXk8bnVtYmVyPiA9IG5ldyBBcnJheTxudW1iZXI+KCk7XHJcbiAgICAgICAgICAgICAgICBWZXJ0ZXhEYXRhLkNvbXB1dGVOb3JtYWxzKHRoaXMuX2hhbmRsZWRNZXNoLnBvc2l0aW9ucywgdGhpcy5faGFuZGxlZE1lc2guaW5kaWNlcywgbm9ybWFscyk7XHJcbiAgICAgICAgICAgICAgICB2ZXJ0ZXhEYXRhLm5vcm1hbHMgPSBub3JtYWxzO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdmVydGV4RGF0YS5ub3JtYWxzID0gdGhpcy5faGFuZGxlZE1lc2gubm9ybWFscyBhcyBGbG9hdEFycmF5O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9sb2FkaW5nT3B0aW9ucy5pbXBvcnRWZXJ0ZXhDb2xvcnMpIHtcclxuICAgICAgICAgICAgICAgIHZlcnRleERhdGEuY29sb3JzID0gdGhpcy5faGFuZGxlZE1lc2guY29sb3JzIGFzIEZsb2F0QXJyYXk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy9TZXQgdGhlIGRhdGEgZnJvbSB0aGUgVmVydGV4QnVmZmVyIHRvIHRoZSBjdXJyZW50IE1lc2hcclxuICAgICAgICAgICAgdmVydGV4RGF0YS5hcHBseVRvTWVzaChiYWJ5bG9uTWVzaCk7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9sb2FkaW5nT3B0aW9ucy5pbnZlcnRZKSB7XHJcbiAgICAgICAgICAgICAgICBiYWJ5bG9uTWVzaC5zY2FsaW5nLnkgKj0gLTE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHRoaXMuX2xvYWRpbmdPcHRpb25zLm9wdGltaXplTm9ybWFscykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fb3B0aW1pemVOb3JtYWxzKGJhYnlsb25NZXNoKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy9QdXNoIHRoZSBtZXNoIGludG8gYW4gYXJyYXlcclxuICAgICAgICAgICAgdGhpcy5fYmFieWxvbk1lc2hlc0FycmF5LnB1c2goYmFieWxvbk1lc2gpO1xyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMuX2hhbmRsZWRNZXNoLmRpcmVjdE1hdGVyaWFsKSB7XHJcbiAgICAgICAgICAgICAgICBiYWJ5bG9uTWVzaC5tYXRlcmlhbCA9IHRoaXMuX2hhbmRsZWRNZXNoLmRpcmVjdE1hdGVyaWFsO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsIi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9uby1pbnRlcm5hbC1tb2R1bGVzICovXHJcbmltcG9ydCAqIGFzIExvYWRlcnMgZnJvbSBcImxvYWRlcnMvT0JKL2luZGV4XCI7XHJcblxyXG4vKipcclxuICogVGhpcyBpcyB0aGUgZW50cnkgcG9pbnQgZm9yIHRoZSBVTUQgbW9kdWxlLlxyXG4gKiBUaGUgZW50cnkgcG9pbnQgZm9yIGEgZnV0dXJlIEVTTSBwYWNrYWdlIHNob3VsZCBiZSBpbmRleC50c1xyXG4gKi9cclxuY29uc3QgZ2xvYmFsT2JqZWN0ID0gdHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIiA/IGdsb2JhbCA6IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3cgOiB1bmRlZmluZWQ7XHJcbmlmICh0eXBlb2YgZ2xvYmFsT2JqZWN0ICE9PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICBmb3IgKGNvbnN0IGtleSBpbiBMb2FkZXJzKSB7XHJcbiAgICAgICAgaWYgKCEoPGFueT5nbG9iYWxPYmplY3QpLkJBQllMT05ba2V5XSkge1xyXG4gICAgICAgICAgICAoPGFueT5nbG9iYWxPYmplY3QpLkJBQllMT05ba2V5XSA9ICg8YW55PkxvYWRlcnMpW2tleV07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgKiBmcm9tIFwibG9hZGVycy9PQkovaW5kZXhcIjtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2JhYnlsb25qc19NaXNjX29ic2VydmFibGVfXzsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgKiBhcyBsb2FkZXJzIGZyb20gXCJAbHRzL2xvYWRlcnMvbGVnYWN5L2xlZ2FjeS1vYmpGaWxlTG9hZGVyXCI7XHJcbmV4cG9ydCB7IGxvYWRlcnMgfTtcclxuZXhwb3J0IGRlZmF1bHQgbG9hZGVycztcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9