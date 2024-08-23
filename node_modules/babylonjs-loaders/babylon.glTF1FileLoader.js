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

/***/ "../../../dev/loaders/src/glTF/1.0/glTFBinaryExtension.ts":
/*!****************************************************************!*\
  !*** ../../../dev/loaders/src/glTF/1.0/glTFBinaryExtension.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GLTFBinaryExtension: () => (/* binding */ GLTFBinaryExtension)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ "../../../../node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var _glTFLoader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./glTFLoader */ "../../../dev/loaders/src/glTF/1.0/glTFLoader.ts");
/* harmony import */ var _glTFLoaderUtils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./glTFLoaderUtils */ "../../../dev/loaders/src/glTF/1.0/glTFLoaderUtils.ts");
/* harmony import */ var _glTFLoaderInterfaces__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./glTFLoaderInterfaces */ "../../../dev/loaders/src/glTF/1.0/glTFLoaderInterfaces.ts");




var BinaryExtensionBufferName = "binary_glTF";
/**
 * @internal
 * @deprecated
 */
var GLTFBinaryExtension = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__extends)(GLTFBinaryExtension, _super);
    function GLTFBinaryExtension() {
        return _super.call(this, "KHR_binary_glTF") || this;
    }
    GLTFBinaryExtension.prototype.loadRuntimeAsync = function (scene, data, rootUrl, onSuccess) {
        var extensionsUsed = data.json.extensionsUsed;
        if (!extensionsUsed || extensionsUsed.indexOf(this.name) === -1 || !data.bin) {
            return false;
        }
        this._bin = data.bin;
        onSuccess(_glTFLoader__WEBPACK_IMPORTED_MODULE_0__.GLTFLoaderBase.CreateRuntime(data.json, scene, rootUrl));
        return true;
    };
    GLTFBinaryExtension.prototype.loadBufferAsync = function (gltfRuntime, id, onSuccess, onError) {
        if (gltfRuntime.extensionsUsed.indexOf(this.name) === -1) {
            return false;
        }
        if (id !== BinaryExtensionBufferName) {
            return false;
        }
        this._bin.readAsync(0, this._bin.byteLength).then(onSuccess, function (error) { return onError(error.message); });
        return true;
    };
    GLTFBinaryExtension.prototype.loadTextureBufferAsync = function (gltfRuntime, id, onSuccess) {
        var texture = gltfRuntime.textures[id];
        var source = gltfRuntime.images[texture.source];
        if (!source.extensions || !(this.name in source.extensions)) {
            return false;
        }
        var sourceExt = source.extensions[this.name];
        var bufferView = gltfRuntime.bufferViews[sourceExt.bufferView];
        var buffer = _glTFLoaderUtils__WEBPACK_IMPORTED_MODULE_1__.GLTFUtils.GetBufferFromBufferView(gltfRuntime, bufferView, 0, bufferView.byteLength, _glTFLoaderInterfaces__WEBPACK_IMPORTED_MODULE_2__.EComponentType.UNSIGNED_BYTE);
        onSuccess(buffer);
        return true;
    };
    GLTFBinaryExtension.prototype.loadShaderStringAsync = function (gltfRuntime, id, onSuccess) {
        var shader = gltfRuntime.shaders[id];
        if (!shader.extensions || !(this.name in shader.extensions)) {
            return false;
        }
        var binaryExtensionShader = shader.extensions[this.name];
        var bufferView = gltfRuntime.bufferViews[binaryExtensionShader.bufferView];
        var shaderBytes = _glTFLoaderUtils__WEBPACK_IMPORTED_MODULE_1__.GLTFUtils.GetBufferFromBufferView(gltfRuntime, bufferView, 0, bufferView.byteLength, _glTFLoaderInterfaces__WEBPACK_IMPORTED_MODULE_2__.EComponentType.UNSIGNED_BYTE);
        setTimeout(function () {
            var shaderString = _glTFLoaderUtils__WEBPACK_IMPORTED_MODULE_1__.GLTFUtils.DecodeBufferToText(shaderBytes);
            onSuccess(shaderString);
        });
        return true;
    };
    return GLTFBinaryExtension;
}(_glTFLoader__WEBPACK_IMPORTED_MODULE_0__.GLTFLoaderExtension));

_glTFLoader__WEBPACK_IMPORTED_MODULE_0__.GLTFLoader.RegisterExtension(new GLTFBinaryExtension());


/***/ }),

/***/ "../../../dev/loaders/src/glTF/1.0/glTFLoader.ts":
/*!*******************************************************!*\
  !*** ../../../dev/loaders/src/glTF/1.0/glTFLoader.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GLTFLoader: () => (/* binding */ GLTFLoader),
/* harmony export */   GLTFLoaderBase: () => (/* binding */ GLTFLoaderBase),
/* harmony export */   GLTFLoaderExtension: () => (/* binding */ GLTFLoaderExtension)
/* harmony export */ });
/* harmony import */ var _glTFLoaderInterfaces__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./glTFLoaderInterfaces */ "../../../dev/loaders/src/glTF/1.0/glTFLoaderInterfaces.ts");
/* harmony import */ var babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babylonjs/Engines/constants */ "babylonjs/Misc/observable");
/* harmony import */ var babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _glTFLoaderUtils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./glTFLoaderUtils */ "../../../dev/loaders/src/glTF/1.0/glTFLoaderUtils.ts");
/* harmony import */ var _glTFFileLoader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../glTFFileLoader */ "../../../dev/loaders/src/glTF/glTFFileLoader.ts");




























/**
 * Tokenizer. Used for shaders compatibility
 * Automatically map world, view, projection, worldViewProjection, attributes and so on
 */
var ETokenType;
(function (ETokenType) {
    ETokenType[ETokenType["IDENTIFIER"] = 1] = "IDENTIFIER";
    ETokenType[ETokenType["UNKNOWN"] = 2] = "UNKNOWN";
    ETokenType[ETokenType["END_OF_INPUT"] = 3] = "END_OF_INPUT";
})(ETokenType || (ETokenType = {}));
var Tokenizer = /** @class */ (function () {
    function Tokenizer(toParse) {
        this._pos = 0;
        this.currentToken = ETokenType.UNKNOWN;
        this.currentIdentifier = "";
        this.currentString = "";
        this.isLetterOrDigitPattern = /^[a-zA-Z0-9]+$/;
        this._toParse = toParse;
        this._maxPos = toParse.length;
    }
    Tokenizer.prototype.getNextToken = function () {
        if (this.isEnd()) {
            return ETokenType.END_OF_INPUT;
        }
        this.currentString = this.read();
        this.currentToken = ETokenType.UNKNOWN;
        if (this.currentString === "_" || this.isLetterOrDigitPattern.test(this.currentString)) {
            this.currentToken = ETokenType.IDENTIFIER;
            this.currentIdentifier = this.currentString;
            while (!this.isEnd() && (this.isLetterOrDigitPattern.test((this.currentString = this.peek())) || this.currentString === "_")) {
                this.currentIdentifier += this.currentString;
                this.forward();
            }
        }
        return this.currentToken;
    };
    Tokenizer.prototype.peek = function () {
        return this._toParse[this._pos];
    };
    Tokenizer.prototype.read = function () {
        return this._toParse[this._pos++];
    };
    Tokenizer.prototype.forward = function () {
        this._pos++;
    };
    Tokenizer.prototype.isEnd = function () {
        return this._pos >= this._maxPos;
    };
    return Tokenizer;
}());
/**
 * Values
 */
var glTFTransforms = ["MODEL", "VIEW", "PROJECTION", "MODELVIEW", "MODELVIEWPROJECTION", "JOINTMATRIX"];
var babylonTransforms = ["world", "view", "projection", "worldView", "worldViewProjection", "mBones"];
var glTFAnimationPaths = ["translation", "rotation", "scale"];
var babylonAnimationPaths = ["position", "rotationQuaternion", "scaling"];
/**
 * Parse
 * @param parsedBuffers
 * @param gltfRuntime
 */
var parseBuffers = function (parsedBuffers, gltfRuntime) {
    for (var buf in parsedBuffers) {
        var parsedBuffer = parsedBuffers[buf];
        gltfRuntime.buffers[buf] = parsedBuffer;
        gltfRuntime.buffersCount++;
    }
};
var parseShaders = function (parsedShaders, gltfRuntime) {
    for (var sha in parsedShaders) {
        var parsedShader = parsedShaders[sha];
        gltfRuntime.shaders[sha] = parsedShader;
        gltfRuntime.shaderscount++;
    }
};
var parseObject = function (parsedObjects, runtimeProperty, gltfRuntime) {
    for (var object in parsedObjects) {
        var parsedObject = parsedObjects[object];
        gltfRuntime[runtimeProperty][object] = parsedObject;
    }
};
/**
 * Utils
 * @param buffer
 */
var normalizeUVs = function (buffer) {
    if (!buffer) {
        return;
    }
    for (var i = 0; i < buffer.length / 2; i++) {
        buffer[i * 2 + 1] = 1.0 - buffer[i * 2 + 1];
    }
};
var getAttribute = function (attributeParameter) {
    if (attributeParameter.semantic === "NORMAL") {
        return "normal";
    }
    else if (attributeParameter.semantic === "POSITION") {
        return "position";
    }
    else if (attributeParameter.semantic === "JOINT") {
        return "matricesIndices";
    }
    else if (attributeParameter.semantic === "WEIGHT") {
        return "matricesWeights";
    }
    else if (attributeParameter.semantic === "COLOR") {
        return "color";
    }
    else if (attributeParameter.semantic && attributeParameter.semantic.indexOf("TEXCOORD_") !== -1) {
        var channel = Number(attributeParameter.semantic.split("_")[1]);
        return "uv" + (channel === 0 ? "" : channel + 1);
    }
    return null;
};
/**
 * Loads and creates animations
 * @param gltfRuntime
 */
var loadAnimations = function (gltfRuntime) {
    for (var anim in gltfRuntime.animations) {
        var animation = gltfRuntime.animations[anim];
        if (!animation.channels || !animation.samplers) {
            continue;
        }
        var lastAnimation = null;
        for (var i = 0; i < animation.channels.length; i++) {
            // Get parameters and load buffers
            var channel = animation.channels[i];
            var sampler = animation.samplers[channel.sampler];
            if (!sampler) {
                continue;
            }
            var inputData = null;
            var outputData = null;
            if (animation.parameters) {
                inputData = animation.parameters[sampler.input];
                outputData = animation.parameters[sampler.output];
            }
            else {
                inputData = sampler.input;
                outputData = sampler.output;
            }
            var bufferInput = _glTFLoaderUtils__WEBPACK_IMPORTED_MODULE_2__.GLTFUtils.GetBufferFromAccessor(gltfRuntime, gltfRuntime.accessors[inputData]);
            var bufferOutput = _glTFLoaderUtils__WEBPACK_IMPORTED_MODULE_2__.GLTFUtils.GetBufferFromAccessor(gltfRuntime, gltfRuntime.accessors[outputData]);
            var targetId = channel.target.id;
            var targetNode = gltfRuntime.scene.getNodeById(targetId);
            if (targetNode === null) {
                targetNode = gltfRuntime.scene.getNodeByName(targetId);
            }
            if (targetNode === null) {
                babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Tools.Warn("Creating animation named " + anim + ". But cannot find node named " + targetId + " to attach to");
                continue;
            }
            var isBone = targetNode instanceof babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Bone;
            // Get target path (position, rotation or scaling)
            var targetPath = channel.target.path;
            var targetPathIndex = glTFAnimationPaths.indexOf(targetPath);
            if (targetPathIndex !== -1) {
                targetPath = babylonAnimationPaths[targetPathIndex];
            }
            // Determine animation type
            var animationType = babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Animation.ANIMATIONTYPE_MATRIX;
            if (!isBone) {
                if (targetPath === "rotationQuaternion") {
                    animationType = babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Animation.ANIMATIONTYPE_QUATERNION;
                    targetNode.rotationQuaternion = new babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Quaternion();
                }
                else {
                    animationType = babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Animation.ANIMATIONTYPE_VECTOR3;
                }
            }
            // Create animation and key frames
            var babylonAnimation = null;
            var keys = [];
            var arrayOffset = 0;
            var modifyKey = false;
            if (isBone && lastAnimation && lastAnimation.getKeys().length === bufferInput.length) {
                babylonAnimation = lastAnimation;
                modifyKey = true;
            }
            if (!modifyKey) {
                gltfRuntime.scene._blockEntityCollection = !!gltfRuntime.assetContainer;
                babylonAnimation = new babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Animation(anim, isBone ? "_matrix" : targetPath, 1, animationType, babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Animation.ANIMATIONLOOPMODE_CYCLE);
                gltfRuntime.scene._blockEntityCollection = false;
            }
            // For each frame
            for (var j = 0; j < bufferInput.length; j++) {
                var value = null;
                if (targetPath === "rotationQuaternion") {
                    // VEC4
                    value = babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Quaternion.FromArray([bufferOutput[arrayOffset], bufferOutput[arrayOffset + 1], bufferOutput[arrayOffset + 2], bufferOutput[arrayOffset + 3]]);
                    arrayOffset += 4;
                }
                else {
                    // Position and scaling are VEC3
                    value = babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Vector3.FromArray([bufferOutput[arrayOffset], bufferOutput[arrayOffset + 1], bufferOutput[arrayOffset + 2]]);
                    arrayOffset += 3;
                }
                if (isBone) {
                    var bone = targetNode;
                    var translation = babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Vector3.Zero();
                    var rotationQuaternion = new babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Quaternion();
                    var scaling = babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Vector3.Zero();
                    // Warning on decompose
                    var mat = bone.getBaseMatrix();
                    if (modifyKey && lastAnimation) {
                        mat = lastAnimation.getKeys()[j].value;
                    }
                    mat.decompose(scaling, rotationQuaternion, translation);
                    if (targetPath === "position") {
                        translation = value;
                    }
                    else if (targetPath === "rotationQuaternion") {
                        rotationQuaternion = value;
                    }
                    else {
                        scaling = value;
                    }
                    value = babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Matrix.Compose(scaling, rotationQuaternion, translation);
                }
                if (!modifyKey) {
                    keys.push({
                        frame: bufferInput[j],
                        value: value,
                    });
                }
                else if (lastAnimation) {
                    lastAnimation.getKeys()[j].value = value;
                }
            }
            // Finish
            if (!modifyKey && babylonAnimation) {
                babylonAnimation.setKeys(keys);
                targetNode.animations.push(babylonAnimation);
            }
            lastAnimation = babylonAnimation;
            gltfRuntime.scene.stopAnimation(targetNode);
            gltfRuntime.scene.beginAnimation(targetNode, 0, bufferInput[bufferInput.length - 1], true, 1.0);
        }
    }
};
/**
 * Returns the bones transformation matrix
 * @param node
 */
var configureBoneTransformation = function (node) {
    var mat = null;
    if (node.translation || node.rotation || node.scale) {
        var scale = babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Vector3.FromArray(node.scale || [1, 1, 1]);
        var rotation = babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Quaternion.FromArray(node.rotation || [0, 0, 0, 1]);
        var position = babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Vector3.FromArray(node.translation || [0, 0, 0]);
        mat = babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Matrix.Compose(scale, rotation, position);
    }
    else {
        mat = babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Matrix.FromArray(node.matrix);
    }
    return mat;
};
/**
 * Returns the parent bone
 * @param gltfRuntime
 * @param skins
 * @param jointName
 * @param newSkeleton
 */
var getParentBone = function (gltfRuntime, skins, jointName, newSkeleton) {
    // Try to find
    for (var i = 0; i < newSkeleton.bones.length; i++) {
        if (newSkeleton.bones[i].name === jointName) {
            return newSkeleton.bones[i];
        }
    }
    // Not found, search in gltf nodes
    var nodes = gltfRuntime.nodes;
    for (var nde in nodes) {
        var node = nodes[nde];
        if (!node.jointName) {
            continue;
        }
        var children = node.children;
        for (var i = 0; i < children.length; i++) {
            var child = gltfRuntime.nodes[children[i]];
            if (!child.jointName) {
                continue;
            }
            if (child.jointName === jointName) {
                var mat = configureBoneTransformation(node);
                var bone = new babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Bone(node.name || "", newSkeleton, getParentBone(gltfRuntime, skins, node.jointName, newSkeleton), mat);
                bone.id = nde;
                return bone;
            }
        }
    }
    return null;
};
/**
 * Returns the appropriate root node
 * @param nodesToRoot
 * @param id
 */
var getNodeToRoot = function (nodesToRoot, id) {
    for (var i = 0; i < nodesToRoot.length; i++) {
        var nodeToRoot = nodesToRoot[i];
        for (var j = 0; j < nodeToRoot.node.children.length; j++) {
            var child = nodeToRoot.node.children[j];
            if (child === id) {
                return nodeToRoot.bone;
            }
        }
    }
    return null;
};
/**
 * Returns the node with the joint name
 * @param gltfRuntime
 * @param jointName
 */
var getJointNode = function (gltfRuntime, jointName) {
    var nodes = gltfRuntime.nodes;
    var node = nodes[jointName];
    if (node) {
        return {
            node: node,
            id: jointName,
        };
    }
    for (var nde in nodes) {
        node = nodes[nde];
        if (node.jointName === jointName) {
            return {
                node: node,
                id: nde,
            };
        }
    }
    return null;
};
/**
 * Checks if a nodes is in joints
 * @param skins
 * @param id
 */
var nodeIsInJoints = function (skins, id) {
    for (var i = 0; i < skins.jointNames.length; i++) {
        if (skins.jointNames[i] === id) {
            return true;
        }
    }
    return false;
};
/**
 * Fills the nodes to root for bones and builds hierarchy
 * @param gltfRuntime
 * @param newSkeleton
 * @param skins
 * @param nodesToRoot
 */
var getNodesToRoot = function (gltfRuntime, newSkeleton, skins, nodesToRoot) {
    // Creates nodes for root
    for (var nde in gltfRuntime.nodes) {
        var node = gltfRuntime.nodes[nde];
        var id = nde;
        if (!node.jointName || nodeIsInJoints(skins, node.jointName)) {
            continue;
        }
        // Create node to root bone
        var mat = configureBoneTransformation(node);
        var bone = new babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Bone(node.name || "", newSkeleton, null, mat);
        bone.id = id;
        nodesToRoot.push({ bone: bone, node: node, id: id });
    }
    // Parenting
    for (var i = 0; i < nodesToRoot.length; i++) {
        var nodeToRoot = nodesToRoot[i];
        var children = nodeToRoot.node.children;
        for (var j = 0; j < children.length; j++) {
            var child = null;
            for (var k = 0; k < nodesToRoot.length; k++) {
                if (nodesToRoot[k].id === children[j]) {
                    child = nodesToRoot[k];
                    break;
                }
            }
            if (child) {
                child.bone._parent = nodeToRoot.bone;
                nodeToRoot.bone.children.push(child.bone);
            }
        }
    }
};
/**
 * Imports a skeleton
 * @param gltfRuntime
 * @param skins
 * @param mesh
 * @param newSkeleton
 */
var importSkeleton = function (gltfRuntime, skins, mesh, newSkeleton) {
    if (!newSkeleton) {
        newSkeleton = new babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Skeleton(skins.name || "", "", gltfRuntime.scene);
    }
    if (!skins.babylonSkeleton) {
        return newSkeleton;
    }
    // Find the root bones
    var nodesToRoot = [];
    var nodesToRootToAdd = [];
    getNodesToRoot(gltfRuntime, newSkeleton, skins, nodesToRoot);
    newSkeleton.bones = [];
    // Joints
    for (var i = 0; i < skins.jointNames.length; i++) {
        var jointNode = getJointNode(gltfRuntime, skins.jointNames[i]);
        if (!jointNode) {
            continue;
        }
        var node = jointNode.node;
        if (!node) {
            babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Tools.Warn("Joint named " + skins.jointNames[i] + " does not exist");
            continue;
        }
        var id = jointNode.id;
        // Optimize, if the bone already exists...
        var existingBone = gltfRuntime.scene.getBoneById(id);
        if (existingBone) {
            newSkeleton.bones.push(existingBone);
            continue;
        }
        // Search for parent bone
        var foundBone = false;
        var parentBone = null;
        for (var j = 0; j < i; j++) {
            var jointNode_1 = getJointNode(gltfRuntime, skins.jointNames[j]);
            if (!jointNode_1) {
                continue;
            }
            var joint = jointNode_1.node;
            if (!joint) {
                babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Tools.Warn("Joint named " + skins.jointNames[j] + " does not exist when looking for parent");
                continue;
            }
            var children = joint.children;
            if (!children) {
                continue;
            }
            foundBone = false;
            for (var k = 0; k < children.length; k++) {
                if (children[k] === id) {
                    parentBone = getParentBone(gltfRuntime, skins, skins.jointNames[j], newSkeleton);
                    foundBone = true;
                    break;
                }
            }
            if (foundBone) {
                break;
            }
        }
        // Create bone
        var mat = configureBoneTransformation(node);
        if (!parentBone && nodesToRoot.length > 0) {
            parentBone = getNodeToRoot(nodesToRoot, id);
            if (parentBone) {
                if (nodesToRootToAdd.indexOf(parentBone) === -1) {
                    nodesToRootToAdd.push(parentBone);
                }
            }
        }
        var bone = new babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Bone(node.jointName || "", newSkeleton, parentBone, mat);
        bone.id = id;
    }
    // Polish
    var bones = newSkeleton.bones;
    newSkeleton.bones = [];
    for (var i = 0; i < skins.jointNames.length; i++) {
        var jointNode = getJointNode(gltfRuntime, skins.jointNames[i]);
        if (!jointNode) {
            continue;
        }
        for (var j = 0; j < bones.length; j++) {
            if (bones[j].id === jointNode.id) {
                newSkeleton.bones.push(bones[j]);
                break;
            }
        }
    }
    newSkeleton.prepare();
    // Finish
    for (var i = 0; i < nodesToRootToAdd.length; i++) {
        newSkeleton.bones.push(nodesToRootToAdd[i]);
    }
    return newSkeleton;
};
/**
 * Imports a mesh and its geometries
 * @param gltfRuntime
 * @param node
 * @param meshes
 * @param id
 * @param newMesh
 */
var importMesh = function (gltfRuntime, node, meshes, id, newMesh) {
    if (!newMesh) {
        gltfRuntime.scene._blockEntityCollection = !!gltfRuntime.assetContainer;
        newMesh = new babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Mesh(node.name || "", gltfRuntime.scene);
        newMesh._parentContainer = gltfRuntime.assetContainer;
        gltfRuntime.scene._blockEntityCollection = false;
        newMesh.id = id;
    }
    if (!node.babylonNode) {
        return newMesh;
    }
    var subMaterials = [];
    var vertexData = null;
    var verticesStarts = [];
    var verticesCounts = [];
    var indexStarts = [];
    var indexCounts = [];
    for (var meshIndex = 0; meshIndex < meshes.length; meshIndex++) {
        var meshId = meshes[meshIndex];
        var mesh = gltfRuntime.meshes[meshId];
        if (!mesh) {
            continue;
        }
        // Positions, normals and UVs
        for (var i = 0; i < mesh.primitives.length; i++) {
            // Temporary vertex data
            var tempVertexData = new babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.VertexData();
            var primitive = mesh.primitives[i];
            if (primitive.mode !== 4) {
                // continue;
            }
            var attributes = primitive.attributes;
            var accessor = null;
            var buffer = null;
            // Set positions, normal and uvs
            for (var semantic in attributes) {
                // Link accessor and buffer view
                accessor = gltfRuntime.accessors[attributes[semantic]];
                buffer = _glTFLoaderUtils__WEBPACK_IMPORTED_MODULE_2__.GLTFUtils.GetBufferFromAccessor(gltfRuntime, accessor);
                if (semantic === "NORMAL") {
                    tempVertexData.normals = new Float32Array(buffer.length);
                    tempVertexData.normals.set(buffer);
                }
                else if (semantic === "POSITION") {
                    if (_glTFFileLoader__WEBPACK_IMPORTED_MODULE_3__.GLTFFileLoader.HomogeneousCoordinates) {
                        tempVertexData.positions = new Float32Array(buffer.length - buffer.length / 4);
                        for (var j = 0; j < buffer.length; j += 4) {
                            tempVertexData.positions[j] = buffer[j];
                            tempVertexData.positions[j + 1] = buffer[j + 1];
                            tempVertexData.positions[j + 2] = buffer[j + 2];
                        }
                    }
                    else {
                        tempVertexData.positions = new Float32Array(buffer.length);
                        tempVertexData.positions.set(buffer);
                    }
                    verticesCounts.push(tempVertexData.positions.length);
                }
                else if (semantic.indexOf("TEXCOORD_") !== -1) {
                    var channel = Number(semantic.split("_")[1]);
                    var uvKind = babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.VertexBuffer.UVKind + (channel === 0 ? "" : channel + 1);
                    var uvs = new Float32Array(buffer.length);
                    uvs.set(buffer);
                    normalizeUVs(uvs);
                    tempVertexData.set(uvs, uvKind);
                }
                else if (semantic === "JOINT") {
                    tempVertexData.matricesIndices = new Float32Array(buffer.length);
                    tempVertexData.matricesIndices.set(buffer);
                }
                else if (semantic === "WEIGHT") {
                    tempVertexData.matricesWeights = new Float32Array(buffer.length);
                    tempVertexData.matricesWeights.set(buffer);
                }
                else if (semantic === "COLOR") {
                    tempVertexData.colors = new Float32Array(buffer.length);
                    tempVertexData.colors.set(buffer);
                }
            }
            // Indices
            accessor = gltfRuntime.accessors[primitive.indices];
            if (accessor) {
                buffer = _glTFLoaderUtils__WEBPACK_IMPORTED_MODULE_2__.GLTFUtils.GetBufferFromAccessor(gltfRuntime, accessor);
                tempVertexData.indices = new Int32Array(buffer.length);
                tempVertexData.indices.set(buffer);
                indexCounts.push(tempVertexData.indices.length);
            }
            else {
                // Set indices on the fly
                var indices = [];
                for (var j = 0; j < tempVertexData.positions.length / 3; j++) {
                    indices.push(j);
                }
                tempVertexData.indices = new Int32Array(indices);
                indexCounts.push(tempVertexData.indices.length);
            }
            if (!vertexData) {
                vertexData = tempVertexData;
            }
            else {
                vertexData.merge(tempVertexData);
            }
            // Sub material
            var material_1 = gltfRuntime.scene.getMaterialById(primitive.material);
            subMaterials.push(material_1 === null ? _glTFLoaderUtils__WEBPACK_IMPORTED_MODULE_2__.GLTFUtils.GetDefaultMaterial(gltfRuntime.scene) : material_1);
            // Update vertices start and index start
            verticesStarts.push(verticesStarts.length === 0 ? 0 : verticesStarts[verticesStarts.length - 1] + verticesCounts[verticesCounts.length - 2]);
            indexStarts.push(indexStarts.length === 0 ? 0 : indexStarts[indexStarts.length - 1] + indexCounts[indexCounts.length - 2]);
        }
    }
    var material;
    gltfRuntime.scene._blockEntityCollection = !!gltfRuntime.assetContainer;
    if (subMaterials.length > 1) {
        material = new babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.MultiMaterial("multimat" + id, gltfRuntime.scene);
        material.subMaterials = subMaterials;
    }
    else {
        material = new babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.StandardMaterial("multimat" + id, gltfRuntime.scene);
    }
    if (subMaterials.length === 1) {
        material = subMaterials[0];
    }
    material._parentContainer = gltfRuntime.assetContainer;
    if (!newMesh.material) {
        newMesh.material = material;
    }
    // Apply geometry
    new babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Geometry(id, gltfRuntime.scene, vertexData, false, newMesh);
    newMesh.computeWorldMatrix(true);
    gltfRuntime.scene._blockEntityCollection = false;
    // Apply submeshes
    newMesh.subMeshes = [];
    var index = 0;
    for (var meshIndex = 0; meshIndex < meshes.length; meshIndex++) {
        var meshId = meshes[meshIndex];
        var mesh = gltfRuntime.meshes[meshId];
        if (!mesh) {
            continue;
        }
        for (var i = 0; i < mesh.primitives.length; i++) {
            if (mesh.primitives[i].mode !== 4) {
                //continue;
            }
            babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.SubMesh.AddToMesh(index, verticesStarts[index], verticesCounts[index], indexStarts[index], indexCounts[index], newMesh, newMesh, true);
            index++;
        }
    }
    // Finish
    return newMesh;
};
/**
 * Configure node transformation from position, rotation and scaling
 * @param newNode
 * @param position
 * @param rotation
 * @param scaling
 */
var configureNode = function (newNode, position, rotation, scaling) {
    if (newNode.position) {
        newNode.position = position;
    }
    if (newNode.rotationQuaternion || newNode.rotation) {
        newNode.rotationQuaternion = rotation;
    }
    if (newNode.scaling) {
        newNode.scaling = scaling;
    }
};
/**
 * Configures node from transformation matrix
 * @param newNode
 * @param node
 */
var configureNodeFromMatrix = function (newNode, node) {
    if (node.matrix) {
        var position = new babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Vector3(0, 0, 0);
        var rotation = new babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Quaternion();
        var scaling = new babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Vector3(0, 0, 0);
        var mat = babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Matrix.FromArray(node.matrix);
        mat.decompose(scaling, rotation, position);
        configureNode(newNode, position, rotation, scaling);
    }
    else if (node.translation && node.rotation && node.scale) {
        configureNode(newNode, babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Vector3.FromArray(node.translation), babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Quaternion.FromArray(node.rotation), babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Vector3.FromArray(node.scale));
    }
    newNode.computeWorldMatrix(true);
};
/**
 * Imports a node
 * @param gltfRuntime
 * @param node
 * @param id
 */
var importNode = function (gltfRuntime, node, id) {
    var lastNode = null;
    if (gltfRuntime.importOnlyMeshes && (node.skin || node.meshes)) {
        if (gltfRuntime.importMeshesNames && gltfRuntime.importMeshesNames.length > 0 && gltfRuntime.importMeshesNames.indexOf(node.name || "") === -1) {
            return null;
        }
    }
    // Meshes
    if (node.skin) {
        if (node.meshes) {
            var skin = gltfRuntime.skins[node.skin];
            var newMesh = importMesh(gltfRuntime, node, node.meshes, id, node.babylonNode);
            newMesh.skeleton = gltfRuntime.scene.getLastSkeletonById(node.skin);
            if (newMesh.skeleton === null) {
                newMesh.skeleton = importSkeleton(gltfRuntime, skin, newMesh, skin.babylonSkeleton);
                if (!skin.babylonSkeleton) {
                    skin.babylonSkeleton = newMesh.skeleton;
                }
            }
            lastNode = newMesh;
        }
    }
    else if (node.meshes) {
        /**
         * Improve meshes property
         */
        var newMesh = importMesh(gltfRuntime, node, node.mesh ? [node.mesh] : node.meshes, id, node.babylonNode);
        lastNode = newMesh;
    }
    // Lights
    else if (node.light && !node.babylonNode && !gltfRuntime.importOnlyMeshes) {
        var light = gltfRuntime.lights[node.light];
        if (light) {
            if (light.type === "ambient") {
                var ambienLight = light[light.type];
                var hemiLight = new babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.HemisphericLight(node.light, babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Vector3.Zero(), gltfRuntime.scene);
                hemiLight.name = node.name || "";
                if (ambienLight.color) {
                    hemiLight.diffuse = babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Color3.FromArray(ambienLight.color);
                }
                lastNode = hemiLight;
            }
            else if (light.type === "directional") {
                var directionalLight = light[light.type];
                var dirLight = new babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.DirectionalLight(node.light, babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Vector3.Zero(), gltfRuntime.scene);
                dirLight.name = node.name || "";
                if (directionalLight.color) {
                    dirLight.diffuse = babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Color3.FromArray(directionalLight.color);
                }
                lastNode = dirLight;
            }
            else if (light.type === "point") {
                var pointLight = light[light.type];
                var ptLight = new babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.PointLight(node.light, babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Vector3.Zero(), gltfRuntime.scene);
                ptLight.name = node.name || "";
                if (pointLight.color) {
                    ptLight.diffuse = babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Color3.FromArray(pointLight.color);
                }
                lastNode = ptLight;
            }
            else if (light.type === "spot") {
                var spotLight = light[light.type];
                var spLight = new babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.SpotLight(node.light, babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Vector3.Zero(), babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Vector3.Zero(), 0, 0, gltfRuntime.scene);
                spLight.name = node.name || "";
                if (spotLight.color) {
                    spLight.diffuse = babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Color3.FromArray(spotLight.color);
                }
                if (spotLight.fallOfAngle) {
                    spLight.angle = spotLight.fallOfAngle;
                }
                if (spotLight.fallOffExponent) {
                    spLight.exponent = spotLight.fallOffExponent;
                }
                lastNode = spLight;
            }
        }
    }
    // Cameras
    else if (node.camera && !node.babylonNode && !gltfRuntime.importOnlyMeshes) {
        var camera = gltfRuntime.cameras[node.camera];
        if (camera) {
            gltfRuntime.scene._blockEntityCollection = !!gltfRuntime.assetContainer;
            if (camera.type === "orthographic") {
                var orthoCamera = new babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.FreeCamera(node.camera, babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Vector3.Zero(), gltfRuntime.scene, false);
                orthoCamera.name = node.name || "";
                orthoCamera.mode = babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Camera.ORTHOGRAPHIC_CAMERA;
                orthoCamera.attachControl();
                lastNode = orthoCamera;
                orthoCamera._parentContainer = gltfRuntime.assetContainer;
            }
            else if (camera.type === "perspective") {
                var perspectiveCamera = camera[camera.type];
                var persCamera = new babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.FreeCamera(node.camera, babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Vector3.Zero(), gltfRuntime.scene, false);
                persCamera.name = node.name || "";
                persCamera.attachControl();
                if (!perspectiveCamera.aspectRatio) {
                    perspectiveCamera.aspectRatio = gltfRuntime.scene.getEngine().getRenderWidth() / gltfRuntime.scene.getEngine().getRenderHeight();
                }
                if (perspectiveCamera.znear && perspectiveCamera.zfar) {
                    persCamera.maxZ = perspectiveCamera.zfar;
                    persCamera.minZ = perspectiveCamera.znear;
                }
                lastNode = persCamera;
                persCamera._parentContainer = gltfRuntime.assetContainer;
            }
            gltfRuntime.scene._blockEntityCollection = false;
        }
    }
    // Empty node
    if (!node.jointName) {
        if (node.babylonNode) {
            return node.babylonNode;
        }
        else if (lastNode === null) {
            gltfRuntime.scene._blockEntityCollection = !!gltfRuntime.assetContainer;
            var dummy = new babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Mesh(node.name || "", gltfRuntime.scene);
            dummy._parentContainer = gltfRuntime.assetContainer;
            gltfRuntime.scene._blockEntityCollection = false;
            node.babylonNode = dummy;
            lastNode = dummy;
        }
    }
    if (lastNode !== null) {
        if (node.matrix && lastNode instanceof babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Mesh) {
            configureNodeFromMatrix(lastNode, node);
        }
        else {
            var translation = node.translation || [0, 0, 0];
            var rotation = node.rotation || [0, 0, 0, 1];
            var scale = node.scale || [1, 1, 1];
            configureNode(lastNode, babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Vector3.FromArray(translation), babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Quaternion.FromArray(rotation), babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Vector3.FromArray(scale));
        }
        lastNode.updateCache(true);
        node.babylonNode = lastNode;
    }
    return lastNode;
};
/**
 * Traverses nodes and creates them
 * @param gltfRuntime
 * @param id
 * @param parent
 * @param meshIncluded
 */
var traverseNodes = function (gltfRuntime, id, parent, meshIncluded) {
    if (meshIncluded === void 0) { meshIncluded = false; }
    var node = gltfRuntime.nodes[id];
    var newNode = null;
    if (gltfRuntime.importOnlyMeshes && !meshIncluded && gltfRuntime.importMeshesNames) {
        if (gltfRuntime.importMeshesNames.indexOf(node.name || "") !== -1 || gltfRuntime.importMeshesNames.length === 0) {
            meshIncluded = true;
        }
        else {
            meshIncluded = false;
        }
    }
    else {
        meshIncluded = true;
    }
    if (!node.jointName && meshIncluded) {
        newNode = importNode(gltfRuntime, node, id);
        if (newNode !== null) {
            newNode.id = id;
            newNode.parent = parent;
        }
    }
    if (node.children) {
        for (var i = 0; i < node.children.length; i++) {
            traverseNodes(gltfRuntime, node.children[i], newNode, meshIncluded);
        }
    }
};
/**
 * do stuff after buffers, shaders are loaded (e.g. hook up materials, load animations, etc.)
 * @param gltfRuntime
 */
var postLoad = function (gltfRuntime) {
    // Nodes
    var currentScene = gltfRuntime.currentScene;
    if (currentScene) {
        for (var i = 0; i < currentScene.nodes.length; i++) {
            traverseNodes(gltfRuntime, currentScene.nodes[i], null);
        }
    }
    else {
        for (var thing in gltfRuntime.scenes) {
            currentScene = gltfRuntime.scenes[thing];
            for (var i = 0; i < currentScene.nodes.length; i++) {
                traverseNodes(gltfRuntime, currentScene.nodes[i], null);
            }
        }
    }
    // Set animations
    loadAnimations(gltfRuntime);
    for (var i = 0; i < gltfRuntime.scene.skeletons.length; i++) {
        var skeleton = gltfRuntime.scene.skeletons[i];
        gltfRuntime.scene.beginAnimation(skeleton, 0, Number.MAX_VALUE, true, 1.0);
    }
};
/**
 * onBind shaderrs callback to set uniforms and matrices
 * @param mesh
 * @param gltfRuntime
 * @param unTreatedUniforms
 * @param shaderMaterial
 * @param technique
 * @param material
 * @param onSuccess
 */
var onBindShaderMaterial = function (mesh, gltfRuntime, unTreatedUniforms, shaderMaterial, technique, material, onSuccess) {
    var materialValues = material.values || technique.parameters;
    for (var unif in unTreatedUniforms) {
        var uniform = unTreatedUniforms[unif];
        var type = uniform.type;
        if (type === _glTFLoaderInterfaces__WEBPACK_IMPORTED_MODULE_0__.EParameterType.FLOAT_MAT2 || type === _glTFLoaderInterfaces__WEBPACK_IMPORTED_MODULE_0__.EParameterType.FLOAT_MAT3 || type === _glTFLoaderInterfaces__WEBPACK_IMPORTED_MODULE_0__.EParameterType.FLOAT_MAT4) {
            if (uniform.semantic && !uniform.source && !uniform.node) {
                _glTFLoaderUtils__WEBPACK_IMPORTED_MODULE_2__.GLTFUtils.SetMatrix(gltfRuntime.scene, mesh, uniform, unif, shaderMaterial.getEffect());
            }
            else if (uniform.semantic && (uniform.source || uniform.node)) {
                var source = gltfRuntime.scene.getNodeByName(uniform.source || uniform.node || "");
                if (source === null) {
                    source = gltfRuntime.scene.getNodeById(uniform.source || uniform.node || "");
                }
                if (source === null) {
                    continue;
                }
                _glTFLoaderUtils__WEBPACK_IMPORTED_MODULE_2__.GLTFUtils.SetMatrix(gltfRuntime.scene, source, uniform, unif, shaderMaterial.getEffect());
            }
        }
        else {
            var value = materialValues[technique.uniforms[unif]];
            if (!value) {
                continue;
            }
            if (type === _glTFLoaderInterfaces__WEBPACK_IMPORTED_MODULE_0__.EParameterType.SAMPLER_2D) {
                var texture = gltfRuntime.textures[material.values ? value : uniform.value].babylonTexture;
                if (texture === null || texture === undefined) {
                    continue;
                }
                shaderMaterial.getEffect().setTexture(unif, texture);
            }
            else {
                _glTFLoaderUtils__WEBPACK_IMPORTED_MODULE_2__.GLTFUtils.SetUniform(shaderMaterial.getEffect(), unif, value, type);
            }
        }
    }
    onSuccess(shaderMaterial);
};
/**
 * Prepare uniforms to send the only one time
 * Loads the appropriate textures
 * @param gltfRuntime
 * @param shaderMaterial
 * @param technique
 * @param material
 */
var prepareShaderMaterialUniforms = function (gltfRuntime, shaderMaterial, technique, material, unTreatedUniforms) {
    var materialValues = material.values || technique.parameters;
    var techniqueUniforms = technique.uniforms;
    var _loop_1 = function (unif) {
        var uniform = unTreatedUniforms[unif];
        var type = uniform.type;
        var value = materialValues[techniqueUniforms[unif]];
        if (value === undefined) {
            // In case the value is the same for all materials
            value = uniform.value;
        }
        if (!value) {
            return "continue";
        }
        var onLoadTexture = function (uniformName) {
            return function (texture) {
                if (uniform.value && uniformName) {
                    // Static uniform
                    shaderMaterial.setTexture(uniformName, texture);
                    delete unTreatedUniforms[uniformName];
                }
            };
        };
        // Texture (sampler2D)
        if (type === _glTFLoaderInterfaces__WEBPACK_IMPORTED_MODULE_0__.EParameterType.SAMPLER_2D) {
            GLTFLoaderExtension.LoadTextureAsync(gltfRuntime, material.values ? value : uniform.value, onLoadTexture(unif), function () { return onLoadTexture(null); });
        }
        // Others
        else {
            if (uniform.value && _glTFLoaderUtils__WEBPACK_IMPORTED_MODULE_2__.GLTFUtils.SetUniform(shaderMaterial, unif, material.values ? value : uniform.value, type)) {
                // Static uniform
                delete unTreatedUniforms[unif];
            }
        }
    };
    /**
     * Prepare values here (not matrices)
     */
    for (var unif in unTreatedUniforms) {
        _loop_1(unif);
    }
};
/**
 * Shader compilation failed
 * @param program
 * @param shaderMaterial
 * @param onError
 */
var onShaderCompileError = function (program, shaderMaterial, onError) {
    return function (effect, error) {
        shaderMaterial.dispose(true);
        onError("Cannot compile program named " + program.name + ". Error: " + error + ". Default material will be applied");
    };
};
/**
 * Shader compilation success
 * @param gltfRuntime
 * @param shaderMaterial
 * @param technique
 * @param material
 * @param unTreatedUniforms
 * @param onSuccess
 */
var onShaderCompileSuccess = function (gltfRuntime, shaderMaterial, technique, material, unTreatedUniforms, onSuccess) {
    return function (_) {
        prepareShaderMaterialUniforms(gltfRuntime, shaderMaterial, technique, material, unTreatedUniforms);
        shaderMaterial.onBind = function (mesh) {
            onBindShaderMaterial(mesh, gltfRuntime, unTreatedUniforms, shaderMaterial, technique, material, onSuccess);
        };
    };
};
/**
 * Returns the appropriate uniform if already handled by babylon
 * @param tokenizer
 * @param technique
 */
var parseShaderUniforms = function (tokenizer, technique, unTreatedUniforms) {
    for (var unif in technique.uniforms) {
        var uniform = technique.uniforms[unif];
        var uniformParameter = technique.parameters[uniform];
        if (tokenizer.currentIdentifier === unif) {
            if (uniformParameter.semantic && !uniformParameter.source && !uniformParameter.node) {
                var transformIndex = glTFTransforms.indexOf(uniformParameter.semantic);
                if (transformIndex !== -1) {
                    delete unTreatedUniforms[unif];
                    return babylonTransforms[transformIndex];
                }
            }
        }
    }
    return tokenizer.currentIdentifier;
};
/**
 * All shaders loaded. Create materials one by one
 * @param gltfRuntime
 */
var importMaterials = function (gltfRuntime) {
    // Create materials
    for (var mat in gltfRuntime.materials) {
        GLTFLoaderExtension.LoadMaterialAsync(gltfRuntime, mat, function () { }, function () { });
    }
};
/**
 * Implementation of the base glTF spec
 * @internal
 */
var GLTFLoaderBase = /** @class */ (function () {
    function GLTFLoaderBase() {
    }
    GLTFLoaderBase.CreateRuntime = function (parsedData, scene, rootUrl) {
        var gltfRuntime = {
            extensions: {},
            accessors: {},
            buffers: {},
            bufferViews: {},
            meshes: {},
            lights: {},
            cameras: {},
            nodes: {},
            images: {},
            textures: {},
            shaders: {},
            programs: {},
            samplers: {},
            techniques: {},
            materials: {},
            animations: {},
            skins: {},
            extensionsUsed: [],
            scenes: {},
            buffersCount: 0,
            shaderscount: 0,
            scene: scene,
            rootUrl: rootUrl,
            loadedBufferCount: 0,
            loadedBufferViews: {},
            loadedShaderCount: 0,
            importOnlyMeshes: false,
            dummyNodes: [],
            assetContainer: null,
        };
        // Parse
        if (parsedData.extensions) {
            parseObject(parsedData.extensions, "extensions", gltfRuntime);
        }
        if (parsedData.extensionsUsed) {
            parseObject(parsedData.extensionsUsed, "extensionsUsed", gltfRuntime);
        }
        if (parsedData.buffers) {
            parseBuffers(parsedData.buffers, gltfRuntime);
        }
        if (parsedData.bufferViews) {
            parseObject(parsedData.bufferViews, "bufferViews", gltfRuntime);
        }
        if (parsedData.accessors) {
            parseObject(parsedData.accessors, "accessors", gltfRuntime);
        }
        if (parsedData.meshes) {
            parseObject(parsedData.meshes, "meshes", gltfRuntime);
        }
        if (parsedData.lights) {
            parseObject(parsedData.lights, "lights", gltfRuntime);
        }
        if (parsedData.cameras) {
            parseObject(parsedData.cameras, "cameras", gltfRuntime);
        }
        if (parsedData.nodes) {
            parseObject(parsedData.nodes, "nodes", gltfRuntime);
        }
        if (parsedData.images) {
            parseObject(parsedData.images, "images", gltfRuntime);
        }
        if (parsedData.textures) {
            parseObject(parsedData.textures, "textures", gltfRuntime);
        }
        if (parsedData.shaders) {
            parseShaders(parsedData.shaders, gltfRuntime);
        }
        if (parsedData.programs) {
            parseObject(parsedData.programs, "programs", gltfRuntime);
        }
        if (parsedData.samplers) {
            parseObject(parsedData.samplers, "samplers", gltfRuntime);
        }
        if (parsedData.techniques) {
            parseObject(parsedData.techniques, "techniques", gltfRuntime);
        }
        if (parsedData.materials) {
            parseObject(parsedData.materials, "materials", gltfRuntime);
        }
        if (parsedData.animations) {
            parseObject(parsedData.animations, "animations", gltfRuntime);
        }
        if (parsedData.skins) {
            parseObject(parsedData.skins, "skins", gltfRuntime);
        }
        if (parsedData.scenes) {
            gltfRuntime.scenes = parsedData.scenes;
        }
        if (parsedData.scene && parsedData.scenes) {
            gltfRuntime.currentScene = parsedData.scenes[parsedData.scene];
        }
        return gltfRuntime;
    };
    GLTFLoaderBase.LoadBufferAsync = function (gltfRuntime, id, onSuccess, onError, onProgress) {
        var buffer = gltfRuntime.buffers[id];
        if (babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Tools.IsBase64(buffer.uri)) {
            setTimeout(function () { return onSuccess(new Uint8Array(babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Tools.DecodeBase64(buffer.uri))); });
        }
        else {
            babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Tools.LoadFile(gltfRuntime.rootUrl + buffer.uri, function (data) { return onSuccess(new Uint8Array(data)); }, onProgress, undefined, true, function (request) {
                if (request) {
                    onError(request.status + " " + request.statusText);
                }
            });
        }
    };
    GLTFLoaderBase.LoadTextureBufferAsync = function (gltfRuntime, id, onSuccess, onError) {
        var texture = gltfRuntime.textures[id];
        if (!texture || !texture.source) {
            onError("");
            return;
        }
        if (texture.babylonTexture) {
            onSuccess(null);
            return;
        }
        var source = gltfRuntime.images[texture.source];
        if (babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Tools.IsBase64(source.uri)) {
            setTimeout(function () { return onSuccess(new Uint8Array(babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Tools.DecodeBase64(source.uri))); });
        }
        else {
            babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Tools.LoadFile(gltfRuntime.rootUrl + source.uri, function (data) { return onSuccess(new Uint8Array(data)); }, undefined, undefined, true, function (request) {
                if (request) {
                    onError(request.status + " " + request.statusText);
                }
            });
        }
    };
    GLTFLoaderBase.CreateTextureAsync = function (gltfRuntime, id, buffer, onSuccess) {
        var texture = gltfRuntime.textures[id];
        if (texture.babylonTexture) {
            onSuccess(texture.babylonTexture);
            return;
        }
        var sampler = gltfRuntime.samplers[texture.sampler];
        var createMipMaps = sampler.minFilter === _glTFLoaderInterfaces__WEBPACK_IMPORTED_MODULE_0__.ETextureFilterType.NEAREST_MIPMAP_NEAREST ||
            sampler.minFilter === _glTFLoaderInterfaces__WEBPACK_IMPORTED_MODULE_0__.ETextureFilterType.NEAREST_MIPMAP_LINEAR ||
            sampler.minFilter === _glTFLoaderInterfaces__WEBPACK_IMPORTED_MODULE_0__.ETextureFilterType.LINEAR_MIPMAP_NEAREST ||
            sampler.minFilter === _glTFLoaderInterfaces__WEBPACK_IMPORTED_MODULE_0__.ETextureFilterType.LINEAR_MIPMAP_LINEAR;
        var samplingMode = babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Texture.BILINEAR_SAMPLINGMODE;
        var blob = buffer == null ? new Blob() : new Blob([buffer]);
        var blobURL = URL.createObjectURL(blob);
        var revokeBlobURL = function () { return URL.revokeObjectURL(blobURL); };
        var newTexture = new babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Texture(blobURL, gltfRuntime.scene, !createMipMaps, true, samplingMode, revokeBlobURL, revokeBlobURL);
        if (sampler.wrapS !== undefined) {
            newTexture.wrapU = _glTFLoaderUtils__WEBPACK_IMPORTED_MODULE_2__.GLTFUtils.GetWrapMode(sampler.wrapS);
        }
        if (sampler.wrapT !== undefined) {
            newTexture.wrapV = _glTFLoaderUtils__WEBPACK_IMPORTED_MODULE_2__.GLTFUtils.GetWrapMode(sampler.wrapT);
        }
        newTexture.name = id;
        texture.babylonTexture = newTexture;
        onSuccess(newTexture);
    };
    GLTFLoaderBase.LoadShaderStringAsync = function (gltfRuntime, id, onSuccess, onError) {
        var shader = gltfRuntime.shaders[id];
        if (babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Tools.IsBase64(shader.uri)) {
            var shaderString = atob(shader.uri.split(",")[1]);
            if (onSuccess) {
                onSuccess(shaderString);
            }
        }
        else {
            babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Tools.LoadFile(gltfRuntime.rootUrl + shader.uri, onSuccess, undefined, undefined, false, function (request) {
                if (request && onError) {
                    onError(request.status + " " + request.statusText);
                }
            });
        }
    };
    GLTFLoaderBase.LoadMaterialAsync = function (gltfRuntime, id, onSuccess, onError) {
        var material = gltfRuntime.materials[id];
        if (!material.technique) {
            if (onError) {
                onError("No technique found.");
            }
            return;
        }
        var technique = gltfRuntime.techniques[material.technique];
        if (!technique) {
            gltfRuntime.scene._blockEntityCollection = !!gltfRuntime.assetContainer;
            var defaultMaterial = new babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.StandardMaterial(id, gltfRuntime.scene);
            defaultMaterial._parentContainer = gltfRuntime.assetContainer;
            gltfRuntime.scene._blockEntityCollection = false;
            defaultMaterial.diffuseColor = new babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Color3(0.5, 0.5, 0.5);
            defaultMaterial.sideOrientation = babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Material.CounterClockWiseSideOrientation;
            onSuccess(defaultMaterial);
            return;
        }
        var program = gltfRuntime.programs[technique.program];
        var states = technique.states;
        var vertexShader = babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Effect.ShadersStore[program.vertexShader + "VertexShader"];
        var pixelShader = babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Effect.ShadersStore[program.fragmentShader + "PixelShader"];
        var newVertexShader = "";
        var newPixelShader = "";
        var vertexTokenizer = new Tokenizer(vertexShader);
        var pixelTokenizer = new Tokenizer(pixelShader);
        var unTreatedUniforms = {};
        var uniforms = [];
        var attributes = [];
        var samplers = [];
        // Fill uniform, sampler2D and attributes
        for (var unif in technique.uniforms) {
            var uniform = technique.uniforms[unif];
            var uniformParameter = technique.parameters[uniform];
            unTreatedUniforms[unif] = uniformParameter;
            if (uniformParameter.semantic && !uniformParameter.node && !uniformParameter.source) {
                var transformIndex = glTFTransforms.indexOf(uniformParameter.semantic);
                if (transformIndex !== -1) {
                    uniforms.push(babylonTransforms[transformIndex]);
                    delete unTreatedUniforms[unif];
                }
                else {
                    uniforms.push(unif);
                }
            }
            else if (uniformParameter.type === _glTFLoaderInterfaces__WEBPACK_IMPORTED_MODULE_0__.EParameterType.SAMPLER_2D) {
                samplers.push(unif);
            }
            else {
                uniforms.push(unif);
            }
        }
        for (var attr in technique.attributes) {
            var attribute = technique.attributes[attr];
            var attributeParameter = technique.parameters[attribute];
            if (attributeParameter.semantic) {
                var name_1 = getAttribute(attributeParameter);
                if (name_1) {
                    attributes.push(name_1);
                }
            }
        }
        // Configure vertex shader
        while (!vertexTokenizer.isEnd() && vertexTokenizer.getNextToken()) {
            var tokenType = vertexTokenizer.currentToken;
            if (tokenType !== ETokenType.IDENTIFIER) {
                newVertexShader += vertexTokenizer.currentString;
                continue;
            }
            var foundAttribute = false;
            for (var attr in technique.attributes) {
                var attribute = technique.attributes[attr];
                var attributeParameter = technique.parameters[attribute];
                if (vertexTokenizer.currentIdentifier === attr && attributeParameter.semantic) {
                    newVertexShader += getAttribute(attributeParameter);
                    foundAttribute = true;
                    break;
                }
            }
            if (foundAttribute) {
                continue;
            }
            newVertexShader += parseShaderUniforms(vertexTokenizer, technique, unTreatedUniforms);
        }
        // Configure pixel shader
        while (!pixelTokenizer.isEnd() && pixelTokenizer.getNextToken()) {
            var tokenType = pixelTokenizer.currentToken;
            if (tokenType !== ETokenType.IDENTIFIER) {
                newPixelShader += pixelTokenizer.currentString;
                continue;
            }
            newPixelShader += parseShaderUniforms(pixelTokenizer, technique, unTreatedUniforms);
        }
        // Create shader material
        var shaderPath = {
            vertex: program.vertexShader + id,
            fragment: program.fragmentShader + id,
        };
        var options = {
            attributes: attributes,
            uniforms: uniforms,
            samplers: samplers,
            needAlphaBlending: states && states.enable && states.enable.indexOf(3042) !== -1,
        };
        babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Effect.ShadersStore[program.vertexShader + id + "VertexShader"] = newVertexShader;
        babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Effect.ShadersStore[program.fragmentShader + id + "PixelShader"] = newPixelShader;
        var shaderMaterial = new babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.ShaderMaterial(id, gltfRuntime.scene, shaderPath, options);
        shaderMaterial.onError = onShaderCompileError(program, shaderMaterial, onError);
        shaderMaterial.onCompiled = onShaderCompileSuccess(gltfRuntime, shaderMaterial, technique, material, unTreatedUniforms, onSuccess);
        shaderMaterial.sideOrientation = babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Material.CounterClockWiseSideOrientation;
        if (states && states.functions) {
            var functions = states.functions;
            if (functions.cullFace && functions.cullFace[0] !== _glTFLoaderInterfaces__WEBPACK_IMPORTED_MODULE_0__.ECullingType.BACK) {
                shaderMaterial.backFaceCulling = false;
            }
            var blendFunc = functions.blendFuncSeparate;
            if (blendFunc) {
                if (blendFunc[0] === _glTFLoaderInterfaces__WEBPACK_IMPORTED_MODULE_0__.EBlendingFunction.SRC_ALPHA &&
                    blendFunc[1] === _glTFLoaderInterfaces__WEBPACK_IMPORTED_MODULE_0__.EBlendingFunction.ONE_MINUS_SRC_ALPHA &&
                    blendFunc[2] === _glTFLoaderInterfaces__WEBPACK_IMPORTED_MODULE_0__.EBlendingFunction.ONE &&
                    blendFunc[3] === _glTFLoaderInterfaces__WEBPACK_IMPORTED_MODULE_0__.EBlendingFunction.ONE) {
                    shaderMaterial.alphaMode = babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Constants.ALPHA_COMBINE;
                }
                else if (blendFunc[0] === _glTFLoaderInterfaces__WEBPACK_IMPORTED_MODULE_0__.EBlendingFunction.ONE &&
                    blendFunc[1] === _glTFLoaderInterfaces__WEBPACK_IMPORTED_MODULE_0__.EBlendingFunction.ONE &&
                    blendFunc[2] === _glTFLoaderInterfaces__WEBPACK_IMPORTED_MODULE_0__.EBlendingFunction.ZERO &&
                    blendFunc[3] === _glTFLoaderInterfaces__WEBPACK_IMPORTED_MODULE_0__.EBlendingFunction.ONE) {
                    shaderMaterial.alphaMode = babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Constants.ALPHA_ONEONE;
                }
                else if (blendFunc[0] === _glTFLoaderInterfaces__WEBPACK_IMPORTED_MODULE_0__.EBlendingFunction.SRC_ALPHA &&
                    blendFunc[1] === _glTFLoaderInterfaces__WEBPACK_IMPORTED_MODULE_0__.EBlendingFunction.ONE &&
                    blendFunc[2] === _glTFLoaderInterfaces__WEBPACK_IMPORTED_MODULE_0__.EBlendingFunction.ZERO &&
                    blendFunc[3] === _glTFLoaderInterfaces__WEBPACK_IMPORTED_MODULE_0__.EBlendingFunction.ONE) {
                    shaderMaterial.alphaMode = babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Constants.ALPHA_ADD;
                }
                else if (blendFunc[0] === _glTFLoaderInterfaces__WEBPACK_IMPORTED_MODULE_0__.EBlendingFunction.ZERO &&
                    blendFunc[1] === _glTFLoaderInterfaces__WEBPACK_IMPORTED_MODULE_0__.EBlendingFunction.ONE_MINUS_SRC_COLOR &&
                    blendFunc[2] === _glTFLoaderInterfaces__WEBPACK_IMPORTED_MODULE_0__.EBlendingFunction.ONE &&
                    blendFunc[3] === _glTFLoaderInterfaces__WEBPACK_IMPORTED_MODULE_0__.EBlendingFunction.ONE) {
                    shaderMaterial.alphaMode = babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Constants.ALPHA_SUBTRACT;
                }
                else if (blendFunc[0] === _glTFLoaderInterfaces__WEBPACK_IMPORTED_MODULE_0__.EBlendingFunction.DST_COLOR &&
                    blendFunc[1] === _glTFLoaderInterfaces__WEBPACK_IMPORTED_MODULE_0__.EBlendingFunction.ZERO &&
                    blendFunc[2] === _glTFLoaderInterfaces__WEBPACK_IMPORTED_MODULE_0__.EBlendingFunction.ONE &&
                    blendFunc[3] === _glTFLoaderInterfaces__WEBPACK_IMPORTED_MODULE_0__.EBlendingFunction.ONE) {
                    shaderMaterial.alphaMode = babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Constants.ALPHA_MULTIPLY;
                }
                else if (blendFunc[0] === _glTFLoaderInterfaces__WEBPACK_IMPORTED_MODULE_0__.EBlendingFunction.SRC_ALPHA &&
                    blendFunc[1] === _glTFLoaderInterfaces__WEBPACK_IMPORTED_MODULE_0__.EBlendingFunction.ONE_MINUS_SRC_COLOR &&
                    blendFunc[2] === _glTFLoaderInterfaces__WEBPACK_IMPORTED_MODULE_0__.EBlendingFunction.ONE &&
                    blendFunc[3] === _glTFLoaderInterfaces__WEBPACK_IMPORTED_MODULE_0__.EBlendingFunction.ONE) {
                    shaderMaterial.alphaMode = babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Constants.ALPHA_MAXIMIZED;
                }
            }
        }
    };
    return GLTFLoaderBase;
}());

/**
 * glTF V1 Loader
 * @internal
 * @deprecated
 */
var GLTFLoader = /** @class */ (function () {
    function GLTFLoader() {
    }
    GLTFLoader.RegisterExtension = function (extension) {
        if (GLTFLoader.Extensions[extension.name]) {
            babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Tools.Error('Tool with the same name "' + extension.name + '" already exists');
            return;
        }
        GLTFLoader.Extensions[extension.name] = extension;
    };
    GLTFLoader.prototype.dispose = function () {
        // do nothing
    };
    GLTFLoader.prototype._importMeshAsync = function (meshesNames, scene, data, rootUrl, assetContainer, onSuccess, onProgress, onError) {
        var _this = this;
        scene.useRightHandedSystem = true;
        GLTFLoaderExtension.LoadRuntimeAsync(scene, data, rootUrl, function (gltfRuntime) {
            gltfRuntime.assetContainer = assetContainer;
            gltfRuntime.importOnlyMeshes = true;
            if (meshesNames === "") {
                gltfRuntime.importMeshesNames = [];
            }
            else if (typeof meshesNames === "string") {
                gltfRuntime.importMeshesNames = [meshesNames];
            }
            else if (meshesNames && !(meshesNames instanceof Array)) {
                gltfRuntime.importMeshesNames = [meshesNames];
            }
            else {
                gltfRuntime.importMeshesNames = [];
                babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Tools.Warn("Argument meshesNames must be of type string or string[]");
            }
            // Create nodes
            _this._createNodes(gltfRuntime);
            var meshes = [];
            var skeletons = [];
            // Fill arrays of meshes and skeletons
            for (var nde in gltfRuntime.nodes) {
                var node = gltfRuntime.nodes[nde];
                if (node.babylonNode instanceof babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.AbstractMesh) {
                    meshes.push(node.babylonNode);
                }
            }
            for (var skl in gltfRuntime.skins) {
                var skin = gltfRuntime.skins[skl];
                if (skin.babylonSkeleton instanceof babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Skeleton) {
                    skeletons.push(skin.babylonSkeleton);
                }
            }
            // Load buffers, shaders, materials, etc.
            _this._loadBuffersAsync(gltfRuntime, function () {
                _this._loadShadersAsync(gltfRuntime, function () {
                    importMaterials(gltfRuntime);
                    postLoad(gltfRuntime);
                    if (!_glTFFileLoader__WEBPACK_IMPORTED_MODULE_3__.GLTFFileLoader.IncrementalLoading && onSuccess) {
                        onSuccess(meshes, skeletons);
                    }
                });
            });
            if (_glTFFileLoader__WEBPACK_IMPORTED_MODULE_3__.GLTFFileLoader.IncrementalLoading && onSuccess) {
                onSuccess(meshes, skeletons);
            }
        }, onError);
        return true;
    };
    /**
     * Imports one or more meshes from a loaded gltf file and adds them to the scene
     * @param meshesNames a string or array of strings of the mesh names that should be loaded from the file
     * @param scene the scene the meshes should be added to
     * @param assetContainer defines the asset container to use (can be null)
     * @param data gltf data containing information of the meshes in a loaded file
     * @param rootUrl root url to load from
     * @param onProgress event that fires when loading progress has occured
     * @returns a promise containg the loaded meshes, particles, skeletons and animations
     */
    GLTFLoader.prototype.importMeshAsync = function (meshesNames, scene, assetContainer, data, rootUrl, onProgress) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this._importMeshAsync(meshesNames, scene, data, rootUrl, assetContainer, function (meshes, skeletons) {
                resolve({
                    meshes: meshes,
                    particleSystems: [],
                    skeletons: skeletons,
                    animationGroups: [],
                    lights: [],
                    transformNodes: [],
                    geometries: [],
                });
            }, onProgress, function (message) {
                reject(new Error(message));
            });
        });
    };
    GLTFLoader.prototype._loadAsync = function (scene, data, rootUrl, onSuccess, onProgress, onError) {
        var _this = this;
        scene.useRightHandedSystem = true;
        GLTFLoaderExtension.LoadRuntimeAsync(scene, data, rootUrl, function (gltfRuntime) {
            // Load runtime extensios
            GLTFLoaderExtension.LoadRuntimeExtensionsAsync(gltfRuntime, function () {
                // Create nodes
                _this._createNodes(gltfRuntime);
                // Load buffers, shaders, materials, etc.
                _this._loadBuffersAsync(gltfRuntime, function () {
                    _this._loadShadersAsync(gltfRuntime, function () {
                        importMaterials(gltfRuntime);
                        postLoad(gltfRuntime);
                        if (!_glTFFileLoader__WEBPACK_IMPORTED_MODULE_3__.GLTFFileLoader.IncrementalLoading) {
                            onSuccess();
                        }
                    });
                });
                if (_glTFFileLoader__WEBPACK_IMPORTED_MODULE_3__.GLTFFileLoader.IncrementalLoading) {
                    onSuccess();
                }
            }, onError);
        }, onError);
    };
    /**
     * Imports all objects from a loaded gltf file and adds them to the scene
     * @param scene the scene the objects should be added to
     * @param data gltf data containing information of the meshes in a loaded file
     * @param rootUrl root url to load from
     * @param onProgress event that fires when loading progress has occured
     * @returns a promise which completes when objects have been loaded to the scene
     */
    GLTFLoader.prototype.loadAsync = function (scene, data, rootUrl, onProgress) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this._loadAsync(scene, data, rootUrl, function () {
                resolve();
            }, onProgress, function (message) {
                reject(new Error(message));
            });
        });
    };
    GLTFLoader.prototype._loadShadersAsync = function (gltfRuntime, onload) {
        var hasShaders = false;
        var processShader = function (sha, shader) {
            GLTFLoaderExtension.LoadShaderStringAsync(gltfRuntime, sha, function (shaderString) {
                if (shaderString instanceof ArrayBuffer) {
                    return;
                }
                gltfRuntime.loadedShaderCount++;
                if (shaderString) {
                    babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Effect.ShadersStore[sha + (shader.type === _glTFLoaderInterfaces__WEBPACK_IMPORTED_MODULE_0__.EShaderType.VERTEX ? "VertexShader" : "PixelShader")] = shaderString;
                }
                if (gltfRuntime.loadedShaderCount === gltfRuntime.shaderscount) {
                    onload();
                }
            }, function () {
                babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Tools.Error("Error when loading shader program named " + sha + " located at " + shader.uri);
            });
        };
        for (var sha in gltfRuntime.shaders) {
            hasShaders = true;
            var shader = gltfRuntime.shaders[sha];
            if (shader) {
                processShader.bind(this, sha, shader)();
            }
            else {
                babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Tools.Error("No shader named: " + sha);
            }
        }
        if (!hasShaders) {
            onload();
        }
    };
    GLTFLoader.prototype._loadBuffersAsync = function (gltfRuntime, onLoad) {
        var hasBuffers = false;
        var processBuffer = function (buf, buffer) {
            GLTFLoaderExtension.LoadBufferAsync(gltfRuntime, buf, function (bufferView) {
                gltfRuntime.loadedBufferCount++;
                if (bufferView) {
                    if (bufferView.byteLength != gltfRuntime.buffers[buf].byteLength) {
                        babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Tools.Error("Buffer named " + buf + " is length " + bufferView.byteLength + ". Expected: " + buffer.byteLength); // Improve error message
                    }
                    gltfRuntime.loadedBufferViews[buf] = bufferView;
                }
                if (gltfRuntime.loadedBufferCount === gltfRuntime.buffersCount) {
                    onLoad();
                }
            }, function () {
                babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Tools.Error("Error when loading buffer named " + buf + " located at " + buffer.uri);
            });
        };
        for (var buf in gltfRuntime.buffers) {
            hasBuffers = true;
            var buffer = gltfRuntime.buffers[buf];
            if (buffer) {
                processBuffer.bind(this, buf, buffer)();
            }
            else {
                babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Tools.Error("No buffer named: " + buf);
            }
        }
        if (!hasBuffers) {
            onLoad();
        }
    };
    GLTFLoader.prototype._createNodes = function (gltfRuntime) {
        var currentScene = gltfRuntime.currentScene;
        if (currentScene) {
            // Only one scene even if multiple scenes are defined
            for (var i = 0; i < currentScene.nodes.length; i++) {
                traverseNodes(gltfRuntime, currentScene.nodes[i], null);
            }
        }
        else {
            // Load all scenes
            for (var thing in gltfRuntime.scenes) {
                currentScene = gltfRuntime.scenes[thing];
                for (var i = 0; i < currentScene.nodes.length; i++) {
                    traverseNodes(gltfRuntime, currentScene.nodes[i], null);
                }
            }
        }
    };
    GLTFLoader.Extensions = {};
    return GLTFLoader;
}());
/** @internal */
var GLTFLoaderExtension = /** @class */ (function () {
    function GLTFLoaderExtension(name) {
        this._name = name;
    }
    Object.defineProperty(GLTFLoaderExtension.prototype, "name", {
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Defines an override for loading the runtime
     * Return true to stop further extensions from loading the runtime
     * @param scene
     * @param data
     * @param rootUrl
     * @param onSuccess
     * @param onError
     */
    GLTFLoaderExtension.prototype.loadRuntimeAsync = function (scene, data, rootUrl, onSuccess, onError) {
        return false;
    };
    /**
     * Defines an onverride for creating gltf runtime
     * Return true to stop further extensions from creating the runtime
     * @param gltfRuntime
     * @param onSuccess
     * @param onError
     */
    GLTFLoaderExtension.prototype.loadRuntimeExtensionsAsync = function (gltfRuntime, onSuccess, onError) {
        return false;
    };
    /**
     * Defines an override for loading buffers
     * Return true to stop further extensions from loading this buffer
     * @param gltfRuntime
     * @param id
     * @param onSuccess
     * @param onError
     * @param onProgress
     */
    GLTFLoaderExtension.prototype.loadBufferAsync = function (gltfRuntime, id, onSuccess, onError, onProgress) {
        return false;
    };
    /**
     * Defines an override for loading texture buffers
     * Return true to stop further extensions from loading this texture data
     * @param gltfRuntime
     * @param id
     * @param onSuccess
     * @param onError
     */
    GLTFLoaderExtension.prototype.loadTextureBufferAsync = function (gltfRuntime, id, onSuccess, onError) {
        return false;
    };
    /**
     * Defines an override for creating textures
     * Return true to stop further extensions from loading this texture
     * @param gltfRuntime
     * @param id
     * @param buffer
     * @param onSuccess
     * @param onError
     */
    GLTFLoaderExtension.prototype.createTextureAsync = function (gltfRuntime, id, buffer, onSuccess, onError) {
        return false;
    };
    /**
     * Defines an override for loading shader strings
     * Return true to stop further extensions from loading this shader data
     * @param gltfRuntime
     * @param id
     * @param onSuccess
     * @param onError
     */
    GLTFLoaderExtension.prototype.loadShaderStringAsync = function (gltfRuntime, id, onSuccess, onError) {
        return false;
    };
    /**
     * Defines an override for loading materials
     * Return true to stop further extensions from loading this material
     * @param gltfRuntime
     * @param id
     * @param onSuccess
     * @param onError
     */
    GLTFLoaderExtension.prototype.loadMaterialAsync = function (gltfRuntime, id, onSuccess, onError) {
        return false;
    };
    // ---------
    // Utilities
    // ---------
    GLTFLoaderExtension.LoadRuntimeAsync = function (scene, data, rootUrl, onSuccess, onError) {
        GLTFLoaderExtension._ApplyExtensions(function (loaderExtension) {
            return loaderExtension.loadRuntimeAsync(scene, data, rootUrl, onSuccess, onError);
        }, function () {
            setTimeout(function () {
                if (!onSuccess) {
                    return;
                }
                onSuccess(GLTFLoaderBase.CreateRuntime(data.json, scene, rootUrl));
            });
        });
    };
    GLTFLoaderExtension.LoadRuntimeExtensionsAsync = function (gltfRuntime, onSuccess, onError) {
        GLTFLoaderExtension._ApplyExtensions(function (loaderExtension) {
            return loaderExtension.loadRuntimeExtensionsAsync(gltfRuntime, onSuccess, onError);
        }, function () {
            setTimeout(function () {
                onSuccess();
            });
        });
    };
    GLTFLoaderExtension.LoadBufferAsync = function (gltfRuntime, id, onSuccess, onError, onProgress) {
        GLTFLoaderExtension._ApplyExtensions(function (loaderExtension) {
            return loaderExtension.loadBufferAsync(gltfRuntime, id, onSuccess, onError, onProgress);
        }, function () {
            GLTFLoaderBase.LoadBufferAsync(gltfRuntime, id, onSuccess, onError, onProgress);
        });
    };
    GLTFLoaderExtension.LoadTextureAsync = function (gltfRuntime, id, onSuccess, onError) {
        GLTFLoaderExtension._LoadTextureBufferAsync(gltfRuntime, id, function (buffer) {
            if (buffer) {
                GLTFLoaderExtension._CreateTextureAsync(gltfRuntime, id, buffer, onSuccess, onError);
            }
        }, onError);
    };
    GLTFLoaderExtension.LoadShaderStringAsync = function (gltfRuntime, id, onSuccess, onError) {
        GLTFLoaderExtension._ApplyExtensions(function (loaderExtension) {
            return loaderExtension.loadShaderStringAsync(gltfRuntime, id, onSuccess, onError);
        }, function () {
            GLTFLoaderBase.LoadShaderStringAsync(gltfRuntime, id, onSuccess, onError);
        });
    };
    GLTFLoaderExtension.LoadMaterialAsync = function (gltfRuntime, id, onSuccess, onError) {
        GLTFLoaderExtension._ApplyExtensions(function (loaderExtension) {
            return loaderExtension.loadMaterialAsync(gltfRuntime, id, onSuccess, onError);
        }, function () {
            GLTFLoaderBase.LoadMaterialAsync(gltfRuntime, id, onSuccess, onError);
        });
    };
    GLTFLoaderExtension._LoadTextureBufferAsync = function (gltfRuntime, id, onSuccess, onError) {
        GLTFLoaderExtension._ApplyExtensions(function (loaderExtension) {
            return loaderExtension.loadTextureBufferAsync(gltfRuntime, id, onSuccess, onError);
        }, function () {
            GLTFLoaderBase.LoadTextureBufferAsync(gltfRuntime, id, onSuccess, onError);
        });
    };
    GLTFLoaderExtension._CreateTextureAsync = function (gltfRuntime, id, buffer, onSuccess, onError) {
        GLTFLoaderExtension._ApplyExtensions(function (loaderExtension) {
            return loaderExtension.createTextureAsync(gltfRuntime, id, buffer, onSuccess, onError);
        }, function () {
            GLTFLoaderBase.CreateTextureAsync(gltfRuntime, id, buffer, onSuccess);
        });
    };
    GLTFLoaderExtension._ApplyExtensions = function (func, defaultFunc) {
        for (var extensionName in GLTFLoader.Extensions) {
            var loaderExtension = GLTFLoader.Extensions[extensionName];
            if (func(loaderExtension)) {
                return;
            }
        }
        defaultFunc();
    };
    return GLTFLoaderExtension;
}());

_glTFFileLoader__WEBPACK_IMPORTED_MODULE_3__.GLTFFileLoader._CreateGLTF1Loader = function () { return new GLTFLoader(); };


/***/ }),

/***/ "../../../dev/loaders/src/glTF/1.0/glTFLoaderInterfaces.ts":
/*!*****************************************************************!*\
  !*** ../../../dev/loaders/src/glTF/1.0/glTFLoaderInterfaces.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EBlendingFunction: () => (/* binding */ EBlendingFunction),
/* harmony export */   EComponentType: () => (/* binding */ EComponentType),
/* harmony export */   ECullingType: () => (/* binding */ ECullingType),
/* harmony export */   EParameterType: () => (/* binding */ EParameterType),
/* harmony export */   EShaderType: () => (/* binding */ EShaderType),
/* harmony export */   ETextureFilterType: () => (/* binding */ ETextureFilterType),
/* harmony export */   ETextureFormat: () => (/* binding */ ETextureFormat),
/* harmony export */   ETextureWrapMode: () => (/* binding */ ETextureWrapMode)
/* harmony export */ });
/**
 * Enums
 * @internal
 */
var EComponentType;
(function (EComponentType) {
    EComponentType[EComponentType["BYTE"] = 5120] = "BYTE";
    EComponentType[EComponentType["UNSIGNED_BYTE"] = 5121] = "UNSIGNED_BYTE";
    EComponentType[EComponentType["SHORT"] = 5122] = "SHORT";
    EComponentType[EComponentType["UNSIGNED_SHORT"] = 5123] = "UNSIGNED_SHORT";
    EComponentType[EComponentType["FLOAT"] = 5126] = "FLOAT";
})(EComponentType || (EComponentType = {}));
/** @internal */
var EShaderType;
(function (EShaderType) {
    EShaderType[EShaderType["FRAGMENT"] = 35632] = "FRAGMENT";
    EShaderType[EShaderType["VERTEX"] = 35633] = "VERTEX";
})(EShaderType || (EShaderType = {}));
/** @internal */
var EParameterType;
(function (EParameterType) {
    EParameterType[EParameterType["BYTE"] = 5120] = "BYTE";
    EParameterType[EParameterType["UNSIGNED_BYTE"] = 5121] = "UNSIGNED_BYTE";
    EParameterType[EParameterType["SHORT"] = 5122] = "SHORT";
    EParameterType[EParameterType["UNSIGNED_SHORT"] = 5123] = "UNSIGNED_SHORT";
    EParameterType[EParameterType["INT"] = 5124] = "INT";
    EParameterType[EParameterType["UNSIGNED_INT"] = 5125] = "UNSIGNED_INT";
    EParameterType[EParameterType["FLOAT"] = 5126] = "FLOAT";
    EParameterType[EParameterType["FLOAT_VEC2"] = 35664] = "FLOAT_VEC2";
    EParameterType[EParameterType["FLOAT_VEC3"] = 35665] = "FLOAT_VEC3";
    EParameterType[EParameterType["FLOAT_VEC4"] = 35666] = "FLOAT_VEC4";
    EParameterType[EParameterType["INT_VEC2"] = 35667] = "INT_VEC2";
    EParameterType[EParameterType["INT_VEC3"] = 35668] = "INT_VEC3";
    EParameterType[EParameterType["INT_VEC4"] = 35669] = "INT_VEC4";
    EParameterType[EParameterType["BOOL"] = 35670] = "BOOL";
    EParameterType[EParameterType["BOOL_VEC2"] = 35671] = "BOOL_VEC2";
    EParameterType[EParameterType["BOOL_VEC3"] = 35672] = "BOOL_VEC3";
    EParameterType[EParameterType["BOOL_VEC4"] = 35673] = "BOOL_VEC4";
    EParameterType[EParameterType["FLOAT_MAT2"] = 35674] = "FLOAT_MAT2";
    EParameterType[EParameterType["FLOAT_MAT3"] = 35675] = "FLOAT_MAT3";
    EParameterType[EParameterType["FLOAT_MAT4"] = 35676] = "FLOAT_MAT4";
    EParameterType[EParameterType["SAMPLER_2D"] = 35678] = "SAMPLER_2D";
})(EParameterType || (EParameterType = {}));
/** @internal */
var ETextureWrapMode;
(function (ETextureWrapMode) {
    ETextureWrapMode[ETextureWrapMode["CLAMP_TO_EDGE"] = 33071] = "CLAMP_TO_EDGE";
    ETextureWrapMode[ETextureWrapMode["MIRRORED_REPEAT"] = 33648] = "MIRRORED_REPEAT";
    ETextureWrapMode[ETextureWrapMode["REPEAT"] = 10497] = "REPEAT";
})(ETextureWrapMode || (ETextureWrapMode = {}));
/** @internal */
var ETextureFilterType;
(function (ETextureFilterType) {
    ETextureFilterType[ETextureFilterType["NEAREST"] = 9728] = "NEAREST";
    ETextureFilterType[ETextureFilterType["LINEAR"] = 9728] = "LINEAR";
    ETextureFilterType[ETextureFilterType["NEAREST_MIPMAP_NEAREST"] = 9984] = "NEAREST_MIPMAP_NEAREST";
    ETextureFilterType[ETextureFilterType["LINEAR_MIPMAP_NEAREST"] = 9985] = "LINEAR_MIPMAP_NEAREST";
    ETextureFilterType[ETextureFilterType["NEAREST_MIPMAP_LINEAR"] = 9986] = "NEAREST_MIPMAP_LINEAR";
    ETextureFilterType[ETextureFilterType["LINEAR_MIPMAP_LINEAR"] = 9987] = "LINEAR_MIPMAP_LINEAR";
})(ETextureFilterType || (ETextureFilterType = {}));
/** @internal */
var ETextureFormat;
(function (ETextureFormat) {
    ETextureFormat[ETextureFormat["ALPHA"] = 6406] = "ALPHA";
    ETextureFormat[ETextureFormat["RGB"] = 6407] = "RGB";
    ETextureFormat[ETextureFormat["RGBA"] = 6408] = "RGBA";
    ETextureFormat[ETextureFormat["LUMINANCE"] = 6409] = "LUMINANCE";
    ETextureFormat[ETextureFormat["LUMINANCE_ALPHA"] = 6410] = "LUMINANCE_ALPHA";
})(ETextureFormat || (ETextureFormat = {}));
/** @internal */
var ECullingType;
(function (ECullingType) {
    ECullingType[ECullingType["FRONT"] = 1028] = "FRONT";
    ECullingType[ECullingType["BACK"] = 1029] = "BACK";
    ECullingType[ECullingType["FRONT_AND_BACK"] = 1032] = "FRONT_AND_BACK";
})(ECullingType || (ECullingType = {}));
/** @internal */
var EBlendingFunction;
(function (EBlendingFunction) {
    EBlendingFunction[EBlendingFunction["ZERO"] = 0] = "ZERO";
    EBlendingFunction[EBlendingFunction["ONE"] = 1] = "ONE";
    EBlendingFunction[EBlendingFunction["SRC_COLOR"] = 768] = "SRC_COLOR";
    EBlendingFunction[EBlendingFunction["ONE_MINUS_SRC_COLOR"] = 769] = "ONE_MINUS_SRC_COLOR";
    EBlendingFunction[EBlendingFunction["DST_COLOR"] = 774] = "DST_COLOR";
    EBlendingFunction[EBlendingFunction["ONE_MINUS_DST_COLOR"] = 775] = "ONE_MINUS_DST_COLOR";
    EBlendingFunction[EBlendingFunction["SRC_ALPHA"] = 770] = "SRC_ALPHA";
    EBlendingFunction[EBlendingFunction["ONE_MINUS_SRC_ALPHA"] = 771] = "ONE_MINUS_SRC_ALPHA";
    EBlendingFunction[EBlendingFunction["DST_ALPHA"] = 772] = "DST_ALPHA";
    EBlendingFunction[EBlendingFunction["ONE_MINUS_DST_ALPHA"] = 773] = "ONE_MINUS_DST_ALPHA";
    EBlendingFunction[EBlendingFunction["CONSTANT_COLOR"] = 32769] = "CONSTANT_COLOR";
    EBlendingFunction[EBlendingFunction["ONE_MINUS_CONSTANT_COLOR"] = 32770] = "ONE_MINUS_CONSTANT_COLOR";
    EBlendingFunction[EBlendingFunction["CONSTANT_ALPHA"] = 32771] = "CONSTANT_ALPHA";
    EBlendingFunction[EBlendingFunction["ONE_MINUS_CONSTANT_ALPHA"] = 32772] = "ONE_MINUS_CONSTANT_ALPHA";
    EBlendingFunction[EBlendingFunction["SRC_ALPHA_SATURATE"] = 776] = "SRC_ALPHA_SATURATE";
})(EBlendingFunction || (EBlendingFunction = {}));


/***/ }),

/***/ "../../../dev/loaders/src/glTF/1.0/glTFLoaderUtils.ts":
/*!************************************************************!*\
  !*** ../../../dev/loaders/src/glTF/1.0/glTFLoaderUtils.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GLTFUtils: () => (/* binding */ GLTFUtils)
/* harmony export */ });
/* harmony import */ var _glTFLoaderInterfaces__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./glTFLoaderInterfaces */ "../../../dev/loaders/src/glTF/1.0/glTFLoaderInterfaces.ts");
/* harmony import */ var babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babylonjs/Materials/Textures/texture */ "babylonjs/Misc/observable");
/* harmony import */ var babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__);






/**
 * Utils functions for GLTF
 * @internal
 * @deprecated
 */
var GLTFUtils = /** @class */ (function () {
    function GLTFUtils() {
    }
    /**
     * Sets the given "parameter" matrix
     * @param scene the Scene object
     * @param source the source node where to pick the matrix
     * @param parameter the GLTF technique parameter
     * @param uniformName the name of the shader's uniform
     * @param shaderMaterial the shader material
     */
    GLTFUtils.SetMatrix = function (scene, source, parameter, uniformName, shaderMaterial) {
        var mat = null;
        if (parameter.semantic === "MODEL") {
            mat = source.getWorldMatrix();
        }
        else if (parameter.semantic === "PROJECTION") {
            mat = scene.getProjectionMatrix();
        }
        else if (parameter.semantic === "VIEW") {
            mat = scene.getViewMatrix();
        }
        else if (parameter.semantic === "MODELVIEWINVERSETRANSPOSE") {
            mat = babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Matrix.Transpose(source.getWorldMatrix().multiply(scene.getViewMatrix()).invert());
        }
        else if (parameter.semantic === "MODELVIEW") {
            mat = source.getWorldMatrix().multiply(scene.getViewMatrix());
        }
        else if (parameter.semantic === "MODELVIEWPROJECTION") {
            mat = source.getWorldMatrix().multiply(scene.getTransformMatrix());
        }
        else if (parameter.semantic === "MODELINVERSE") {
            mat = source.getWorldMatrix().invert();
        }
        else if (parameter.semantic === "VIEWINVERSE") {
            mat = scene.getViewMatrix().invert();
        }
        else if (parameter.semantic === "PROJECTIONINVERSE") {
            mat = scene.getProjectionMatrix().invert();
        }
        else if (parameter.semantic === "MODELVIEWINVERSE") {
            mat = source.getWorldMatrix().multiply(scene.getViewMatrix()).invert();
        }
        else if (parameter.semantic === "MODELVIEWPROJECTIONINVERSE") {
            mat = source.getWorldMatrix().multiply(scene.getTransformMatrix()).invert();
        }
        else if (parameter.semantic === "MODELINVERSETRANSPOSE") {
            mat = babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Matrix.Transpose(source.getWorldMatrix().invert());
        }
        if (mat) {
            switch (parameter.type) {
                case _glTFLoaderInterfaces__WEBPACK_IMPORTED_MODULE_0__.EParameterType.FLOAT_MAT2:
                    shaderMaterial.setMatrix2x2(uniformName, babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Matrix.GetAsMatrix2x2(mat));
                    break;
                case _glTFLoaderInterfaces__WEBPACK_IMPORTED_MODULE_0__.EParameterType.FLOAT_MAT3:
                    shaderMaterial.setMatrix3x3(uniformName, babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Matrix.GetAsMatrix3x3(mat));
                    break;
                case _glTFLoaderInterfaces__WEBPACK_IMPORTED_MODULE_0__.EParameterType.FLOAT_MAT4:
                    shaderMaterial.setMatrix(uniformName, mat);
                    break;
                default:
                    break;
            }
        }
    };
    /**
     * Sets the given "parameter" matrix
     * @param shaderMaterial the shader material
     * @param uniform the name of the shader's uniform
     * @param value the value of the uniform
     * @param type the uniform's type (EParameterType FLOAT, VEC2, VEC3 or VEC4)
     */
    GLTFUtils.SetUniform = function (shaderMaterial, uniform, value, type) {
        switch (type) {
            case _glTFLoaderInterfaces__WEBPACK_IMPORTED_MODULE_0__.EParameterType.FLOAT:
                shaderMaterial.setFloat(uniform, value);
                return true;
            case _glTFLoaderInterfaces__WEBPACK_IMPORTED_MODULE_0__.EParameterType.FLOAT_VEC2:
                shaderMaterial.setVector2(uniform, babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Vector2.FromArray(value));
                return true;
            case _glTFLoaderInterfaces__WEBPACK_IMPORTED_MODULE_0__.EParameterType.FLOAT_VEC3:
                shaderMaterial.setVector3(uniform, babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Vector3.FromArray(value));
                return true;
            case _glTFLoaderInterfaces__WEBPACK_IMPORTED_MODULE_0__.EParameterType.FLOAT_VEC4:
                shaderMaterial.setVector4(uniform, babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Vector4.FromArray(value));
                return true;
            default:
                return false;
        }
    };
    /**
     * Returns the wrap mode of the texture
     * @param mode the mode value
     */
    GLTFUtils.GetWrapMode = function (mode) {
        switch (mode) {
            case _glTFLoaderInterfaces__WEBPACK_IMPORTED_MODULE_0__.ETextureWrapMode.CLAMP_TO_EDGE:
                return babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Texture.CLAMP_ADDRESSMODE;
            case _glTFLoaderInterfaces__WEBPACK_IMPORTED_MODULE_0__.ETextureWrapMode.MIRRORED_REPEAT:
                return babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Texture.MIRROR_ADDRESSMODE;
            case _glTFLoaderInterfaces__WEBPACK_IMPORTED_MODULE_0__.ETextureWrapMode.REPEAT:
                return babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Texture.WRAP_ADDRESSMODE;
            default:
                return babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Texture.WRAP_ADDRESSMODE;
        }
    };
    /**
     * Returns the byte stride giving an accessor
     * @param accessor the GLTF accessor objet
     */
    GLTFUtils.GetByteStrideFromType = function (accessor) {
        // Needs this function since "byteStride" isn't requiered in glTF format
        var type = accessor.type;
        switch (type) {
            case "VEC2":
                return 2;
            case "VEC3":
                return 3;
            case "VEC4":
                return 4;
            case "MAT2":
                return 4;
            case "MAT3":
                return 9;
            case "MAT4":
                return 16;
            default:
                return 1;
        }
    };
    /**
     * Returns the texture filter mode giving a mode value
     * @param mode the filter mode value
     * @returns the filter mode (TODO - needs to be a type?)
     */
    GLTFUtils.GetTextureFilterMode = function (mode) {
        switch (mode) {
            case _glTFLoaderInterfaces__WEBPACK_IMPORTED_MODULE_0__.ETextureFilterType.LINEAR:
            case _glTFLoaderInterfaces__WEBPACK_IMPORTED_MODULE_0__.ETextureFilterType.LINEAR_MIPMAP_NEAREST:
            case _glTFLoaderInterfaces__WEBPACK_IMPORTED_MODULE_0__.ETextureFilterType.LINEAR_MIPMAP_LINEAR:
                return babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Texture.TRILINEAR_SAMPLINGMODE;
            case _glTFLoaderInterfaces__WEBPACK_IMPORTED_MODULE_0__.ETextureFilterType.NEAREST:
            case _glTFLoaderInterfaces__WEBPACK_IMPORTED_MODULE_0__.ETextureFilterType.NEAREST_MIPMAP_NEAREST:
                return babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Texture.NEAREST_SAMPLINGMODE;
            default:
                return babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Texture.BILINEAR_SAMPLINGMODE;
        }
    };
    GLTFUtils.GetBufferFromBufferView = function (gltfRuntime, bufferView, byteOffset, byteLength, componentType) {
        byteOffset = bufferView.byteOffset + byteOffset;
        var loadedBufferView = gltfRuntime.loadedBufferViews[bufferView.buffer];
        if (byteOffset + byteLength > loadedBufferView.byteLength) {
            throw new Error("Buffer access is out of range");
        }
        var buffer = loadedBufferView.buffer;
        byteOffset += loadedBufferView.byteOffset;
        switch (componentType) {
            case _glTFLoaderInterfaces__WEBPACK_IMPORTED_MODULE_0__.EComponentType.BYTE:
                return new Int8Array(buffer, byteOffset, byteLength);
            case _glTFLoaderInterfaces__WEBPACK_IMPORTED_MODULE_0__.EComponentType.UNSIGNED_BYTE:
                return new Uint8Array(buffer, byteOffset, byteLength);
            case _glTFLoaderInterfaces__WEBPACK_IMPORTED_MODULE_0__.EComponentType.SHORT:
                return new Int16Array(buffer, byteOffset, byteLength);
            case _glTFLoaderInterfaces__WEBPACK_IMPORTED_MODULE_0__.EComponentType.UNSIGNED_SHORT:
                return new Uint16Array(buffer, byteOffset, byteLength);
            default:
                return new Float32Array(buffer, byteOffset, byteLength);
        }
    };
    /**
     * Returns a buffer from its accessor
     * @param gltfRuntime the GLTF runtime
     * @param accessor the GLTF accessor
     */
    GLTFUtils.GetBufferFromAccessor = function (gltfRuntime, accessor) {
        var bufferView = gltfRuntime.bufferViews[accessor.bufferView];
        var byteLength = accessor.count * GLTFUtils.GetByteStrideFromType(accessor);
        return GLTFUtils.GetBufferFromBufferView(gltfRuntime, bufferView, accessor.byteOffset, byteLength, accessor.componentType);
    };
    /**
     * Decodes a buffer view into a string
     * @param view the buffer view
     */
    GLTFUtils.DecodeBufferToText = function (view) {
        var result = "";
        var length = view.byteLength;
        for (var i = 0; i < length; ++i) {
            result += String.fromCharCode(view[i]);
        }
        return result;
    };
    /**
     * Returns the default material of gltf. Related to
     * https://github.com/KhronosGroup/glTF/tree/master/specification/1.0#appendix-a-default-material
     * @param scene the Babylon.js scene
     */
    GLTFUtils.GetDefaultMaterial = function (scene) {
        if (!GLTFUtils._DefaultMaterial) {
            babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Effect.ShadersStore["GLTFDefaultMaterialVertexShader"] = [
                "precision highp float;",
                "",
                "uniform mat4 worldView;",
                "uniform mat4 projection;",
                "",
                "attribute vec3 position;",
                "",
                "void main(void)",
                "{",
                "    gl_Position = projection * worldView * vec4(position, 1.0);",
                "}",
            ].join("\n");
            babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Effect.ShadersStore["GLTFDefaultMaterialPixelShader"] = [
                "precision highp float;",
                "",
                "uniform vec4 u_emission;",
                "",
                "void main(void)",
                "{",
                "    gl_FragColor = u_emission;",
                "}",
            ].join("\n");
            var shaderPath = {
                vertex: "GLTFDefaultMaterial",
                fragment: "GLTFDefaultMaterial",
            };
            var options = {
                attributes: ["position"],
                uniforms: ["worldView", "projection", "u_emission"],
                samplers: new Array(),
                needAlphaBlending: false,
            };
            GLTFUtils._DefaultMaterial = new babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.ShaderMaterial("GLTFDefaultMaterial", scene, shaderPath, options);
            GLTFUtils._DefaultMaterial.setColor4("u_emission", new babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Color4(0.5, 0.5, 0.5, 1.0));
        }
        return GLTFUtils._DefaultMaterial;
    };
    // The GLTF default material
    GLTFUtils._DefaultMaterial = null;
    return GLTFUtils;
}());


/***/ }),

/***/ "../../../dev/loaders/src/glTF/1.0/glTFMaterialsCommonExtension.ts":
/*!*************************************************************************!*\
  !*** ../../../dev/loaders/src/glTF/1.0/glTFMaterialsCommonExtension.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GLTFMaterialsCommonExtension: () => (/* binding */ GLTFMaterialsCommonExtension)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ "../../../../node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var _glTFLoader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./glTFLoader */ "../../../dev/loaders/src/glTF/1.0/glTFLoader.ts");
/* harmony import */ var babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babylonjs/Lights/spotLight */ "babylonjs/Misc/observable");
/* harmony import */ var babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__);











/**
 * @internal
 * @deprecated
 */
var GLTFMaterialsCommonExtension = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__extends)(GLTFMaterialsCommonExtension, _super);
    function GLTFMaterialsCommonExtension() {
        return _super.call(this, "KHR_materials_common") || this;
    }
    GLTFMaterialsCommonExtension.prototype.loadRuntimeExtensionsAsync = function (gltfRuntime) {
        if (!gltfRuntime.extensions) {
            return false;
        }
        var extension = gltfRuntime.extensions[this.name];
        if (!extension) {
            return false;
        }
        // Create lights
        var lights = extension.lights;
        if (lights) {
            for (var thing in lights) {
                var light = lights[thing];
                switch (light.type) {
                    case "ambient": {
                        var ambientLight = new babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.HemisphericLight(light.name, new babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Vector3(0, 1, 0), gltfRuntime.scene);
                        var ambient = light.ambient;
                        if (ambient) {
                            ambientLight.diffuse = babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Color3.FromArray(ambient.color || [1, 1, 1]);
                        }
                        break;
                    }
                    case "point": {
                        var pointLight = new babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.PointLight(light.name, new babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Vector3(10, 10, 10), gltfRuntime.scene);
                        var point = light.point;
                        if (point) {
                            pointLight.diffuse = babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Color3.FromArray(point.color || [1, 1, 1]);
                        }
                        break;
                    }
                    case "directional": {
                        var dirLight = new babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.DirectionalLight(light.name, new babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Vector3(0, -1, 0), gltfRuntime.scene);
                        var directional = light.directional;
                        if (directional) {
                            dirLight.diffuse = babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Color3.FromArray(directional.color || [1, 1, 1]);
                        }
                        break;
                    }
                    case "spot": {
                        var spot = light.spot;
                        if (spot) {
                            var spotLight = new babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.SpotLight(light.name, new babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Vector3(0, 10, 0), new babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Vector3(0, -1, 0), spot.fallOffAngle || Math.PI, spot.fallOffExponent || 0.0, gltfRuntime.scene);
                            spotLight.diffuse = babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Color3.FromArray(spot.color || [1, 1, 1]);
                        }
                        break;
                    }
                    default:
                        babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Tools.Warn('GLTF Material Common extension: light type "' + light.type + "” not supported");
                        break;
                }
            }
        }
        return false;
    };
    GLTFMaterialsCommonExtension.prototype.loadMaterialAsync = function (gltfRuntime, id, onSuccess, onError) {
        var material = gltfRuntime.materials[id];
        if (!material || !material.extensions) {
            return false;
        }
        var extension = material.extensions[this.name];
        if (!extension) {
            return false;
        }
        var standardMaterial = new babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.StandardMaterial(id, gltfRuntime.scene);
        standardMaterial.sideOrientation = babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Material.CounterClockWiseSideOrientation;
        if (extension.technique === "CONSTANT") {
            standardMaterial.disableLighting = true;
        }
        standardMaterial.backFaceCulling = extension.doubleSided === undefined ? false : !extension.doubleSided;
        standardMaterial.alpha = extension.values.transparency === undefined ? 1.0 : extension.values.transparency;
        standardMaterial.specularPower = extension.values.shininess === undefined ? 0.0 : extension.values.shininess;
        // Ambient
        if (typeof extension.values.ambient === "string") {
            this._loadTexture(gltfRuntime, extension.values.ambient, standardMaterial, "ambientTexture", onError);
        }
        else {
            standardMaterial.ambientColor = babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Color3.FromArray(extension.values.ambient || [0, 0, 0]);
        }
        // Diffuse
        if (typeof extension.values.diffuse === "string") {
            this._loadTexture(gltfRuntime, extension.values.diffuse, standardMaterial, "diffuseTexture", onError);
        }
        else {
            standardMaterial.diffuseColor = babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Color3.FromArray(extension.values.diffuse || [0, 0, 0]);
        }
        // Emission
        if (typeof extension.values.emission === "string") {
            this._loadTexture(gltfRuntime, extension.values.emission, standardMaterial, "emissiveTexture", onError);
        }
        else {
            standardMaterial.emissiveColor = babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Color3.FromArray(extension.values.emission || [0, 0, 0]);
        }
        // Specular
        if (typeof extension.values.specular === "string") {
            this._loadTexture(gltfRuntime, extension.values.specular, standardMaterial, "specularTexture", onError);
        }
        else {
            standardMaterial.specularColor = babylonjs_Maths_math_vector__WEBPACK_IMPORTED_MODULE_1__.Color3.FromArray(extension.values.specular || [0, 0, 0]);
        }
        return true;
    };
    GLTFMaterialsCommonExtension.prototype._loadTexture = function (gltfRuntime, id, material, propertyPath, onError) {
        // Create buffer from texture url
        _glTFLoader__WEBPACK_IMPORTED_MODULE_0__.GLTFLoaderBase.LoadTextureBufferAsync(gltfRuntime, id, function (buffer) {
            // Create texture from buffer
            _glTFLoader__WEBPACK_IMPORTED_MODULE_0__.GLTFLoaderBase.CreateTextureAsync(gltfRuntime, id, buffer, function (texture) { return (material[propertyPath] = texture); });
        }, onError);
    };
    return GLTFMaterialsCommonExtension;
}(_glTFLoader__WEBPACK_IMPORTED_MODULE_0__.GLTFLoaderExtension));

_glTFLoader__WEBPACK_IMPORTED_MODULE_0__.GLTFLoader.RegisterExtension(new GLTFMaterialsCommonExtension());


/***/ }),

/***/ "../../../dev/loaders/src/glTF/1.0/index.ts":
/*!**************************************************!*\
  !*** ../../../dev/loaders/src/glTF/1.0/index.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EBlendingFunction: () => (/* reexport safe */ _glTFLoaderInterfaces__WEBPACK_IMPORTED_MODULE_2__.EBlendingFunction),
/* harmony export */   EComponentType: () => (/* reexport safe */ _glTFLoaderInterfaces__WEBPACK_IMPORTED_MODULE_2__.EComponentType),
/* harmony export */   ECullingType: () => (/* reexport safe */ _glTFLoaderInterfaces__WEBPACK_IMPORTED_MODULE_2__.ECullingType),
/* harmony export */   EParameterType: () => (/* reexport safe */ _glTFLoaderInterfaces__WEBPACK_IMPORTED_MODULE_2__.EParameterType),
/* harmony export */   EShaderType: () => (/* reexport safe */ _glTFLoaderInterfaces__WEBPACK_IMPORTED_MODULE_2__.EShaderType),
/* harmony export */   ETextureFilterType: () => (/* reexport safe */ _glTFLoaderInterfaces__WEBPACK_IMPORTED_MODULE_2__.ETextureFilterType),
/* harmony export */   ETextureFormat: () => (/* reexport safe */ _glTFLoaderInterfaces__WEBPACK_IMPORTED_MODULE_2__.ETextureFormat),
/* harmony export */   ETextureWrapMode: () => (/* reexport safe */ _glTFLoaderInterfaces__WEBPACK_IMPORTED_MODULE_2__.ETextureWrapMode),
/* harmony export */   GLTFBinaryExtension: () => (/* reexport safe */ _glTFBinaryExtension__WEBPACK_IMPORTED_MODULE_0__.GLTFBinaryExtension),
/* harmony export */   GLTFLoader: () => (/* reexport safe */ _glTFLoader__WEBPACK_IMPORTED_MODULE_1__.GLTFLoader),
/* harmony export */   GLTFLoaderBase: () => (/* reexport safe */ _glTFLoader__WEBPACK_IMPORTED_MODULE_1__.GLTFLoaderBase),
/* harmony export */   GLTFLoaderExtension: () => (/* reexport safe */ _glTFLoader__WEBPACK_IMPORTED_MODULE_1__.GLTFLoaderExtension),
/* harmony export */   GLTFMaterialsCommonExtension: () => (/* reexport safe */ _glTFMaterialsCommonExtension__WEBPACK_IMPORTED_MODULE_4__.GLTFMaterialsCommonExtension),
/* harmony export */   GLTFUtils: () => (/* reexport safe */ _glTFLoaderUtils__WEBPACK_IMPORTED_MODULE_3__.GLTFUtils)
/* harmony export */ });
/* harmony import */ var _glTFBinaryExtension__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./glTFBinaryExtension */ "../../../dev/loaders/src/glTF/1.0/glTFBinaryExtension.ts");
/* harmony import */ var _glTFLoader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./glTFLoader */ "../../../dev/loaders/src/glTF/1.0/glTFLoader.ts");
/* harmony import */ var _glTFLoaderInterfaces__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./glTFLoaderInterfaces */ "../../../dev/loaders/src/glTF/1.0/glTFLoaderInterfaces.ts");
/* harmony import */ var _glTFLoaderUtils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./glTFLoaderUtils */ "../../../dev/loaders/src/glTF/1.0/glTFLoaderUtils.ts");
/* harmony import */ var _glTFMaterialsCommonExtension__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./glTFMaterialsCommonExtension */ "../../../dev/loaders/src/glTF/1.0/glTFMaterialsCommonExtension.ts");







/***/ }),

/***/ "../../../dev/loaders/src/glTF/glTFFileLoader.ts":
/*!*******************************************************!*\
  !*** ../../../dev/loaders/src/glTF/glTFFileLoader.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GLTFFileLoader: () => (/* binding */ GLTFFileLoader),
/* harmony export */   GLTFLoaderAnimationStartMode: () => (/* binding */ GLTFLoaderAnimationStartMode),
/* harmony export */   GLTFLoaderCoordinateSystemMode: () => (/* binding */ GLTFLoaderCoordinateSystemMode),
/* harmony export */   GLTFLoaderState: () => (/* binding */ GLTFLoaderState)
/* harmony export */ });
/* harmony import */ var babylonjs_Misc_observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babylonjs/Misc/error */ "babylonjs/Misc/observable");
/* harmony import */ var babylonjs_Misc_observable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babylonjs_Misc_observable__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _glTFValidation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./glTFValidation */ "../../../dev/loaders/src/glTF/glTFValidation.ts");









function readAsync(arrayBuffer, byteOffset, byteLength) {
    try {
        return Promise.resolve(new Uint8Array(arrayBuffer, byteOffset, byteLength));
    }
    catch (e) {
        return Promise.reject(e);
    }
}
function readViewAsync(arrayBufferView, byteOffset, byteLength) {
    try {
        if (arrayBufferView.byteOffset + byteOffset + byteLength > arrayBufferView.buffer.byteLength) {
            throw new Error("Array length out of bounds.");
        }
        return Promise.resolve(new Uint8Array(arrayBufferView.buffer, arrayBufferView.byteOffset + byteOffset, byteLength));
    }
    catch (e) {
        return Promise.reject(e);
    }
}
/**
 * Mode that determines the coordinate system to use.
 */
var GLTFLoaderCoordinateSystemMode;
(function (GLTFLoaderCoordinateSystemMode) {
    /**
     * Automatically convert the glTF right-handed data to the appropriate system based on the current coordinate system mode of the scene.
     */
    GLTFLoaderCoordinateSystemMode[GLTFLoaderCoordinateSystemMode["AUTO"] = 0] = "AUTO";
    /**
     * Sets the useRightHandedSystem flag on the scene.
     */
    GLTFLoaderCoordinateSystemMode[GLTFLoaderCoordinateSystemMode["FORCE_RIGHT_HANDED"] = 1] = "FORCE_RIGHT_HANDED";
})(GLTFLoaderCoordinateSystemMode || (GLTFLoaderCoordinateSystemMode = {}));
/**
 * Mode that determines what animations will start.
 */
var GLTFLoaderAnimationStartMode;
(function (GLTFLoaderAnimationStartMode) {
    /**
     * No animation will start.
     */
    GLTFLoaderAnimationStartMode[GLTFLoaderAnimationStartMode["NONE"] = 0] = "NONE";
    /**
     * The first animation will start.
     */
    GLTFLoaderAnimationStartMode[GLTFLoaderAnimationStartMode["FIRST"] = 1] = "FIRST";
    /**
     * All animations will start.
     */
    GLTFLoaderAnimationStartMode[GLTFLoaderAnimationStartMode["ALL"] = 2] = "ALL";
})(GLTFLoaderAnimationStartMode || (GLTFLoaderAnimationStartMode = {}));
/**
 * Loader state.
 */
var GLTFLoaderState;
(function (GLTFLoaderState) {
    /**
     * The asset is loading.
     */
    GLTFLoaderState[GLTFLoaderState["LOADING"] = 0] = "LOADING";
    /**
     * The asset is ready for rendering.
     */
    GLTFLoaderState[GLTFLoaderState["READY"] = 1] = "READY";
    /**
     * The asset is completely loaded.
     */
    GLTFLoaderState[GLTFLoaderState["COMPLETE"] = 2] = "COMPLETE";
})(GLTFLoaderState || (GLTFLoaderState = {}));
/**
 * File loader for loading glTF files into a scene.
 */
var GLTFFileLoader = /** @class */ (function () {
    function GLTFFileLoader() {
        // --------------
        // Common options
        // --------------
        /**
         * Raised when the asset has been parsed
         */
        this.onParsedObservable = new babylonjs_Misc_observable__WEBPACK_IMPORTED_MODULE_0__.Observable();
        // ----------
        // V2 options
        // ----------
        /**
         * The coordinate system mode. Defaults to AUTO.
         */
        this.coordinateSystemMode = GLTFLoaderCoordinateSystemMode.AUTO;
        /**
         * The animation start mode. Defaults to FIRST.
         */
        this.animationStartMode = GLTFLoaderAnimationStartMode.FIRST;
        /**
         * Defines if the loader should compile materials before raising the success callback. Defaults to false.
         */
        this.compileMaterials = false;
        /**
         * Defines if the loader should also compile materials with clip planes. Defaults to false.
         */
        this.useClipPlane = false;
        /**
         * Defines if the loader should compile shadow generators before raising the success callback. Defaults to false.
         */
        this.compileShadowGenerators = false;
        /**
         * Defines if the Alpha blended materials are only applied as coverage.
         * If false, (default) The luminance of each pixel will reduce its opacity to simulate the behaviour of most physical materials.
         * If true, no extra effects are applied to transparent pixels.
         */
        this.transparencyAsCoverage = false;
        /**
         * Defines if the loader should use range requests when load binary glTF files from HTTP.
         * Enabling will disable offline support and glTF validator.
         * Defaults to false.
         */
        this.useRangeRequests = false;
        /**
         * Defines if the loader should create instances when multiple glTF nodes point to the same glTF mesh. Defaults to true.
         */
        this.createInstances = true;
        /**
         * Defines if the loader should always compute the bounding boxes of meshes and not use the min/max values from the position accessor. Defaults to false.
         */
        this.alwaysComputeBoundingBox = false;
        /**
         * If true, load all materials defined in the file, even if not used by any mesh. Defaults to false.
         */
        this.loadAllMaterials = false;
        /**
         * If true, load only the materials defined in the file. Defaults to false.
         */
        this.loadOnlyMaterials = false;
        /**
         * If true, do not load any materials defined in the file. Defaults to false.
         */
        this.skipMaterials = false;
        /**
         * If true, load the color (gamma encoded) textures into sRGB buffers (if supported by the GPU), which will yield more accurate results when sampling the texture. Defaults to true.
         */
        this.useSRGBBuffers = true;
        /**
         * When loading glTF animations, which are defined in seconds, target them to this FPS. Defaults to 60.
         */
        this.targetFps = 60;
        /**
         * Defines if the loader should always compute the nearest common ancestor of the skeleton joints instead of using `skin.skeleton`. Defaults to false.
         * Set this to true if loading assets with invalid `skin.skeleton` values.
         */
        this.alwaysComputeSkeletonRootNode = false;
        /**
         * Function called before loading a url referenced by the asset.
         * @param url
         */
        this.preprocessUrlAsync = function (url) { return Promise.resolve(url); };
        /**
         * Observable raised when the loader creates a mesh after parsing the glTF properties of the mesh.
         * Note that the observable is raised as soon as the mesh object is created, meaning some data may not have been setup yet for this mesh (vertex data, morph targets, material, ...)
         */
        this.onMeshLoadedObservable = new babylonjs_Misc_observable__WEBPACK_IMPORTED_MODULE_0__.Observable();
        /**
         * Callback raised when the loader creates a skin after parsing the glTF properties of the skin node.
         * @see https://doc.babylonjs.com/features/featuresDeepDive/importers/glTF/glTFSkinning#ignoring-the-transform-of-the-skinned-mesh
         * @param node - the transform node that corresponds to the original glTF skin node used for animations
         * @param skinnedNode - the transform node that is the skinned mesh itself or the parent of the skinned meshes
         */
        this.onSkinLoadedObservable = new babylonjs_Misc_observable__WEBPACK_IMPORTED_MODULE_0__.Observable();
        /**
         * Observable raised when the loader creates a texture after parsing the glTF properties of the texture.
         */
        this.onTextureLoadedObservable = new babylonjs_Misc_observable__WEBPACK_IMPORTED_MODULE_0__.Observable();
        /**
         * Observable raised when the loader creates a material after parsing the glTF properties of the material.
         */
        this.onMaterialLoadedObservable = new babylonjs_Misc_observable__WEBPACK_IMPORTED_MODULE_0__.Observable();
        /**
         * Observable raised when the loader creates a camera after parsing the glTF properties of the camera.
         */
        this.onCameraLoadedObservable = new babylonjs_Misc_observable__WEBPACK_IMPORTED_MODULE_0__.Observable();
        /**
         * Observable raised when the asset is completely loaded, immediately before the loader is disposed.
         * For assets with LODs, raised when all of the LODs are complete.
         * For assets without LODs, raised when the model is complete, immediately after the loader resolves the returned promise.
         */
        this.onCompleteObservable = new babylonjs_Misc_observable__WEBPACK_IMPORTED_MODULE_0__.Observable();
        /**
         * Observable raised when an error occurs.
         */
        this.onErrorObservable = new babylonjs_Misc_observable__WEBPACK_IMPORTED_MODULE_0__.Observable();
        /**
         * Observable raised after the loader is disposed.
         */
        this.onDisposeObservable = new babylonjs_Misc_observable__WEBPACK_IMPORTED_MODULE_0__.Observable();
        /**
         * Observable raised after a loader extension is created.
         * Set additional options for a loader extension in this event.
         */
        this.onExtensionLoadedObservable = new babylonjs_Misc_observable__WEBPACK_IMPORTED_MODULE_0__.Observable();
        /**
         * Defines if the loader should validate the asset.
         */
        this.validate = false;
        /**
         * Observable raised after validation when validate is set to true. The event data is the result of the validation.
         */
        this.onValidatedObservable = new babylonjs_Misc_observable__WEBPACK_IMPORTED_MODULE_0__.Observable();
        this._loader = null;
        this._state = null;
        this._requests = new Array();
        /**
         * Name of the loader ("gltf")
         */
        this.name = "gltf";
        /** @internal */
        this.extensions = {
            ".gltf": { isBinary: false },
            ".glb": { isBinary: true },
        };
        /**
         * Observable raised when the loader state changes.
         */
        this.onLoaderStateChangedObservable = new babylonjs_Misc_observable__WEBPACK_IMPORTED_MODULE_0__.Observable();
        this._logIndentLevel = 0;
        this._loggingEnabled = false;
        /** @internal */
        this._log = this._logDisabled;
        this._capturePerformanceCounters = false;
        /** @internal */
        this._startPerformanceCounter = this._startPerformanceCounterDisabled;
        /** @internal */
        this._endPerformanceCounter = this._endPerformanceCounterDisabled;
    }
    Object.defineProperty(GLTFFileLoader.prototype, "onParsed", {
        /**
         * Raised when the asset has been parsed
         */
        set: function (callback) {
            if (this._onParsedObserver) {
                this.onParsedObservable.remove(this._onParsedObserver);
            }
            this._onParsedObserver = this.onParsedObservable.add(callback);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GLTFFileLoader.prototype, "onMeshLoaded", {
        /**
         * Callback raised when the loader creates a mesh after parsing the glTF properties of the mesh.
         * Note that the callback is called as soon as the mesh object is created, meaning some data may not have been setup yet for this mesh (vertex data, morph targets, material, ...)
         */
        set: function (callback) {
            if (this._onMeshLoadedObserver) {
                this.onMeshLoadedObservable.remove(this._onMeshLoadedObserver);
            }
            this._onMeshLoadedObserver = this.onMeshLoadedObservable.add(callback);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GLTFFileLoader.prototype, "onTextureLoaded", {
        /**
         * Callback raised when the loader creates a texture after parsing the glTF properties of the texture.
         */
        set: function (callback) {
            if (this._onTextureLoadedObserver) {
                this.onTextureLoadedObservable.remove(this._onTextureLoadedObserver);
            }
            this._onTextureLoadedObserver = this.onTextureLoadedObservable.add(callback);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GLTFFileLoader.prototype, "onMaterialLoaded", {
        /**
         * Callback raised when the loader creates a material after parsing the glTF properties of the material.
         */
        set: function (callback) {
            if (this._onMaterialLoadedObserver) {
                this.onMaterialLoadedObservable.remove(this._onMaterialLoadedObserver);
            }
            this._onMaterialLoadedObserver = this.onMaterialLoadedObservable.add(callback);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GLTFFileLoader.prototype, "onCameraLoaded", {
        /**
         * Callback raised when the loader creates a camera after parsing the glTF properties of the camera.
         */
        set: function (callback) {
            if (this._onCameraLoadedObserver) {
                this.onCameraLoadedObservable.remove(this._onCameraLoadedObserver);
            }
            this._onCameraLoadedObserver = this.onCameraLoadedObservable.add(callback);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GLTFFileLoader.prototype, "onComplete", {
        /**
         * Callback raised when the asset is completely loaded, immediately before the loader is disposed.
         * For assets with LODs, raised when all of the LODs are complete.
         * For assets without LODs, raised when the model is complete, immediately after the loader resolves the returned promise.
         */
        set: function (callback) {
            if (this._onCompleteObserver) {
                this.onCompleteObservable.remove(this._onCompleteObserver);
            }
            this._onCompleteObserver = this.onCompleteObservable.add(callback);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GLTFFileLoader.prototype, "onError", {
        /**
         * Callback raised when an error occurs.
         */
        set: function (callback) {
            if (this._onErrorObserver) {
                this.onErrorObservable.remove(this._onErrorObserver);
            }
            this._onErrorObserver = this.onErrorObservable.add(callback);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GLTFFileLoader.prototype, "onDispose", {
        /**
         * Callback raised after the loader is disposed.
         */
        set: function (callback) {
            if (this._onDisposeObserver) {
                this.onDisposeObservable.remove(this._onDisposeObserver);
            }
            this._onDisposeObserver = this.onDisposeObservable.add(callback);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GLTFFileLoader.prototype, "onExtensionLoaded", {
        /**
         * Callback raised after a loader extension is created.
         */
        set: function (callback) {
            if (this._onExtensionLoadedObserver) {
                this.onExtensionLoadedObservable.remove(this._onExtensionLoadedObserver);
            }
            this._onExtensionLoadedObserver = this.onExtensionLoadedObservable.add(callback);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GLTFFileLoader.prototype, "loggingEnabled", {
        /**
         * Defines if the loader logging is enabled.
         */
        get: function () {
            return this._loggingEnabled;
        },
        set: function (value) {
            if (this._loggingEnabled === value) {
                return;
            }
            this._loggingEnabled = value;
            if (this._loggingEnabled) {
                this._log = this._logEnabled;
            }
            else {
                this._log = this._logDisabled;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GLTFFileLoader.prototype, "capturePerformanceCounters", {
        /**
         * Defines if the loader should capture performance counters.
         */
        get: function () {
            return this._capturePerformanceCounters;
        },
        set: function (value) {
            if (this._capturePerformanceCounters === value) {
                return;
            }
            this._capturePerformanceCounters = value;
            if (this._capturePerformanceCounters) {
                this._startPerformanceCounter = this._startPerformanceCounterEnabled;
                this._endPerformanceCounter = this._endPerformanceCounterEnabled;
            }
            else {
                this._startPerformanceCounter = this._startPerformanceCounterDisabled;
                this._endPerformanceCounter = this._endPerformanceCounterDisabled;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GLTFFileLoader.prototype, "onValidated", {
        /**
         * Callback raised after a loader extension is created.
         */
        set: function (callback) {
            if (this._onValidatedObserver) {
                this.onValidatedObservable.remove(this._onValidatedObserver);
            }
            this._onValidatedObserver = this.onValidatedObservable.add(callback);
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Disposes the loader, releases resources during load, and cancels any outstanding requests.
     */
    GLTFFileLoader.prototype.dispose = function () {
        if (this._loader) {
            this._loader.dispose();
            this._loader = null;
        }
        for (var _i = 0, _a = this._requests; _i < _a.length; _i++) {
            var request = _a[_i];
            request.abort();
        }
        this._requests.length = 0;
        delete this._progressCallback;
        this.preprocessUrlAsync = function (url) { return Promise.resolve(url); };
        this.onMeshLoadedObservable.clear();
        this.onSkinLoadedObservable.clear();
        this.onTextureLoadedObservable.clear();
        this.onMaterialLoadedObservable.clear();
        this.onCameraLoadedObservable.clear();
        this.onCompleteObservable.clear();
        this.onExtensionLoadedObservable.clear();
        this.onDisposeObservable.notifyObservers(undefined);
        this.onDisposeObservable.clear();
    };
    /**
     * @internal
     */
    GLTFFileLoader.prototype.loadFile = function (scene, fileOrUrl, rootUrl, onSuccess, onProgress, useArrayBuffer, onError, name) {
        var _this = this;
        if (ArrayBuffer.isView(fileOrUrl)) {
            this._loadBinary(scene, fileOrUrl, rootUrl, onSuccess, onError, name);
            return null;
        }
        this._progressCallback = onProgress;
        var fileName = fileOrUrl.name || babylonjs_Misc_observable__WEBPACK_IMPORTED_MODULE_0__.Tools.GetFilename(fileOrUrl);
        if (useArrayBuffer) {
            if (this.useRangeRequests) {
                if (this.validate) {
                    babylonjs_Misc_observable__WEBPACK_IMPORTED_MODULE_0__.Logger.Warn("glTF validation is not supported when range requests are enabled");
                }
                var fileRequest_1 = {
                    abort: function () { },
                    onCompleteObservable: new babylonjs_Misc_observable__WEBPACK_IMPORTED_MODULE_0__.Observable(),
                };
                var dataBuffer = {
                    readAsync: function (byteOffset, byteLength) {
                        return new Promise(function (resolve, reject) {
                            _this._loadFile(scene, fileOrUrl, function (data) {
                                resolve(new Uint8Array(data));
                            }, true, function (error) {
                                reject(error);
                            }, function (webRequest) {
                                webRequest.setRequestHeader("Range", "bytes=".concat(byteOffset, "-").concat(byteOffset + byteLength - 1));
                            });
                        });
                    },
                    byteLength: 0,
                };
                this._unpackBinaryAsync(new babylonjs_Misc_observable__WEBPACK_IMPORTED_MODULE_0__.DataReader(dataBuffer)).then(function (loaderData) {
                    fileRequest_1.onCompleteObservable.notifyObservers(fileRequest_1);
                    onSuccess(loaderData);
                }, onError ? function (error) { return onError(undefined, error); } : undefined);
                return fileRequest_1;
            }
            return this._loadFile(scene, fileOrUrl, function (data) {
                _this._validate(scene, new Uint8Array(data), rootUrl, fileName);
                _this._unpackBinaryAsync(new babylonjs_Misc_observable__WEBPACK_IMPORTED_MODULE_0__.DataReader({
                    readAsync: function (byteOffset, byteLength) { return readAsync(data, byteOffset, byteLength); },
                    byteLength: data.byteLength,
                })).then(function (loaderData) {
                    onSuccess(loaderData);
                }, onError ? function (error) { return onError(undefined, error); } : undefined);
            }, true, onError);
        }
        return this._loadFile(scene, fileOrUrl, function (data) {
            _this._validate(scene, new Uint8Array(data), rootUrl, fileName);
            onSuccess({ json: _this._parseJson(data) });
        }, useArrayBuffer, onError);
    };
    /**
     * @internal
     */
    GLTFFileLoader.prototype._loadBinary = function (scene, data, rootUrl, onSuccess, onError, fileName) {
        this._validate(scene, data, rootUrl, fileName);
        this._unpackBinaryAsync(new babylonjs_Misc_observable__WEBPACK_IMPORTED_MODULE_0__.DataReader({
            readAsync: function (byteOffset, byteLength) { return readViewAsync(data, byteOffset, byteLength); },
            byteLength: data.byteLength,
        })).then(function (loaderData) {
            onSuccess(loaderData);
        }, onError ? function (error) { return onError(undefined, error); } : undefined);
    };
    /**
     * @internal
     */
    GLTFFileLoader.prototype.importMeshAsync = function (meshesNames, scene, data, rootUrl, onProgress, fileName) {
        var _this = this;
        return Promise.resolve().then(function () {
            _this.onParsedObservable.notifyObservers(data);
            _this.onParsedObservable.clear();
            _this._log("Loading ".concat(fileName || ""));
            _this._loader = _this._getLoader(data);
            return _this._loader.importMeshAsync(meshesNames, scene, null, data, rootUrl, onProgress, fileName);
        });
    };
    /**
     * @internal
     */
    GLTFFileLoader.prototype.loadAsync = function (scene, data, rootUrl, onProgress, fileName) {
        var _this = this;
        return Promise.resolve().then(function () {
            _this.onParsedObservable.notifyObservers(data);
            _this.onParsedObservable.clear();
            _this._log("Loading ".concat(fileName || ""));
            _this._loader = _this._getLoader(data);
            return _this._loader.loadAsync(scene, data, rootUrl, onProgress, fileName);
        });
    };
    /**
     * @internal
     */
    GLTFFileLoader.prototype.loadAssetContainerAsync = function (scene, data, rootUrl, onProgress, fileName) {
        var _this = this;
        return Promise.resolve().then(function () {
            _this.onParsedObservable.notifyObservers(data);
            _this.onParsedObservable.clear();
            _this._log("Loading ".concat(fileName || ""));
            _this._loader = _this._getLoader(data);
            // Prepare the asset container.
            var container = new babylonjs_Misc_observable__WEBPACK_IMPORTED_MODULE_0__.AssetContainer(scene);
            // Get materials/textures when loading to add to container
            var materials = [];
            _this.onMaterialLoadedObservable.add(function (material) {
                materials.push(material);
            });
            var textures = [];
            _this.onTextureLoadedObservable.add(function (texture) {
                textures.push(texture);
            });
            var cameras = [];
            _this.onCameraLoadedObservable.add(function (camera) {
                cameras.push(camera);
            });
            var morphTargetManagers = [];
            _this.onMeshLoadedObservable.add(function (mesh) {
                if (mesh.morphTargetManager) {
                    morphTargetManagers.push(mesh.morphTargetManager);
                }
            });
            return _this._loader.importMeshAsync(null, scene, container, data, rootUrl, onProgress, fileName).then(function (result) {
                Array.prototype.push.apply(container.geometries, result.geometries);
                Array.prototype.push.apply(container.meshes, result.meshes);
                Array.prototype.push.apply(container.particleSystems, result.particleSystems);
                Array.prototype.push.apply(container.skeletons, result.skeletons);
                Array.prototype.push.apply(container.animationGroups, result.animationGroups);
                Array.prototype.push.apply(container.materials, materials);
                Array.prototype.push.apply(container.textures, textures);
                Array.prototype.push.apply(container.lights, result.lights);
                Array.prototype.push.apply(container.transformNodes, result.transformNodes);
                Array.prototype.push.apply(container.cameras, cameras);
                Array.prototype.push.apply(container.morphTargetManagers, morphTargetManagers);
                return container;
            });
        });
    };
    /**
     * @internal
     */
    GLTFFileLoader.prototype.canDirectLoad = function (data) {
        return ((data.indexOf("asset") !== -1 && data.indexOf("version") !== -1) ||
            data.startsWith("data:base64," + GLTFFileLoader._MagicBase64Encoded) || // this is technically incorrect, but will continue to support for backcompat.
            data.startsWith("data:;base64," + GLTFFileLoader._MagicBase64Encoded) ||
            data.startsWith("data:application/octet-stream;base64," + GLTFFileLoader._MagicBase64Encoded) ||
            data.startsWith("data:model/gltf-binary;base64," + GLTFFileLoader._MagicBase64Encoded));
    };
    /**
     * @internal
     */
    GLTFFileLoader.prototype.directLoad = function (scene, data) {
        if (data.startsWith("base64," + GLTFFileLoader._MagicBase64Encoded) || // this is technically incorrect, but will continue to support for backcompat.
            data.startsWith(";base64," + GLTFFileLoader._MagicBase64Encoded) ||
            data.startsWith("application/octet-stream;base64," + GLTFFileLoader._MagicBase64Encoded) ||
            data.startsWith("model/gltf-binary;base64," + GLTFFileLoader._MagicBase64Encoded)) {
            var arrayBuffer_1 = (0,babylonjs_Misc_observable__WEBPACK_IMPORTED_MODULE_0__.DecodeBase64UrlToBinary)(data);
            this._validate(scene, new Uint8Array(arrayBuffer_1));
            return this._unpackBinaryAsync(new babylonjs_Misc_observable__WEBPACK_IMPORTED_MODULE_0__.DataReader({
                readAsync: function (byteOffset, byteLength) { return readAsync(arrayBuffer_1, byteOffset, byteLength); },
                byteLength: arrayBuffer_1.byteLength,
            }));
        }
        this._validate(scene, data);
        return Promise.resolve({ json: this._parseJson(data) });
    };
    /** @internal */
    GLTFFileLoader.prototype.createPlugin = function () {
        return new GLTFFileLoader();
    };
    Object.defineProperty(GLTFFileLoader.prototype, "loaderState", {
        /**
         * The loader state or null if the loader is not active.
         */
        get: function () {
            return this._state;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Returns a promise that resolves when the asset is completely loaded.
     * @returns a promise that resolves when the asset is completely loaded.
     */
    GLTFFileLoader.prototype.whenCompleteAsync = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.onCompleteObservable.addOnce(function () {
                resolve();
            });
            _this.onErrorObservable.addOnce(function (reason) {
                reject(reason);
            });
        });
    };
    /**
     * @internal
     */
    GLTFFileLoader.prototype._setState = function (state) {
        if (this._state === state) {
            return;
        }
        this._state = state;
        this.onLoaderStateChangedObservable.notifyObservers(this._state);
        this._log(GLTFLoaderState[this._state]);
    };
    /**
     * @internal
     */
    GLTFFileLoader.prototype._loadFile = function (scene, fileOrUrl, onSuccess, useArrayBuffer, onError, onOpened) {
        var _this = this;
        var request = scene._loadFile(fileOrUrl, onSuccess, function (event) {
            _this._onProgress(event, request);
        }, true, useArrayBuffer, onError, onOpened);
        request.onCompleteObservable.add(function (request) {
            _this._requests.splice(_this._requests.indexOf(request), 1);
        });
        this._requests.push(request);
        return request;
    };
    GLTFFileLoader.prototype._onProgress = function (event, request) {
        if (!this._progressCallback) {
            return;
        }
        request._lengthComputable = event.lengthComputable;
        request._loaded = event.loaded;
        request._total = event.total;
        var lengthComputable = true;
        var loaded = 0;
        var total = 0;
        for (var _i = 0, _a = this._requests; _i < _a.length; _i++) {
            var request_1 = _a[_i];
            if (request_1._lengthComputable === undefined || request_1._loaded === undefined || request_1._total === undefined) {
                return;
            }
            lengthComputable = lengthComputable && request_1._lengthComputable;
            loaded += request_1._loaded;
            total += request_1._total;
        }
        this._progressCallback({
            lengthComputable: lengthComputable,
            loaded: loaded,
            total: lengthComputable ? total : 0,
        });
    };
    GLTFFileLoader.prototype._validate = function (scene, data, rootUrl, fileName) {
        var _this = this;
        if (rootUrl === void 0) { rootUrl = ""; }
        if (fileName === void 0) { fileName = ""; }
        if (!this.validate) {
            return;
        }
        this._startPerformanceCounter("Validate JSON");
        _glTFValidation__WEBPACK_IMPORTED_MODULE_1__.GLTFValidation.ValidateAsync(data, rootUrl, fileName, function (uri) {
            return _this.preprocessUrlAsync(rootUrl + uri).then(function (url) { return scene._loadFileAsync(url, undefined, true, true); });
        }).then(function (result) {
            _this._endPerformanceCounter("Validate JSON");
            _this.onValidatedObservable.notifyObservers(result);
            _this.onValidatedObservable.clear();
        }, function (reason) {
            _this._endPerformanceCounter("Validate JSON");
            babylonjs_Misc_observable__WEBPACK_IMPORTED_MODULE_0__.Tools.Warn("Failed to validate: ".concat(reason.message));
            _this.onValidatedObservable.clear();
        });
    };
    GLTFFileLoader.prototype._getLoader = function (loaderData) {
        var asset = loaderData.json.asset || {};
        this._log("Asset version: ".concat(asset.version));
        asset.minVersion && this._log("Asset minimum version: ".concat(asset.minVersion));
        asset.generator && this._log("Asset generator: ".concat(asset.generator));
        var version = GLTFFileLoader._parseVersion(asset.version);
        if (!version) {
            throw new Error("Invalid version: " + asset.version);
        }
        if (asset.minVersion !== undefined) {
            var minVersion = GLTFFileLoader._parseVersion(asset.minVersion);
            if (!minVersion) {
                throw new Error("Invalid minimum version: " + asset.minVersion);
            }
            if (GLTFFileLoader._compareVersion(minVersion, { major: 2, minor: 0 }) > 0) {
                throw new Error("Incompatible minimum version: " + asset.minVersion);
            }
        }
        var createLoaders = {
            1: GLTFFileLoader._CreateGLTF1Loader,
            2: GLTFFileLoader._CreateGLTF2Loader,
        };
        var createLoader = createLoaders[version.major];
        if (!createLoader) {
            throw new Error("Unsupported version: " + asset.version);
        }
        return createLoader(this);
    };
    GLTFFileLoader.prototype._parseJson = function (json) {
        this._startPerformanceCounter("Parse JSON");
        this._log("JSON length: ".concat(json.length));
        var parsed = JSON.parse(json);
        this._endPerformanceCounter("Parse JSON");
        return parsed;
    };
    GLTFFileLoader.prototype._unpackBinaryAsync = function (dataReader) {
        var _this = this;
        this._startPerformanceCounter("Unpack Binary");
        // Read magic + version + length + json length + json format
        return dataReader.loadAsync(20).then(function () {
            var Binary = {
                Magic: 0x46546c67,
            };
            var magic = dataReader.readUint32();
            if (magic !== Binary.Magic) {
                throw new babylonjs_Misc_observable__WEBPACK_IMPORTED_MODULE_0__.RuntimeError("Unexpected magic: " + magic, babylonjs_Misc_observable__WEBPACK_IMPORTED_MODULE_0__.ErrorCodes.GLTFLoaderUnexpectedMagicError);
            }
            var version = dataReader.readUint32();
            if (_this.loggingEnabled) {
                _this._log("Binary version: ".concat(version));
            }
            var length = dataReader.readUint32();
            if (!_this.useRangeRequests && length !== dataReader.buffer.byteLength) {
                babylonjs_Misc_observable__WEBPACK_IMPORTED_MODULE_0__.Logger.Warn("Length in header does not match actual data length: ".concat(length, " != ").concat(dataReader.buffer.byteLength));
            }
            var unpacked;
            switch (version) {
                case 1: {
                    unpacked = _this._unpackBinaryV1Async(dataReader, length);
                    break;
                }
                case 2: {
                    unpacked = _this._unpackBinaryV2Async(dataReader, length);
                    break;
                }
                default: {
                    throw new Error("Unsupported version: " + version);
                }
            }
            _this._endPerformanceCounter("Unpack Binary");
            return unpacked;
        });
    };
    GLTFFileLoader.prototype._unpackBinaryV1Async = function (dataReader, length) {
        var ContentFormat = {
            JSON: 0,
        };
        var contentLength = dataReader.readUint32();
        var contentFormat = dataReader.readUint32();
        if (contentFormat !== ContentFormat.JSON) {
            throw new Error("Unexpected content format: ".concat(contentFormat));
        }
        var bodyLength = length - dataReader.byteOffset;
        var data = { json: this._parseJson(dataReader.readString(contentLength)), bin: null };
        if (bodyLength !== 0) {
            var startByteOffset_1 = dataReader.byteOffset;
            data.bin = {
                readAsync: function (byteOffset, byteLength) { return dataReader.buffer.readAsync(startByteOffset_1 + byteOffset, byteLength); },
                byteLength: bodyLength,
            };
        }
        return Promise.resolve(data);
    };
    GLTFFileLoader.prototype._unpackBinaryV2Async = function (dataReader, length) {
        var _this = this;
        var ChunkFormat = {
            JSON: 0x4e4f534a,
            BIN: 0x004e4942,
        };
        // Read the JSON chunk header.
        var chunkLength = dataReader.readUint32();
        var chunkFormat = dataReader.readUint32();
        if (chunkFormat !== ChunkFormat.JSON) {
            throw new Error("First chunk format is not JSON");
        }
        // Bail if there are no other chunks.
        if (dataReader.byteOffset + chunkLength === length) {
            return dataReader.loadAsync(chunkLength).then(function () {
                return { json: _this._parseJson(dataReader.readString(chunkLength)), bin: null };
            });
        }
        // Read the JSON chunk and the length and type of the next chunk.
        return dataReader.loadAsync(chunkLength + 8).then(function () {
            var data = { json: _this._parseJson(dataReader.readString(chunkLength)), bin: null };
            var readAsync = function () {
                var chunkLength = dataReader.readUint32();
                var chunkFormat = dataReader.readUint32();
                switch (chunkFormat) {
                    case ChunkFormat.JSON: {
                        throw new Error("Unexpected JSON chunk");
                    }
                    case ChunkFormat.BIN: {
                        var startByteOffset_2 = dataReader.byteOffset;
                        data.bin = {
                            readAsync: function (byteOffset, byteLength) { return dataReader.buffer.readAsync(startByteOffset_2 + byteOffset, byteLength); },
                            byteLength: chunkLength,
                        };
                        dataReader.skipBytes(chunkLength);
                        break;
                    }
                    default: {
                        // ignore unrecognized chunkFormat
                        dataReader.skipBytes(chunkLength);
                        break;
                    }
                }
                if (dataReader.byteOffset !== length) {
                    return dataReader.loadAsync(8).then(readAsync);
                }
                return Promise.resolve(data);
            };
            return readAsync();
        });
    };
    GLTFFileLoader._parseVersion = function (version) {
        if (version === "1.0" || version === "1.0.1") {
            return {
                major: 1,
                minor: 0,
            };
        }
        var match = (version + "").match(/^(\d+)\.(\d+)/);
        if (!match) {
            return null;
        }
        return {
            major: parseInt(match[1]),
            minor: parseInt(match[2]),
        };
    };
    GLTFFileLoader._compareVersion = function (a, b) {
        if (a.major > b.major) {
            return 1;
        }
        if (a.major < b.major) {
            return -1;
        }
        if (a.minor > b.minor) {
            return 1;
        }
        if (a.minor < b.minor) {
            return -1;
        }
        return 0;
    };
    /**
     * @internal
     */
    GLTFFileLoader.prototype._logOpen = function (message) {
        this._log(message);
        this._logIndentLevel++;
    };
    /** @internal */
    GLTFFileLoader.prototype._logClose = function () {
        --this._logIndentLevel;
    };
    GLTFFileLoader.prototype._logEnabled = function (message) {
        var spaces = GLTFFileLoader._logSpaces.substr(0, this._logIndentLevel * 2);
        babylonjs_Misc_observable__WEBPACK_IMPORTED_MODULE_0__.Logger.Log("".concat(spaces).concat(message));
    };
    GLTFFileLoader.prototype._logDisabled = function (message) { };
    GLTFFileLoader.prototype._startPerformanceCounterEnabled = function (counterName) {
        babylonjs_Misc_observable__WEBPACK_IMPORTED_MODULE_0__.Tools.StartPerformanceCounter(counterName);
    };
    GLTFFileLoader.prototype._startPerformanceCounterDisabled = function (counterName) { };
    GLTFFileLoader.prototype._endPerformanceCounterEnabled = function (counterName) {
        babylonjs_Misc_observable__WEBPACK_IMPORTED_MODULE_0__.Tools.EndPerformanceCounter(counterName);
    };
    GLTFFileLoader.prototype._endPerformanceCounterDisabled = function (counterName) { };
    // ----------
    // V1 options
    // ----------
    /**
     * Set this property to false to disable incremental loading which delays the loader from calling the success callback until after loading the meshes and shaders.
     * Textures always loads asynchronously. For example, the success callback can compute the bounding information of the loaded meshes when incremental loading is disabled.
     * Defaults to true.
     * @internal
     */
    GLTFFileLoader.IncrementalLoading = true;
    /**
     * Set this property to true in order to work with homogeneous coordinates, available with some converters and exporters.
     * Defaults to false. See https://en.wikipedia.org/wiki/Homogeneous_coordinates.
     * @internal
     */
    GLTFFileLoader.HomogeneousCoordinates = false;
    GLTFFileLoader._MagicBase64Encoded = "Z2xURg"; // "glTF" base64 encoded (without the quotes!)
    GLTFFileLoader._logSpaces = "                                ";
    return GLTFFileLoader;
}());
if (babylonjs_Misc_observable__WEBPACK_IMPORTED_MODULE_0__.SceneLoader) {
    babylonjs_Misc_observable__WEBPACK_IMPORTED_MODULE_0__.SceneLoader.RegisterPlugin(new GLTFFileLoader());
}


/***/ }),

/***/ "../../../dev/loaders/src/glTF/glTFValidation.ts":
/*!*******************************************************!*\
  !*** ../../../dev/loaders/src/glTF/glTFValidation.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GLTFValidation: () => (/* binding */ GLTFValidation)
/* harmony export */ });
/* harmony import */ var babylonjs_Misc_tools__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babylonjs/Misc/tools */ "babylonjs/Misc/observable");
/* harmony import */ var babylonjs_Misc_tools__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babylonjs_Misc_tools__WEBPACK_IMPORTED_MODULE_0__);

function validateAsync(data, rootUrl, fileName, getExternalResource) {
    var options = {
        externalResourceFunction: function (uri) { return getExternalResource(uri).then(function (value) { return new Uint8Array(value); }); },
    };
    if (fileName) {
        options.uri = rootUrl === "file:" ? fileName : rootUrl + fileName;
    }
    return data instanceof ArrayBuffer ? GLTFValidator.validateBytes(new Uint8Array(data), options) : GLTFValidator.validateString(data, options);
}
/**
 * The worker function that gets converted to a blob url to pass into a worker.
 */
function workerFunc() {
    var pendingExternalResources = [];
    onmessage = function (message) {
        var data = message.data;
        switch (data.id) {
            case "init": {
                importScripts(data.url);
                break;
            }
            case "validate": {
                validateAsync(data.data, data.rootUrl, data.fileName, function (uri) {
                    return new Promise(function (resolve, reject) {
                        var index = pendingExternalResources.length;
                        pendingExternalResources.push({ resolve: resolve, reject: reject });
                        postMessage({ id: "getExternalResource", index: index, uri: uri });
                    });
                }).then(function (value) {
                    postMessage({ id: "validate.resolve", value: value });
                }, function (reason) {
                    postMessage({ id: "validate.reject", reason: reason });
                });
                break;
            }
            case "getExternalResource.resolve": {
                pendingExternalResources[data.index].resolve(data.value);
                break;
            }
            case "getExternalResource.reject": {
                pendingExternalResources[data.index].reject(data.reason);
                break;
            }
        }
    };
}
/**
 * glTF validation
 */
var GLTFValidation = /** @class */ (function () {
    function GLTFValidation() {
    }
    /**
     * Validate a glTF asset using the glTF-Validator.
     * @param data The JSON of a glTF or the array buffer of a binary glTF
     * @param rootUrl The root url for the glTF
     * @param fileName The file name for the glTF
     * @param getExternalResource The callback to get external resources for the glTF validator
     * @returns A promise that resolves with the glTF validation results once complete
     */
    GLTFValidation.ValidateAsync = function (data, rootUrl, fileName, getExternalResource) {
        var _this = this;
        var dataCopy = ArrayBuffer.isView(data) ? data.slice().buffer : data;
        if (typeof Worker === "function") {
            return new Promise(function (resolve, reject) {
                var workerContent = "".concat(validateAsync, "(").concat(workerFunc, ")()");
                var workerBlobUrl = URL.createObjectURL(new Blob([workerContent], { type: "application/javascript" }));
                var worker = new Worker(workerBlobUrl);
                var onError = function (error) {
                    worker.removeEventListener("error", onError);
                    worker.removeEventListener("message", onMessage);
                    reject(error);
                };
                var onMessage = function (message) {
                    var data = message.data;
                    switch (data.id) {
                        case "getExternalResource": {
                            getExternalResource(data.uri).then(function (value) {
                                worker.postMessage({ id: "getExternalResource.resolve", index: data.index, value: value }, [value]);
                            }, function (reason) {
                                worker.postMessage({ id: "getExternalResource.reject", index: data.index, reason: reason });
                            });
                            break;
                        }
                        case "validate.resolve": {
                            worker.removeEventListener("error", onError);
                            worker.removeEventListener("message", onMessage);
                            resolve(data.value);
                            worker.terminate();
                            break;
                        }
                        case "validate.reject": {
                            worker.removeEventListener("error", onError);
                            worker.removeEventListener("message", onMessage);
                            reject(data.reason);
                            worker.terminate();
                        }
                    }
                };
                worker.addEventListener("error", onError);
                worker.addEventListener("message", onMessage);
                worker.postMessage({ id: "init", url: babylonjs_Misc_tools__WEBPACK_IMPORTED_MODULE_0__.Tools.GetBabylonScriptURL(_this.Configuration.url) });
                worker.postMessage({ id: "validate", data: dataCopy, rootUrl: rootUrl, fileName: fileName });
            });
        }
        else {
            if (!this._LoadScriptPromise) {
                this._LoadScriptPromise = babylonjs_Misc_tools__WEBPACK_IMPORTED_MODULE_0__.Tools.LoadBabylonScriptAsync(this.Configuration.url);
            }
            return this._LoadScriptPromise.then(function () {
                return validateAsync(dataCopy, rootUrl, fileName, getExternalResource);
            });
        }
    };
    /**
     * The configuration. Defaults to `{ url: "https://cdn.babylonjs.com/gltf_validator.js" }`.
     */
    GLTFValidation.Configuration = {
        url: "".concat(babylonjs_Misc_tools__WEBPACK_IMPORTED_MODULE_0__.Tools._DefaultCdnUrl, "/gltf_validator.js"),
    };
    return GLTFValidation;
}());


/***/ }),

/***/ "../../../lts/loaders/src/legacy/legacy-glTF.ts":
/*!******************************************************!*\
  !*** ../../../lts/loaders/src/legacy/legacy-glTF.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GLTFFileLoader: () => (/* reexport safe */ loaders_glTF_glTFFileLoader__WEBPACK_IMPORTED_MODULE_0__.GLTFFileLoader),
/* harmony export */   GLTFLoaderAnimationStartMode: () => (/* reexport safe */ loaders_glTF_glTFFileLoader__WEBPACK_IMPORTED_MODULE_0__.GLTFLoaderAnimationStartMode),
/* harmony export */   GLTFLoaderCoordinateSystemMode: () => (/* reexport safe */ loaders_glTF_glTFFileLoader__WEBPACK_IMPORTED_MODULE_0__.GLTFLoaderCoordinateSystemMode),
/* harmony export */   GLTFLoaderState: () => (/* reexport safe */ loaders_glTF_glTFFileLoader__WEBPACK_IMPORTED_MODULE_0__.GLTFLoaderState),
/* harmony export */   GLTFValidation: () => (/* reexport safe */ loaders_glTF_glTFValidation__WEBPACK_IMPORTED_MODULE_1__.GLTFValidation)
/* harmony export */ });
/* harmony import */ var loaders_glTF_glTFFileLoader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! loaders/glTF/glTFFileLoader */ "../../../dev/loaders/src/glTF/glTFFileLoader.ts");
/* harmony import */ var loaders_glTF_glTFValidation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! loaders/glTF/glTFValidation */ "../../../dev/loaders/src/glTF/glTFValidation.ts");


/**
 * This is the entry point for the UMD module.
 * The entry point for a future ESM package should be index.ts
 */
var globalObject = typeof __webpack_require__.g !== "undefined" ? __webpack_require__.g : typeof window !== "undefined" ? window : undefined;
if (typeof globalObject !== "undefined") {
    globalObject.BABYLON = globalObject.BABYLON || {};
    for (var key in loaders_glTF_glTFFileLoader__WEBPACK_IMPORTED_MODULE_0__) {
        globalObject.BABYLON[key] = loaders_glTF_glTFFileLoader__WEBPACK_IMPORTED_MODULE_0__[key];
    }
    for (var key in loaders_glTF_glTFValidation__WEBPACK_IMPORTED_MODULE_1__) {
        globalObject.BABYLON[key] = loaders_glTF_glTFValidation__WEBPACK_IMPORTED_MODULE_1__[key];
    }
}




/***/ }),

/***/ "../../../lts/loaders/src/legacy/legacy-glTF1.ts":
/*!*******************************************************!*\
  !*** ../../../lts/loaders/src/legacy/legacy-glTF1.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GLTF1: () => (/* reexport module object */ loaders_glTF_1_0_index__WEBPACK_IMPORTED_MODULE_0__)
/* harmony export */ });
/* harmony import */ var loaders_glTF_1_0_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! loaders/glTF/1.0/index */ "../../../dev/loaders/src/glTF/1.0/index.ts");
/* eslint-disable import/no-internal-modules */

/**
 * This is the entry point for the UMD module.
 * The entry point for a future ESM package should be index.ts
 */
var globalObject = typeof __webpack_require__.g !== "undefined" ? __webpack_require__.g : typeof window !== "undefined" ? window : undefined;
if (typeof globalObject !== "undefined") {
    globalObject.BABYLON = globalObject.BABYLON || {};
    globalObject.BABYLON.GLTF1 = globalObject.BABYLON.GLTF1 || {};
    for (var key in loaders_glTF_1_0_index__WEBPACK_IMPORTED_MODULE_0__) {
        globalObject.BABYLON.GLTF1[key] = loaders_glTF_1_0_index__WEBPACK_IMPORTED_MODULE_0__[key];
    }
}



/***/ }),

/***/ "../../../lts/loaders/src/legacy/legacy-glTF1FileLoader.ts":
/*!*****************************************************************!*\
  !*** ../../../lts/loaders/src/legacy/legacy-glTF1FileLoader.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GLTF1: () => (/* reexport safe */ _legacy_glTF1__WEBPACK_IMPORTED_MODULE_1__.GLTF1),
/* harmony export */   GLTFFileLoader: () => (/* reexport safe */ _legacy_glTF__WEBPACK_IMPORTED_MODULE_0__.GLTFFileLoader),
/* harmony export */   GLTFLoaderAnimationStartMode: () => (/* reexport safe */ _legacy_glTF__WEBPACK_IMPORTED_MODULE_0__.GLTFLoaderAnimationStartMode),
/* harmony export */   GLTFLoaderCoordinateSystemMode: () => (/* reexport safe */ _legacy_glTF__WEBPACK_IMPORTED_MODULE_0__.GLTFLoaderCoordinateSystemMode),
/* harmony export */   GLTFLoaderState: () => (/* reexport safe */ _legacy_glTF__WEBPACK_IMPORTED_MODULE_0__.GLTFLoaderState),
/* harmony export */   GLTFValidation: () => (/* reexport safe */ _legacy_glTF__WEBPACK_IMPORTED_MODULE_0__.GLTFValidation)
/* harmony export */ });
/* harmony import */ var _legacy_glTF__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./legacy-glTF */ "../../../lts/loaders/src/legacy/legacy-glTF.ts");
/* harmony import */ var _legacy_glTF1__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./legacy-glTF1 */ "../../../lts/loaders/src/legacy/legacy-glTF1.ts");
// eslint-disable-next-line import/export




/***/ }),

/***/ "babylonjs/Misc/observable":
/*!****************************************************************************************************!*\
  !*** external {"root":"BABYLON","commonjs":"babylonjs","commonjs2":"babylonjs","amd":"babylonjs"} ***!
  \****************************************************************************************************/
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE_babylonjs_Misc_observable__;

/***/ }),

/***/ "../../../../node_modules/tslib/tslib.es6.mjs":
/*!****************************************************!*\
  !*** ../../../../node_modules/tslib/tslib.es6.mjs ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __addDisposableResource: () => (/* binding */ __addDisposableResource),
/* harmony export */   __assign: () => (/* binding */ __assign),
/* harmony export */   __asyncDelegator: () => (/* binding */ __asyncDelegator),
/* harmony export */   __asyncGenerator: () => (/* binding */ __asyncGenerator),
/* harmony export */   __asyncValues: () => (/* binding */ __asyncValues),
/* harmony export */   __await: () => (/* binding */ __await),
/* harmony export */   __awaiter: () => (/* binding */ __awaiter),
/* harmony export */   __classPrivateFieldGet: () => (/* binding */ __classPrivateFieldGet),
/* harmony export */   __classPrivateFieldIn: () => (/* binding */ __classPrivateFieldIn),
/* harmony export */   __classPrivateFieldSet: () => (/* binding */ __classPrivateFieldSet),
/* harmony export */   __createBinding: () => (/* binding */ __createBinding),
/* harmony export */   __decorate: () => (/* binding */ __decorate),
/* harmony export */   __disposeResources: () => (/* binding */ __disposeResources),
/* harmony export */   __esDecorate: () => (/* binding */ __esDecorate),
/* harmony export */   __exportStar: () => (/* binding */ __exportStar),
/* harmony export */   __extends: () => (/* binding */ __extends),
/* harmony export */   __generator: () => (/* binding */ __generator),
/* harmony export */   __importDefault: () => (/* binding */ __importDefault),
/* harmony export */   __importStar: () => (/* binding */ __importStar),
/* harmony export */   __makeTemplateObject: () => (/* binding */ __makeTemplateObject),
/* harmony export */   __metadata: () => (/* binding */ __metadata),
/* harmony export */   __param: () => (/* binding */ __param),
/* harmony export */   __propKey: () => (/* binding */ __propKey),
/* harmony export */   __read: () => (/* binding */ __read),
/* harmony export */   __rest: () => (/* binding */ __rest),
/* harmony export */   __runInitializers: () => (/* binding */ __runInitializers),
/* harmony export */   __setFunctionName: () => (/* binding */ __setFunctionName),
/* harmony export */   __spread: () => (/* binding */ __spread),
/* harmony export */   __spreadArray: () => (/* binding */ __spreadArray),
/* harmony export */   __spreadArrays: () => (/* binding */ __spreadArrays),
/* harmony export */   __values: () => (/* binding */ __values),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise, SuppressedError, Symbol */

var extendStatics = function(d, b) {
  extendStatics = Object.setPrototypeOf ||
      ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
      function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
  return extendStatics(d, b);
};

function __extends(d, b) {
  if (typeof b !== "function" && b !== null)
      throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
  extendStatics(d, b);
  function __() { this.constructor = d; }
  d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
  __assign = Object.assign || function __assign(t) {
      for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
      return t;
  }
  return __assign.apply(this, arguments);
}

function __rest(s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
      t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
      for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
          if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
              t[p[i]] = s[p[i]];
      }
  return t;
}

function __decorate(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
  return function (target, key) { decorator(target, key, paramIndex); }
}

function __esDecorate(ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
  function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
  var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
  var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
  var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
  var _, done = false;
  for (var i = decorators.length - 1; i >= 0; i--) {
      var context = {};
      for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
      for (var p in contextIn.access) context.access[p] = contextIn.access[p];
      context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
      var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
      if (kind === "accessor") {
          if (result === void 0) continue;
          if (result === null || typeof result !== "object") throw new TypeError("Object expected");
          if (_ = accept(result.get)) descriptor.get = _;
          if (_ = accept(result.set)) descriptor.set = _;
          if (_ = accept(result.init)) initializers.unshift(_);
      }
      else if (_ = accept(result)) {
          if (kind === "field") initializers.unshift(_);
          else descriptor[key] = _;
      }
  }
  if (target) Object.defineProperty(target, contextIn.name, descriptor);
  done = true;
};

function __runInitializers(thisArg, initializers, value) {
  var useValue = arguments.length > 2;
  for (var i = 0; i < initializers.length; i++) {
      value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
  }
  return useValue ? value : void 0;
};

function __propKey(x) {
  return typeof x === "symbol" ? x : "".concat(x);
};

function __setFunctionName(f, name, prefix) {
  if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
  return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};

function __metadata(metadataKey, metadataValue) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
  function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
  return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
      function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
      function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
}

function __generator(thisArg, body) {
  var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
  return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
  function verb(n) { return function (v) { return step([n, v]); }; }
  function step(op) {
      if (f) throw new TypeError("Generator is already executing.");
      while (g && (g = 0, op[0] && (_ = 0)), _) try {
          if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
          if (y = 0, t) op = [op[0] & 2, t.value];
          switch (op[0]) {
              case 0: case 1: t = op; break;
              case 4: _.label++; return { value: op[1], done: false };
              case 5: _.label++; y = op[1]; op = [0]; continue;
              case 7: op = _.ops.pop(); _.trys.pop(); continue;
              default:
                  if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                  if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                  if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                  if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                  if (t[2]) _.ops.pop();
                  _.trys.pop(); continue;
          }
          op = body.call(thisArg, _);
      } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
      if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
  }
}

var __createBinding = Object.create ? (function(o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  var desc = Object.getOwnPropertyDescriptor(m, k);
  if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
  }
  Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});

function __exportStar(m, o) {
  for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
}

function __values(o) {
  var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
  if (m) return m.call(o);
  if (o && typeof o.length === "number") return {
      next: function () {
          if (o && i >= o.length) o = void 0;
          return { value: o && o[i++], done: !o };
      }
  };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o), r, ar = [], e;
  try {
      while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
  }
  catch (error) { e = { error: error }; }
  finally {
      try {
          if (r && !r.done && (m = i["return"])) m.call(i);
      }
      finally { if (e) throw e.error; }
  }
  return ar;
}

/** @deprecated */
function __spread() {
  for (var ar = [], i = 0; i < arguments.length; i++)
      ar = ar.concat(__read(arguments[i]));
  return ar;
}

/** @deprecated */
function __spreadArrays() {
  for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
  for (var r = Array(s), k = 0, i = 0; i < il; i++)
      for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
          r[k] = a[j];
  return r;
}

function __spreadArray(to, from, pack) {
  if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
      if (ar || !(i in from)) {
          if (!ar) ar = Array.prototype.slice.call(from, 0, i);
          ar[i] = from[i];
      }
  }
  return to.concat(ar || Array.prototype.slice.call(from));
}

function __await(v) {
  return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var g = generator.apply(thisArg, _arguments || []), i, q = [];
  return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
  function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
  function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
  function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
  function fulfill(value) { resume("next", value); }
  function reject(value) { resume("throw", value); }
  function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
  var i, p;
  return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
  function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: false } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var m = o[Symbol.asyncIterator], i;
  return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
  function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
  function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
  if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
  return cooked;
};

var __setModuleDefault = Object.create ? (function(o, v) {
  Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
  o["default"] = v;
};

function __importStar(mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
  __setModuleDefault(result, mod);
  return result;
}

function __importDefault(mod) {
  return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, state, kind, f) {
  if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}

function __classPrivateFieldSet(receiver, state, value, kind, f) {
  if (kind === "m") throw new TypeError("Private method is not writable");
  if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
}

function __classPrivateFieldIn(state, receiver) {
  if (receiver === null || (typeof receiver !== "object" && typeof receiver !== "function")) throw new TypeError("Cannot use 'in' operator on non-object");
  return typeof state === "function" ? receiver === state : state.has(receiver);
}

function __addDisposableResource(env, value, async) {
  if (value !== null && value !== void 0) {
    if (typeof value !== "object" && typeof value !== "function") throw new TypeError("Object expected.");
    var dispose;
    if (async) {
        if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
        dispose = value[Symbol.asyncDispose];
    }
    if (dispose === void 0) {
        if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
        dispose = value[Symbol.dispose];
    }
    if (typeof dispose !== "function") throw new TypeError("Object not disposable.");
    env.stack.push({ value: value, dispose: dispose, async: async });
  }
  else if (async) {
    env.stack.push({ async: true });
  }
  return value;
}

var _SuppressedError = typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
  var e = new Error(message);
  return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

function __disposeResources(env) {
  function fail(e) {
    env.error = env.hasError ? new _SuppressedError(e, env.error, "An error was suppressed during disposal.") : e;
    env.hasError = true;
  }
  function next() {
    while (env.stack.length) {
      var rec = env.stack.pop();
      try {
        var result = rec.dispose && rec.dispose.call(rec.value);
        if (rec.async) return Promise.resolve(result).then(next, function(e) { fail(e); return next(); });
      }
      catch (e) {
          fail(e);
      }
    }
    if (env.hasError) throw env.error;
  }
  return next();
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  __extends,
  __assign,
  __rest,
  __decorate,
  __param,
  __metadata,
  __awaiter,
  __generator,
  __createBinding,
  __exportStar,
  __values,
  __read,
  __spread,
  __spreadArrays,
  __spreadArray,
  __await,
  __asyncGenerator,
  __asyncDelegator,
  __asyncValues,
  __makeTemplateObject,
  __importStar,
  __importDefault,
  __classPrivateFieldGet,
  __classPrivateFieldSet,
  __classPrivateFieldIn,
  __addDisposableResource,
  __disposeResources,
});


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
/*!********************************!*\
  !*** ./src/glTF1FileLoader.ts ***!
  \********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   loaders: () => (/* reexport module object */ _lts_loaders_legacy_legacy_glTF1FileLoader__WEBPACK_IMPORTED_MODULE_0__)
/* harmony export */ });
/* harmony import */ var _lts_loaders_legacy_legacy_glTF1FileLoader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @lts/loaders/legacy/legacy-glTF1FileLoader */ "../../../lts/loaders/src/legacy/legacy-glTF1FileLoader.ts");
// eslint-disable-next-line import/export


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_lts_loaders_legacy_legacy_glTF1FileLoader__WEBPACK_IMPORTED_MODULE_0__);

})();

__webpack_exports__ = __webpack_exports__["default"];
/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFieWxvbi5nbFRGMUZpbGVMb2FkZXIuanMiLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1ZBO0FBQ0E7QUFJQTtBQUlBO0FBYUE7OztBQUdBO0FBQ0E7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1REE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUVBO0FBQ0E7QUFHQTs7O0FBR0E7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQVVBO0FBUkE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7Ozs7OztBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTs7Ozs7O0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7O0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBOzs7Ozs7O0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7O0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBOzs7Ozs7QUFNQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7Ozs7QUFTQTtBQUNBO0FBU0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBOzs7Ozs7O0FBT0E7QUFDQTtBQU9BO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQXJDQTs7QUFFQTtBQUNBO0FBQUE7QUFtQ0E7QUFDQTtBQUVBOzs7OztBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7O0FBUUE7QUFDQTtBQVFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFNQTtBQUNBO0FBRUE7OztBQUdBO0FBQ0E7QUFBQTtBQXdhQTtBQXZhQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFPQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTs7QUFFQTs7OztBQUlBO0FBQ0E7QUFBQTtBQXlUQTtBQXRUQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFVQTtBQUVBO0FBS0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBRUE7Ozs7Ozs7OztBQVNBO0FBQ0E7QUFBQTtBQVFBO0FBQ0E7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFBQTtBQVFBO0FBRUE7QUFLQTtBQUNBO0FBR0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUdBO0FBRUE7Ozs7Ozs7QUFPQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBS0E7QUFDQTtBQUdBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBSUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUF2VEE7QUF3VEE7QUFBQTtBQUVBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFDQTs7O0FBQUE7QUFFQTs7Ozs7Ozs7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7OztBQVFBO0FBQ0E7QUFPQTtBQUNBO0FBRUE7Ozs7Ozs7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7OztBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7O0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQU9BO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQU9BO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBTUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFPQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdHZFQTs7O0FBR0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcEdBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBOzs7O0FBSUE7QUFDQTtBQUFBO0FBNlBBO0FBNVBBOzs7Ozs7O0FBT0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7O0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFPQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDOVFBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBd0RBOzs7QUFHQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUFBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQ0E7QUFDQTtBQWFBO0FBQ0E7QUFJQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBQUE7QUFDQTs7QUFFQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUFBO0FBQ0E7O0FBRUE7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFzQ0E7O0FBRUE7QUFDQTtBQUFBO0FBQ0E7O0FBRUE7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFnQkE7O0FBRUE7QUFDQTtBQUFBO0FBT0E7QUFDQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQWlDQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUVBOzs7O0FBSUE7QUFDQTtBQUVBOzs7O0FBSUE7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFFQTs7O0FBR0E7QUFDQTtBQUVBOzs7QUFHQTtBQUNBO0FBRUE7OztBQUdBO0FBQ0E7QUFlQTs7Ozs7QUFLQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQWNBOztBQUVBO0FBQ0E7QUFjQTs7QUFFQTtBQUNBO0FBY0E7Ozs7QUFJQTtBQUNBO0FBZ0JBOztBQUVBO0FBQ0E7QUFjQTs7QUFFQTtBQUNBO0FBY0E7OztBQUdBO0FBQ0E7QUEwREE7O0FBRUE7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFjQTtBQUNBO0FBRUE7QUFJQTs7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQStTQTs7QUFFQTtBQUNBO0FBaVVBO0FBQ0E7QUFFQTtBQUNBO0FBc0JBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFhQTtBQTcvQkE7QUFIQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQUE7QUEySEE7QUFKQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUFBO0FBb0JBO0FBSEE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUFBO0FBWUE7QUFIQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQUE7QUFZQTtBQUhBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFBQTtBQWdCQTtBQUxBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUFBO0FBWUE7QUFIQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQUE7QUFZQTtBQUhBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFBQTtBQWFBO0FBSEE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUFBO0FBS0E7QUFIQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7O0FBZEE7QUFtQkE7QUFIQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQWhCQTtBQWlDQTtBQUhBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFBQTtBQW9CQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUFBO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBR0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUVBO0FBSUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFHQTtBQUlBO0FBRUE7QUFJQTtBQUNBO0FBQ0E7QUFJQTtBQUVBOztBQUVBO0FBQ0E7QUFRQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUdBO0FBRUE7O0FBRUE7QUFDQTtBQUFBO0FBUUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUtBO0FBSEE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUFBO0FBT0E7OztBQUdBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFBQTtBQVFBO0FBSUE7QUFDQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBU0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQVVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFyL0JBO0FBQ0E7QUFDQTtBQUVBOzs7OztBQUtBO0FBQ0E7QUFFQTs7OztBQUlBO0FBQ0E7QUEwVEE7QUE2bkJBO0FBOENBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN3JDQTtBQVNBO0FBTUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU9BO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFZQTs7QUFFQTtBQUNBO0FBQUE7QUFvRkE7QUExRUE7Ozs7Ozs7QUFPQTtBQUNBO0FBQUE7QUFNQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWxGQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQThFQTtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxS0E7QUFDQTtBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ25CQTtBQUNBO0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEJBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNGQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNqWEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FDdkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQ1BBOzs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDTkE7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9MT0FERVJTL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9MT0FERVJTLy4uLy4uLy4uL2Rldi9sb2FkZXJzL3NyYy9nbFRGLzEuMC9nbFRGQmluYXJ5RXh0ZW5zaW9uLnRzIiwid2VicGFjazovL0xPQURFUlMvLi4vLi4vLi4vZGV2L2xvYWRlcnMvc3JjL2dsVEYvMS4wL2dsVEZMb2FkZXIudHMiLCJ3ZWJwYWNrOi8vTE9BREVSUy8uLi8uLi8uLi9kZXYvbG9hZGVycy9zcmMvZ2xURi8xLjAvZ2xURkxvYWRlckludGVyZmFjZXMudHMiLCJ3ZWJwYWNrOi8vTE9BREVSUy8uLi8uLi8uLi9kZXYvbG9hZGVycy9zcmMvZ2xURi8xLjAvZ2xURkxvYWRlclV0aWxzLnRzIiwid2VicGFjazovL0xPQURFUlMvLi4vLi4vLi4vZGV2L2xvYWRlcnMvc3JjL2dsVEYvMS4wL2dsVEZNYXRlcmlhbHNDb21tb25FeHRlbnNpb24udHMiLCJ3ZWJwYWNrOi8vTE9BREVSUy8uLi8uLi8uLi9kZXYvbG9hZGVycy9zcmMvZ2xURi8xLjAvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vTE9BREVSUy8uLi8uLi8uLi9kZXYvbG9hZGVycy9zcmMvZ2xURi9nbFRGRmlsZUxvYWRlci50cyIsIndlYnBhY2s6Ly9MT0FERVJTLy4uLy4uLy4uL2Rldi9sb2FkZXJzL3NyYy9nbFRGL2dsVEZWYWxpZGF0aW9uLnRzIiwid2VicGFjazovL0xPQURFUlMvLi4vLi4vLi4vbHRzL2xvYWRlcnMvc3JjL2xlZ2FjeS9sZWdhY3ktZ2xURi50cyIsIndlYnBhY2s6Ly9MT0FERVJTLy4uLy4uLy4uL2x0cy9sb2FkZXJzL3NyYy9sZWdhY3kvbGVnYWN5LWdsVEYxLnRzIiwid2VicGFjazovL0xPQURFUlMvLi4vLi4vLi4vbHRzL2xvYWRlcnMvc3JjL2xlZ2FjeS9sZWdhY3ktZ2xURjFGaWxlTG9hZGVyLnRzIiwid2VicGFjazovL0xPQURFUlMvZXh0ZXJuYWwgdW1kIHtcInJvb3RcIjpcIkJBQllMT05cIixcImNvbW1vbmpzXCI6XCJiYWJ5bG9uanNcIixcImNvbW1vbmpzMlwiOlwiYmFieWxvbmpzXCIsXCJhbWRcIjpcImJhYnlsb25qc1wifSIsIndlYnBhY2s6Ly9MT0FERVJTLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy90c2xpYi90c2xpYi5lczYubWpzIiwid2VicGFjazovL0xPQURFUlMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vTE9BREVSUy93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9MT0FERVJTL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9MT0FERVJTL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vTE9BREVSUy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL0xPQURFUlMvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9MT0FERVJTLy4vc3JjL2dsVEYxRmlsZUxvYWRlci50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCJiYWJ5bG9uanNcIikpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoXCJiYWJ5bG9uanMtbG9hZGVyc1wiLCBbXCJiYWJ5bG9uanNcIl0sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiYmFieWxvbmpzLWxvYWRlcnNcIl0gPSBmYWN0b3J5KHJlcXVpcmUoXCJiYWJ5bG9uanNcIikpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIkxPQURFUlNcIl0gPSBmYWN0b3J5KHJvb3RbXCJCQUJZTE9OXCJdKTtcbn0pKCh0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIiA/IHNlbGYgOiB0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiID8gZ2xvYmFsIDogdGhpcyksIChfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2JhYnlsb25qc19NaXNjX29ic2VydmFibGVfXykgPT4ge1xucmV0dXJuICIsImltcG9ydCB7IEdMVEZMb2FkZXJFeHRlbnNpb24sIEdMVEZMb2FkZXIsIEdMVEZMb2FkZXJCYXNlIH0gZnJvbSBcIi4vZ2xURkxvYWRlclwiO1xyXG5pbXBvcnQgeyBHTFRGVXRpbHMgfSBmcm9tIFwiLi9nbFRGTG9hZGVyVXRpbHNcIjtcclxuaW1wb3J0IHR5cGUgeyBTY2VuZSB9IGZyb20gXCJjb3JlL3NjZW5lXCI7XHJcbmltcG9ydCB0eXBlIHsgSUdMVEZMb2FkZXJEYXRhIH0gZnJvbSBcIi4uL2dsVEZGaWxlTG9hZGVyXCI7XHJcbmltcG9ydCB0eXBlIHsgSUdMVEZSdW50aW1lLCBJR0xURlRleHR1cmUsIElHTFRGSW1hZ2UsIElHTFRGQnVmZmVyVmlldywgSUdMVEZTaGFkZXIgfSBmcm9tIFwiLi9nbFRGTG9hZGVySW50ZXJmYWNlc1wiO1xyXG5pbXBvcnQgeyBFQ29tcG9uZW50VHlwZSB9IGZyb20gXCIuL2dsVEZMb2FkZXJJbnRlcmZhY2VzXCI7XHJcblxyXG5pbXBvcnQgdHlwZSB7IElEYXRhQnVmZmVyIH0gZnJvbSBcImNvcmUvTWlzYy9kYXRhUmVhZGVyXCI7XHJcblxyXG5jb25zdCBCaW5hcnlFeHRlbnNpb25CdWZmZXJOYW1lID0gXCJiaW5hcnlfZ2xURlwiO1xyXG5cclxuaW50ZXJmYWNlIElHTFRGQmluYXJ5RXh0ZW5zaW9uU2hhZGVyIHtcclxuICAgIGJ1ZmZlclZpZXc6IHN0cmluZztcclxufVxyXG5cclxuaW50ZXJmYWNlIElHTFRGQmluYXJ5RXh0ZW5zaW9uSW1hZ2Uge1xyXG4gICAgYnVmZmVyVmlldzogc3RyaW5nO1xyXG4gICAgbWltZVR5cGU6IHN0cmluZztcclxuICAgIGhlaWdodDogbnVtYmVyO1xyXG4gICAgd2lkdGg6IG51bWJlcjtcclxufVxyXG5cclxuLyoqXHJcbiAqIEBpbnRlcm5hbFxyXG4gKiBAZGVwcmVjYXRlZFxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIEdMVEZCaW5hcnlFeHRlbnNpb24gZXh0ZW5kcyBHTFRGTG9hZGVyRXh0ZW5zaW9uIHtcclxuICAgIHByaXZhdGUgX2JpbjogSURhdGFCdWZmZXI7XHJcblxyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKFwiS0hSX2JpbmFyeV9nbFRGXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBsb2FkUnVudGltZUFzeW5jKHNjZW5lOiBTY2VuZSwgZGF0YTogSUdMVEZMb2FkZXJEYXRhLCByb290VXJsOiBzdHJpbmcsIG9uU3VjY2VzczogKGdsdGZSdW50aW1lOiBJR0xURlJ1bnRpbWUpID0+IHZvaWQpOiBib29sZWFuIHtcclxuICAgICAgICBjb25zdCBleHRlbnNpb25zVXNlZCA9ICg8YW55PmRhdGEuanNvbikuZXh0ZW5zaW9uc1VzZWQ7XHJcbiAgICAgICAgaWYgKCFleHRlbnNpb25zVXNlZCB8fCBleHRlbnNpb25zVXNlZC5pbmRleE9mKHRoaXMubmFtZSkgPT09IC0xIHx8ICFkYXRhLmJpbikge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLl9iaW4gPSBkYXRhLmJpbjtcclxuICAgICAgICBvblN1Y2Nlc3MoR0xURkxvYWRlckJhc2UuQ3JlYXRlUnVudGltZShkYXRhLmpzb24sIHNjZW5lLCByb290VXJsKSk7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGxvYWRCdWZmZXJBc3luYyhnbHRmUnVudGltZTogSUdMVEZSdW50aW1lLCBpZDogc3RyaW5nLCBvblN1Y2Nlc3M6IChidWZmZXI6IEFycmF5QnVmZmVyVmlldykgPT4gdm9pZCwgb25FcnJvcjogKG1lc3NhZ2U6IHN0cmluZykgPT4gdm9pZCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIGlmIChnbHRmUnVudGltZS5leHRlbnNpb25zVXNlZC5pbmRleE9mKHRoaXMubmFtZSkgPT09IC0xKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChpZCAhPT0gQmluYXJ5RXh0ZW5zaW9uQnVmZmVyTmFtZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLl9iaW4ucmVhZEFzeW5jKDAsIHRoaXMuX2Jpbi5ieXRlTGVuZ3RoKS50aGVuKG9uU3VjY2VzcywgKGVycm9yKSA9PiBvbkVycm9yKGVycm9yLm1lc3NhZ2UpKTtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgbG9hZFRleHR1cmVCdWZmZXJBc3luYyhnbHRmUnVudGltZTogSUdMVEZSdW50aW1lLCBpZDogc3RyaW5nLCBvblN1Y2Nlc3M6IChidWZmZXI6IEFycmF5QnVmZmVyVmlldykgPT4gdm9pZCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIGNvbnN0IHRleHR1cmU6IElHTFRGVGV4dHVyZSA9IGdsdGZSdW50aW1lLnRleHR1cmVzW2lkXTtcclxuICAgICAgICBjb25zdCBzb3VyY2U6IElHTFRGSW1hZ2UgPSBnbHRmUnVudGltZS5pbWFnZXNbdGV4dHVyZS5zb3VyY2VdO1xyXG4gICAgICAgIGlmICghc291cmNlLmV4dGVuc2lvbnMgfHwgISh0aGlzLm5hbWUgaW4gc291cmNlLmV4dGVuc2lvbnMpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IHNvdXJjZUV4dDogSUdMVEZCaW5hcnlFeHRlbnNpb25JbWFnZSA9IHNvdXJjZS5leHRlbnNpb25zW3RoaXMubmFtZV07XHJcbiAgICAgICAgY29uc3QgYnVmZmVyVmlldzogSUdMVEZCdWZmZXJWaWV3ID0gZ2x0ZlJ1bnRpbWUuYnVmZmVyVmlld3Nbc291cmNlRXh0LmJ1ZmZlclZpZXddO1xyXG4gICAgICAgIGNvbnN0IGJ1ZmZlciA9IEdMVEZVdGlscy5HZXRCdWZmZXJGcm9tQnVmZmVyVmlldyhnbHRmUnVudGltZSwgYnVmZmVyVmlldywgMCwgYnVmZmVyVmlldy5ieXRlTGVuZ3RoLCBFQ29tcG9uZW50VHlwZS5VTlNJR05FRF9CWVRFKTtcclxuICAgICAgICBvblN1Y2Nlc3MoYnVmZmVyKTtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgbG9hZFNoYWRlclN0cmluZ0FzeW5jKGdsdGZSdW50aW1lOiBJR0xURlJ1bnRpbWUsIGlkOiBzdHJpbmcsIG9uU3VjY2VzczogKHNoYWRlclN0cmluZzogc3RyaW5nKSA9PiB2b2lkKTogYm9vbGVhbiB7XHJcbiAgICAgICAgY29uc3Qgc2hhZGVyOiBJR0xURlNoYWRlciA9IGdsdGZSdW50aW1lLnNoYWRlcnNbaWRdO1xyXG4gICAgICAgIGlmICghc2hhZGVyLmV4dGVuc2lvbnMgfHwgISh0aGlzLm5hbWUgaW4gc2hhZGVyLmV4dGVuc2lvbnMpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGJpbmFyeUV4dGVuc2lvblNoYWRlcjogSUdMVEZCaW5hcnlFeHRlbnNpb25TaGFkZXIgPSBzaGFkZXIuZXh0ZW5zaW9uc1t0aGlzLm5hbWVdO1xyXG4gICAgICAgIGNvbnN0IGJ1ZmZlclZpZXc6IElHTFRGQnVmZmVyVmlldyA9IGdsdGZSdW50aW1lLmJ1ZmZlclZpZXdzW2JpbmFyeUV4dGVuc2lvblNoYWRlci5idWZmZXJWaWV3XTtcclxuICAgICAgICBjb25zdCBzaGFkZXJCeXRlcyA9IEdMVEZVdGlscy5HZXRCdWZmZXJGcm9tQnVmZmVyVmlldyhnbHRmUnVudGltZSwgYnVmZmVyVmlldywgMCwgYnVmZmVyVmlldy5ieXRlTGVuZ3RoLCBFQ29tcG9uZW50VHlwZS5VTlNJR05FRF9CWVRFKTtcclxuXHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHNoYWRlclN0cmluZyA9IEdMVEZVdGlscy5EZWNvZGVCdWZmZXJUb1RleHQoc2hhZGVyQnl0ZXMpO1xyXG4gICAgICAgICAgICBvblN1Y2Nlc3Moc2hhZGVyU3RyaW5nKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbn1cclxuXHJcbkdMVEZMb2FkZXIuUmVnaXN0ZXJFeHRlbnNpb24obmV3IEdMVEZCaW5hcnlFeHRlbnNpb24oKSk7XHJcbiIsIi8qIGVzbGludC1kaXNhYmxlIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFycyAqL1xyXG5pbXBvcnQgdHlwZSB7XHJcbiAgICBJR0xURlJ1bnRpbWUsXHJcbiAgICBJR0xURlRlY2huaXF1ZVBhcmFtZXRlcixcclxuICAgIElHTFRGQW5pbWF0aW9uLFxyXG4gICAgSUdMVEZBbmltYXRpb25TYW1wbGVyLFxyXG4gICAgSUdMVEZOb2RlLFxyXG4gICAgSUdMVEZTa2lucyxcclxuICAgIElOb2RlVG9Sb290LFxyXG4gICAgSUpvaW50Tm9kZSxcclxuICAgIElHTFRGTWVzaCxcclxuICAgIElHTFRGQWNjZXNzb3IsXHJcbiAgICBJR0xURkxpZ2h0LFxyXG4gICAgSUdMVEZBbWJpZW5MaWdodCxcclxuICAgIElHTFRGRGlyZWN0aW9uYWxMaWdodCxcclxuICAgIElHTFRGUG9pbnRMaWdodCxcclxuICAgIElHTFRGU3BvdExpZ2h0LFxyXG4gICAgSUdMVEZDYW1lcmEsXHJcbiAgICBJR0xURkNhbWVyYVBlcnNwZWN0aXZlLFxyXG4gICAgSUdMVEZTY2VuZSxcclxuICAgIElHTFRGVGVjaG5pcXVlLFxyXG4gICAgSUdMVEZNYXRlcmlhbCxcclxuICAgIElHTFRGUHJvZ3JhbSxcclxuICAgIElHTFRGQnVmZmVyLFxyXG4gICAgSUdMVEZUZXh0dXJlLFxyXG4gICAgSUdMVEZJbWFnZSxcclxuICAgIElHTFRGU2FtcGxlcixcclxuICAgIElHTFRGU2hhZGVyLFxyXG4gICAgSUdMVEZUZWNobmlxdWVTdGF0ZXMsXHJcbn0gZnJvbSBcIi4vZ2xURkxvYWRlckludGVyZmFjZXNcIjtcclxuaW1wb3J0IHsgRVBhcmFtZXRlclR5cGUsIEVUZXh0dXJlRmlsdGVyVHlwZSwgRUN1bGxpbmdUeXBlLCBFQmxlbmRpbmdGdW5jdGlvbiwgRVNoYWRlclR5cGUgfSBmcm9tIFwiLi9nbFRGTG9hZGVySW50ZXJmYWNlc1wiO1xyXG5cclxuaW1wb3J0IHR5cGUgeyBGbG9hdEFycmF5LCBOdWxsYWJsZSB9IGZyb20gXCJjb3JlL3R5cGVzXCI7XHJcbmltcG9ydCB7IFF1YXRlcm5pb24sIFZlY3RvcjMsIE1hdHJpeCB9IGZyb20gXCJjb3JlL01hdGhzL21hdGgudmVjdG9yXCI7XHJcbmltcG9ydCB7IENvbG9yMyB9IGZyb20gXCJjb3JlL01hdGhzL21hdGguY29sb3JcIjtcclxuaW1wb3J0IHsgVG9vbHMgfSBmcm9tIFwiY29yZS9NaXNjL3Rvb2xzXCI7XHJcbmltcG9ydCB7IENhbWVyYSB9IGZyb20gXCJjb3JlL0NhbWVyYXMvY2FtZXJhXCI7XHJcbmltcG9ydCB7IEZyZWVDYW1lcmEgfSBmcm9tIFwiY29yZS9DYW1lcmFzL2ZyZWVDYW1lcmFcIjtcclxuaW1wb3J0IHsgQW5pbWF0aW9uIH0gZnJvbSBcImNvcmUvQW5pbWF0aW9ucy9hbmltYXRpb25cIjtcclxuaW1wb3J0IHsgQm9uZSB9IGZyb20gXCJjb3JlL0JvbmVzL2JvbmVcIjtcclxuaW1wb3J0IHsgU2tlbGV0b24gfSBmcm9tIFwiY29yZS9Cb25lcy9za2VsZXRvblwiO1xyXG5pbXBvcnQgeyBFZmZlY3QgfSBmcm9tIFwiY29yZS9NYXRlcmlhbHMvZWZmZWN0XCI7XHJcbmltcG9ydCB7IE1hdGVyaWFsIH0gZnJvbSBcImNvcmUvTWF0ZXJpYWxzL21hdGVyaWFsXCI7XHJcbmltcG9ydCB7IE11bHRpTWF0ZXJpYWwgfSBmcm9tIFwiY29yZS9NYXRlcmlhbHMvbXVsdGlNYXRlcmlhbFwiO1xyXG5pbXBvcnQgeyBTdGFuZGFyZE1hdGVyaWFsIH0gZnJvbSBcImNvcmUvTWF0ZXJpYWxzL3N0YW5kYXJkTWF0ZXJpYWxcIjtcclxuaW1wb3J0IHsgU2hhZGVyTWF0ZXJpYWwgfSBmcm9tIFwiY29yZS9NYXRlcmlhbHMvc2hhZGVyTWF0ZXJpYWxcIjtcclxuaW1wb3J0IHsgVGV4dHVyZSB9IGZyb20gXCJjb3JlL01hdGVyaWFscy9UZXh0dXJlcy90ZXh0dXJlXCI7XHJcbmltcG9ydCB0eXBlIHsgTm9kZSB9IGZyb20gXCJjb3JlL25vZGVcIjtcclxuaW1wb3J0IHsgVmVydGV4RGF0YSB9IGZyb20gXCJjb3JlL01lc2hlcy9tZXNoLnZlcnRleERhdGFcIjtcclxuaW1wb3J0IHsgVmVydGV4QnVmZmVyIH0gZnJvbSBcImNvcmUvQnVmZmVycy9idWZmZXJcIjtcclxuaW1wb3J0IHsgR2VvbWV0cnkgfSBmcm9tIFwiY29yZS9NZXNoZXMvZ2VvbWV0cnlcIjtcclxuaW1wb3J0IHsgU3ViTWVzaCB9IGZyb20gXCJjb3JlL01lc2hlcy9zdWJNZXNoXCI7XHJcbmltcG9ydCB7IEFic3RyYWN0TWVzaCB9IGZyb20gXCJjb3JlL01lc2hlcy9hYnN0cmFjdE1lc2hcIjtcclxuaW1wb3J0IHsgTWVzaCB9IGZyb20gXCJjb3JlL01lc2hlcy9tZXNoXCI7XHJcbmltcG9ydCB7IEhlbWlzcGhlcmljTGlnaHQgfSBmcm9tIFwiY29yZS9MaWdodHMvaGVtaXNwaGVyaWNMaWdodFwiO1xyXG5pbXBvcnQgeyBEaXJlY3Rpb25hbExpZ2h0IH0gZnJvbSBcImNvcmUvTGlnaHRzL2RpcmVjdGlvbmFsTGlnaHRcIjtcclxuaW1wb3J0IHsgUG9pbnRMaWdodCB9IGZyb20gXCJjb3JlL0xpZ2h0cy9wb2ludExpZ2h0XCI7XHJcbmltcG9ydCB7IFNwb3RMaWdodCB9IGZyb20gXCJjb3JlL0xpZ2h0cy9zcG90TGlnaHRcIjtcclxuaW1wb3J0IHR5cGUgeyBJU2NlbmVMb2FkZXJBc3luY1Jlc3VsdCwgSVNjZW5lTG9hZGVyUHJvZ3Jlc3NFdmVudCB9IGZyb20gXCJjb3JlL0xvYWRpbmcvc2NlbmVMb2FkZXJcIjtcclxuaW1wb3J0IHR5cGUgeyBTY2VuZSB9IGZyb20gXCJjb3JlL3NjZW5lXCI7XHJcblxyXG5pbXBvcnQgeyBHTFRGVXRpbHMgfSBmcm9tIFwiLi9nbFRGTG9hZGVyVXRpbHNcIjtcclxuaW1wb3J0IHR5cGUgeyBJR0xURkxvYWRlciwgSUdMVEZMb2FkZXJEYXRhIH0gZnJvbSBcIi4uL2dsVEZGaWxlTG9hZGVyXCI7XHJcbmltcG9ydCB7IEdMVEZGaWxlTG9hZGVyIH0gZnJvbSBcIi4uL2dsVEZGaWxlTG9hZGVyXCI7XHJcbmltcG9ydCB7IENvbnN0YW50cyB9IGZyb20gXCJjb3JlL0VuZ2luZXMvY29uc3RhbnRzXCI7XHJcbmltcG9ydCB0eXBlIHsgQXNzZXRDb250YWluZXIgfSBmcm9tIFwiY29yZS9hc3NldENvbnRhaW5lclwiO1xyXG5cclxuLyoqXHJcbiAqIFRva2VuaXplci4gVXNlZCBmb3Igc2hhZGVycyBjb21wYXRpYmlsaXR5XHJcbiAqIEF1dG9tYXRpY2FsbHkgbWFwIHdvcmxkLCB2aWV3LCBwcm9qZWN0aW9uLCB3b3JsZFZpZXdQcm9qZWN0aW9uLCBhdHRyaWJ1dGVzIGFuZCBzbyBvblxyXG4gKi9cclxuZW51bSBFVG9rZW5UeXBlIHtcclxuICAgIElERU5USUZJRVIgPSAxLFxyXG5cclxuICAgIFVOS05PV04gPSAyLFxyXG4gICAgRU5EX09GX0lOUFVUID0gMyxcclxufVxyXG5cclxuY2xhc3MgVG9rZW5pemVyIHtcclxuICAgIHByaXZhdGUgX3RvUGFyc2U6IHN0cmluZztcclxuICAgIHByaXZhdGUgX3BvczogbnVtYmVyID0gMDtcclxuICAgIHByaXZhdGUgX21heFBvczogbnVtYmVyO1xyXG5cclxuICAgIHB1YmxpYyBjdXJyZW50VG9rZW46IEVUb2tlblR5cGUgPSBFVG9rZW5UeXBlLlVOS05PV047XHJcbiAgICBwdWJsaWMgY3VycmVudElkZW50aWZpZXI6IHN0cmluZyA9IFwiXCI7XHJcbiAgICBwdWJsaWMgY3VycmVudFN0cmluZzogc3RyaW5nID0gXCJcIjtcclxuICAgIHB1YmxpYyBpc0xldHRlck9yRGlnaXRQYXR0ZXJuOiBSZWdFeHAgPSAvXlthLXpBLVowLTldKyQvO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHRvUGFyc2U6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX3RvUGFyc2UgPSB0b1BhcnNlO1xyXG4gICAgICAgIHRoaXMuX21heFBvcyA9IHRvUGFyc2UubGVuZ3RoO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXROZXh0VG9rZW4oKTogRVRva2VuVHlwZSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNFbmQoKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gRVRva2VuVHlwZS5FTkRfT0ZfSU5QVVQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmN1cnJlbnRTdHJpbmcgPSB0aGlzLnJlYWQoKTtcclxuICAgICAgICB0aGlzLmN1cnJlbnRUb2tlbiA9IEVUb2tlblR5cGUuVU5LTk9XTjtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuY3VycmVudFN0cmluZyA9PT0gXCJfXCIgfHwgdGhpcy5pc0xldHRlck9yRGlnaXRQYXR0ZXJuLnRlc3QodGhpcy5jdXJyZW50U3RyaW5nKSkge1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRUb2tlbiA9IEVUb2tlblR5cGUuSURFTlRJRklFUjtcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50SWRlbnRpZmllciA9IHRoaXMuY3VycmVudFN0cmluZztcclxuICAgICAgICAgICAgd2hpbGUgKCF0aGlzLmlzRW5kKCkgJiYgKHRoaXMuaXNMZXR0ZXJPckRpZ2l0UGF0dGVybi50ZXN0KCh0aGlzLmN1cnJlbnRTdHJpbmcgPSB0aGlzLnBlZWsoKSkpIHx8IHRoaXMuY3VycmVudFN0cmluZyA9PT0gXCJfXCIpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRJZGVudGlmaWVyICs9IHRoaXMuY3VycmVudFN0cmluZztcclxuICAgICAgICAgICAgICAgIHRoaXMuZm9yd2FyZCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5jdXJyZW50VG9rZW47XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHBlZWsoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fdG9QYXJzZVt0aGlzLl9wb3NdO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyByZWFkKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3RvUGFyc2VbdGhpcy5fcG9zKytdO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBmb3J3YXJkKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuX3BvcysrO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBpc0VuZCgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fcG9zID49IHRoaXMuX21heFBvcztcclxuICAgIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIFZhbHVlc1xyXG4gKi9cclxuY29uc3QgZ2xURlRyYW5zZm9ybXMgPSBbXCJNT0RFTFwiLCBcIlZJRVdcIiwgXCJQUk9KRUNUSU9OXCIsIFwiTU9ERUxWSUVXXCIsIFwiTU9ERUxWSUVXUFJPSkVDVElPTlwiLCBcIkpPSU5UTUFUUklYXCJdO1xyXG5jb25zdCBiYWJ5bG9uVHJhbnNmb3JtcyA9IFtcIndvcmxkXCIsIFwidmlld1wiLCBcInByb2plY3Rpb25cIiwgXCJ3b3JsZFZpZXdcIiwgXCJ3b3JsZFZpZXdQcm9qZWN0aW9uXCIsIFwibUJvbmVzXCJdO1xyXG5cclxuY29uc3QgZ2xURkFuaW1hdGlvblBhdGhzID0gW1widHJhbnNsYXRpb25cIiwgXCJyb3RhdGlvblwiLCBcInNjYWxlXCJdO1xyXG5jb25zdCBiYWJ5bG9uQW5pbWF0aW9uUGF0aHMgPSBbXCJwb3NpdGlvblwiLCBcInJvdGF0aW9uUXVhdGVybmlvblwiLCBcInNjYWxpbmdcIl07XHJcblxyXG4vKipcclxuICogUGFyc2VcclxuICogQHBhcmFtIHBhcnNlZEJ1ZmZlcnNcclxuICogQHBhcmFtIGdsdGZSdW50aW1lXHJcbiAqL1xyXG5jb25zdCBwYXJzZUJ1ZmZlcnMgPSAocGFyc2VkQnVmZmVyczogYW55LCBnbHRmUnVudGltZTogSUdMVEZSdW50aW1lKSA9PiB7XHJcbiAgICBmb3IgKGNvbnN0IGJ1ZiBpbiBwYXJzZWRCdWZmZXJzKSB7XHJcbiAgICAgICAgY29uc3QgcGFyc2VkQnVmZmVyID0gcGFyc2VkQnVmZmVyc1tidWZdO1xyXG4gICAgICAgIGdsdGZSdW50aW1lLmJ1ZmZlcnNbYnVmXSA9IHBhcnNlZEJ1ZmZlcjtcclxuICAgICAgICBnbHRmUnVudGltZS5idWZmZXJzQ291bnQrKztcclxuICAgIH1cclxufTtcclxuXHJcbmNvbnN0IHBhcnNlU2hhZGVycyA9IChwYXJzZWRTaGFkZXJzOiBhbnksIGdsdGZSdW50aW1lOiBJR0xURlJ1bnRpbWUpID0+IHtcclxuICAgIGZvciAoY29uc3Qgc2hhIGluIHBhcnNlZFNoYWRlcnMpIHtcclxuICAgICAgICBjb25zdCBwYXJzZWRTaGFkZXIgPSBwYXJzZWRTaGFkZXJzW3NoYV07XHJcbiAgICAgICAgZ2x0ZlJ1bnRpbWUuc2hhZGVyc1tzaGFdID0gcGFyc2VkU2hhZGVyO1xyXG4gICAgICAgIGdsdGZSdW50aW1lLnNoYWRlcnNjb3VudCsrO1xyXG4gICAgfVxyXG59O1xyXG5cclxuY29uc3QgcGFyc2VPYmplY3QgPSAocGFyc2VkT2JqZWN0czogYW55LCBydW50aW1lUHJvcGVydHk6IHN0cmluZywgZ2x0ZlJ1bnRpbWU6IElHTFRGUnVudGltZSkgPT4ge1xyXG4gICAgZm9yIChjb25zdCBvYmplY3QgaW4gcGFyc2VkT2JqZWN0cykge1xyXG4gICAgICAgIGNvbnN0IHBhcnNlZE9iamVjdCA9IHBhcnNlZE9iamVjdHNbb2JqZWN0XTtcclxuICAgICAgICAoPGFueT5nbHRmUnVudGltZSlbcnVudGltZVByb3BlcnR5XVtvYmplY3RdID0gcGFyc2VkT2JqZWN0O1xyXG4gICAgfVxyXG59O1xyXG5cclxuLyoqXHJcbiAqIFV0aWxzXHJcbiAqIEBwYXJhbSBidWZmZXJcclxuICovXHJcbmNvbnN0IG5vcm1hbGl6ZVVWcyA9IChidWZmZXI6IGFueSkgPT4ge1xyXG4gICAgaWYgKCFidWZmZXIpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBidWZmZXIubGVuZ3RoIC8gMjsgaSsrKSB7XHJcbiAgICAgICAgYnVmZmVyW2kgKiAyICsgMV0gPSAxLjAgLSBidWZmZXJbaSAqIDIgKyAxXTtcclxuICAgIH1cclxufTtcclxuXHJcbmNvbnN0IGdldEF0dHJpYnV0ZSA9IChhdHRyaWJ1dGVQYXJhbWV0ZXI6IElHTFRGVGVjaG5pcXVlUGFyYW1ldGVyKTogTnVsbGFibGU8c3RyaW5nPiA9PiB7XHJcbiAgICBpZiAoYXR0cmlidXRlUGFyYW1ldGVyLnNlbWFudGljID09PSBcIk5PUk1BTFwiKSB7XHJcbiAgICAgICAgcmV0dXJuIFwibm9ybWFsXCI7XHJcbiAgICB9IGVsc2UgaWYgKGF0dHJpYnV0ZVBhcmFtZXRlci5zZW1hbnRpYyA9PT0gXCJQT1NJVElPTlwiKSB7XHJcbiAgICAgICAgcmV0dXJuIFwicG9zaXRpb25cIjtcclxuICAgIH0gZWxzZSBpZiAoYXR0cmlidXRlUGFyYW1ldGVyLnNlbWFudGljID09PSBcIkpPSU5UXCIpIHtcclxuICAgICAgICByZXR1cm4gXCJtYXRyaWNlc0luZGljZXNcIjtcclxuICAgIH0gZWxzZSBpZiAoYXR0cmlidXRlUGFyYW1ldGVyLnNlbWFudGljID09PSBcIldFSUdIVFwiKSB7XHJcbiAgICAgICAgcmV0dXJuIFwibWF0cmljZXNXZWlnaHRzXCI7XHJcbiAgICB9IGVsc2UgaWYgKGF0dHJpYnV0ZVBhcmFtZXRlci5zZW1hbnRpYyA9PT0gXCJDT0xPUlwiKSB7XHJcbiAgICAgICAgcmV0dXJuIFwiY29sb3JcIjtcclxuICAgIH0gZWxzZSBpZiAoYXR0cmlidXRlUGFyYW1ldGVyLnNlbWFudGljICYmIGF0dHJpYnV0ZVBhcmFtZXRlci5zZW1hbnRpYy5pbmRleE9mKFwiVEVYQ09PUkRfXCIpICE9PSAtMSkge1xyXG4gICAgICAgIGNvbnN0IGNoYW5uZWwgPSBOdW1iZXIoYXR0cmlidXRlUGFyYW1ldGVyLnNlbWFudGljLnNwbGl0KFwiX1wiKVsxXSk7XHJcbiAgICAgICAgcmV0dXJuIFwidXZcIiArIChjaGFubmVsID09PSAwID8gXCJcIiA6IGNoYW5uZWwgKyAxKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gbnVsbDtcclxufTtcclxuXHJcbi8qKlxyXG4gKiBMb2FkcyBhbmQgY3JlYXRlcyBhbmltYXRpb25zXHJcbiAqIEBwYXJhbSBnbHRmUnVudGltZVxyXG4gKi9cclxuY29uc3QgbG9hZEFuaW1hdGlvbnMgPSAoZ2x0ZlJ1bnRpbWU6IElHTFRGUnVudGltZSkgPT4ge1xyXG4gICAgZm9yIChjb25zdCBhbmltIGluIGdsdGZSdW50aW1lLmFuaW1hdGlvbnMpIHtcclxuICAgICAgICBjb25zdCBhbmltYXRpb246IElHTFRGQW5pbWF0aW9uID0gZ2x0ZlJ1bnRpbWUuYW5pbWF0aW9uc1thbmltXTtcclxuXHJcbiAgICAgICAgaWYgKCFhbmltYXRpb24uY2hhbm5lbHMgfHwgIWFuaW1hdGlvbi5zYW1wbGVycykge1xyXG4gICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBsYXN0QW5pbWF0aW9uOiBOdWxsYWJsZTxBbmltYXRpb24+ID0gbnVsbDtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhbmltYXRpb24uY2hhbm5lbHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgLy8gR2V0IHBhcmFtZXRlcnMgYW5kIGxvYWQgYnVmZmVyc1xyXG4gICAgICAgICAgICBjb25zdCBjaGFubmVsID0gYW5pbWF0aW9uLmNoYW5uZWxzW2ldO1xyXG4gICAgICAgICAgICBjb25zdCBzYW1wbGVyOiBJR0xURkFuaW1hdGlvblNhbXBsZXIgPSBhbmltYXRpb24uc2FtcGxlcnNbY2hhbm5lbC5zYW1wbGVyXTtcclxuXHJcbiAgICAgICAgICAgIGlmICghc2FtcGxlcikge1xyXG4gICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGxldCBpbnB1dERhdGE6IE51bGxhYmxlPHN0cmluZz4gPSBudWxsO1xyXG4gICAgICAgICAgICBsZXQgb3V0cHV0RGF0YTogTnVsbGFibGU8c3RyaW5nPiA9IG51bGw7XHJcblxyXG4gICAgICAgICAgICBpZiAoYW5pbWF0aW9uLnBhcmFtZXRlcnMpIHtcclxuICAgICAgICAgICAgICAgIGlucHV0RGF0YSA9IGFuaW1hdGlvbi5wYXJhbWV0ZXJzW3NhbXBsZXIuaW5wdXRdO1xyXG4gICAgICAgICAgICAgICAgb3V0cHV0RGF0YSA9IGFuaW1hdGlvbi5wYXJhbWV0ZXJzW3NhbXBsZXIub3V0cHV0XTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGlucHV0RGF0YSA9IHNhbXBsZXIuaW5wdXQ7XHJcbiAgICAgICAgICAgICAgICBvdXRwdXREYXRhID0gc2FtcGxlci5vdXRwdXQ7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGJ1ZmZlcklucHV0ID0gR0xURlV0aWxzLkdldEJ1ZmZlckZyb21BY2Nlc3NvcihnbHRmUnVudGltZSwgZ2x0ZlJ1bnRpbWUuYWNjZXNzb3JzW2lucHV0RGF0YV0pO1xyXG4gICAgICAgICAgICBjb25zdCBidWZmZXJPdXRwdXQgPSBHTFRGVXRpbHMuR2V0QnVmZmVyRnJvbUFjY2Vzc29yKGdsdGZSdW50aW1lLCBnbHRmUnVudGltZS5hY2Nlc3NvcnNbb3V0cHV0RGF0YV0pO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgdGFyZ2V0SWQgPSBjaGFubmVsLnRhcmdldC5pZDtcclxuICAgICAgICAgICAgbGV0IHRhcmdldE5vZGU6IGFueSA9IGdsdGZSdW50aW1lLnNjZW5lLmdldE5vZGVCeUlkKHRhcmdldElkKTtcclxuXHJcbiAgICAgICAgICAgIGlmICh0YXJnZXROb2RlID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICB0YXJnZXROb2RlID0gZ2x0ZlJ1bnRpbWUuc2NlbmUuZ2V0Tm9kZUJ5TmFtZSh0YXJnZXRJZCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICh0YXJnZXROb2RlID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICBUb29scy5XYXJuKFwiQ3JlYXRpbmcgYW5pbWF0aW9uIG5hbWVkIFwiICsgYW5pbSArIFwiLiBCdXQgY2Fubm90IGZpbmQgbm9kZSBuYW1lZCBcIiArIHRhcmdldElkICsgXCIgdG8gYXR0YWNoIHRvXCIpO1xyXG4gICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGlzQm9uZSA9IHRhcmdldE5vZGUgaW5zdGFuY2VvZiBCb25lO1xyXG5cclxuICAgICAgICAgICAgLy8gR2V0IHRhcmdldCBwYXRoIChwb3NpdGlvbiwgcm90YXRpb24gb3Igc2NhbGluZylcclxuICAgICAgICAgICAgbGV0IHRhcmdldFBhdGggPSBjaGFubmVsLnRhcmdldC5wYXRoO1xyXG4gICAgICAgICAgICBjb25zdCB0YXJnZXRQYXRoSW5kZXggPSBnbFRGQW5pbWF0aW9uUGF0aHMuaW5kZXhPZih0YXJnZXRQYXRoKTtcclxuXHJcbiAgICAgICAgICAgIGlmICh0YXJnZXRQYXRoSW5kZXggIT09IC0xKSB7XHJcbiAgICAgICAgICAgICAgICB0YXJnZXRQYXRoID0gYmFieWxvbkFuaW1hdGlvblBhdGhzW3RhcmdldFBhdGhJbmRleF07XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIERldGVybWluZSBhbmltYXRpb24gdHlwZVxyXG4gICAgICAgICAgICBsZXQgYW5pbWF0aW9uVHlwZSA9IEFuaW1hdGlvbi5BTklNQVRJT05UWVBFX01BVFJJWDtcclxuXHJcbiAgICAgICAgICAgIGlmICghaXNCb25lKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGFyZ2V0UGF0aCA9PT0gXCJyb3RhdGlvblF1YXRlcm5pb25cIikge1xyXG4gICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvblR5cGUgPSBBbmltYXRpb24uQU5JTUFUSU9OVFlQRV9RVUFURVJOSU9OO1xyXG4gICAgICAgICAgICAgICAgICAgIHRhcmdldE5vZGUucm90YXRpb25RdWF0ZXJuaW9uID0gbmV3IFF1YXRlcm5pb24oKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uVHlwZSA9IEFuaW1hdGlvbi5BTklNQVRJT05UWVBFX1ZFQ1RPUjM7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIENyZWF0ZSBhbmltYXRpb24gYW5kIGtleSBmcmFtZXNcclxuICAgICAgICAgICAgbGV0IGJhYnlsb25BbmltYXRpb246IE51bGxhYmxlPEFuaW1hdGlvbj4gPSBudWxsO1xyXG4gICAgICAgICAgICBjb25zdCBrZXlzID0gW107XHJcbiAgICAgICAgICAgIGxldCBhcnJheU9mZnNldCA9IDA7XHJcbiAgICAgICAgICAgIGxldCBtb2RpZnlLZXkgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgICAgIGlmIChpc0JvbmUgJiYgbGFzdEFuaW1hdGlvbiAmJiBsYXN0QW5pbWF0aW9uLmdldEtleXMoKS5sZW5ndGggPT09IGJ1ZmZlcklucHV0Lmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgYmFieWxvbkFuaW1hdGlvbiA9IGxhc3RBbmltYXRpb247XHJcbiAgICAgICAgICAgICAgICBtb2RpZnlLZXkgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoIW1vZGlmeUtleSkge1xyXG4gICAgICAgICAgICAgICAgZ2x0ZlJ1bnRpbWUuc2NlbmUuX2Jsb2NrRW50aXR5Q29sbGVjdGlvbiA9ICEhZ2x0ZlJ1bnRpbWUuYXNzZXRDb250YWluZXI7XHJcbiAgICAgICAgICAgICAgICBiYWJ5bG9uQW5pbWF0aW9uID0gbmV3IEFuaW1hdGlvbihhbmltLCBpc0JvbmUgPyBcIl9tYXRyaXhcIiA6IHRhcmdldFBhdGgsIDEsIGFuaW1hdGlvblR5cGUsIEFuaW1hdGlvbi5BTklNQVRJT05MT09QTU9ERV9DWUNMRSk7XHJcbiAgICAgICAgICAgICAgICBnbHRmUnVudGltZS5zY2VuZS5fYmxvY2tFbnRpdHlDb2xsZWN0aW9uID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIEZvciBlYWNoIGZyYW1lXHJcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgYnVmZmVySW5wdXQubGVuZ3RoOyBqKyspIHtcclxuICAgICAgICAgICAgICAgIGxldCB2YWx1ZTogYW55ID0gbnVsbDtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAodGFyZ2V0UGF0aCA9PT0gXCJyb3RhdGlvblF1YXRlcm5pb25cIikge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIFZFQzRcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IFF1YXRlcm5pb24uRnJvbUFycmF5KFtidWZmZXJPdXRwdXRbYXJyYXlPZmZzZXRdLCBidWZmZXJPdXRwdXRbYXJyYXlPZmZzZXQgKyAxXSwgYnVmZmVyT3V0cHV0W2FycmF5T2Zmc2V0ICsgMl0sIGJ1ZmZlck91dHB1dFthcnJheU9mZnNldCArIDNdXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYXJyYXlPZmZzZXQgKz0gNDtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gUG9zaXRpb24gYW5kIHNjYWxpbmcgYXJlIFZFQzNcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IFZlY3RvcjMuRnJvbUFycmF5KFtidWZmZXJPdXRwdXRbYXJyYXlPZmZzZXRdLCBidWZmZXJPdXRwdXRbYXJyYXlPZmZzZXQgKyAxXSwgYnVmZmVyT3V0cHV0W2FycmF5T2Zmc2V0ICsgMl1dKTtcclxuICAgICAgICAgICAgICAgICAgICBhcnJheU9mZnNldCArPSAzO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmIChpc0JvbmUpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBib25lID0gPEJvbmU+dGFyZ2V0Tm9kZTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgdHJhbnNsYXRpb24gPSBWZWN0b3IzLlplcm8oKTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgcm90YXRpb25RdWF0ZXJuaW9uID0gbmV3IFF1YXRlcm5pb24oKTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgc2NhbGluZyA9IFZlY3RvcjMuWmVybygpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyBXYXJuaW5nIG9uIGRlY29tcG9zZVxyXG4gICAgICAgICAgICAgICAgICAgIGxldCBtYXQgPSBib25lLmdldEJhc2VNYXRyaXgoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG1vZGlmeUtleSAmJiBsYXN0QW5pbWF0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hdCA9IGxhc3RBbmltYXRpb24uZ2V0S2V5cygpW2pdLnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbWF0LmRlY29tcG9zZShzY2FsaW5nLCByb3RhdGlvblF1YXRlcm5pb24sIHRyYW5zbGF0aW9uKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRhcmdldFBhdGggPT09IFwicG9zaXRpb25cIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2xhdGlvbiA9IHZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodGFyZ2V0UGF0aCA9PT0gXCJyb3RhdGlvblF1YXRlcm5pb25cIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByb3RhdGlvblF1YXRlcm5pb24gPSB2YWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzY2FsaW5nID0gdmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IE1hdHJpeC5Db21wb3NlKHNjYWxpbmcsIHJvdGF0aW9uUXVhdGVybmlvbiwgdHJhbnNsYXRpb24pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmICghbW9kaWZ5S2V5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAga2V5cy5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZnJhbWU6IGJ1ZmZlcklucHV0W2pdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogdmFsdWUsXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGxhc3RBbmltYXRpb24pIHtcclxuICAgICAgICAgICAgICAgICAgICBsYXN0QW5pbWF0aW9uLmdldEtleXMoKVtqXS52YWx1ZSA9IHZhbHVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBGaW5pc2hcclxuICAgICAgICAgICAgaWYgKCFtb2RpZnlLZXkgJiYgYmFieWxvbkFuaW1hdGlvbikge1xyXG4gICAgICAgICAgICAgICAgYmFieWxvbkFuaW1hdGlvbi5zZXRLZXlzKGtleXMpO1xyXG4gICAgICAgICAgICAgICAgdGFyZ2V0Tm9kZS5hbmltYXRpb25zLnB1c2goYmFieWxvbkFuaW1hdGlvbik7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGxhc3RBbmltYXRpb24gPSBiYWJ5bG9uQW5pbWF0aW9uO1xyXG5cclxuICAgICAgICAgICAgZ2x0ZlJ1bnRpbWUuc2NlbmUuc3RvcEFuaW1hdGlvbih0YXJnZXROb2RlKTtcclxuICAgICAgICAgICAgZ2x0ZlJ1bnRpbWUuc2NlbmUuYmVnaW5BbmltYXRpb24odGFyZ2V0Tm9kZSwgMCwgYnVmZmVySW5wdXRbYnVmZmVySW5wdXQubGVuZ3RoIC0gMV0sIHRydWUsIDEuMCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59O1xyXG5cclxuLyoqXHJcbiAqIFJldHVybnMgdGhlIGJvbmVzIHRyYW5zZm9ybWF0aW9uIG1hdHJpeFxyXG4gKiBAcGFyYW0gbm9kZVxyXG4gKi9cclxuY29uc3QgY29uZmlndXJlQm9uZVRyYW5zZm9ybWF0aW9uID0gKG5vZGU6IElHTFRGTm9kZSk6IE1hdHJpeCA9PiB7XHJcbiAgICBsZXQgbWF0OiBOdWxsYWJsZTxNYXRyaXg+ID0gbnVsbDtcclxuXHJcbiAgICBpZiAobm9kZS50cmFuc2xhdGlvbiB8fCBub2RlLnJvdGF0aW9uIHx8IG5vZGUuc2NhbGUpIHtcclxuICAgICAgICBjb25zdCBzY2FsZSA9IFZlY3RvcjMuRnJvbUFycmF5KG5vZGUuc2NhbGUgfHwgWzEsIDEsIDFdKTtcclxuICAgICAgICBjb25zdCByb3RhdGlvbiA9IFF1YXRlcm5pb24uRnJvbUFycmF5KG5vZGUucm90YXRpb24gfHwgWzAsIDAsIDAsIDFdKTtcclxuICAgICAgICBjb25zdCBwb3NpdGlvbiA9IFZlY3RvcjMuRnJvbUFycmF5KG5vZGUudHJhbnNsYXRpb24gfHwgWzAsIDAsIDBdKTtcclxuXHJcbiAgICAgICAgbWF0ID0gTWF0cml4LkNvbXBvc2Uoc2NhbGUsIHJvdGF0aW9uLCBwb3NpdGlvbik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIG1hdCA9IE1hdHJpeC5Gcm9tQXJyYXkobm9kZS5tYXRyaXgpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBtYXQ7XHJcbn07XHJcblxyXG4vKipcclxuICogUmV0dXJucyB0aGUgcGFyZW50IGJvbmVcclxuICogQHBhcmFtIGdsdGZSdW50aW1lXHJcbiAqIEBwYXJhbSBza2luc1xyXG4gKiBAcGFyYW0gam9pbnROYW1lXHJcbiAqIEBwYXJhbSBuZXdTa2VsZXRvblxyXG4gKi9cclxuY29uc3QgZ2V0UGFyZW50Qm9uZSA9IChnbHRmUnVudGltZTogSUdMVEZSdW50aW1lLCBza2luczogSUdMVEZTa2lucywgam9pbnROYW1lOiBzdHJpbmcsIG5ld1NrZWxldG9uOiBTa2VsZXRvbik6IE51bGxhYmxlPEJvbmU+ID0+IHtcclxuICAgIC8vIFRyeSB0byBmaW5kXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG5ld1NrZWxldG9uLmJvbmVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgaWYgKG5ld1NrZWxldG9uLmJvbmVzW2ldLm5hbWUgPT09IGpvaW50TmFtZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3U2tlbGV0b24uYm9uZXNbaV07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIE5vdCBmb3VuZCwgc2VhcmNoIGluIGdsdGYgbm9kZXNcclxuICAgIGNvbnN0IG5vZGVzID0gZ2x0ZlJ1bnRpbWUubm9kZXM7XHJcbiAgICBmb3IgKGNvbnN0IG5kZSBpbiBub2Rlcykge1xyXG4gICAgICAgIGNvbnN0IG5vZGU6IElHTFRGTm9kZSA9IG5vZGVzW25kZV07XHJcblxyXG4gICAgICAgIGlmICghbm9kZS5qb2ludE5hbWUpIHtcclxuICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBjaGlsZHJlbiA9IG5vZGUuY2hpbGRyZW47XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjaGlsZHJlbi5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBjb25zdCBjaGlsZDogSUdMVEZOb2RlID0gZ2x0ZlJ1bnRpbWUubm9kZXNbY2hpbGRyZW5baV1dO1xyXG4gICAgICAgICAgICBpZiAoIWNoaWxkLmpvaW50TmFtZSkge1xyXG4gICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChjaGlsZC5qb2ludE5hbWUgPT09IGpvaW50TmFtZSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbWF0ID0gY29uZmlndXJlQm9uZVRyYW5zZm9ybWF0aW9uKG5vZGUpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgYm9uZSA9IG5ldyBCb25lKG5vZGUubmFtZSB8fCBcIlwiLCBuZXdTa2VsZXRvbiwgZ2V0UGFyZW50Qm9uZShnbHRmUnVudGltZSwgc2tpbnMsIG5vZGUuam9pbnROYW1lLCBuZXdTa2VsZXRvbiksIG1hdCk7XHJcbiAgICAgICAgICAgICAgICBib25lLmlkID0gbmRlO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGJvbmU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIG51bGw7XHJcbn07XHJcblxyXG4vKipcclxuICogUmV0dXJucyB0aGUgYXBwcm9wcmlhdGUgcm9vdCBub2RlXHJcbiAqIEBwYXJhbSBub2Rlc1RvUm9vdFxyXG4gKiBAcGFyYW0gaWRcclxuICovXHJcbmNvbnN0IGdldE5vZGVUb1Jvb3QgPSAobm9kZXNUb1Jvb3Q6IElOb2RlVG9Sb290W10sIGlkOiBzdHJpbmcpOiBOdWxsYWJsZTxCb25lPiA9PiB7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG5vZGVzVG9Sb290Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgY29uc3Qgbm9kZVRvUm9vdCA9IG5vZGVzVG9Sb290W2ldO1xyXG5cclxuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IG5vZGVUb1Jvb3Qubm9kZS5jaGlsZHJlbi5sZW5ndGg7IGorKykge1xyXG4gICAgICAgICAgICBjb25zdCBjaGlsZCA9IG5vZGVUb1Jvb3Qubm9kZS5jaGlsZHJlbltqXTtcclxuICAgICAgICAgICAgaWYgKGNoaWxkID09PSBpZCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5vZGVUb1Jvb3QuYm9uZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gbnVsbDtcclxufTtcclxuXHJcbi8qKlxyXG4gKiBSZXR1cm5zIHRoZSBub2RlIHdpdGggdGhlIGpvaW50IG5hbWVcclxuICogQHBhcmFtIGdsdGZSdW50aW1lXHJcbiAqIEBwYXJhbSBqb2ludE5hbWVcclxuICovXHJcbmNvbnN0IGdldEpvaW50Tm9kZSA9IChnbHRmUnVudGltZTogSUdMVEZSdW50aW1lLCBqb2ludE5hbWU6IHN0cmluZyk6IE51bGxhYmxlPElKb2ludE5vZGU+ID0+IHtcclxuICAgIGNvbnN0IG5vZGVzID0gZ2x0ZlJ1bnRpbWUubm9kZXM7XHJcbiAgICBsZXQgbm9kZTogSUdMVEZOb2RlID0gbm9kZXNbam9pbnROYW1lXTtcclxuICAgIGlmIChub2RlKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgbm9kZTogbm9kZSxcclxuICAgICAgICAgICAgaWQ6IGpvaW50TmFtZSxcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIGZvciAoY29uc3QgbmRlIGluIG5vZGVzKSB7XHJcbiAgICAgICAgbm9kZSA9IG5vZGVzW25kZV07XHJcbiAgICAgICAgaWYgKG5vZGUuam9pbnROYW1lID09PSBqb2ludE5hbWUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIG5vZGU6IG5vZGUsXHJcbiAgICAgICAgICAgICAgICBpZDogbmRlLFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gbnVsbDtcclxufTtcclxuXHJcbi8qKlxyXG4gKiBDaGVja3MgaWYgYSBub2RlcyBpcyBpbiBqb2ludHNcclxuICogQHBhcmFtIHNraW5zXHJcbiAqIEBwYXJhbSBpZFxyXG4gKi9cclxuY29uc3Qgbm9kZUlzSW5Kb2ludHMgPSAoc2tpbnM6IElHTFRGU2tpbnMsIGlkOiBzdHJpbmcpOiBib29sZWFuID0+IHtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2tpbnMuam9pbnROYW1lcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGlmIChza2lucy5qb2ludE5hbWVzW2ldID09PSBpZCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIEZpbGxzIHRoZSBub2RlcyB0byByb290IGZvciBib25lcyBhbmQgYnVpbGRzIGhpZXJhcmNoeVxyXG4gKiBAcGFyYW0gZ2x0ZlJ1bnRpbWVcclxuICogQHBhcmFtIG5ld1NrZWxldG9uXHJcbiAqIEBwYXJhbSBza2luc1xyXG4gKiBAcGFyYW0gbm9kZXNUb1Jvb3RcclxuICovXHJcbmNvbnN0IGdldE5vZGVzVG9Sb290ID0gKGdsdGZSdW50aW1lOiBJR0xURlJ1bnRpbWUsIG5ld1NrZWxldG9uOiBTa2VsZXRvbiwgc2tpbnM6IElHTFRGU2tpbnMsIG5vZGVzVG9Sb290OiBJTm9kZVRvUm9vdFtdKSA9PiB7XHJcbiAgICAvLyBDcmVhdGVzIG5vZGVzIGZvciByb290XHJcbiAgICBmb3IgKGNvbnN0IG5kZSBpbiBnbHRmUnVudGltZS5ub2Rlcykge1xyXG4gICAgICAgIGNvbnN0IG5vZGU6IElHTFRGTm9kZSA9IGdsdGZSdW50aW1lLm5vZGVzW25kZV07XHJcbiAgICAgICAgY29uc3QgaWQgPSBuZGU7XHJcblxyXG4gICAgICAgIGlmICghbm9kZS5qb2ludE5hbWUgfHwgbm9kZUlzSW5Kb2ludHMoc2tpbnMsIG5vZGUuam9pbnROYW1lKSkge1xyXG4gICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIENyZWF0ZSBub2RlIHRvIHJvb3QgYm9uZVxyXG4gICAgICAgIGNvbnN0IG1hdCA9IGNvbmZpZ3VyZUJvbmVUcmFuc2Zvcm1hdGlvbihub2RlKTtcclxuICAgICAgICBjb25zdCBib25lID0gbmV3IEJvbmUobm9kZS5uYW1lIHx8IFwiXCIsIG5ld1NrZWxldG9uLCBudWxsLCBtYXQpO1xyXG4gICAgICAgIGJvbmUuaWQgPSBpZDtcclxuICAgICAgICBub2Rlc1RvUm9vdC5wdXNoKHsgYm9uZTogYm9uZSwgbm9kZTogbm9kZSwgaWQ6IGlkIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFBhcmVudGluZ1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBub2Rlc1RvUm9vdC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGNvbnN0IG5vZGVUb1Jvb3QgPSBub2Rlc1RvUm9vdFtpXTtcclxuICAgICAgICBjb25zdCBjaGlsZHJlbiA9IG5vZGVUb1Jvb3Qubm9kZS5jaGlsZHJlbjtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBjaGlsZHJlbi5sZW5ndGg7IGorKykge1xyXG4gICAgICAgICAgICBsZXQgY2hpbGQ6IE51bGxhYmxlPElOb2RlVG9Sb290PiA9IG51bGw7XHJcblxyXG4gICAgICAgICAgICBmb3IgKGxldCBrID0gMDsgayA8IG5vZGVzVG9Sb290Lmxlbmd0aDsgaysrKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAobm9kZXNUb1Jvb3Rba10uaWQgPT09IGNoaWxkcmVuW2pdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2hpbGQgPSBub2Rlc1RvUm9vdFtrXTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKGNoaWxkKSB7XHJcbiAgICAgICAgICAgICAgICAoPGFueT5jaGlsZC5ib25lKS5fcGFyZW50ID0gbm9kZVRvUm9vdC5ib25lO1xyXG4gICAgICAgICAgICAgICAgbm9kZVRvUm9vdC5ib25lLmNoaWxkcmVuLnB1c2goY2hpbGQuYm9uZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn07XHJcblxyXG4vKipcclxuICogSW1wb3J0cyBhIHNrZWxldG9uXHJcbiAqIEBwYXJhbSBnbHRmUnVudGltZVxyXG4gKiBAcGFyYW0gc2tpbnNcclxuICogQHBhcmFtIG1lc2hcclxuICogQHBhcmFtIG5ld1NrZWxldG9uXHJcbiAqL1xyXG5jb25zdCBpbXBvcnRTa2VsZXRvbiA9IChnbHRmUnVudGltZTogSUdMVEZSdW50aW1lLCBza2luczogSUdMVEZTa2lucywgbWVzaDogTWVzaCwgbmV3U2tlbGV0b246IFNrZWxldG9uIHwgdW5kZWZpbmVkKTogU2tlbGV0b24gPT4ge1xyXG4gICAgaWYgKCFuZXdTa2VsZXRvbikge1xyXG4gICAgICAgIG5ld1NrZWxldG9uID0gbmV3IFNrZWxldG9uKHNraW5zLm5hbWUgfHwgXCJcIiwgXCJcIiwgZ2x0ZlJ1bnRpbWUuc2NlbmUpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICghc2tpbnMuYmFieWxvblNrZWxldG9uKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ld1NrZWxldG9uO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEZpbmQgdGhlIHJvb3QgYm9uZXNcclxuICAgIGNvbnN0IG5vZGVzVG9Sb290OiBJTm9kZVRvUm9vdFtdID0gW107XHJcbiAgICBjb25zdCBub2Rlc1RvUm9vdFRvQWRkOiBCb25lW10gPSBbXTtcclxuXHJcbiAgICBnZXROb2Rlc1RvUm9vdChnbHRmUnVudGltZSwgbmV3U2tlbGV0b24sIHNraW5zLCBub2Rlc1RvUm9vdCk7XHJcbiAgICBuZXdTa2VsZXRvbi5ib25lcyA9IFtdO1xyXG5cclxuICAgIC8vIEpvaW50c1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBza2lucy5qb2ludE5hbWVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgY29uc3Qgam9pbnROb2RlID0gZ2V0Sm9pbnROb2RlKGdsdGZSdW50aW1lLCBza2lucy5qb2ludE5hbWVzW2ldKTtcclxuXHJcbiAgICAgICAgaWYgKCFqb2ludE5vZGUpIHtcclxuICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBub2RlID0gam9pbnROb2RlLm5vZGU7XHJcblxyXG4gICAgICAgIGlmICghbm9kZSkge1xyXG4gICAgICAgICAgICBUb29scy5XYXJuKFwiSm9pbnQgbmFtZWQgXCIgKyBza2lucy5qb2ludE5hbWVzW2ldICsgXCIgZG9lcyBub3QgZXhpc3RcIik7XHJcbiAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgaWQgPSBqb2ludE5vZGUuaWQ7XHJcblxyXG4gICAgICAgIC8vIE9wdGltaXplLCBpZiB0aGUgYm9uZSBhbHJlYWR5IGV4aXN0cy4uLlxyXG4gICAgICAgIGNvbnN0IGV4aXN0aW5nQm9uZSA9IGdsdGZSdW50aW1lLnNjZW5lLmdldEJvbmVCeUlkKGlkKTtcclxuICAgICAgICBpZiAoZXhpc3RpbmdCb25lKSB7XHJcbiAgICAgICAgICAgIG5ld1NrZWxldG9uLmJvbmVzLnB1c2goZXhpc3RpbmdCb25lKTtcclxuICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBTZWFyY2ggZm9yIHBhcmVudCBib25lXHJcbiAgICAgICAgbGV0IGZvdW5kQm9uZSA9IGZhbHNlO1xyXG4gICAgICAgIGxldCBwYXJlbnRCb25lOiBOdWxsYWJsZTxCb25lPiA9IG51bGw7XHJcblxyXG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgaTsgaisrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGpvaW50Tm9kZSA9IGdldEpvaW50Tm9kZShnbHRmUnVudGltZSwgc2tpbnMuam9pbnROYW1lc1tqXSk7XHJcblxyXG4gICAgICAgICAgICBpZiAoIWpvaW50Tm9kZSkge1xyXG4gICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGpvaW50OiBJR0xURk5vZGUgPSBqb2ludE5vZGUubm9kZTtcclxuXHJcbiAgICAgICAgICAgIGlmICgham9pbnQpIHtcclxuICAgICAgICAgICAgICAgIFRvb2xzLldhcm4oXCJKb2ludCBuYW1lZCBcIiArIHNraW5zLmpvaW50TmFtZXNbal0gKyBcIiBkb2VzIG5vdCBleGlzdCB3aGVuIGxvb2tpbmcgZm9yIHBhcmVudFwiKTtcclxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjb25zdCBjaGlsZHJlbiA9IGpvaW50LmNoaWxkcmVuO1xyXG4gICAgICAgICAgICBpZiAoIWNoaWxkcmVuKSB7XHJcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBmb3VuZEJvbmUgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgICAgIGZvciAobGV0IGsgPSAwOyBrIDwgY2hpbGRyZW4ubGVuZ3RoOyBrKyspIHtcclxuICAgICAgICAgICAgICAgIGlmIChjaGlsZHJlbltrXSA9PT0gaWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBwYXJlbnRCb25lID0gZ2V0UGFyZW50Qm9uZShnbHRmUnVudGltZSwgc2tpbnMsIHNraW5zLmpvaW50TmFtZXNbal0sIG5ld1NrZWxldG9uKTtcclxuICAgICAgICAgICAgICAgICAgICBmb3VuZEJvbmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoZm91bmRCb25lKSB7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gQ3JlYXRlIGJvbmVcclxuICAgICAgICBjb25zdCBtYXQgPSBjb25maWd1cmVCb25lVHJhbnNmb3JtYXRpb24obm9kZSk7XHJcblxyXG4gICAgICAgIGlmICghcGFyZW50Qm9uZSAmJiBub2Rlc1RvUm9vdC5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIHBhcmVudEJvbmUgPSBnZXROb2RlVG9Sb290KG5vZGVzVG9Sb290LCBpZCk7XHJcblxyXG4gICAgICAgICAgICBpZiAocGFyZW50Qm9uZSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKG5vZGVzVG9Sb290VG9BZGQuaW5kZXhPZihwYXJlbnRCb25lKSA9PT0gLTEpIHtcclxuICAgICAgICAgICAgICAgICAgICBub2Rlc1RvUm9vdFRvQWRkLnB1c2gocGFyZW50Qm9uZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGJvbmUgPSBuZXcgQm9uZShub2RlLmpvaW50TmFtZSB8fCBcIlwiLCBuZXdTa2VsZXRvbiwgcGFyZW50Qm9uZSwgbWF0KTtcclxuICAgICAgICBib25lLmlkID0gaWQ7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gUG9saXNoXHJcbiAgICBjb25zdCBib25lcyA9IG5ld1NrZWxldG9uLmJvbmVzO1xyXG4gICAgbmV3U2tlbGV0b24uYm9uZXMgPSBbXTtcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNraW5zLmpvaW50TmFtZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBjb25zdCBqb2ludE5vZGUgPSBnZXRKb2ludE5vZGUoZ2x0ZlJ1bnRpbWUsIHNraW5zLmpvaW50TmFtZXNbaV0pO1xyXG5cclxuICAgICAgICBpZiAoIWpvaW50Tm9kZSkge1xyXG4gICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgYm9uZXMubGVuZ3RoOyBqKyspIHtcclxuICAgICAgICAgICAgaWYgKGJvbmVzW2pdLmlkID09PSBqb2ludE5vZGUuaWQpIHtcclxuICAgICAgICAgICAgICAgIG5ld1NrZWxldG9uLmJvbmVzLnB1c2goYm9uZXNbal0pO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgbmV3U2tlbGV0b24ucHJlcGFyZSgpO1xyXG5cclxuICAgIC8vIEZpbmlzaFxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBub2Rlc1RvUm9vdFRvQWRkLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgbmV3U2tlbGV0b24uYm9uZXMucHVzaChub2Rlc1RvUm9vdFRvQWRkW2ldKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gbmV3U2tlbGV0b247XHJcbn07XHJcblxyXG4vKipcclxuICogSW1wb3J0cyBhIG1lc2ggYW5kIGl0cyBnZW9tZXRyaWVzXHJcbiAqIEBwYXJhbSBnbHRmUnVudGltZVxyXG4gKiBAcGFyYW0gbm9kZVxyXG4gKiBAcGFyYW0gbWVzaGVzXHJcbiAqIEBwYXJhbSBpZFxyXG4gKiBAcGFyYW0gbmV3TWVzaFxyXG4gKi9cclxuY29uc3QgaW1wb3J0TWVzaCA9IChnbHRmUnVudGltZTogSUdMVEZSdW50aW1lLCBub2RlOiBJR0xURk5vZGUsIG1lc2hlczogc3RyaW5nW10sIGlkOiBzdHJpbmcsIG5ld01lc2g6IE1lc2gpOiBNZXNoID0+IHtcclxuICAgIGlmICghbmV3TWVzaCkge1xyXG4gICAgICAgIGdsdGZSdW50aW1lLnNjZW5lLl9ibG9ja0VudGl0eUNvbGxlY3Rpb24gPSAhIWdsdGZSdW50aW1lLmFzc2V0Q29udGFpbmVyO1xyXG4gICAgICAgIG5ld01lc2ggPSBuZXcgTWVzaChub2RlLm5hbWUgfHwgXCJcIiwgZ2x0ZlJ1bnRpbWUuc2NlbmUpO1xyXG4gICAgICAgIG5ld01lc2guX3BhcmVudENvbnRhaW5lciA9IGdsdGZSdW50aW1lLmFzc2V0Q29udGFpbmVyO1xyXG4gICAgICAgIGdsdGZSdW50aW1lLnNjZW5lLl9ibG9ja0VudGl0eUNvbGxlY3Rpb24gPSBmYWxzZTtcclxuICAgICAgICBuZXdNZXNoLmlkID0gaWQ7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCFub2RlLmJhYnlsb25Ob2RlKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ld01lc2g7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgc3ViTWF0ZXJpYWxzOiBNYXRlcmlhbFtdID0gW107XHJcblxyXG4gICAgbGV0IHZlcnRleERhdGE6IE51bGxhYmxlPFZlcnRleERhdGE+ID0gbnVsbDtcclxuICAgIGNvbnN0IHZlcnRpY2VzU3RhcnRzOiBudW1iZXJbXSA9IFtdO1xyXG4gICAgY29uc3QgdmVydGljZXNDb3VudHM6IG51bWJlcltdID0gW107XHJcbiAgICBjb25zdCBpbmRleFN0YXJ0czogbnVtYmVyW10gPSBbXTtcclxuICAgIGNvbnN0IGluZGV4Q291bnRzOiBudW1iZXJbXSA9IFtdO1xyXG5cclxuICAgIGZvciAobGV0IG1lc2hJbmRleCA9IDA7IG1lc2hJbmRleCA8IG1lc2hlcy5sZW5ndGg7IG1lc2hJbmRleCsrKSB7XHJcbiAgICAgICAgY29uc3QgbWVzaElkID0gbWVzaGVzW21lc2hJbmRleF07XHJcbiAgICAgICAgY29uc3QgbWVzaDogSUdMVEZNZXNoID0gZ2x0ZlJ1bnRpbWUubWVzaGVzW21lc2hJZF07XHJcblxyXG4gICAgICAgIGlmICghbWVzaCkge1xyXG4gICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIFBvc2l0aW9ucywgbm9ybWFscyBhbmQgVVZzXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtZXNoLnByaW1pdGl2ZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgLy8gVGVtcG9yYXJ5IHZlcnRleCBkYXRhXHJcbiAgICAgICAgICAgIGNvbnN0IHRlbXBWZXJ0ZXhEYXRhID0gbmV3IFZlcnRleERhdGEoKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHByaW1pdGl2ZSA9IG1lc2gucHJpbWl0aXZlc1tpXTtcclxuICAgICAgICAgICAgaWYgKHByaW1pdGl2ZS5tb2RlICE9PSA0KSB7XHJcbiAgICAgICAgICAgICAgICAvLyBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY29uc3QgYXR0cmlidXRlcyA9IHByaW1pdGl2ZS5hdHRyaWJ1dGVzO1xyXG4gICAgICAgICAgICBsZXQgYWNjZXNzb3I6IE51bGxhYmxlPElHTFRGQWNjZXNzb3I+ID0gbnVsbDtcclxuICAgICAgICAgICAgbGV0IGJ1ZmZlcjogYW55ID0gbnVsbDtcclxuXHJcbiAgICAgICAgICAgIC8vIFNldCBwb3NpdGlvbnMsIG5vcm1hbCBhbmQgdXZzXHJcbiAgICAgICAgICAgIGZvciAoY29uc3Qgc2VtYW50aWMgaW4gYXR0cmlidXRlcykge1xyXG4gICAgICAgICAgICAgICAgLy8gTGluayBhY2Nlc3NvciBhbmQgYnVmZmVyIHZpZXdcclxuICAgICAgICAgICAgICAgIGFjY2Vzc29yID0gZ2x0ZlJ1bnRpbWUuYWNjZXNzb3JzW2F0dHJpYnV0ZXNbc2VtYW50aWNdXTtcclxuICAgICAgICAgICAgICAgIGJ1ZmZlciA9IEdMVEZVdGlscy5HZXRCdWZmZXJGcm9tQWNjZXNzb3IoZ2x0ZlJ1bnRpbWUsIGFjY2Vzc29yKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoc2VtYW50aWMgPT09IFwiTk9STUFMXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZW1wVmVydGV4RGF0YS5ub3JtYWxzID0gbmV3IEZsb2F0MzJBcnJheShidWZmZXIubGVuZ3RoKTtcclxuICAgICAgICAgICAgICAgICAgICAoPEZsb2F0MzJBcnJheT50ZW1wVmVydGV4RGF0YS5ub3JtYWxzKS5zZXQoYnVmZmVyKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoc2VtYW50aWMgPT09IFwiUE9TSVRJT05cIikge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChHTFRGRmlsZUxvYWRlci5Ib21vZ2VuZW91c0Nvb3JkaW5hdGVzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBWZXJ0ZXhEYXRhLnBvc2l0aW9ucyA9IG5ldyBGbG9hdDMyQXJyYXkoYnVmZmVyLmxlbmd0aCAtIGJ1ZmZlci5sZW5ndGggLyA0KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgYnVmZmVyLmxlbmd0aDsgaiArPSA0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZW1wVmVydGV4RGF0YS5wb3NpdGlvbnNbal0gPSBidWZmZXJbal07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZW1wVmVydGV4RGF0YS5wb3NpdGlvbnNbaiArIDFdID0gYnVmZmVyW2ogKyAxXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBWZXJ0ZXhEYXRhLnBvc2l0aW9uc1tqICsgMl0gPSBidWZmZXJbaiArIDJdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGVtcFZlcnRleERhdGEucG9zaXRpb25zID0gbmV3IEZsb2F0MzJBcnJheShidWZmZXIubGVuZ3RoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgKDxGbG9hdDMyQXJyYXk+dGVtcFZlcnRleERhdGEucG9zaXRpb25zKS5zZXQoYnVmZmVyKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHZlcnRpY2VzQ291bnRzLnB1c2godGVtcFZlcnRleERhdGEucG9zaXRpb25zLmxlbmd0aCk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHNlbWFudGljLmluZGV4T2YoXCJURVhDT09SRF9cIikgIT09IC0xKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY2hhbm5lbCA9IE51bWJlcihzZW1hbnRpYy5zcGxpdChcIl9cIilbMV0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHV2S2luZCA9IFZlcnRleEJ1ZmZlci5VVktpbmQgKyAoY2hhbm5lbCA9PT0gMCA/IFwiXCIgOiBjaGFubmVsICsgMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdXZzID0gbmV3IEZsb2F0MzJBcnJheShidWZmZXIubGVuZ3RoKTtcclxuICAgICAgICAgICAgICAgICAgICAoPEZsb2F0MzJBcnJheT51dnMpLnNldChidWZmZXIpO1xyXG4gICAgICAgICAgICAgICAgICAgIG5vcm1hbGl6ZVVWcyh1dnMpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRlbXBWZXJ0ZXhEYXRhLnNldCh1dnMsIHV2S2luZCk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHNlbWFudGljID09PSBcIkpPSU5UXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZW1wVmVydGV4RGF0YS5tYXRyaWNlc0luZGljZXMgPSBuZXcgRmxvYXQzMkFycmF5KGJ1ZmZlci5sZW5ndGgpO1xyXG4gICAgICAgICAgICAgICAgICAgICg8RmxvYXQzMkFycmF5PnRlbXBWZXJ0ZXhEYXRhLm1hdHJpY2VzSW5kaWNlcykuc2V0KGJ1ZmZlcik7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHNlbWFudGljID09PSBcIldFSUdIVFwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGVtcFZlcnRleERhdGEubWF0cmljZXNXZWlnaHRzID0gbmV3IEZsb2F0MzJBcnJheShidWZmZXIubGVuZ3RoKTtcclxuICAgICAgICAgICAgICAgICAgICAoPEZsb2F0MzJBcnJheT50ZW1wVmVydGV4RGF0YS5tYXRyaWNlc1dlaWdodHMpLnNldChidWZmZXIpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChzZW1hbnRpYyA9PT0gXCJDT0xPUlwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGVtcFZlcnRleERhdGEuY29sb3JzID0gbmV3IEZsb2F0MzJBcnJheShidWZmZXIubGVuZ3RoKTtcclxuICAgICAgICAgICAgICAgICAgICAoPEZsb2F0MzJBcnJheT50ZW1wVmVydGV4RGF0YS5jb2xvcnMpLnNldChidWZmZXIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBJbmRpY2VzXHJcbiAgICAgICAgICAgIGFjY2Vzc29yID0gZ2x0ZlJ1bnRpbWUuYWNjZXNzb3JzW3ByaW1pdGl2ZS5pbmRpY2VzXTtcclxuICAgICAgICAgICAgaWYgKGFjY2Vzc29yKSB7XHJcbiAgICAgICAgICAgICAgICBidWZmZXIgPSBHTFRGVXRpbHMuR2V0QnVmZmVyRnJvbUFjY2Vzc29yKGdsdGZSdW50aW1lLCBhY2Nlc3Nvcik7XHJcblxyXG4gICAgICAgICAgICAgICAgdGVtcFZlcnRleERhdGEuaW5kaWNlcyA9IG5ldyBJbnQzMkFycmF5KGJ1ZmZlci5sZW5ndGgpO1xyXG4gICAgICAgICAgICAgICAgdGVtcFZlcnRleERhdGEuaW5kaWNlcy5zZXQoYnVmZmVyKTtcclxuICAgICAgICAgICAgICAgIGluZGV4Q291bnRzLnB1c2godGVtcFZlcnRleERhdGEuaW5kaWNlcy5sZW5ndGgpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgLy8gU2V0IGluZGljZXMgb24gdGhlIGZseVxyXG4gICAgICAgICAgICAgICAgY29uc3QgaW5kaWNlczogbnVtYmVyW10gPSBbXTtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgKDxGbG9hdEFycmF5PnRlbXBWZXJ0ZXhEYXRhLnBvc2l0aW9ucykubGVuZ3RoIC8gMzsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaW5kaWNlcy5wdXNoKGopO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHRlbXBWZXJ0ZXhEYXRhLmluZGljZXMgPSBuZXcgSW50MzJBcnJheShpbmRpY2VzKTtcclxuICAgICAgICAgICAgICAgIGluZGV4Q291bnRzLnB1c2godGVtcFZlcnRleERhdGEuaW5kaWNlcy5sZW5ndGgpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoIXZlcnRleERhdGEpIHtcclxuICAgICAgICAgICAgICAgIHZlcnRleERhdGEgPSB0ZW1wVmVydGV4RGF0YTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHZlcnRleERhdGEubWVyZ2UodGVtcFZlcnRleERhdGEpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBTdWIgbWF0ZXJpYWxcclxuICAgICAgICAgICAgY29uc3QgbWF0ZXJpYWwgPSBnbHRmUnVudGltZS5zY2VuZS5nZXRNYXRlcmlhbEJ5SWQocHJpbWl0aXZlLm1hdGVyaWFsKTtcclxuXHJcbiAgICAgICAgICAgIHN1Yk1hdGVyaWFscy5wdXNoKG1hdGVyaWFsID09PSBudWxsID8gR0xURlV0aWxzLkdldERlZmF1bHRNYXRlcmlhbChnbHRmUnVudGltZS5zY2VuZSkgOiBtYXRlcmlhbCk7XHJcblxyXG4gICAgICAgICAgICAvLyBVcGRhdGUgdmVydGljZXMgc3RhcnQgYW5kIGluZGV4IHN0YXJ0XHJcbiAgICAgICAgICAgIHZlcnRpY2VzU3RhcnRzLnB1c2godmVydGljZXNTdGFydHMubGVuZ3RoID09PSAwID8gMCA6IHZlcnRpY2VzU3RhcnRzW3ZlcnRpY2VzU3RhcnRzLmxlbmd0aCAtIDFdICsgdmVydGljZXNDb3VudHNbdmVydGljZXNDb3VudHMubGVuZ3RoIC0gMl0pO1xyXG4gICAgICAgICAgICBpbmRleFN0YXJ0cy5wdXNoKGluZGV4U3RhcnRzLmxlbmd0aCA9PT0gMCA/IDAgOiBpbmRleFN0YXJ0c1tpbmRleFN0YXJ0cy5sZW5ndGggLSAxXSArIGluZGV4Q291bnRzW2luZGV4Q291bnRzLmxlbmd0aCAtIDJdKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBsZXQgbWF0ZXJpYWw6IFN0YW5kYXJkTWF0ZXJpYWwgfCBNdWx0aU1hdGVyaWFsO1xyXG4gICAgZ2x0ZlJ1bnRpbWUuc2NlbmUuX2Jsb2NrRW50aXR5Q29sbGVjdGlvbiA9ICEhZ2x0ZlJ1bnRpbWUuYXNzZXRDb250YWluZXI7XHJcbiAgICBpZiAoc3ViTWF0ZXJpYWxzLmxlbmd0aCA+IDEpIHtcclxuICAgICAgICBtYXRlcmlhbCA9IG5ldyBNdWx0aU1hdGVyaWFsKFwibXVsdGltYXRcIiArIGlkLCBnbHRmUnVudGltZS5zY2VuZSk7XHJcbiAgICAgICAgKG1hdGVyaWFsIGFzIE11bHRpTWF0ZXJpYWwpLnN1Yk1hdGVyaWFscyA9IHN1Yk1hdGVyaWFscztcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbWF0ZXJpYWwgPSBuZXcgU3RhbmRhcmRNYXRlcmlhbChcIm11bHRpbWF0XCIgKyBpZCwgZ2x0ZlJ1bnRpbWUuc2NlbmUpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChzdWJNYXRlcmlhbHMubGVuZ3RoID09PSAxKSB7XHJcbiAgICAgICAgbWF0ZXJpYWwgPSBzdWJNYXRlcmlhbHNbMF0gYXMgU3RhbmRhcmRNYXRlcmlhbDtcclxuICAgIH1cclxuXHJcbiAgICBtYXRlcmlhbC5fcGFyZW50Q29udGFpbmVyID0gZ2x0ZlJ1bnRpbWUuYXNzZXRDb250YWluZXI7XHJcblxyXG4gICAgaWYgKCFuZXdNZXNoLm1hdGVyaWFsKSB7XHJcbiAgICAgICAgbmV3TWVzaC5tYXRlcmlhbCA9IG1hdGVyaWFsO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEFwcGx5IGdlb21ldHJ5XHJcbiAgICBuZXcgR2VvbWV0cnkoaWQsIGdsdGZSdW50aW1lLnNjZW5lLCB2ZXJ0ZXhEYXRhISwgZmFsc2UsIG5ld01lc2gpO1xyXG4gICAgbmV3TWVzaC5jb21wdXRlV29ybGRNYXRyaXgodHJ1ZSk7XHJcblxyXG4gICAgZ2x0ZlJ1bnRpbWUuc2NlbmUuX2Jsb2NrRW50aXR5Q29sbGVjdGlvbiA9IGZhbHNlO1xyXG5cclxuICAgIC8vIEFwcGx5IHN1Ym1lc2hlc1xyXG4gICAgbmV3TWVzaC5zdWJNZXNoZXMgPSBbXTtcclxuICAgIGxldCBpbmRleCA9IDA7XHJcbiAgICBmb3IgKGxldCBtZXNoSW5kZXggPSAwOyBtZXNoSW5kZXggPCBtZXNoZXMubGVuZ3RoOyBtZXNoSW5kZXgrKykge1xyXG4gICAgICAgIGNvbnN0IG1lc2hJZCA9IG1lc2hlc1ttZXNoSW5kZXhdO1xyXG4gICAgICAgIGNvbnN0IG1lc2g6IElHTFRGTWVzaCA9IGdsdGZSdW50aW1lLm1lc2hlc1ttZXNoSWRdO1xyXG5cclxuICAgICAgICBpZiAoIW1lc2gpIHtcclxuICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG1lc2gucHJpbWl0aXZlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAobWVzaC5wcmltaXRpdmVzW2ldLm1vZGUgIT09IDQpIHtcclxuICAgICAgICAgICAgICAgIC8vY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIFN1Yk1lc2guQWRkVG9NZXNoKGluZGV4LCB2ZXJ0aWNlc1N0YXJ0c1tpbmRleF0sIHZlcnRpY2VzQ291bnRzW2luZGV4XSwgaW5kZXhTdGFydHNbaW5kZXhdLCBpbmRleENvdW50c1tpbmRleF0sIG5ld01lc2gsIG5ld01lc2gsIHRydWUpO1xyXG4gICAgICAgICAgICBpbmRleCsrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBGaW5pc2hcclxuICAgIHJldHVybiBuZXdNZXNoO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIENvbmZpZ3VyZSBub2RlIHRyYW5zZm9ybWF0aW9uIGZyb20gcG9zaXRpb24sIHJvdGF0aW9uIGFuZCBzY2FsaW5nXHJcbiAqIEBwYXJhbSBuZXdOb2RlXHJcbiAqIEBwYXJhbSBwb3NpdGlvblxyXG4gKiBAcGFyYW0gcm90YXRpb25cclxuICogQHBhcmFtIHNjYWxpbmdcclxuICovXHJcbmNvbnN0IGNvbmZpZ3VyZU5vZGUgPSAobmV3Tm9kZTogYW55LCBwb3NpdGlvbjogVmVjdG9yMywgcm90YXRpb246IFF1YXRlcm5pb24sIHNjYWxpbmc6IFZlY3RvcjMpID0+IHtcclxuICAgIGlmIChuZXdOb2RlLnBvc2l0aW9uKSB7XHJcbiAgICAgICAgbmV3Tm9kZS5wb3NpdGlvbiA9IHBvc2l0aW9uO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChuZXdOb2RlLnJvdGF0aW9uUXVhdGVybmlvbiB8fCBuZXdOb2RlLnJvdGF0aW9uKSB7XHJcbiAgICAgICAgbmV3Tm9kZS5yb3RhdGlvblF1YXRlcm5pb24gPSByb3RhdGlvbjtcclxuICAgIH1cclxuXHJcbiAgICBpZiAobmV3Tm9kZS5zY2FsaW5nKSB7XHJcbiAgICAgICAgbmV3Tm9kZS5zY2FsaW5nID0gc2NhbGluZztcclxuICAgIH1cclxufTtcclxuXHJcbi8qKlxyXG4gKiBDb25maWd1cmVzIG5vZGUgZnJvbSB0cmFuc2Zvcm1hdGlvbiBtYXRyaXhcclxuICogQHBhcmFtIG5ld05vZGVcclxuICogQHBhcmFtIG5vZGVcclxuICovXHJcbmNvbnN0IGNvbmZpZ3VyZU5vZGVGcm9tTWF0cml4ID0gKG5ld05vZGU6IE1lc2gsIG5vZGU6IElHTFRGTm9kZSkgPT4ge1xyXG4gICAgaWYgKG5vZGUubWF0cml4KSB7XHJcbiAgICAgICAgY29uc3QgcG9zaXRpb24gPSBuZXcgVmVjdG9yMygwLCAwLCAwKTtcclxuICAgICAgICBjb25zdCByb3RhdGlvbiA9IG5ldyBRdWF0ZXJuaW9uKCk7XHJcbiAgICAgICAgY29uc3Qgc2NhbGluZyA9IG5ldyBWZWN0b3IzKDAsIDAsIDApO1xyXG4gICAgICAgIGNvbnN0IG1hdCA9IE1hdHJpeC5Gcm9tQXJyYXkobm9kZS5tYXRyaXgpO1xyXG4gICAgICAgIG1hdC5kZWNvbXBvc2Uoc2NhbGluZywgcm90YXRpb24sIHBvc2l0aW9uKTtcclxuXHJcbiAgICAgICAgY29uZmlndXJlTm9kZShuZXdOb2RlLCBwb3NpdGlvbiwgcm90YXRpb24sIHNjYWxpbmcpO1xyXG4gICAgfSBlbHNlIGlmIChub2RlLnRyYW5zbGF0aW9uICYmIG5vZGUucm90YXRpb24gJiYgbm9kZS5zY2FsZSkge1xyXG4gICAgICAgIGNvbmZpZ3VyZU5vZGUobmV3Tm9kZSwgVmVjdG9yMy5Gcm9tQXJyYXkobm9kZS50cmFuc2xhdGlvbiksIFF1YXRlcm5pb24uRnJvbUFycmF5KG5vZGUucm90YXRpb24pLCBWZWN0b3IzLkZyb21BcnJheShub2RlLnNjYWxlKSk7XHJcbiAgICB9XHJcblxyXG4gICAgbmV3Tm9kZS5jb21wdXRlV29ybGRNYXRyaXgodHJ1ZSk7XHJcbn07XHJcblxyXG4vKipcclxuICogSW1wb3J0cyBhIG5vZGVcclxuICogQHBhcmFtIGdsdGZSdW50aW1lXHJcbiAqIEBwYXJhbSBub2RlXHJcbiAqIEBwYXJhbSBpZFxyXG4gKi9cclxuY29uc3QgaW1wb3J0Tm9kZSA9IChnbHRmUnVudGltZTogSUdMVEZSdW50aW1lLCBub2RlOiBJR0xURk5vZGUsIGlkOiBzdHJpbmcpOiBOdWxsYWJsZTxOb2RlPiA9PiB7XHJcbiAgICBsZXQgbGFzdE5vZGU6IE51bGxhYmxlPE5vZGU+ID0gbnVsbDtcclxuXHJcbiAgICBpZiAoZ2x0ZlJ1bnRpbWUuaW1wb3J0T25seU1lc2hlcyAmJiAobm9kZS5za2luIHx8IG5vZGUubWVzaGVzKSkge1xyXG4gICAgICAgIGlmIChnbHRmUnVudGltZS5pbXBvcnRNZXNoZXNOYW1lcyAmJiBnbHRmUnVudGltZS5pbXBvcnRNZXNoZXNOYW1lcy5sZW5ndGggPiAwICYmIGdsdGZSdW50aW1lLmltcG9ydE1lc2hlc05hbWVzLmluZGV4T2Yobm9kZS5uYW1lIHx8IFwiXCIpID09PSAtMSkge1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gTWVzaGVzXHJcbiAgICBpZiAobm9kZS5za2luKSB7XHJcbiAgICAgICAgaWYgKG5vZGUubWVzaGVzKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHNraW46IElHTFRGU2tpbnMgPSBnbHRmUnVudGltZS5za2luc1tub2RlLnNraW5dO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgbmV3TWVzaCA9IGltcG9ydE1lc2goZ2x0ZlJ1bnRpbWUsIG5vZGUsIG5vZGUubWVzaGVzLCBpZCwgPE1lc2g+bm9kZS5iYWJ5bG9uTm9kZSk7XHJcbiAgICAgICAgICAgIG5ld01lc2guc2tlbGV0b24gPSBnbHRmUnVudGltZS5zY2VuZS5nZXRMYXN0U2tlbGV0b25CeUlkKG5vZGUuc2tpbik7XHJcblxyXG4gICAgICAgICAgICBpZiAobmV3TWVzaC5za2VsZXRvbiA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgbmV3TWVzaC5za2VsZXRvbiA9IGltcG9ydFNrZWxldG9uKGdsdGZSdW50aW1lLCBza2luLCBuZXdNZXNoLCBza2luLmJhYnlsb25Ta2VsZXRvbik7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCFza2luLmJhYnlsb25Ta2VsZXRvbikge1xyXG4gICAgICAgICAgICAgICAgICAgIHNraW4uYmFieWxvblNrZWxldG9uID0gbmV3TWVzaC5za2VsZXRvbjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgbGFzdE5vZGUgPSBuZXdNZXNoO1xyXG4gICAgICAgIH1cclxuICAgIH0gZWxzZSBpZiAobm9kZS5tZXNoZXMpIHtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBJbXByb3ZlIG1lc2hlcyBwcm9wZXJ0eVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGNvbnN0IG5ld01lc2ggPSBpbXBvcnRNZXNoKGdsdGZSdW50aW1lLCBub2RlLCBub2RlLm1lc2ggPyBbbm9kZS5tZXNoXSA6IG5vZGUubWVzaGVzLCBpZCwgPE1lc2g+bm9kZS5iYWJ5bG9uTm9kZSk7XHJcbiAgICAgICAgbGFzdE5vZGUgPSBuZXdNZXNoO1xyXG4gICAgfVxyXG4gICAgLy8gTGlnaHRzXHJcbiAgICBlbHNlIGlmIChub2RlLmxpZ2h0ICYmICFub2RlLmJhYnlsb25Ob2RlICYmICFnbHRmUnVudGltZS5pbXBvcnRPbmx5TWVzaGVzKSB7XHJcbiAgICAgICAgY29uc3QgbGlnaHQ6IElHTFRGTGlnaHQgPSBnbHRmUnVudGltZS5saWdodHNbbm9kZS5saWdodF07XHJcblxyXG4gICAgICAgIGlmIChsaWdodCkge1xyXG4gICAgICAgICAgICBpZiAobGlnaHQudHlwZSA9PT0gXCJhbWJpZW50XCIpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGFtYmllbkxpZ2h0OiBJR0xURkFtYmllbkxpZ2h0ID0gKDxhbnk+bGlnaHQpW2xpZ2h0LnR5cGVdO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgaGVtaUxpZ2h0ID0gbmV3IEhlbWlzcGhlcmljTGlnaHQobm9kZS5saWdodCwgVmVjdG9yMy5aZXJvKCksIGdsdGZSdW50aW1lLnNjZW5lKTtcclxuICAgICAgICAgICAgICAgIGhlbWlMaWdodC5uYW1lID0gbm9kZS5uYW1lIHx8IFwiXCI7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGFtYmllbkxpZ2h0LmNvbG9yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVtaUxpZ2h0LmRpZmZ1c2UgPSBDb2xvcjMuRnJvbUFycmF5KGFtYmllbkxpZ2h0LmNvbG9yKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBsYXN0Tm9kZSA9IGhlbWlMaWdodDtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChsaWdodC50eXBlID09PSBcImRpcmVjdGlvbmFsXCIpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGRpcmVjdGlvbmFsTGlnaHQ6IElHTFRGRGlyZWN0aW9uYWxMaWdodCA9ICg8YW55PmxpZ2h0KVtsaWdodC50eXBlXTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGRpckxpZ2h0ID0gbmV3IERpcmVjdGlvbmFsTGlnaHQobm9kZS5saWdodCwgVmVjdG9yMy5aZXJvKCksIGdsdGZSdW50aW1lLnNjZW5lKTtcclxuICAgICAgICAgICAgICAgIGRpckxpZ2h0Lm5hbWUgPSBub2RlLm5hbWUgfHwgXCJcIjtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoZGlyZWN0aW9uYWxMaWdodC5jb2xvcikge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpckxpZ2h0LmRpZmZ1c2UgPSBDb2xvcjMuRnJvbUFycmF5KGRpcmVjdGlvbmFsTGlnaHQuY29sb3IpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGxhc3ROb2RlID0gZGlyTGlnaHQ7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAobGlnaHQudHlwZSA9PT0gXCJwb2ludFwiKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBwb2ludExpZ2h0OiBJR0xURlBvaW50TGlnaHQgPSAoPGFueT5saWdodClbbGlnaHQudHlwZV07XHJcbiAgICAgICAgICAgICAgICBjb25zdCBwdExpZ2h0ID0gbmV3IFBvaW50TGlnaHQobm9kZS5saWdodCwgVmVjdG9yMy5aZXJvKCksIGdsdGZSdW50aW1lLnNjZW5lKTtcclxuICAgICAgICAgICAgICAgIHB0TGlnaHQubmFtZSA9IG5vZGUubmFtZSB8fCBcIlwiO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChwb2ludExpZ2h0LmNvbG9yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcHRMaWdodC5kaWZmdXNlID0gQ29sb3IzLkZyb21BcnJheShwb2ludExpZ2h0LmNvbG9yKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBsYXN0Tm9kZSA9IHB0TGlnaHQ7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAobGlnaHQudHlwZSA9PT0gXCJzcG90XCIpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHNwb3RMaWdodDogSUdMVEZTcG90TGlnaHQgPSAoPGFueT5saWdodClbbGlnaHQudHlwZV07XHJcbiAgICAgICAgICAgICAgICBjb25zdCBzcExpZ2h0ID0gbmV3IFNwb3RMaWdodChub2RlLmxpZ2h0LCBWZWN0b3IzLlplcm8oKSwgVmVjdG9yMy5aZXJvKCksIDAsIDAsIGdsdGZSdW50aW1lLnNjZW5lKTtcclxuICAgICAgICAgICAgICAgIHNwTGlnaHQubmFtZSA9IG5vZGUubmFtZSB8fCBcIlwiO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChzcG90TGlnaHQuY29sb3IpIHtcclxuICAgICAgICAgICAgICAgICAgICBzcExpZ2h0LmRpZmZ1c2UgPSBDb2xvcjMuRnJvbUFycmF5KHNwb3RMaWdodC5jb2xvcik7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHNwb3RMaWdodC5mYWxsT2ZBbmdsZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNwTGlnaHQuYW5nbGUgPSBzcG90TGlnaHQuZmFsbE9mQW5nbGU7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHNwb3RMaWdodC5mYWxsT2ZmRXhwb25lbnQpIHtcclxuICAgICAgICAgICAgICAgICAgICBzcExpZ2h0LmV4cG9uZW50ID0gc3BvdExpZ2h0LmZhbGxPZmZFeHBvbmVudDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBsYXN0Tm9kZSA9IHNwTGlnaHQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvLyBDYW1lcmFzXHJcbiAgICBlbHNlIGlmIChub2RlLmNhbWVyYSAmJiAhbm9kZS5iYWJ5bG9uTm9kZSAmJiAhZ2x0ZlJ1bnRpbWUuaW1wb3J0T25seU1lc2hlcykge1xyXG4gICAgICAgIGNvbnN0IGNhbWVyYTogSUdMVEZDYW1lcmEgPSBnbHRmUnVudGltZS5jYW1lcmFzW25vZGUuY2FtZXJhXTtcclxuXHJcbiAgICAgICAgaWYgKGNhbWVyYSkge1xyXG4gICAgICAgICAgICBnbHRmUnVudGltZS5zY2VuZS5fYmxvY2tFbnRpdHlDb2xsZWN0aW9uID0gISFnbHRmUnVudGltZS5hc3NldENvbnRhaW5lcjtcclxuICAgICAgICAgICAgaWYgKGNhbWVyYS50eXBlID09PSBcIm9ydGhvZ3JhcGhpY1wiKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBvcnRob0NhbWVyYSA9IG5ldyBGcmVlQ2FtZXJhKG5vZGUuY2FtZXJhLCBWZWN0b3IzLlplcm8oKSwgZ2x0ZlJ1bnRpbWUuc2NlbmUsIGZhbHNlKTtcclxuXHJcbiAgICAgICAgICAgICAgICBvcnRob0NhbWVyYS5uYW1lID0gbm9kZS5uYW1lIHx8IFwiXCI7XHJcbiAgICAgICAgICAgICAgICBvcnRob0NhbWVyYS5tb2RlID0gQ2FtZXJhLk9SVEhPR1JBUEhJQ19DQU1FUkE7XHJcbiAgICAgICAgICAgICAgICBvcnRob0NhbWVyYS5hdHRhY2hDb250cm9sKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgbGFzdE5vZGUgPSBvcnRob0NhbWVyYTtcclxuXHJcbiAgICAgICAgICAgICAgICBvcnRob0NhbWVyYS5fcGFyZW50Q29udGFpbmVyID0gZ2x0ZlJ1bnRpbWUuYXNzZXRDb250YWluZXI7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoY2FtZXJhLnR5cGUgPT09IFwicGVyc3BlY3RpdmVcIikge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcGVyc3BlY3RpdmVDYW1lcmE6IElHTFRGQ2FtZXJhUGVyc3BlY3RpdmUgPSAoPGFueT5jYW1lcmEpW2NhbWVyYS50eXBlXTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHBlcnNDYW1lcmEgPSBuZXcgRnJlZUNhbWVyYShub2RlLmNhbWVyYSwgVmVjdG9yMy5aZXJvKCksIGdsdGZSdW50aW1lLnNjZW5lLCBmYWxzZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgcGVyc0NhbWVyYS5uYW1lID0gbm9kZS5uYW1lIHx8IFwiXCI7XHJcbiAgICAgICAgICAgICAgICBwZXJzQ2FtZXJhLmF0dGFjaENvbnRyb2woKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoIXBlcnNwZWN0aXZlQ2FtZXJhLmFzcGVjdFJhdGlvKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGVyc3BlY3RpdmVDYW1lcmEuYXNwZWN0UmF0aW8gPSBnbHRmUnVudGltZS5zY2VuZS5nZXRFbmdpbmUoKS5nZXRSZW5kZXJXaWR0aCgpIC8gZ2x0ZlJ1bnRpbWUuc2NlbmUuZ2V0RW5naW5lKCkuZ2V0UmVuZGVySGVpZ2h0KCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHBlcnNwZWN0aXZlQ2FtZXJhLnpuZWFyICYmIHBlcnNwZWN0aXZlQ2FtZXJhLnpmYXIpIHtcclxuICAgICAgICAgICAgICAgICAgICBwZXJzQ2FtZXJhLm1heFogPSBwZXJzcGVjdGl2ZUNhbWVyYS56ZmFyO1xyXG4gICAgICAgICAgICAgICAgICAgIHBlcnNDYW1lcmEubWluWiA9IHBlcnNwZWN0aXZlQ2FtZXJhLnpuZWFyO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGxhc3ROb2RlID0gcGVyc0NhbWVyYTtcclxuICAgICAgICAgICAgICAgIHBlcnNDYW1lcmEuX3BhcmVudENvbnRhaW5lciA9IGdsdGZSdW50aW1lLmFzc2V0Q29udGFpbmVyO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBnbHRmUnVudGltZS5zY2VuZS5fYmxvY2tFbnRpdHlDb2xsZWN0aW9uID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIEVtcHR5IG5vZGVcclxuICAgIGlmICghbm9kZS5qb2ludE5hbWUpIHtcclxuICAgICAgICBpZiAobm9kZS5iYWJ5bG9uTm9kZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gbm9kZS5iYWJ5bG9uTm9kZTtcclxuICAgICAgICB9IGVsc2UgaWYgKGxhc3ROb2RlID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgIGdsdGZSdW50aW1lLnNjZW5lLl9ibG9ja0VudGl0eUNvbGxlY3Rpb24gPSAhIWdsdGZSdW50aW1lLmFzc2V0Q29udGFpbmVyO1xyXG4gICAgICAgICAgICBjb25zdCBkdW1teSA9IG5ldyBNZXNoKG5vZGUubmFtZSB8fCBcIlwiLCBnbHRmUnVudGltZS5zY2VuZSk7XHJcbiAgICAgICAgICAgIGR1bW15Ll9wYXJlbnRDb250YWluZXIgPSBnbHRmUnVudGltZS5hc3NldENvbnRhaW5lcjtcclxuICAgICAgICAgICAgZ2x0ZlJ1bnRpbWUuc2NlbmUuX2Jsb2NrRW50aXR5Q29sbGVjdGlvbiA9IGZhbHNlO1xyXG4gICAgICAgICAgICBub2RlLmJhYnlsb25Ob2RlID0gZHVtbXk7XHJcbiAgICAgICAgICAgIGxhc3ROb2RlID0gZHVtbXk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmIChsYXN0Tm9kZSAhPT0gbnVsbCkge1xyXG4gICAgICAgIGlmIChub2RlLm1hdHJpeCAmJiBsYXN0Tm9kZSBpbnN0YW5jZW9mIE1lc2gpIHtcclxuICAgICAgICAgICAgY29uZmlndXJlTm9kZUZyb21NYXRyaXgobGFzdE5vZGUsIG5vZGUpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRyYW5zbGF0aW9uID0gbm9kZS50cmFuc2xhdGlvbiB8fCBbMCwgMCwgMF07XHJcbiAgICAgICAgICAgIGNvbnN0IHJvdGF0aW9uID0gbm9kZS5yb3RhdGlvbiB8fCBbMCwgMCwgMCwgMV07XHJcbiAgICAgICAgICAgIGNvbnN0IHNjYWxlID0gbm9kZS5zY2FsZSB8fCBbMSwgMSwgMV07XHJcbiAgICAgICAgICAgIGNvbmZpZ3VyZU5vZGUobGFzdE5vZGUsIFZlY3RvcjMuRnJvbUFycmF5KHRyYW5zbGF0aW9uKSwgUXVhdGVybmlvbi5Gcm9tQXJyYXkocm90YXRpb24pLCBWZWN0b3IzLkZyb21BcnJheShzY2FsZSkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGFzdE5vZGUudXBkYXRlQ2FjaGUodHJ1ZSk7XHJcbiAgICAgICAgbm9kZS5iYWJ5bG9uTm9kZSA9IGxhc3ROb2RlO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBsYXN0Tm9kZTtcclxufTtcclxuXHJcbi8qKlxyXG4gKiBUcmF2ZXJzZXMgbm9kZXMgYW5kIGNyZWF0ZXMgdGhlbVxyXG4gKiBAcGFyYW0gZ2x0ZlJ1bnRpbWVcclxuICogQHBhcmFtIGlkXHJcbiAqIEBwYXJhbSBwYXJlbnRcclxuICogQHBhcmFtIG1lc2hJbmNsdWRlZFxyXG4gKi9cclxuY29uc3QgdHJhdmVyc2VOb2RlcyA9IChnbHRmUnVudGltZTogSUdMVEZSdW50aW1lLCBpZDogc3RyaW5nLCBwYXJlbnQ6IE51bGxhYmxlPE5vZGU+LCBtZXNoSW5jbHVkZWQ6IGJvb2xlYW4gPSBmYWxzZSkgPT4ge1xyXG4gICAgY29uc3Qgbm9kZTogSUdMVEZOb2RlID0gZ2x0ZlJ1bnRpbWUubm9kZXNbaWRdO1xyXG4gICAgbGV0IG5ld05vZGU6IE51bGxhYmxlPE5vZGU+ID0gbnVsbDtcclxuXHJcbiAgICBpZiAoZ2x0ZlJ1bnRpbWUuaW1wb3J0T25seU1lc2hlcyAmJiAhbWVzaEluY2x1ZGVkICYmIGdsdGZSdW50aW1lLmltcG9ydE1lc2hlc05hbWVzKSB7XHJcbiAgICAgICAgaWYgKGdsdGZSdW50aW1lLmltcG9ydE1lc2hlc05hbWVzLmluZGV4T2Yobm9kZS5uYW1lIHx8IFwiXCIpICE9PSAtMSB8fCBnbHRmUnVudGltZS5pbXBvcnRNZXNoZXNOYW1lcy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgbWVzaEluY2x1ZGVkID0gdHJ1ZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBtZXNoSW5jbHVkZWQgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIG1lc2hJbmNsdWRlZCA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCFub2RlLmpvaW50TmFtZSAmJiBtZXNoSW5jbHVkZWQpIHtcclxuICAgICAgICBuZXdOb2RlID0gaW1wb3J0Tm9kZShnbHRmUnVudGltZSwgbm9kZSwgaWQpO1xyXG5cclxuICAgICAgICBpZiAobmV3Tm9kZSAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICBuZXdOb2RlLmlkID0gaWQ7XHJcbiAgICAgICAgICAgIG5ld05vZGUucGFyZW50ID0gcGFyZW50O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZiAobm9kZS5jaGlsZHJlbikge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbm9kZS5jaGlsZHJlbi5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICB0cmF2ZXJzZU5vZGVzKGdsdGZSdW50aW1lLCBub2RlLmNoaWxkcmVuW2ldLCBuZXdOb2RlLCBtZXNoSW5jbHVkZWQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufTtcclxuXHJcbi8qKlxyXG4gKiBkbyBzdHVmZiBhZnRlciBidWZmZXJzLCBzaGFkZXJzIGFyZSBsb2FkZWQgKGUuZy4gaG9vayB1cCBtYXRlcmlhbHMsIGxvYWQgYW5pbWF0aW9ucywgZXRjLilcclxuICogQHBhcmFtIGdsdGZSdW50aW1lXHJcbiAqL1xyXG5jb25zdCBwb3N0TG9hZCA9IChnbHRmUnVudGltZTogSUdMVEZSdW50aW1lKSA9PiB7XHJcbiAgICAvLyBOb2Rlc1xyXG4gICAgbGV0IGN1cnJlbnRTY2VuZTogSUdMVEZTY2VuZSA9IDxJR0xURlNjZW5lPmdsdGZSdW50aW1lLmN1cnJlbnRTY2VuZTtcclxuXHJcbiAgICBpZiAoY3VycmVudFNjZW5lKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjdXJyZW50U2NlbmUubm9kZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgdHJhdmVyc2VOb2RlcyhnbHRmUnVudGltZSwgY3VycmVudFNjZW5lLm5vZGVzW2ldLCBudWxsKTtcclxuICAgICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGZvciAoY29uc3QgdGhpbmcgaW4gZ2x0ZlJ1bnRpbWUuc2NlbmVzKSB7XHJcbiAgICAgICAgICAgIGN1cnJlbnRTY2VuZSA9IDxJR0xURlNjZW5lPmdsdGZSdW50aW1lLnNjZW5lc1t0aGluZ107XHJcblxyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGN1cnJlbnRTY2VuZS5ub2Rlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgdHJhdmVyc2VOb2RlcyhnbHRmUnVudGltZSwgY3VycmVudFNjZW5lLm5vZGVzW2ldLCBudWxsKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBTZXQgYW5pbWF0aW9uc1xyXG4gICAgbG9hZEFuaW1hdGlvbnMoZ2x0ZlJ1bnRpbWUpO1xyXG5cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZ2x0ZlJ1bnRpbWUuc2NlbmUuc2tlbGV0b25zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgY29uc3Qgc2tlbGV0b24gPSBnbHRmUnVudGltZS5zY2VuZS5za2VsZXRvbnNbaV07XHJcbiAgICAgICAgZ2x0ZlJ1bnRpbWUuc2NlbmUuYmVnaW5BbmltYXRpb24oc2tlbGV0b24sIDAsIE51bWJlci5NQVhfVkFMVUUsIHRydWUsIDEuMCk7XHJcbiAgICB9XHJcbn07XHJcblxyXG4vKipcclxuICogb25CaW5kIHNoYWRlcnJzIGNhbGxiYWNrIHRvIHNldCB1bmlmb3JtcyBhbmQgbWF0cmljZXNcclxuICogQHBhcmFtIG1lc2hcclxuICogQHBhcmFtIGdsdGZSdW50aW1lXHJcbiAqIEBwYXJhbSB1blRyZWF0ZWRVbmlmb3Jtc1xyXG4gKiBAcGFyYW0gc2hhZGVyTWF0ZXJpYWxcclxuICogQHBhcmFtIHRlY2huaXF1ZVxyXG4gKiBAcGFyYW0gbWF0ZXJpYWxcclxuICogQHBhcmFtIG9uU3VjY2Vzc1xyXG4gKi9cclxuY29uc3Qgb25CaW5kU2hhZGVyTWF0ZXJpYWwgPSAoXHJcbiAgICBtZXNoOiBBYnN0cmFjdE1lc2gsXHJcbiAgICBnbHRmUnVudGltZTogSUdMVEZSdW50aW1lLFxyXG4gICAgdW5UcmVhdGVkVW5pZm9ybXM6IHsgW2tleTogc3RyaW5nXTogSUdMVEZUZWNobmlxdWVQYXJhbWV0ZXIgfSxcclxuICAgIHNoYWRlck1hdGVyaWFsOiBTaGFkZXJNYXRlcmlhbCxcclxuICAgIHRlY2huaXF1ZTogSUdMVEZUZWNobmlxdWUsXHJcbiAgICBtYXRlcmlhbDogSUdMVEZNYXRlcmlhbCxcclxuICAgIG9uU3VjY2VzczogKHNoYWRlck1hdGVyaWFsOiBTaGFkZXJNYXRlcmlhbCkgPT4gdm9pZFxyXG4pID0+IHtcclxuICAgIGNvbnN0IG1hdGVyaWFsVmFsdWVzID0gbWF0ZXJpYWwudmFsdWVzIHx8IHRlY2huaXF1ZS5wYXJhbWV0ZXJzO1xyXG5cclxuICAgIGZvciAoY29uc3QgdW5pZiBpbiB1blRyZWF0ZWRVbmlmb3Jtcykge1xyXG4gICAgICAgIGNvbnN0IHVuaWZvcm06IElHTFRGVGVjaG5pcXVlUGFyYW1ldGVyID0gdW5UcmVhdGVkVW5pZm9ybXNbdW5pZl07XHJcbiAgICAgICAgY29uc3QgdHlwZSA9IHVuaWZvcm0udHlwZTtcclxuXHJcbiAgICAgICAgaWYgKHR5cGUgPT09IEVQYXJhbWV0ZXJUeXBlLkZMT0FUX01BVDIgfHwgdHlwZSA9PT0gRVBhcmFtZXRlclR5cGUuRkxPQVRfTUFUMyB8fCB0eXBlID09PSBFUGFyYW1ldGVyVHlwZS5GTE9BVF9NQVQ0KSB7XHJcbiAgICAgICAgICAgIGlmICh1bmlmb3JtLnNlbWFudGljICYmICF1bmlmb3JtLnNvdXJjZSAmJiAhdW5pZm9ybS5ub2RlKSB7XHJcbiAgICAgICAgICAgICAgICBHTFRGVXRpbHMuU2V0TWF0cml4KGdsdGZSdW50aW1lLnNjZW5lLCBtZXNoLCB1bmlmb3JtLCB1bmlmLCA8RWZmZWN0PnNoYWRlck1hdGVyaWFsLmdldEVmZmVjdCgpKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmICh1bmlmb3JtLnNlbWFudGljICYmICh1bmlmb3JtLnNvdXJjZSB8fCB1bmlmb3JtLm5vZGUpKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgc291cmNlID0gZ2x0ZlJ1bnRpbWUuc2NlbmUuZ2V0Tm9kZUJ5TmFtZSh1bmlmb3JtLnNvdXJjZSB8fCB1bmlmb3JtLm5vZGUgfHwgXCJcIik7XHJcbiAgICAgICAgICAgICAgICBpZiAoc291cmNlID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc291cmNlID0gZ2x0ZlJ1bnRpbWUuc2NlbmUuZ2V0Tm9kZUJ5SWQodW5pZm9ybS5zb3VyY2UgfHwgdW5pZm9ybS5ub2RlIHx8IFwiXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKHNvdXJjZSA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIEdMVEZVdGlscy5TZXRNYXRyaXgoZ2x0ZlJ1bnRpbWUuc2NlbmUsIHNvdXJjZSwgdW5pZm9ybSwgdW5pZiwgPEVmZmVjdD5zaGFkZXJNYXRlcmlhbC5nZXRFZmZlY3QoKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zdCB2YWx1ZSA9ICg8YW55Pm1hdGVyaWFsVmFsdWVzKVt0ZWNobmlxdWUudW5pZm9ybXNbdW5pZl1dO1xyXG4gICAgICAgICAgICBpZiAoIXZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKHR5cGUgPT09IEVQYXJhbWV0ZXJUeXBlLlNBTVBMRVJfMkQpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHRleHR1cmUgPSBnbHRmUnVudGltZS50ZXh0dXJlc1ttYXRlcmlhbC52YWx1ZXMgPyB2YWx1ZSA6IHVuaWZvcm0udmFsdWVdLmJhYnlsb25UZXh0dXJlO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICh0ZXh0dXJlID09PSBudWxsIHx8IHRleHR1cmUgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICg8RWZmZWN0PnNoYWRlck1hdGVyaWFsLmdldEVmZmVjdCgpKS5zZXRUZXh0dXJlKHVuaWYsIHRleHR1cmUpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgR0xURlV0aWxzLlNldFVuaWZvcm0oPEVmZmVjdD5zaGFkZXJNYXRlcmlhbC5nZXRFZmZlY3QoKSwgdW5pZiwgdmFsdWUsIHR5cGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uU3VjY2VzcyhzaGFkZXJNYXRlcmlhbCk7XHJcbn07XHJcblxyXG4vKipcclxuICogUHJlcGFyZSB1bmlmb3JtcyB0byBzZW5kIHRoZSBvbmx5IG9uZSB0aW1lXHJcbiAqIExvYWRzIHRoZSBhcHByb3ByaWF0ZSB0ZXh0dXJlc1xyXG4gKiBAcGFyYW0gZ2x0ZlJ1bnRpbWVcclxuICogQHBhcmFtIHNoYWRlck1hdGVyaWFsXHJcbiAqIEBwYXJhbSB0ZWNobmlxdWVcclxuICogQHBhcmFtIG1hdGVyaWFsXHJcbiAqL1xyXG5jb25zdCBwcmVwYXJlU2hhZGVyTWF0ZXJpYWxVbmlmb3JtcyA9IChcclxuICAgIGdsdGZSdW50aW1lOiBJR0xURlJ1bnRpbWUsXHJcbiAgICBzaGFkZXJNYXRlcmlhbDogU2hhZGVyTWF0ZXJpYWwsXHJcbiAgICB0ZWNobmlxdWU6IElHTFRGVGVjaG5pcXVlLFxyXG4gICAgbWF0ZXJpYWw6IElHTFRGTWF0ZXJpYWwsXHJcbiAgICB1blRyZWF0ZWRVbmlmb3JtczogeyBba2V5OiBzdHJpbmddOiBJR0xURlRlY2huaXF1ZVBhcmFtZXRlciB9XHJcbikgPT4ge1xyXG4gICAgY29uc3QgbWF0ZXJpYWxWYWx1ZXMgPSBtYXRlcmlhbC52YWx1ZXMgfHwgdGVjaG5pcXVlLnBhcmFtZXRlcnM7XHJcbiAgICBjb25zdCB0ZWNobmlxdWVVbmlmb3JtcyA9IHRlY2huaXF1ZS51bmlmb3JtcztcclxuXHJcbiAgICAvKipcclxuICAgICAqIFByZXBhcmUgdmFsdWVzIGhlcmUgKG5vdCBtYXRyaWNlcylcclxuICAgICAqL1xyXG4gICAgZm9yIChjb25zdCB1bmlmIGluIHVuVHJlYXRlZFVuaWZvcm1zKSB7XHJcbiAgICAgICAgY29uc3QgdW5pZm9ybTogSUdMVEZUZWNobmlxdWVQYXJhbWV0ZXIgPSB1blRyZWF0ZWRVbmlmb3Jtc1t1bmlmXTtcclxuICAgICAgICBjb25zdCB0eXBlID0gdW5pZm9ybS50eXBlO1xyXG4gICAgICAgIGxldCB2YWx1ZSA9ICg8YW55Pm1hdGVyaWFsVmFsdWVzKVt0ZWNobmlxdWVVbmlmb3Jtc1t1bmlmXV07XHJcblxyXG4gICAgICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIC8vIEluIGNhc2UgdGhlIHZhbHVlIGlzIHRoZSBzYW1lIGZvciBhbGwgbWF0ZXJpYWxzXHJcbiAgICAgICAgICAgIHZhbHVlID0gPGFueT51bmlmb3JtLnZhbHVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCF2YWx1ZSkge1xyXG4gICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IG9uTG9hZFRleHR1cmUgPSAodW5pZm9ybU5hbWU6IE51bGxhYmxlPHN0cmluZz4pID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuICh0ZXh0dXJlOiBUZXh0dXJlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAodW5pZm9ybS52YWx1ZSAmJiB1bmlmb3JtTmFtZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIFN0YXRpYyB1bmlmb3JtXHJcbiAgICAgICAgICAgICAgICAgICAgc2hhZGVyTWF0ZXJpYWwuc2V0VGV4dHVyZSh1bmlmb3JtTmFtZSwgdGV4dHVyZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlIHVuVHJlYXRlZFVuaWZvcm1zW3VuaWZvcm1OYW1lXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICAvLyBUZXh0dXJlIChzYW1wbGVyMkQpXHJcbiAgICAgICAgaWYgKHR5cGUgPT09IEVQYXJhbWV0ZXJUeXBlLlNBTVBMRVJfMkQpIHtcclxuICAgICAgICAgICAgR0xURkxvYWRlckV4dGVuc2lvbi5Mb2FkVGV4dHVyZUFzeW5jKGdsdGZSdW50aW1lLCBtYXRlcmlhbC52YWx1ZXMgPyB2YWx1ZSA6IHVuaWZvcm0udmFsdWUsIG9uTG9hZFRleHR1cmUodW5pZiksICgpID0+IG9uTG9hZFRleHR1cmUobnVsbCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBPdGhlcnNcclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKHVuaWZvcm0udmFsdWUgJiYgR0xURlV0aWxzLlNldFVuaWZvcm0oc2hhZGVyTWF0ZXJpYWwsIHVuaWYsIG1hdGVyaWFsLnZhbHVlcyA/IHZhbHVlIDogdW5pZm9ybS52YWx1ZSwgdHlwZSkpIHtcclxuICAgICAgICAgICAgICAgIC8vIFN0YXRpYyB1bmlmb3JtXHJcbiAgICAgICAgICAgICAgICBkZWxldGUgdW5UcmVhdGVkVW5pZm9ybXNbdW5pZl07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn07XHJcblxyXG4vKipcclxuICogU2hhZGVyIGNvbXBpbGF0aW9uIGZhaWxlZFxyXG4gKiBAcGFyYW0gcHJvZ3JhbVxyXG4gKiBAcGFyYW0gc2hhZGVyTWF0ZXJpYWxcclxuICogQHBhcmFtIG9uRXJyb3JcclxuICovXHJcbmNvbnN0IG9uU2hhZGVyQ29tcGlsZUVycm9yID0gKHByb2dyYW06IElHTFRGUHJvZ3JhbSwgc2hhZGVyTWF0ZXJpYWw6IFNoYWRlck1hdGVyaWFsLCBvbkVycm9yOiAobWVzc2FnZTogc3RyaW5nKSA9PiB2b2lkKSA9PiB7XHJcbiAgICByZXR1cm4gKGVmZmVjdDogRWZmZWN0LCBlcnJvcjogc3RyaW5nKSA9PiB7XHJcbiAgICAgICAgc2hhZGVyTWF0ZXJpYWwuZGlzcG9zZSh0cnVlKTtcclxuICAgICAgICBvbkVycm9yKFwiQ2Fubm90IGNvbXBpbGUgcHJvZ3JhbSBuYW1lZCBcIiArIHByb2dyYW0ubmFtZSArIFwiLiBFcnJvcjogXCIgKyBlcnJvciArIFwiLiBEZWZhdWx0IG1hdGVyaWFsIHdpbGwgYmUgYXBwbGllZFwiKTtcclxuICAgIH07XHJcbn07XHJcblxyXG4vKipcclxuICogU2hhZGVyIGNvbXBpbGF0aW9uIHN1Y2Nlc3NcclxuICogQHBhcmFtIGdsdGZSdW50aW1lXHJcbiAqIEBwYXJhbSBzaGFkZXJNYXRlcmlhbFxyXG4gKiBAcGFyYW0gdGVjaG5pcXVlXHJcbiAqIEBwYXJhbSBtYXRlcmlhbFxyXG4gKiBAcGFyYW0gdW5UcmVhdGVkVW5pZm9ybXNcclxuICogQHBhcmFtIG9uU3VjY2Vzc1xyXG4gKi9cclxuY29uc3Qgb25TaGFkZXJDb21waWxlU3VjY2VzcyA9IChcclxuICAgIGdsdGZSdW50aW1lOiBJR0xURlJ1bnRpbWUsXHJcbiAgICBzaGFkZXJNYXRlcmlhbDogU2hhZGVyTWF0ZXJpYWwsXHJcbiAgICB0ZWNobmlxdWU6IElHTFRGVGVjaG5pcXVlLFxyXG4gICAgbWF0ZXJpYWw6IElHTFRGTWF0ZXJpYWwsXHJcbiAgICB1blRyZWF0ZWRVbmlmb3JtczogeyBba2V5OiBzdHJpbmddOiBJR0xURlRlY2huaXF1ZVBhcmFtZXRlciB9LFxyXG4gICAgb25TdWNjZXNzOiAoc2hhZGVyTWF0ZXJpYWw6IFNoYWRlck1hdGVyaWFsKSA9PiB2b2lkXHJcbikgPT4ge1xyXG4gICAgcmV0dXJuIChfOiBFZmZlY3QpID0+IHtcclxuICAgICAgICBwcmVwYXJlU2hhZGVyTWF0ZXJpYWxVbmlmb3JtcyhnbHRmUnVudGltZSwgc2hhZGVyTWF0ZXJpYWwsIHRlY2huaXF1ZSwgbWF0ZXJpYWwsIHVuVHJlYXRlZFVuaWZvcm1zKTtcclxuXHJcbiAgICAgICAgc2hhZGVyTWF0ZXJpYWwub25CaW5kID0gKG1lc2g6IEFic3RyYWN0TWVzaCkgPT4ge1xyXG4gICAgICAgICAgICBvbkJpbmRTaGFkZXJNYXRlcmlhbChtZXNoLCBnbHRmUnVudGltZSwgdW5UcmVhdGVkVW5pZm9ybXMsIHNoYWRlck1hdGVyaWFsLCB0ZWNobmlxdWUsIG1hdGVyaWFsLCBvblN1Y2Nlc3MpO1xyXG4gICAgICAgIH07XHJcbiAgICB9O1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIFJldHVybnMgdGhlIGFwcHJvcHJpYXRlIHVuaWZvcm0gaWYgYWxyZWFkeSBoYW5kbGVkIGJ5IGJhYnlsb25cclxuICogQHBhcmFtIHRva2VuaXplclxyXG4gKiBAcGFyYW0gdGVjaG5pcXVlXHJcbiAqL1xyXG5jb25zdCBwYXJzZVNoYWRlclVuaWZvcm1zID0gKHRva2VuaXplcjogVG9rZW5pemVyLCB0ZWNobmlxdWU6IElHTFRGVGVjaG5pcXVlLCB1blRyZWF0ZWRVbmlmb3JtczogeyBba2V5OiBzdHJpbmddOiBJR0xURlRlY2huaXF1ZVBhcmFtZXRlciB9KTogc3RyaW5nID0+IHtcclxuICAgIGZvciAoY29uc3QgdW5pZiBpbiB0ZWNobmlxdWUudW5pZm9ybXMpIHtcclxuICAgICAgICBjb25zdCB1bmlmb3JtID0gdGVjaG5pcXVlLnVuaWZvcm1zW3VuaWZdO1xyXG4gICAgICAgIGNvbnN0IHVuaWZvcm1QYXJhbWV0ZXI6IElHTFRGVGVjaG5pcXVlUGFyYW1ldGVyID0gdGVjaG5pcXVlLnBhcmFtZXRlcnNbdW5pZm9ybV07XHJcblxyXG4gICAgICAgIGlmICh0b2tlbml6ZXIuY3VycmVudElkZW50aWZpZXIgPT09IHVuaWYpIHtcclxuICAgICAgICAgICAgaWYgKHVuaWZvcm1QYXJhbWV0ZXIuc2VtYW50aWMgJiYgIXVuaWZvcm1QYXJhbWV0ZXIuc291cmNlICYmICF1bmlmb3JtUGFyYW1ldGVyLm5vZGUpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHRyYW5zZm9ybUluZGV4ID0gZ2xURlRyYW5zZm9ybXMuaW5kZXhPZih1bmlmb3JtUGFyYW1ldGVyLnNlbWFudGljKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAodHJhbnNmb3JtSW5kZXggIT09IC0xKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlIHVuVHJlYXRlZFVuaWZvcm1zW3VuaWZdO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBiYWJ5bG9uVHJhbnNmb3Jtc1t0cmFuc2Zvcm1JbmRleF07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRva2VuaXplci5jdXJyZW50SWRlbnRpZmllcjtcclxufTtcclxuXHJcbi8qKlxyXG4gKiBBbGwgc2hhZGVycyBsb2FkZWQuIENyZWF0ZSBtYXRlcmlhbHMgb25lIGJ5IG9uZVxyXG4gKiBAcGFyYW0gZ2x0ZlJ1bnRpbWVcclxuICovXHJcbmNvbnN0IGltcG9ydE1hdGVyaWFscyA9IChnbHRmUnVudGltZTogSUdMVEZSdW50aW1lKSA9PiB7XHJcbiAgICAvLyBDcmVhdGUgbWF0ZXJpYWxzXHJcbiAgICBmb3IgKGNvbnN0IG1hdCBpbiBnbHRmUnVudGltZS5tYXRlcmlhbHMpIHtcclxuICAgICAgICBHTFRGTG9hZGVyRXh0ZW5zaW9uLkxvYWRNYXRlcmlhbEFzeW5jKFxyXG4gICAgICAgICAgICBnbHRmUnVudGltZSxcclxuICAgICAgICAgICAgbWF0LFxyXG4gICAgICAgICAgICAoKSA9PiB7fSxcclxuICAgICAgICAgICAgKCkgPT4ge31cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59O1xyXG5cclxuLyoqXHJcbiAqIEltcGxlbWVudGF0aW9uIG9mIHRoZSBiYXNlIGdsVEYgc3BlY1xyXG4gKiBAaW50ZXJuYWxcclxuICovXHJcbmV4cG9ydCBjbGFzcyBHTFRGTG9hZGVyQmFzZSB7XHJcbiAgICBwdWJsaWMgc3RhdGljIENyZWF0ZVJ1bnRpbWUocGFyc2VkRGF0YTogYW55LCBzY2VuZTogU2NlbmUsIHJvb3RVcmw6IHN0cmluZyk6IElHTFRGUnVudGltZSB7XHJcbiAgICAgICAgY29uc3QgZ2x0ZlJ1bnRpbWU6IElHTFRGUnVudGltZSA9IHtcclxuICAgICAgICAgICAgZXh0ZW5zaW9uczoge30sXHJcbiAgICAgICAgICAgIGFjY2Vzc29yczoge30sXHJcbiAgICAgICAgICAgIGJ1ZmZlcnM6IHt9LFxyXG4gICAgICAgICAgICBidWZmZXJWaWV3czoge30sXHJcbiAgICAgICAgICAgIG1lc2hlczoge30sXHJcbiAgICAgICAgICAgIGxpZ2h0czoge30sXHJcbiAgICAgICAgICAgIGNhbWVyYXM6IHt9LFxyXG4gICAgICAgICAgICBub2Rlczoge30sXHJcbiAgICAgICAgICAgIGltYWdlczoge30sXHJcbiAgICAgICAgICAgIHRleHR1cmVzOiB7fSxcclxuICAgICAgICAgICAgc2hhZGVyczoge30sXHJcbiAgICAgICAgICAgIHByb2dyYW1zOiB7fSxcclxuICAgICAgICAgICAgc2FtcGxlcnM6IHt9LFxyXG4gICAgICAgICAgICB0ZWNobmlxdWVzOiB7fSxcclxuICAgICAgICAgICAgbWF0ZXJpYWxzOiB7fSxcclxuICAgICAgICAgICAgYW5pbWF0aW9uczoge30sXHJcbiAgICAgICAgICAgIHNraW5zOiB7fSxcclxuICAgICAgICAgICAgZXh0ZW5zaW9uc1VzZWQ6IFtdLFxyXG5cclxuICAgICAgICAgICAgc2NlbmVzOiB7fSxcclxuXHJcbiAgICAgICAgICAgIGJ1ZmZlcnNDb3VudDogMCxcclxuICAgICAgICAgICAgc2hhZGVyc2NvdW50OiAwLFxyXG5cclxuICAgICAgICAgICAgc2NlbmU6IHNjZW5lLFxyXG4gICAgICAgICAgICByb290VXJsOiByb290VXJsLFxyXG5cclxuICAgICAgICAgICAgbG9hZGVkQnVmZmVyQ291bnQ6IDAsXHJcbiAgICAgICAgICAgIGxvYWRlZEJ1ZmZlclZpZXdzOiB7fSxcclxuXHJcbiAgICAgICAgICAgIGxvYWRlZFNoYWRlckNvdW50OiAwLFxyXG5cclxuICAgICAgICAgICAgaW1wb3J0T25seU1lc2hlczogZmFsc2UsXHJcblxyXG4gICAgICAgICAgICBkdW1teU5vZGVzOiBbXSxcclxuXHJcbiAgICAgICAgICAgIGFzc2V0Q29udGFpbmVyOiBudWxsLFxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIC8vIFBhcnNlXHJcbiAgICAgICAgaWYgKHBhcnNlZERhdGEuZXh0ZW5zaW9ucykge1xyXG4gICAgICAgICAgICBwYXJzZU9iamVjdChwYXJzZWREYXRhLmV4dGVuc2lvbnMsIFwiZXh0ZW5zaW9uc1wiLCBnbHRmUnVudGltZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAocGFyc2VkRGF0YS5leHRlbnNpb25zVXNlZCkge1xyXG4gICAgICAgICAgICBwYXJzZU9iamVjdChwYXJzZWREYXRhLmV4dGVuc2lvbnNVc2VkLCBcImV4dGVuc2lvbnNVc2VkXCIsIGdsdGZSdW50aW1lKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChwYXJzZWREYXRhLmJ1ZmZlcnMpIHtcclxuICAgICAgICAgICAgcGFyc2VCdWZmZXJzKHBhcnNlZERhdGEuYnVmZmVycywgZ2x0ZlJ1bnRpbWUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHBhcnNlZERhdGEuYnVmZmVyVmlld3MpIHtcclxuICAgICAgICAgICAgcGFyc2VPYmplY3QocGFyc2VkRGF0YS5idWZmZXJWaWV3cywgXCJidWZmZXJWaWV3c1wiLCBnbHRmUnVudGltZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAocGFyc2VkRGF0YS5hY2Nlc3NvcnMpIHtcclxuICAgICAgICAgICAgcGFyc2VPYmplY3QocGFyc2VkRGF0YS5hY2Nlc3NvcnMsIFwiYWNjZXNzb3JzXCIsIGdsdGZSdW50aW1lKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChwYXJzZWREYXRhLm1lc2hlcykge1xyXG4gICAgICAgICAgICBwYXJzZU9iamVjdChwYXJzZWREYXRhLm1lc2hlcywgXCJtZXNoZXNcIiwgZ2x0ZlJ1bnRpbWUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHBhcnNlZERhdGEubGlnaHRzKSB7XHJcbiAgICAgICAgICAgIHBhcnNlT2JqZWN0KHBhcnNlZERhdGEubGlnaHRzLCBcImxpZ2h0c1wiLCBnbHRmUnVudGltZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAocGFyc2VkRGF0YS5jYW1lcmFzKSB7XHJcbiAgICAgICAgICAgIHBhcnNlT2JqZWN0KHBhcnNlZERhdGEuY2FtZXJhcywgXCJjYW1lcmFzXCIsIGdsdGZSdW50aW1lKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChwYXJzZWREYXRhLm5vZGVzKSB7XHJcbiAgICAgICAgICAgIHBhcnNlT2JqZWN0KHBhcnNlZERhdGEubm9kZXMsIFwibm9kZXNcIiwgZ2x0ZlJ1bnRpbWUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHBhcnNlZERhdGEuaW1hZ2VzKSB7XHJcbiAgICAgICAgICAgIHBhcnNlT2JqZWN0KHBhcnNlZERhdGEuaW1hZ2VzLCBcImltYWdlc1wiLCBnbHRmUnVudGltZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAocGFyc2VkRGF0YS50ZXh0dXJlcykge1xyXG4gICAgICAgICAgICBwYXJzZU9iamVjdChwYXJzZWREYXRhLnRleHR1cmVzLCBcInRleHR1cmVzXCIsIGdsdGZSdW50aW1lKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChwYXJzZWREYXRhLnNoYWRlcnMpIHtcclxuICAgICAgICAgICAgcGFyc2VTaGFkZXJzKHBhcnNlZERhdGEuc2hhZGVycywgZ2x0ZlJ1bnRpbWUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHBhcnNlZERhdGEucHJvZ3JhbXMpIHtcclxuICAgICAgICAgICAgcGFyc2VPYmplY3QocGFyc2VkRGF0YS5wcm9ncmFtcywgXCJwcm9ncmFtc1wiLCBnbHRmUnVudGltZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAocGFyc2VkRGF0YS5zYW1wbGVycykge1xyXG4gICAgICAgICAgICBwYXJzZU9iamVjdChwYXJzZWREYXRhLnNhbXBsZXJzLCBcInNhbXBsZXJzXCIsIGdsdGZSdW50aW1lKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChwYXJzZWREYXRhLnRlY2huaXF1ZXMpIHtcclxuICAgICAgICAgICAgcGFyc2VPYmplY3QocGFyc2VkRGF0YS50ZWNobmlxdWVzLCBcInRlY2huaXF1ZXNcIiwgZ2x0ZlJ1bnRpbWUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHBhcnNlZERhdGEubWF0ZXJpYWxzKSB7XHJcbiAgICAgICAgICAgIHBhcnNlT2JqZWN0KHBhcnNlZERhdGEubWF0ZXJpYWxzLCBcIm1hdGVyaWFsc1wiLCBnbHRmUnVudGltZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAocGFyc2VkRGF0YS5hbmltYXRpb25zKSB7XHJcbiAgICAgICAgICAgIHBhcnNlT2JqZWN0KHBhcnNlZERhdGEuYW5pbWF0aW9ucywgXCJhbmltYXRpb25zXCIsIGdsdGZSdW50aW1lKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChwYXJzZWREYXRhLnNraW5zKSB7XHJcbiAgICAgICAgICAgIHBhcnNlT2JqZWN0KHBhcnNlZERhdGEuc2tpbnMsIFwic2tpbnNcIiwgZ2x0ZlJ1bnRpbWUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHBhcnNlZERhdGEuc2NlbmVzKSB7XHJcbiAgICAgICAgICAgIGdsdGZSdW50aW1lLnNjZW5lcyA9IHBhcnNlZERhdGEuc2NlbmVzO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHBhcnNlZERhdGEuc2NlbmUgJiYgcGFyc2VkRGF0YS5zY2VuZXMpIHtcclxuICAgICAgICAgICAgZ2x0ZlJ1bnRpbWUuY3VycmVudFNjZW5lID0gcGFyc2VkRGF0YS5zY2VuZXNbcGFyc2VkRGF0YS5zY2VuZV07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gZ2x0ZlJ1bnRpbWU7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBMb2FkQnVmZmVyQXN5bmMoXHJcbiAgICAgICAgZ2x0ZlJ1bnRpbWU6IElHTFRGUnVudGltZSxcclxuICAgICAgICBpZDogc3RyaW5nLFxyXG4gICAgICAgIG9uU3VjY2VzczogKGJ1ZmZlcjogQXJyYXlCdWZmZXJWaWV3KSA9PiB2b2lkLFxyXG4gICAgICAgIG9uRXJyb3I6IChtZXNzYWdlOiBzdHJpbmcpID0+IHZvaWQsXHJcbiAgICAgICAgb25Qcm9ncmVzcz86ICgpID0+IHZvaWRcclxuICAgICk6IHZvaWQge1xyXG4gICAgICAgIGNvbnN0IGJ1ZmZlcjogSUdMVEZCdWZmZXIgPSBnbHRmUnVudGltZS5idWZmZXJzW2lkXTtcclxuXHJcbiAgICAgICAgaWYgKFRvb2xzLklzQmFzZTY0KGJ1ZmZlci51cmkpKSB7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4gb25TdWNjZXNzKG5ldyBVaW50OEFycmF5KFRvb2xzLkRlY29kZUJhc2U2NChidWZmZXIudXJpKSkpKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBUb29scy5Mb2FkRmlsZShcclxuICAgICAgICAgICAgICAgIGdsdGZSdW50aW1lLnJvb3RVcmwgKyBidWZmZXIudXJpLFxyXG4gICAgICAgICAgICAgICAgKGRhdGEpID0+IG9uU3VjY2VzcyhuZXcgVWludDhBcnJheShkYXRhIGFzIEFycmF5QnVmZmVyKSksXHJcbiAgICAgICAgICAgICAgICBvblByb2dyZXNzLFxyXG4gICAgICAgICAgICAgICAgdW5kZWZpbmVkLFxyXG4gICAgICAgICAgICAgICAgdHJ1ZSxcclxuICAgICAgICAgICAgICAgIChyZXF1ZXN0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlcXVlc3QpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25FcnJvcihyZXF1ZXN0LnN0YXR1cyArIFwiIFwiICsgcmVxdWVzdC5zdGF0dXNUZXh0KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgTG9hZFRleHR1cmVCdWZmZXJBc3luYyhnbHRmUnVudGltZTogSUdMVEZSdW50aW1lLCBpZDogc3RyaW5nLCBvblN1Y2Nlc3M6IChidWZmZXI6IE51bGxhYmxlPEFycmF5QnVmZmVyVmlldz4pID0+IHZvaWQsIG9uRXJyb3I6IChtZXNzYWdlOiBzdHJpbmcpID0+IHZvaWQpOiB2b2lkIHtcclxuICAgICAgICBjb25zdCB0ZXh0dXJlOiBJR0xURlRleHR1cmUgPSBnbHRmUnVudGltZS50ZXh0dXJlc1tpZF07XHJcblxyXG4gICAgICAgIGlmICghdGV4dHVyZSB8fCAhdGV4dHVyZS5zb3VyY2UpIHtcclxuICAgICAgICAgICAgb25FcnJvcihcIlwiKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRleHR1cmUuYmFieWxvblRleHR1cmUpIHtcclxuICAgICAgICAgICAgb25TdWNjZXNzKG51bGwpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBzb3VyY2U6IElHTFRGSW1hZ2UgPSBnbHRmUnVudGltZS5pbWFnZXNbdGV4dHVyZS5zb3VyY2VdO1xyXG5cclxuICAgICAgICBpZiAoVG9vbHMuSXNCYXNlNjQoc291cmNlLnVyaSkpIHtcclxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiBvblN1Y2Nlc3MobmV3IFVpbnQ4QXJyYXkoVG9vbHMuRGVjb2RlQmFzZTY0KHNvdXJjZS51cmkpKSkpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIFRvb2xzLkxvYWRGaWxlKFxyXG4gICAgICAgICAgICAgICAgZ2x0ZlJ1bnRpbWUucm9vdFVybCArIHNvdXJjZS51cmksXHJcbiAgICAgICAgICAgICAgICAoZGF0YSkgPT4gb25TdWNjZXNzKG5ldyBVaW50OEFycmF5KGRhdGEgYXMgQXJyYXlCdWZmZXIpKSxcclxuICAgICAgICAgICAgICAgIHVuZGVmaW5lZCxcclxuICAgICAgICAgICAgICAgIHVuZGVmaW5lZCxcclxuICAgICAgICAgICAgICAgIHRydWUsXHJcbiAgICAgICAgICAgICAgICAocmVxdWVzdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXF1ZXN0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uRXJyb3IocmVxdWVzdC5zdGF0dXMgKyBcIiBcIiArIHJlcXVlc3Quc3RhdHVzVGV4dCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIENyZWF0ZVRleHR1cmVBc3luYyhnbHRmUnVudGltZTogSUdMVEZSdW50aW1lLCBpZDogc3RyaW5nLCBidWZmZXI6IE51bGxhYmxlPEFycmF5QnVmZmVyVmlldz4sIG9uU3VjY2VzczogKHRleHR1cmU6IFRleHR1cmUpID0+IHZvaWQpOiB2b2lkIHtcclxuICAgICAgICBjb25zdCB0ZXh0dXJlOiBJR0xURlRleHR1cmUgPSBnbHRmUnVudGltZS50ZXh0dXJlc1tpZF07XHJcblxyXG4gICAgICAgIGlmICh0ZXh0dXJlLmJhYnlsb25UZXh0dXJlKSB7XHJcbiAgICAgICAgICAgIG9uU3VjY2Vzcyh0ZXh0dXJlLmJhYnlsb25UZXh0dXJlKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3Qgc2FtcGxlcjogSUdMVEZTYW1wbGVyID0gZ2x0ZlJ1bnRpbWUuc2FtcGxlcnNbdGV4dHVyZS5zYW1wbGVyXTtcclxuXHJcbiAgICAgICAgY29uc3QgY3JlYXRlTWlwTWFwcyA9XHJcbiAgICAgICAgICAgIHNhbXBsZXIubWluRmlsdGVyID09PSBFVGV4dHVyZUZpbHRlclR5cGUuTkVBUkVTVF9NSVBNQVBfTkVBUkVTVCB8fFxyXG4gICAgICAgICAgICBzYW1wbGVyLm1pbkZpbHRlciA9PT0gRVRleHR1cmVGaWx0ZXJUeXBlLk5FQVJFU1RfTUlQTUFQX0xJTkVBUiB8fFxyXG4gICAgICAgICAgICBzYW1wbGVyLm1pbkZpbHRlciA9PT0gRVRleHR1cmVGaWx0ZXJUeXBlLkxJTkVBUl9NSVBNQVBfTkVBUkVTVCB8fFxyXG4gICAgICAgICAgICBzYW1wbGVyLm1pbkZpbHRlciA9PT0gRVRleHR1cmVGaWx0ZXJUeXBlLkxJTkVBUl9NSVBNQVBfTElORUFSO1xyXG5cclxuICAgICAgICBjb25zdCBzYW1wbGluZ01vZGUgPSBUZXh0dXJlLkJJTElORUFSX1NBTVBMSU5HTU9ERTtcclxuXHJcbiAgICAgICAgY29uc3QgYmxvYiA9IGJ1ZmZlciA9PSBudWxsID8gbmV3IEJsb2IoKSA6IG5ldyBCbG9iKFtidWZmZXJdKTtcclxuICAgICAgICBjb25zdCBibG9iVVJMID0gVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKTtcclxuICAgICAgICBjb25zdCByZXZva2VCbG9iVVJMID0gKCkgPT4gVVJMLnJldm9rZU9iamVjdFVSTChibG9iVVJMKTtcclxuICAgICAgICBjb25zdCBuZXdUZXh0dXJlID0gbmV3IFRleHR1cmUoYmxvYlVSTCwgZ2x0ZlJ1bnRpbWUuc2NlbmUsICFjcmVhdGVNaXBNYXBzLCB0cnVlLCBzYW1wbGluZ01vZGUsIHJldm9rZUJsb2JVUkwsIHJldm9rZUJsb2JVUkwpO1xyXG4gICAgICAgIGlmIChzYW1wbGVyLndyYXBTICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgbmV3VGV4dHVyZS53cmFwVSA9IEdMVEZVdGlscy5HZXRXcmFwTW9kZShzYW1wbGVyLndyYXBTKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHNhbXBsZXIud3JhcFQgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBuZXdUZXh0dXJlLndyYXBWID0gR0xURlV0aWxzLkdldFdyYXBNb2RlKHNhbXBsZXIud3JhcFQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBuZXdUZXh0dXJlLm5hbWUgPSBpZDtcclxuXHJcbiAgICAgICAgdGV4dHVyZS5iYWJ5bG9uVGV4dHVyZSA9IG5ld1RleHR1cmU7XHJcbiAgICAgICAgb25TdWNjZXNzKG5ld1RleHR1cmUpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgTG9hZFNoYWRlclN0cmluZ0FzeW5jKGdsdGZSdW50aW1lOiBJR0xURlJ1bnRpbWUsIGlkOiBzdHJpbmcsIG9uU3VjY2VzczogKHNoYWRlclN0cmluZzogc3RyaW5nIHwgQXJyYXlCdWZmZXIpID0+IHZvaWQsIG9uRXJyb3I/OiAobWVzc2FnZTogc3RyaW5nKSA9PiB2b2lkKTogdm9pZCB7XHJcbiAgICAgICAgY29uc3Qgc2hhZGVyOiBJR0xURlNoYWRlciA9IGdsdGZSdW50aW1lLnNoYWRlcnNbaWRdO1xyXG5cclxuICAgICAgICBpZiAoVG9vbHMuSXNCYXNlNjQoc2hhZGVyLnVyaSkpIHtcclxuICAgICAgICAgICAgY29uc3Qgc2hhZGVyU3RyaW5nID0gYXRvYihzaGFkZXIudXJpLnNwbGl0KFwiLFwiKVsxXSk7XHJcbiAgICAgICAgICAgIGlmIChvblN1Y2Nlc3MpIHtcclxuICAgICAgICAgICAgICAgIG9uU3VjY2VzcyhzaGFkZXJTdHJpbmcpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgVG9vbHMuTG9hZEZpbGUoZ2x0ZlJ1bnRpbWUucm9vdFVybCArIHNoYWRlci51cmksIG9uU3VjY2VzcywgdW5kZWZpbmVkLCB1bmRlZmluZWQsIGZhbHNlLCAocmVxdWVzdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlcXVlc3QgJiYgb25FcnJvcikge1xyXG4gICAgICAgICAgICAgICAgICAgIG9uRXJyb3IocmVxdWVzdC5zdGF0dXMgKyBcIiBcIiArIHJlcXVlc3Quc3RhdHVzVGV4dCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIExvYWRNYXRlcmlhbEFzeW5jKGdsdGZSdW50aW1lOiBJR0xURlJ1bnRpbWUsIGlkOiBzdHJpbmcsIG9uU3VjY2VzczogKG1hdGVyaWFsOiBNYXRlcmlhbCkgPT4gdm9pZCwgb25FcnJvcjogKG1lc3NhZ2U6IHN0cmluZykgPT4gdm9pZCk6IHZvaWQge1xyXG4gICAgICAgIGNvbnN0IG1hdGVyaWFsOiBJR0xURk1hdGVyaWFsID0gZ2x0ZlJ1bnRpbWUubWF0ZXJpYWxzW2lkXTtcclxuICAgICAgICBpZiAoIW1hdGVyaWFsLnRlY2huaXF1ZSkge1xyXG4gICAgICAgICAgICBpZiAob25FcnJvcikge1xyXG4gICAgICAgICAgICAgICAgb25FcnJvcihcIk5vIHRlY2huaXF1ZSBmb3VuZC5cIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgdGVjaG5pcXVlOiBJR0xURlRlY2huaXF1ZSA9IGdsdGZSdW50aW1lLnRlY2huaXF1ZXNbbWF0ZXJpYWwudGVjaG5pcXVlXTtcclxuICAgICAgICBpZiAoIXRlY2huaXF1ZSkge1xyXG4gICAgICAgICAgICBnbHRmUnVudGltZS5zY2VuZS5fYmxvY2tFbnRpdHlDb2xsZWN0aW9uID0gISFnbHRmUnVudGltZS5hc3NldENvbnRhaW5lcjtcclxuICAgICAgICAgICAgY29uc3QgZGVmYXVsdE1hdGVyaWFsID0gbmV3IFN0YW5kYXJkTWF0ZXJpYWwoaWQsIGdsdGZSdW50aW1lLnNjZW5lKTtcclxuICAgICAgICAgICAgZGVmYXVsdE1hdGVyaWFsLl9wYXJlbnRDb250YWluZXIgPSBnbHRmUnVudGltZS5hc3NldENvbnRhaW5lcjtcclxuICAgICAgICAgICAgZ2x0ZlJ1bnRpbWUuc2NlbmUuX2Jsb2NrRW50aXR5Q29sbGVjdGlvbiA9IGZhbHNlO1xyXG4gICAgICAgICAgICBkZWZhdWx0TWF0ZXJpYWwuZGlmZnVzZUNvbG9yID0gbmV3IENvbG9yMygwLjUsIDAuNSwgMC41KTtcclxuICAgICAgICAgICAgZGVmYXVsdE1hdGVyaWFsLnNpZGVPcmllbnRhdGlvbiA9IE1hdGVyaWFsLkNvdW50ZXJDbG9ja1dpc2VTaWRlT3JpZW50YXRpb247XHJcbiAgICAgICAgICAgIG9uU3VjY2VzcyhkZWZhdWx0TWF0ZXJpYWwpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBwcm9ncmFtOiBJR0xURlByb2dyYW0gPSBnbHRmUnVudGltZS5wcm9ncmFtc1t0ZWNobmlxdWUucHJvZ3JhbV07XHJcbiAgICAgICAgY29uc3Qgc3RhdGVzOiBJR0xURlRlY2huaXF1ZVN0YXRlcyA9IHRlY2huaXF1ZS5zdGF0ZXM7XHJcblxyXG4gICAgICAgIGNvbnN0IHZlcnRleFNoYWRlcjogc3RyaW5nID0gRWZmZWN0LlNoYWRlcnNTdG9yZVtwcm9ncmFtLnZlcnRleFNoYWRlciArIFwiVmVydGV4U2hhZGVyXCJdO1xyXG4gICAgICAgIGNvbnN0IHBpeGVsU2hhZGVyOiBzdHJpbmcgPSBFZmZlY3QuU2hhZGVyc1N0b3JlW3Byb2dyYW0uZnJhZ21lbnRTaGFkZXIgKyBcIlBpeGVsU2hhZGVyXCJdO1xyXG4gICAgICAgIGxldCBuZXdWZXJ0ZXhTaGFkZXIgPSBcIlwiO1xyXG4gICAgICAgIGxldCBuZXdQaXhlbFNoYWRlciA9IFwiXCI7XHJcblxyXG4gICAgICAgIGNvbnN0IHZlcnRleFRva2VuaXplciA9IG5ldyBUb2tlbml6ZXIodmVydGV4U2hhZGVyKTtcclxuICAgICAgICBjb25zdCBwaXhlbFRva2VuaXplciA9IG5ldyBUb2tlbml6ZXIocGl4ZWxTaGFkZXIpO1xyXG5cclxuICAgICAgICBjb25zdCB1blRyZWF0ZWRVbmlmb3JtczogeyBba2V5OiBzdHJpbmddOiBJR0xURlRlY2huaXF1ZVBhcmFtZXRlciB9ID0ge307XHJcbiAgICAgICAgY29uc3QgdW5pZm9ybXM6IHN0cmluZ1tdID0gW107XHJcbiAgICAgICAgY29uc3QgYXR0cmlidXRlczogc3RyaW5nW10gPSBbXTtcclxuICAgICAgICBjb25zdCBzYW1wbGVyczogc3RyaW5nW10gPSBbXTtcclxuXHJcbiAgICAgICAgLy8gRmlsbCB1bmlmb3JtLCBzYW1wbGVyMkQgYW5kIGF0dHJpYnV0ZXNcclxuICAgICAgICBmb3IgKGNvbnN0IHVuaWYgaW4gdGVjaG5pcXVlLnVuaWZvcm1zKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHVuaWZvcm0gPSB0ZWNobmlxdWUudW5pZm9ybXNbdW5pZl07XHJcbiAgICAgICAgICAgIGNvbnN0IHVuaWZvcm1QYXJhbWV0ZXI6IElHTFRGVGVjaG5pcXVlUGFyYW1ldGVyID0gdGVjaG5pcXVlLnBhcmFtZXRlcnNbdW5pZm9ybV07XHJcblxyXG4gICAgICAgICAgICB1blRyZWF0ZWRVbmlmb3Jtc1t1bmlmXSA9IHVuaWZvcm1QYXJhbWV0ZXI7XHJcblxyXG4gICAgICAgICAgICBpZiAodW5pZm9ybVBhcmFtZXRlci5zZW1hbnRpYyAmJiAhdW5pZm9ybVBhcmFtZXRlci5ub2RlICYmICF1bmlmb3JtUGFyYW1ldGVyLnNvdXJjZSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdHJhbnNmb3JtSW5kZXggPSBnbFRGVHJhbnNmb3Jtcy5pbmRleE9mKHVuaWZvcm1QYXJhbWV0ZXIuc2VtYW50aWMpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRyYW5zZm9ybUluZGV4ICE9PSAtMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHVuaWZvcm1zLnB1c2goYmFieWxvblRyYW5zZm9ybXNbdHJhbnNmb3JtSW5kZXhdKTtcclxuICAgICAgICAgICAgICAgICAgICBkZWxldGUgdW5UcmVhdGVkVW5pZm9ybXNbdW5pZl07XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHVuaWZvcm1zLnB1c2godW5pZik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodW5pZm9ybVBhcmFtZXRlci50eXBlID09PSBFUGFyYW1ldGVyVHlwZS5TQU1QTEVSXzJEKSB7XHJcbiAgICAgICAgICAgICAgICBzYW1wbGVycy5wdXNoKHVuaWYpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdW5pZm9ybXMucHVzaCh1bmlmKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZm9yIChjb25zdCBhdHRyIGluIHRlY2huaXF1ZS5hdHRyaWJ1dGVzKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGF0dHJpYnV0ZSA9IHRlY2huaXF1ZS5hdHRyaWJ1dGVzW2F0dHJdO1xyXG4gICAgICAgICAgICBjb25zdCBhdHRyaWJ1dGVQYXJhbWV0ZXI6IElHTFRGVGVjaG5pcXVlUGFyYW1ldGVyID0gdGVjaG5pcXVlLnBhcmFtZXRlcnNbYXR0cmlidXRlXTtcclxuXHJcbiAgICAgICAgICAgIGlmIChhdHRyaWJ1dGVQYXJhbWV0ZXIuc2VtYW50aWMpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG5hbWUgPSBnZXRBdHRyaWJ1dGUoYXR0cmlidXRlUGFyYW1ldGVyKTtcclxuICAgICAgICAgICAgICAgIGlmIChuYW1lKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYXR0cmlidXRlcy5wdXNoKG5hbWUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBDb25maWd1cmUgdmVydGV4IHNoYWRlclxyXG4gICAgICAgIHdoaWxlICghdmVydGV4VG9rZW5pemVyLmlzRW5kKCkgJiYgdmVydGV4VG9rZW5pemVyLmdldE5leHRUb2tlbigpKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRva2VuVHlwZSA9IHZlcnRleFRva2VuaXplci5jdXJyZW50VG9rZW47XHJcblxyXG4gICAgICAgICAgICBpZiAodG9rZW5UeXBlICE9PSBFVG9rZW5UeXBlLklERU5USUZJRVIpIHtcclxuICAgICAgICAgICAgICAgIG5ld1ZlcnRleFNoYWRlciArPSB2ZXJ0ZXhUb2tlbml6ZXIuY3VycmVudFN0cmluZztcclxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBsZXQgZm91bmRBdHRyaWJ1dGUgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgICAgIGZvciAoY29uc3QgYXR0ciBpbiB0ZWNobmlxdWUuYXR0cmlidXRlcykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgYXR0cmlidXRlID0gdGVjaG5pcXVlLmF0dHJpYnV0ZXNbYXR0cl07XHJcbiAgICAgICAgICAgICAgICBjb25zdCBhdHRyaWJ1dGVQYXJhbWV0ZXI6IElHTFRGVGVjaG5pcXVlUGFyYW1ldGVyID0gdGVjaG5pcXVlLnBhcmFtZXRlcnNbYXR0cmlidXRlXTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAodmVydGV4VG9rZW5pemVyLmN1cnJlbnRJZGVudGlmaWVyID09PSBhdHRyICYmIGF0dHJpYnV0ZVBhcmFtZXRlci5zZW1hbnRpYykge1xyXG4gICAgICAgICAgICAgICAgICAgIG5ld1ZlcnRleFNoYWRlciArPSBnZXRBdHRyaWJ1dGUoYXR0cmlidXRlUGFyYW1ldGVyKTtcclxuICAgICAgICAgICAgICAgICAgICBmb3VuZEF0dHJpYnV0ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChmb3VuZEF0dHJpYnV0ZSkge1xyXG4gICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIG5ld1ZlcnRleFNoYWRlciArPSBwYXJzZVNoYWRlclVuaWZvcm1zKHZlcnRleFRva2VuaXplciwgdGVjaG5pcXVlLCB1blRyZWF0ZWRVbmlmb3Jtcyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBDb25maWd1cmUgcGl4ZWwgc2hhZGVyXHJcbiAgICAgICAgd2hpbGUgKCFwaXhlbFRva2VuaXplci5pc0VuZCgpICYmIHBpeGVsVG9rZW5pemVyLmdldE5leHRUb2tlbigpKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRva2VuVHlwZSA9IHBpeGVsVG9rZW5pemVyLmN1cnJlbnRUb2tlbjtcclxuXHJcbiAgICAgICAgICAgIGlmICh0b2tlblR5cGUgIT09IEVUb2tlblR5cGUuSURFTlRJRklFUikge1xyXG4gICAgICAgICAgICAgICAgbmV3UGl4ZWxTaGFkZXIgKz0gcGl4ZWxUb2tlbml6ZXIuY3VycmVudFN0cmluZztcclxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBuZXdQaXhlbFNoYWRlciArPSBwYXJzZVNoYWRlclVuaWZvcm1zKHBpeGVsVG9rZW5pemVyLCB0ZWNobmlxdWUsIHVuVHJlYXRlZFVuaWZvcm1zKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIENyZWF0ZSBzaGFkZXIgbWF0ZXJpYWxcclxuICAgICAgICBjb25zdCBzaGFkZXJQYXRoID0ge1xyXG4gICAgICAgICAgICB2ZXJ0ZXg6IHByb2dyYW0udmVydGV4U2hhZGVyICsgaWQsXHJcbiAgICAgICAgICAgIGZyYWdtZW50OiBwcm9ncmFtLmZyYWdtZW50U2hhZGVyICsgaWQsXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHtcclxuICAgICAgICAgICAgYXR0cmlidXRlczogYXR0cmlidXRlcyxcclxuICAgICAgICAgICAgdW5pZm9ybXM6IHVuaWZvcm1zLFxyXG4gICAgICAgICAgICBzYW1wbGVyczogc2FtcGxlcnMsXHJcbiAgICAgICAgICAgIG5lZWRBbHBoYUJsZW5kaW5nOiBzdGF0ZXMgJiYgc3RhdGVzLmVuYWJsZSAmJiBzdGF0ZXMuZW5hYmxlLmluZGV4T2YoMzA0MikgIT09IC0xLFxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIEVmZmVjdC5TaGFkZXJzU3RvcmVbcHJvZ3JhbS52ZXJ0ZXhTaGFkZXIgKyBpZCArIFwiVmVydGV4U2hhZGVyXCJdID0gbmV3VmVydGV4U2hhZGVyO1xyXG4gICAgICAgIEVmZmVjdC5TaGFkZXJzU3RvcmVbcHJvZ3JhbS5mcmFnbWVudFNoYWRlciArIGlkICsgXCJQaXhlbFNoYWRlclwiXSA9IG5ld1BpeGVsU2hhZGVyO1xyXG5cclxuICAgICAgICBjb25zdCBzaGFkZXJNYXRlcmlhbCA9IG5ldyBTaGFkZXJNYXRlcmlhbChpZCwgZ2x0ZlJ1bnRpbWUuc2NlbmUsIHNoYWRlclBhdGgsIG9wdGlvbnMpO1xyXG4gICAgICAgIHNoYWRlck1hdGVyaWFsLm9uRXJyb3IgPSBvblNoYWRlckNvbXBpbGVFcnJvcihwcm9ncmFtLCBzaGFkZXJNYXRlcmlhbCwgb25FcnJvcik7XHJcbiAgICAgICAgc2hhZGVyTWF0ZXJpYWwub25Db21waWxlZCA9IG9uU2hhZGVyQ29tcGlsZVN1Y2Nlc3MoZ2x0ZlJ1bnRpbWUsIHNoYWRlck1hdGVyaWFsLCB0ZWNobmlxdWUsIG1hdGVyaWFsLCB1blRyZWF0ZWRVbmlmb3Jtcywgb25TdWNjZXNzKTtcclxuICAgICAgICBzaGFkZXJNYXRlcmlhbC5zaWRlT3JpZW50YXRpb24gPSBNYXRlcmlhbC5Db3VudGVyQ2xvY2tXaXNlU2lkZU9yaWVudGF0aW9uO1xyXG5cclxuICAgICAgICBpZiAoc3RhdGVzICYmIHN0YXRlcy5mdW5jdGlvbnMpIHtcclxuICAgICAgICAgICAgY29uc3QgZnVuY3Rpb25zID0gc3RhdGVzLmZ1bmN0aW9ucztcclxuICAgICAgICAgICAgaWYgKGZ1bmN0aW9ucy5jdWxsRmFjZSAmJiBmdW5jdGlvbnMuY3VsbEZhY2VbMF0gIT09IEVDdWxsaW5nVHlwZS5CQUNLKSB7XHJcbiAgICAgICAgICAgICAgICBzaGFkZXJNYXRlcmlhbC5iYWNrRmFjZUN1bGxpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY29uc3QgYmxlbmRGdW5jID0gZnVuY3Rpb25zLmJsZW5kRnVuY1NlcGFyYXRlO1xyXG4gICAgICAgICAgICBpZiAoYmxlbmRGdW5jKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICAgICAgYmxlbmRGdW5jWzBdID09PSBFQmxlbmRpbmdGdW5jdGlvbi5TUkNfQUxQSEEgJiZcclxuICAgICAgICAgICAgICAgICAgICBibGVuZEZ1bmNbMV0gPT09IEVCbGVuZGluZ0Z1bmN0aW9uLk9ORV9NSU5VU19TUkNfQUxQSEEgJiZcclxuICAgICAgICAgICAgICAgICAgICBibGVuZEZ1bmNbMl0gPT09IEVCbGVuZGluZ0Z1bmN0aW9uLk9ORSAmJlxyXG4gICAgICAgICAgICAgICAgICAgIGJsZW5kRnVuY1szXSA9PT0gRUJsZW5kaW5nRnVuY3Rpb24uT05FXHJcbiAgICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgICAgICBzaGFkZXJNYXRlcmlhbC5hbHBoYU1vZGUgPSBDb25zdGFudHMuQUxQSEFfQ09NQklORTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoXHJcbiAgICAgICAgICAgICAgICAgICAgYmxlbmRGdW5jWzBdID09PSBFQmxlbmRpbmdGdW5jdGlvbi5PTkUgJiZcclxuICAgICAgICAgICAgICAgICAgICBibGVuZEZ1bmNbMV0gPT09IEVCbGVuZGluZ0Z1bmN0aW9uLk9ORSAmJlxyXG4gICAgICAgICAgICAgICAgICAgIGJsZW5kRnVuY1syXSA9PT0gRUJsZW5kaW5nRnVuY3Rpb24uWkVSTyAmJlxyXG4gICAgICAgICAgICAgICAgICAgIGJsZW5kRnVuY1szXSA9PT0gRUJsZW5kaW5nRnVuY3Rpb24uT05FXHJcbiAgICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgICAgICBzaGFkZXJNYXRlcmlhbC5hbHBoYU1vZGUgPSBDb25zdGFudHMuQUxQSEFfT05FT05FO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChcclxuICAgICAgICAgICAgICAgICAgICBibGVuZEZ1bmNbMF0gPT09IEVCbGVuZGluZ0Z1bmN0aW9uLlNSQ19BTFBIQSAmJlxyXG4gICAgICAgICAgICAgICAgICAgIGJsZW5kRnVuY1sxXSA9PT0gRUJsZW5kaW5nRnVuY3Rpb24uT05FICYmXHJcbiAgICAgICAgICAgICAgICAgICAgYmxlbmRGdW5jWzJdID09PSBFQmxlbmRpbmdGdW5jdGlvbi5aRVJPICYmXHJcbiAgICAgICAgICAgICAgICAgICAgYmxlbmRGdW5jWzNdID09PSBFQmxlbmRpbmdGdW5jdGlvbi5PTkVcclxuICAgICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNoYWRlck1hdGVyaWFsLmFscGhhTW9kZSA9IENvbnN0YW50cy5BTFBIQV9BREQ7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKFxyXG4gICAgICAgICAgICAgICAgICAgIGJsZW5kRnVuY1swXSA9PT0gRUJsZW5kaW5nRnVuY3Rpb24uWkVSTyAmJlxyXG4gICAgICAgICAgICAgICAgICAgIGJsZW5kRnVuY1sxXSA9PT0gRUJsZW5kaW5nRnVuY3Rpb24uT05FX01JTlVTX1NSQ19DT0xPUiAmJlxyXG4gICAgICAgICAgICAgICAgICAgIGJsZW5kRnVuY1syXSA9PT0gRUJsZW5kaW5nRnVuY3Rpb24uT05FICYmXHJcbiAgICAgICAgICAgICAgICAgICAgYmxlbmRGdW5jWzNdID09PSBFQmxlbmRpbmdGdW5jdGlvbi5PTkVcclxuICAgICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNoYWRlck1hdGVyaWFsLmFscGhhTW9kZSA9IENvbnN0YW50cy5BTFBIQV9TVUJUUkFDVDtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoXHJcbiAgICAgICAgICAgICAgICAgICAgYmxlbmRGdW5jWzBdID09PSBFQmxlbmRpbmdGdW5jdGlvbi5EU1RfQ09MT1IgJiZcclxuICAgICAgICAgICAgICAgICAgICBibGVuZEZ1bmNbMV0gPT09IEVCbGVuZGluZ0Z1bmN0aW9uLlpFUk8gJiZcclxuICAgICAgICAgICAgICAgICAgICBibGVuZEZ1bmNbMl0gPT09IEVCbGVuZGluZ0Z1bmN0aW9uLk9ORSAmJlxyXG4gICAgICAgICAgICAgICAgICAgIGJsZW5kRnVuY1szXSA9PT0gRUJsZW5kaW5nRnVuY3Rpb24uT05FXHJcbiAgICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgICAgICBzaGFkZXJNYXRlcmlhbC5hbHBoYU1vZGUgPSBDb25zdGFudHMuQUxQSEFfTVVMVElQTFk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKFxyXG4gICAgICAgICAgICAgICAgICAgIGJsZW5kRnVuY1swXSA9PT0gRUJsZW5kaW5nRnVuY3Rpb24uU1JDX0FMUEhBICYmXHJcbiAgICAgICAgICAgICAgICAgICAgYmxlbmRGdW5jWzFdID09PSBFQmxlbmRpbmdGdW5jdGlvbi5PTkVfTUlOVVNfU1JDX0NPTE9SICYmXHJcbiAgICAgICAgICAgICAgICAgICAgYmxlbmRGdW5jWzJdID09PSBFQmxlbmRpbmdGdW5jdGlvbi5PTkUgJiZcclxuICAgICAgICAgICAgICAgICAgICBibGVuZEZ1bmNbM10gPT09IEVCbGVuZGluZ0Z1bmN0aW9uLk9ORVxyXG4gICAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2hhZGVyTWF0ZXJpYWwuYWxwaGFNb2RlID0gQ29uc3RhbnRzLkFMUEhBX01BWElNSVpFRDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIGdsVEYgVjEgTG9hZGVyXHJcbiAqIEBpbnRlcm5hbFxyXG4gKiBAZGVwcmVjYXRlZFxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIEdMVEZMb2FkZXIgaW1wbGVtZW50cyBJR0xURkxvYWRlciB7XHJcbiAgICBwdWJsaWMgc3RhdGljIEV4dGVuc2lvbnM6IHsgW25hbWU6IHN0cmluZ106IEdMVEZMb2FkZXJFeHRlbnNpb24gfSA9IHt9O1xyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgUmVnaXN0ZXJFeHRlbnNpb24oZXh0ZW5zaW9uOiBHTFRGTG9hZGVyRXh0ZW5zaW9uKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKEdMVEZMb2FkZXIuRXh0ZW5zaW9uc1tleHRlbnNpb24ubmFtZV0pIHtcclxuICAgICAgICAgICAgVG9vbHMuRXJyb3IoJ1Rvb2wgd2l0aCB0aGUgc2FtZSBuYW1lIFwiJyArIGV4dGVuc2lvbi5uYW1lICsgJ1wiIGFscmVhZHkgZXhpc3RzJyk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIEdMVEZMb2FkZXIuRXh0ZW5zaW9uc1tleHRlbnNpb24ubmFtZV0gPSBleHRlbnNpb247XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGRpc3Bvc2UoKTogdm9pZCB7XHJcbiAgICAgICAgLy8gZG8gbm90aGluZ1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2ltcG9ydE1lc2hBc3luYyhcclxuICAgICAgICBtZXNoZXNOYW1lczogYW55LFxyXG4gICAgICAgIHNjZW5lOiBTY2VuZSxcclxuICAgICAgICBkYXRhOiBJR0xURkxvYWRlckRhdGEsXHJcbiAgICAgICAgcm9vdFVybDogc3RyaW5nLFxyXG4gICAgICAgIGFzc2V0Q29udGFpbmVyOiBOdWxsYWJsZTxBc3NldENvbnRhaW5lcj4sXHJcbiAgICAgICAgb25TdWNjZXNzOiAobWVzaGVzOiBBYnN0cmFjdE1lc2hbXSwgc2tlbGV0b25zOiBTa2VsZXRvbltdKSA9PiB2b2lkLFxyXG4gICAgICAgIG9uUHJvZ3Jlc3M/OiAoZXZlbnQ6IElTY2VuZUxvYWRlclByb2dyZXNzRXZlbnQpID0+IHZvaWQsXHJcbiAgICAgICAgb25FcnJvcj86IChtZXNzYWdlOiBzdHJpbmcpID0+IHZvaWRcclxuICAgICk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHNjZW5lLnVzZVJpZ2h0SGFuZGVkU3lzdGVtID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgR0xURkxvYWRlckV4dGVuc2lvbi5Mb2FkUnVudGltZUFzeW5jKFxyXG4gICAgICAgICAgICBzY2VuZSxcclxuICAgICAgICAgICAgZGF0YSxcclxuICAgICAgICAgICAgcm9vdFVybCxcclxuICAgICAgICAgICAgKGdsdGZSdW50aW1lKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBnbHRmUnVudGltZS5hc3NldENvbnRhaW5lciA9IGFzc2V0Q29udGFpbmVyO1xyXG4gICAgICAgICAgICAgICAgZ2x0ZlJ1bnRpbWUuaW1wb3J0T25seU1lc2hlcyA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKG1lc2hlc05hbWVzID09PSBcIlwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZ2x0ZlJ1bnRpbWUuaW1wb3J0TWVzaGVzTmFtZXMgPSBbXTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIG1lc2hlc05hbWVzID09PSBcInN0cmluZ1wiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZ2x0ZlJ1bnRpbWUuaW1wb3J0TWVzaGVzTmFtZXMgPSBbbWVzaGVzTmFtZXNdO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChtZXNoZXNOYW1lcyAmJiAhKG1lc2hlc05hbWVzIGluc3RhbmNlb2YgQXJyYXkpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZ2x0ZlJ1bnRpbWUuaW1wb3J0TWVzaGVzTmFtZXMgPSBbbWVzaGVzTmFtZXNdO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBnbHRmUnVudGltZS5pbXBvcnRNZXNoZXNOYW1lcyA9IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgIFRvb2xzLldhcm4oXCJBcmd1bWVudCBtZXNoZXNOYW1lcyBtdXN0IGJlIG9mIHR5cGUgc3RyaW5nIG9yIHN0cmluZ1tdXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC8vIENyZWF0ZSBub2Rlc1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fY3JlYXRlTm9kZXMoZ2x0ZlJ1bnRpbWUpO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IG1lc2hlczogQWJzdHJhY3RNZXNoW10gPSBbXTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHNrZWxldG9uczogU2tlbGV0b25bXSA9IFtdO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIEZpbGwgYXJyYXlzIG9mIG1lc2hlcyBhbmQgc2tlbGV0b25zXHJcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IG5kZSBpbiBnbHRmUnVudGltZS5ub2Rlcykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG5vZGU6IElHTFRGTm9kZSA9IGdsdGZSdW50aW1lLm5vZGVzW25kZV07XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChub2RlLmJhYnlsb25Ob2RlIGluc3RhbmNlb2YgQWJzdHJhY3RNZXNoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc2hlcy5wdXNoKDxBYnN0cmFjdE1lc2g+bm9kZS5iYWJ5bG9uTm9kZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGZvciAoY29uc3Qgc2tsIGluIGdsdGZSdW50aW1lLnNraW5zKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2tpbjogSUdMVEZTa2lucyA9IGdsdGZSdW50aW1lLnNraW5zW3NrbF07XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChza2luLmJhYnlsb25Ta2VsZXRvbiBpbnN0YW5jZW9mIFNrZWxldG9uKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNrZWxldG9ucy5wdXNoKHNraW4uYmFieWxvblNrZWxldG9uKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gTG9hZCBidWZmZXJzLCBzaGFkZXJzLCBtYXRlcmlhbHMsIGV0Yy5cclxuICAgICAgICAgICAgICAgIHRoaXMuX2xvYWRCdWZmZXJzQXN5bmMoZ2x0ZlJ1bnRpbWUsICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9sb2FkU2hhZGVyc0FzeW5jKGdsdGZSdW50aW1lLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGltcG9ydE1hdGVyaWFscyhnbHRmUnVudGltZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc3RMb2FkKGdsdGZSdW50aW1lKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghR0xURkZpbGVMb2FkZXIuSW5jcmVtZW50YWxMb2FkaW5nICYmIG9uU3VjY2Vzcykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25TdWNjZXNzKG1lc2hlcywgc2tlbGV0b25zKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKEdMVEZGaWxlTG9hZGVyLkluY3JlbWVudGFsTG9hZGluZyAmJiBvblN1Y2Nlc3MpIHtcclxuICAgICAgICAgICAgICAgICAgICBvblN1Y2Nlc3MobWVzaGVzLCBza2VsZXRvbnMpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBvbkVycm9yXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBJbXBvcnRzIG9uZSBvciBtb3JlIG1lc2hlcyBmcm9tIGEgbG9hZGVkIGdsdGYgZmlsZSBhbmQgYWRkcyB0aGVtIHRvIHRoZSBzY2VuZVxyXG4gICAgICogQHBhcmFtIG1lc2hlc05hbWVzIGEgc3RyaW5nIG9yIGFycmF5IG9mIHN0cmluZ3Mgb2YgdGhlIG1lc2ggbmFtZXMgdGhhdCBzaG91bGQgYmUgbG9hZGVkIGZyb20gdGhlIGZpbGVcclxuICAgICAqIEBwYXJhbSBzY2VuZSB0aGUgc2NlbmUgdGhlIG1lc2hlcyBzaG91bGQgYmUgYWRkZWQgdG9cclxuICAgICAqIEBwYXJhbSBhc3NldENvbnRhaW5lciBkZWZpbmVzIHRoZSBhc3NldCBjb250YWluZXIgdG8gdXNlIChjYW4gYmUgbnVsbClcclxuICAgICAqIEBwYXJhbSBkYXRhIGdsdGYgZGF0YSBjb250YWluaW5nIGluZm9ybWF0aW9uIG9mIHRoZSBtZXNoZXMgaW4gYSBsb2FkZWQgZmlsZVxyXG4gICAgICogQHBhcmFtIHJvb3RVcmwgcm9vdCB1cmwgdG8gbG9hZCBmcm9tXHJcbiAgICAgKiBAcGFyYW0gb25Qcm9ncmVzcyBldmVudCB0aGF0IGZpcmVzIHdoZW4gbG9hZGluZyBwcm9ncmVzcyBoYXMgb2NjdXJlZFxyXG4gICAgICogQHJldHVybnMgYSBwcm9taXNlIGNvbnRhaW5nIHRoZSBsb2FkZWQgbWVzaGVzLCBwYXJ0aWNsZXMsIHNrZWxldG9ucyBhbmQgYW5pbWF0aW9uc1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgaW1wb3J0TWVzaEFzeW5jKFxyXG4gICAgICAgIG1lc2hlc05hbWVzOiBhbnksXHJcbiAgICAgICAgc2NlbmU6IFNjZW5lLFxyXG4gICAgICAgIGFzc2V0Q29udGFpbmVyOiBOdWxsYWJsZTxBc3NldENvbnRhaW5lcj4sXHJcbiAgICAgICAgZGF0YTogSUdMVEZMb2FkZXJEYXRhLFxyXG4gICAgICAgIHJvb3RVcmw6IHN0cmluZyxcclxuICAgICAgICBvblByb2dyZXNzPzogKGV2ZW50OiBJU2NlbmVMb2FkZXJQcm9ncmVzc0V2ZW50KSA9PiB2b2lkXHJcbiAgICApOiBQcm9taXNlPElTY2VuZUxvYWRlckFzeW5jUmVzdWx0PiB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5faW1wb3J0TWVzaEFzeW5jKFxyXG4gICAgICAgICAgICAgICAgbWVzaGVzTmFtZXMsXHJcbiAgICAgICAgICAgICAgICBzY2VuZSxcclxuICAgICAgICAgICAgICAgIGRhdGEsXHJcbiAgICAgICAgICAgICAgICByb290VXJsLFxyXG4gICAgICAgICAgICAgICAgYXNzZXRDb250YWluZXIsXHJcbiAgICAgICAgICAgICAgICAobWVzaGVzLCBza2VsZXRvbnMpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzaGVzOiBtZXNoZXMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcnRpY2xlU3lzdGVtczogW10sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNrZWxldG9uczogc2tlbGV0b25zLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRpb25Hcm91cHM6IFtdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsaWdodHM6IFtdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm1Ob2RlczogW10sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGdlb21ldHJpZXM6IFtdLFxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIG9uUHJvZ3Jlc3MsXHJcbiAgICAgICAgICAgICAgICAobWVzc2FnZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChuZXcgRXJyb3IobWVzc2FnZSkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2xvYWRBc3luYyhcclxuICAgICAgICBzY2VuZTogU2NlbmUsXHJcbiAgICAgICAgZGF0YTogSUdMVEZMb2FkZXJEYXRhLFxyXG4gICAgICAgIHJvb3RVcmw6IHN0cmluZyxcclxuICAgICAgICBvblN1Y2Nlc3M6ICgpID0+IHZvaWQsXHJcbiAgICAgICAgb25Qcm9ncmVzcz86IChldmVudDogSVNjZW5lTG9hZGVyUHJvZ3Jlc3NFdmVudCkgPT4gdm9pZCxcclxuICAgICAgICBvbkVycm9yPzogKG1lc3NhZ2U6IHN0cmluZykgPT4gdm9pZFxyXG4gICAgKTogdm9pZCB7XHJcbiAgICAgICAgc2NlbmUudXNlUmlnaHRIYW5kZWRTeXN0ZW0gPSB0cnVlO1xyXG5cclxuICAgICAgICBHTFRGTG9hZGVyRXh0ZW5zaW9uLkxvYWRSdW50aW1lQXN5bmMoXHJcbiAgICAgICAgICAgIHNjZW5lLFxyXG4gICAgICAgICAgICBkYXRhLFxyXG4gICAgICAgICAgICByb290VXJsLFxyXG4gICAgICAgICAgICAoZ2x0ZlJ1bnRpbWUpID0+IHtcclxuICAgICAgICAgICAgICAgIC8vIExvYWQgcnVudGltZSBleHRlbnNpb3NcclxuICAgICAgICAgICAgICAgIEdMVEZMb2FkZXJFeHRlbnNpb24uTG9hZFJ1bnRpbWVFeHRlbnNpb25zQXN5bmMoXHJcbiAgICAgICAgICAgICAgICAgICAgZ2x0ZlJ1bnRpbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBDcmVhdGUgbm9kZXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fY3JlYXRlTm9kZXMoZ2x0ZlJ1bnRpbWUpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gTG9hZCBidWZmZXJzLCBzaGFkZXJzLCBtYXRlcmlhbHMsIGV0Yy5cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fbG9hZEJ1ZmZlcnNBc3luYyhnbHRmUnVudGltZSwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fbG9hZFNoYWRlcnNBc3luYyhnbHRmUnVudGltZSwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltcG9ydE1hdGVyaWFscyhnbHRmUnVudGltZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zdExvYWQoZ2x0ZlJ1bnRpbWUpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIUdMVEZGaWxlTG9hZGVyLkluY3JlbWVudGFsTG9hZGluZykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvblN1Y2Nlc3MoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoR0xURkZpbGVMb2FkZXIuSW5jcmVtZW50YWxMb2FkaW5nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvblN1Y2Nlc3MoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgb25FcnJvclxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgb25FcnJvclxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBJbXBvcnRzIGFsbCBvYmplY3RzIGZyb20gYSBsb2FkZWQgZ2x0ZiBmaWxlIGFuZCBhZGRzIHRoZW0gdG8gdGhlIHNjZW5lXHJcbiAgICAgKiBAcGFyYW0gc2NlbmUgdGhlIHNjZW5lIHRoZSBvYmplY3RzIHNob3VsZCBiZSBhZGRlZCB0b1xyXG4gICAgICogQHBhcmFtIGRhdGEgZ2x0ZiBkYXRhIGNvbnRhaW5pbmcgaW5mb3JtYXRpb24gb2YgdGhlIG1lc2hlcyBpbiBhIGxvYWRlZCBmaWxlXHJcbiAgICAgKiBAcGFyYW0gcm9vdFVybCByb290IHVybCB0byBsb2FkIGZyb21cclxuICAgICAqIEBwYXJhbSBvblByb2dyZXNzIGV2ZW50IHRoYXQgZmlyZXMgd2hlbiBsb2FkaW5nIHByb2dyZXNzIGhhcyBvY2N1cmVkXHJcbiAgICAgKiBAcmV0dXJucyBhIHByb21pc2Ugd2hpY2ggY29tcGxldGVzIHdoZW4gb2JqZWN0cyBoYXZlIGJlZW4gbG9hZGVkIHRvIHRoZSBzY2VuZVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgbG9hZEFzeW5jKHNjZW5lOiBTY2VuZSwgZGF0YTogSUdMVEZMb2FkZXJEYXRhLCByb290VXJsOiBzdHJpbmcsIG9uUHJvZ3Jlc3M/OiAoZXZlbnQ6IElTY2VuZUxvYWRlclByb2dyZXNzRXZlbnQpID0+IHZvaWQpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLl9sb2FkQXN5bmMoXHJcbiAgICAgICAgICAgICAgICBzY2VuZSxcclxuICAgICAgICAgICAgICAgIGRhdGEsXHJcbiAgICAgICAgICAgICAgICByb290VXJsLFxyXG4gICAgICAgICAgICAgICAgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBvblByb2dyZXNzLFxyXG4gICAgICAgICAgICAgICAgKG1lc3NhZ2UpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZWplY3QobmV3IEVycm9yKG1lc3NhZ2UpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9sb2FkU2hhZGVyc0FzeW5jKGdsdGZSdW50aW1lOiBJR0xURlJ1bnRpbWUsIG9ubG9hZDogKCkgPT4gdm9pZCk6IHZvaWQge1xyXG4gICAgICAgIGxldCBoYXNTaGFkZXJzID0gZmFsc2U7XHJcblxyXG4gICAgICAgIGNvbnN0IHByb2Nlc3NTaGFkZXIgPSAoc2hhOiBzdHJpbmcsIHNoYWRlcjogSUdMVEZTaGFkZXIpID0+IHtcclxuICAgICAgICAgICAgR0xURkxvYWRlckV4dGVuc2lvbi5Mb2FkU2hhZGVyU3RyaW5nQXN5bmMoXHJcbiAgICAgICAgICAgICAgICBnbHRmUnVudGltZSxcclxuICAgICAgICAgICAgICAgIHNoYSxcclxuICAgICAgICAgICAgICAgIChzaGFkZXJTdHJpbmcpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoc2hhZGVyU3RyaW5nIGluc3RhbmNlb2YgQXJyYXlCdWZmZXIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgZ2x0ZlJ1bnRpbWUubG9hZGVkU2hhZGVyQ291bnQrKztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNoYWRlclN0cmluZykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBFZmZlY3QuU2hhZGVyc1N0b3JlW3NoYSArIChzaGFkZXIudHlwZSA9PT0gRVNoYWRlclR5cGUuVkVSVEVYID8gXCJWZXJ0ZXhTaGFkZXJcIiA6IFwiUGl4ZWxTaGFkZXJcIildID0gc2hhZGVyU3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGdsdGZSdW50aW1lLmxvYWRlZFNoYWRlckNvdW50ID09PSBnbHRmUnVudGltZS5zaGFkZXJzY291bnQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25sb2FkKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBUb29scy5FcnJvcihcIkVycm9yIHdoZW4gbG9hZGluZyBzaGFkZXIgcHJvZ3JhbSBuYW1lZCBcIiArIHNoYSArIFwiIGxvY2F0ZWQgYXQgXCIgKyBzaGFkZXIudXJpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBmb3IgKGNvbnN0IHNoYSBpbiBnbHRmUnVudGltZS5zaGFkZXJzKSB7XHJcbiAgICAgICAgICAgIGhhc1NoYWRlcnMgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgY29uc3Qgc2hhZGVyOiBJR0xURlNoYWRlciA9IGdsdGZSdW50aW1lLnNoYWRlcnNbc2hhXTtcclxuICAgICAgICAgICAgaWYgKHNoYWRlcikge1xyXG4gICAgICAgICAgICAgICAgcHJvY2Vzc1NoYWRlci5iaW5kKHRoaXMsIHNoYSwgc2hhZGVyKSgpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgVG9vbHMuRXJyb3IoXCJObyBzaGFkZXIgbmFtZWQ6IFwiICsgc2hhKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCFoYXNTaGFkZXJzKSB7XHJcbiAgICAgICAgICAgIG9ubG9hZCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9sb2FkQnVmZmVyc0FzeW5jKGdsdGZSdW50aW1lOiBJR0xURlJ1bnRpbWUsIG9uTG9hZDogKCkgPT4gdm9pZCk6IHZvaWQge1xyXG4gICAgICAgIGxldCBoYXNCdWZmZXJzID0gZmFsc2U7XHJcblxyXG4gICAgICAgIGNvbnN0IHByb2Nlc3NCdWZmZXIgPSAoYnVmOiBzdHJpbmcsIGJ1ZmZlcjogSUdMVEZCdWZmZXIpID0+IHtcclxuICAgICAgICAgICAgR0xURkxvYWRlckV4dGVuc2lvbi5Mb2FkQnVmZmVyQXN5bmMoXHJcbiAgICAgICAgICAgICAgICBnbHRmUnVudGltZSxcclxuICAgICAgICAgICAgICAgIGJ1ZixcclxuICAgICAgICAgICAgICAgIChidWZmZXJWaWV3KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZ2x0ZlJ1bnRpbWUubG9hZGVkQnVmZmVyQ291bnQrKztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGJ1ZmZlclZpZXcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGJ1ZmZlclZpZXcuYnl0ZUxlbmd0aCAhPSBnbHRmUnVudGltZS5idWZmZXJzW2J1Zl0uYnl0ZUxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgVG9vbHMuRXJyb3IoXCJCdWZmZXIgbmFtZWQgXCIgKyBidWYgKyBcIiBpcyBsZW5ndGggXCIgKyBidWZmZXJWaWV3LmJ5dGVMZW5ndGggKyBcIi4gRXhwZWN0ZWQ6IFwiICsgYnVmZmVyLmJ5dGVMZW5ndGgpOyAvLyBJbXByb3ZlIGVycm9yIG1lc3NhZ2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgZ2x0ZlJ1bnRpbWUubG9hZGVkQnVmZmVyVmlld3NbYnVmXSA9IGJ1ZmZlclZpZXc7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoZ2x0ZlJ1bnRpbWUubG9hZGVkQnVmZmVyQ291bnQgPT09IGdsdGZSdW50aW1lLmJ1ZmZlcnNDb3VudCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkxvYWQoKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIFRvb2xzLkVycm9yKFwiRXJyb3Igd2hlbiBsb2FkaW5nIGJ1ZmZlciBuYW1lZCBcIiArIGJ1ZiArIFwiIGxvY2F0ZWQgYXQgXCIgKyBidWZmZXIudXJpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBmb3IgKGNvbnN0IGJ1ZiBpbiBnbHRmUnVudGltZS5idWZmZXJzKSB7XHJcbiAgICAgICAgICAgIGhhc0J1ZmZlcnMgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgYnVmZmVyOiBJR0xURkJ1ZmZlciA9IGdsdGZSdW50aW1lLmJ1ZmZlcnNbYnVmXTtcclxuICAgICAgICAgICAgaWYgKGJ1ZmZlcikge1xyXG4gICAgICAgICAgICAgICAgcHJvY2Vzc0J1ZmZlci5iaW5kKHRoaXMsIGJ1ZiwgYnVmZmVyKSgpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgVG9vbHMuRXJyb3IoXCJObyBidWZmZXIgbmFtZWQ6IFwiICsgYnVmKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCFoYXNCdWZmZXJzKSB7XHJcbiAgICAgICAgICAgIG9uTG9hZCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9jcmVhdGVOb2RlcyhnbHRmUnVudGltZTogSUdMVEZSdW50aW1lKTogdm9pZCB7XHJcbiAgICAgICAgbGV0IGN1cnJlbnRTY2VuZSA9IDxJR0xURlNjZW5lPmdsdGZSdW50aW1lLmN1cnJlbnRTY2VuZTtcclxuXHJcbiAgICAgICAgaWYgKGN1cnJlbnRTY2VuZSkge1xyXG4gICAgICAgICAgICAvLyBPbmx5IG9uZSBzY2VuZSBldmVuIGlmIG11bHRpcGxlIHNjZW5lcyBhcmUgZGVmaW5lZFxyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGN1cnJlbnRTY2VuZS5ub2Rlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgdHJhdmVyc2VOb2RlcyhnbHRmUnVudGltZSwgY3VycmVudFNjZW5lLm5vZGVzW2ldLCBudWxsKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIC8vIExvYWQgYWxsIHNjZW5lc1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IHRoaW5nIGluIGdsdGZSdW50aW1lLnNjZW5lcykge1xyXG4gICAgICAgICAgICAgICAgY3VycmVudFNjZW5lID0gPElHTFRGU2NlbmU+Z2x0ZlJ1bnRpbWUuc2NlbmVzW3RoaW5nXTtcclxuXHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGN1cnJlbnRTY2VuZS5ub2Rlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYXZlcnNlTm9kZXMoZ2x0ZlJ1bnRpbWUsIGN1cnJlbnRTY2VuZS5ub2Rlc1tpXSwgbnVsbCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qKiBAaW50ZXJuYWwgKi9cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEdMVEZMb2FkZXJFeHRlbnNpb24ge1xyXG4gICAgcHJpdmF0ZSBfbmFtZTogc3RyaW5nO1xyXG5cclxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcihuYW1lOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLl9uYW1lID0gbmFtZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0IG5hbWUoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fbmFtZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIERlZmluZXMgYW4gb3ZlcnJpZGUgZm9yIGxvYWRpbmcgdGhlIHJ1bnRpbWVcclxuICAgICAqIFJldHVybiB0cnVlIHRvIHN0b3AgZnVydGhlciBleHRlbnNpb25zIGZyb20gbG9hZGluZyB0aGUgcnVudGltZVxyXG4gICAgICogQHBhcmFtIHNjZW5lXHJcbiAgICAgKiBAcGFyYW0gZGF0YVxyXG4gICAgICogQHBhcmFtIHJvb3RVcmxcclxuICAgICAqIEBwYXJhbSBvblN1Y2Nlc3NcclxuICAgICAqIEBwYXJhbSBvbkVycm9yXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBsb2FkUnVudGltZUFzeW5jKHNjZW5lOiBTY2VuZSwgZGF0YTogSUdMVEZMb2FkZXJEYXRhLCByb290VXJsOiBzdHJpbmcsIG9uU3VjY2Vzcz86IChnbHRmUnVudGltZTogSUdMVEZSdW50aW1lKSA9PiB2b2lkLCBvbkVycm9yPzogKG1lc3NhZ2U6IHN0cmluZykgPT4gdm9pZCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIERlZmluZXMgYW4gb252ZXJyaWRlIGZvciBjcmVhdGluZyBnbHRmIHJ1bnRpbWVcclxuICAgICAqIFJldHVybiB0cnVlIHRvIHN0b3AgZnVydGhlciBleHRlbnNpb25zIGZyb20gY3JlYXRpbmcgdGhlIHJ1bnRpbWVcclxuICAgICAqIEBwYXJhbSBnbHRmUnVudGltZVxyXG4gICAgICogQHBhcmFtIG9uU3VjY2Vzc1xyXG4gICAgICogQHBhcmFtIG9uRXJyb3JcclxuICAgICAqL1xyXG4gICAgcHVibGljIGxvYWRSdW50aW1lRXh0ZW5zaW9uc0FzeW5jKGdsdGZSdW50aW1lOiBJR0xURlJ1bnRpbWUsIG9uU3VjY2VzczogKCkgPT4gdm9pZCwgb25FcnJvcj86IChtZXNzYWdlOiBzdHJpbmcpID0+IHZvaWQpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBEZWZpbmVzIGFuIG92ZXJyaWRlIGZvciBsb2FkaW5nIGJ1ZmZlcnNcclxuICAgICAqIFJldHVybiB0cnVlIHRvIHN0b3AgZnVydGhlciBleHRlbnNpb25zIGZyb20gbG9hZGluZyB0aGlzIGJ1ZmZlclxyXG4gICAgICogQHBhcmFtIGdsdGZSdW50aW1lXHJcbiAgICAgKiBAcGFyYW0gaWRcclxuICAgICAqIEBwYXJhbSBvblN1Y2Nlc3NcclxuICAgICAqIEBwYXJhbSBvbkVycm9yXHJcbiAgICAgKiBAcGFyYW0gb25Qcm9ncmVzc1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgbG9hZEJ1ZmZlckFzeW5jKFxyXG4gICAgICAgIGdsdGZSdW50aW1lOiBJR0xURlJ1bnRpbWUsXHJcbiAgICAgICAgaWQ6IHN0cmluZyxcclxuICAgICAgICBvblN1Y2Nlc3M6IChidWZmZXI6IEFycmF5QnVmZmVyVmlldykgPT4gdm9pZCxcclxuICAgICAgICBvbkVycm9yOiAobWVzc2FnZTogc3RyaW5nKSA9PiB2b2lkLFxyXG4gICAgICAgIG9uUHJvZ3Jlc3M/OiAoKSA9PiB2b2lkXHJcbiAgICApOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBEZWZpbmVzIGFuIG92ZXJyaWRlIGZvciBsb2FkaW5nIHRleHR1cmUgYnVmZmVyc1xyXG4gICAgICogUmV0dXJuIHRydWUgdG8gc3RvcCBmdXJ0aGVyIGV4dGVuc2lvbnMgZnJvbSBsb2FkaW5nIHRoaXMgdGV4dHVyZSBkYXRhXHJcbiAgICAgKiBAcGFyYW0gZ2x0ZlJ1bnRpbWVcclxuICAgICAqIEBwYXJhbSBpZFxyXG4gICAgICogQHBhcmFtIG9uU3VjY2Vzc1xyXG4gICAgICogQHBhcmFtIG9uRXJyb3JcclxuICAgICAqL1xyXG4gICAgcHVibGljIGxvYWRUZXh0dXJlQnVmZmVyQXN5bmMoZ2x0ZlJ1bnRpbWU6IElHTFRGUnVudGltZSwgaWQ6IHN0cmluZywgb25TdWNjZXNzOiAoYnVmZmVyOiBBcnJheUJ1ZmZlclZpZXcpID0+IHZvaWQsIG9uRXJyb3I6IChtZXNzYWdlOiBzdHJpbmcpID0+IHZvaWQpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBEZWZpbmVzIGFuIG92ZXJyaWRlIGZvciBjcmVhdGluZyB0ZXh0dXJlc1xyXG4gICAgICogUmV0dXJuIHRydWUgdG8gc3RvcCBmdXJ0aGVyIGV4dGVuc2lvbnMgZnJvbSBsb2FkaW5nIHRoaXMgdGV4dHVyZVxyXG4gICAgICogQHBhcmFtIGdsdGZSdW50aW1lXHJcbiAgICAgKiBAcGFyYW0gaWRcclxuICAgICAqIEBwYXJhbSBidWZmZXJcclxuICAgICAqIEBwYXJhbSBvblN1Y2Nlc3NcclxuICAgICAqIEBwYXJhbSBvbkVycm9yXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBjcmVhdGVUZXh0dXJlQXN5bmMoZ2x0ZlJ1bnRpbWU6IElHTFRGUnVudGltZSwgaWQ6IHN0cmluZywgYnVmZmVyOiBBcnJheUJ1ZmZlclZpZXcsIG9uU3VjY2VzczogKHRleHR1cmU6IFRleHR1cmUpID0+IHZvaWQsIG9uRXJyb3I6IChtZXNzYWdlOiBzdHJpbmcpID0+IHZvaWQpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBEZWZpbmVzIGFuIG92ZXJyaWRlIGZvciBsb2FkaW5nIHNoYWRlciBzdHJpbmdzXHJcbiAgICAgKiBSZXR1cm4gdHJ1ZSB0byBzdG9wIGZ1cnRoZXIgZXh0ZW5zaW9ucyBmcm9tIGxvYWRpbmcgdGhpcyBzaGFkZXIgZGF0YVxyXG4gICAgICogQHBhcmFtIGdsdGZSdW50aW1lXHJcbiAgICAgKiBAcGFyYW0gaWRcclxuICAgICAqIEBwYXJhbSBvblN1Y2Nlc3NcclxuICAgICAqIEBwYXJhbSBvbkVycm9yXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBsb2FkU2hhZGVyU3RyaW5nQXN5bmMoZ2x0ZlJ1bnRpbWU6IElHTFRGUnVudGltZSwgaWQ6IHN0cmluZywgb25TdWNjZXNzOiAoc2hhZGVyU3RyaW5nOiBzdHJpbmcpID0+IHZvaWQsIG9uRXJyb3I6IChtZXNzYWdlOiBzdHJpbmcpID0+IHZvaWQpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBEZWZpbmVzIGFuIG92ZXJyaWRlIGZvciBsb2FkaW5nIG1hdGVyaWFsc1xyXG4gICAgICogUmV0dXJuIHRydWUgdG8gc3RvcCBmdXJ0aGVyIGV4dGVuc2lvbnMgZnJvbSBsb2FkaW5nIHRoaXMgbWF0ZXJpYWxcclxuICAgICAqIEBwYXJhbSBnbHRmUnVudGltZVxyXG4gICAgICogQHBhcmFtIGlkXHJcbiAgICAgKiBAcGFyYW0gb25TdWNjZXNzXHJcbiAgICAgKiBAcGFyYW0gb25FcnJvclxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgbG9hZE1hdGVyaWFsQXN5bmMoZ2x0ZlJ1bnRpbWU6IElHTFRGUnVudGltZSwgaWQ6IHN0cmluZywgb25TdWNjZXNzOiAobWF0ZXJpYWw6IE1hdGVyaWFsKSA9PiB2b2lkLCBvbkVycm9yOiAobWVzc2FnZTogc3RyaW5nKSA9PiB2b2lkKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIC0tLS0tLS0tLVxyXG4gICAgLy8gVXRpbGl0aWVzXHJcbiAgICAvLyAtLS0tLS0tLS1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIExvYWRSdW50aW1lQXN5bmMoXHJcbiAgICAgICAgc2NlbmU6IFNjZW5lLFxyXG4gICAgICAgIGRhdGE6IElHTFRGTG9hZGVyRGF0YSxcclxuICAgICAgICByb290VXJsOiBzdHJpbmcsXHJcbiAgICAgICAgb25TdWNjZXNzPzogKGdsdGZSdW50aW1lOiBJR0xURlJ1bnRpbWUpID0+IHZvaWQsXHJcbiAgICAgICAgb25FcnJvcj86IChtZXNzYWdlOiBzdHJpbmcpID0+IHZvaWRcclxuICAgICk6IHZvaWQge1xyXG4gICAgICAgIEdMVEZMb2FkZXJFeHRlbnNpb24uX0FwcGx5RXh0ZW5zaW9ucyhcclxuICAgICAgICAgICAgKGxvYWRlckV4dGVuc2lvbikgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGxvYWRlckV4dGVuc2lvbi5sb2FkUnVudGltZUFzeW5jKHNjZW5lLCBkYXRhLCByb290VXJsLCBvblN1Y2Nlc3MsIG9uRXJyb3IpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIW9uU3VjY2Vzcykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uU3VjY2VzcyhHTFRGTG9hZGVyQmFzZS5DcmVhdGVSdW50aW1lKGRhdGEuanNvbiwgc2NlbmUsIHJvb3RVcmwpKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIExvYWRSdW50aW1lRXh0ZW5zaW9uc0FzeW5jKGdsdGZSdW50aW1lOiBJR0xURlJ1bnRpbWUsIG9uU3VjY2VzczogKCkgPT4gdm9pZCwgb25FcnJvcj86IChtZXNzYWdlOiBzdHJpbmcpID0+IHZvaWQpOiB2b2lkIHtcclxuICAgICAgICBHTFRGTG9hZGVyRXh0ZW5zaW9uLl9BcHBseUV4dGVuc2lvbnMoXHJcbiAgICAgICAgICAgIChsb2FkZXJFeHRlbnNpb24pID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBsb2FkZXJFeHRlbnNpb24ubG9hZFJ1bnRpbWVFeHRlbnNpb25zQXN5bmMoZ2x0ZlJ1bnRpbWUsIG9uU3VjY2Vzcywgb25FcnJvcik7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIG9uU3VjY2VzcygpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgTG9hZEJ1ZmZlckFzeW5jKFxyXG4gICAgICAgIGdsdGZSdW50aW1lOiBJR0xURlJ1bnRpbWUsXHJcbiAgICAgICAgaWQ6IHN0cmluZyxcclxuICAgICAgICBvblN1Y2Nlc3M6IChidWZmZXJWaWV3OiBBcnJheUJ1ZmZlclZpZXcpID0+IHZvaWQsXHJcbiAgICAgICAgb25FcnJvcjogKG1lc3NhZ2U6IHN0cmluZykgPT4gdm9pZCxcclxuICAgICAgICBvblByb2dyZXNzPzogKCkgPT4gdm9pZFxyXG4gICAgKTogdm9pZCB7XHJcbiAgICAgICAgR0xURkxvYWRlckV4dGVuc2lvbi5fQXBwbHlFeHRlbnNpb25zKFxyXG4gICAgICAgICAgICAobG9hZGVyRXh0ZW5zaW9uKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbG9hZGVyRXh0ZW5zaW9uLmxvYWRCdWZmZXJBc3luYyhnbHRmUnVudGltZSwgaWQsIG9uU3VjY2Vzcywgb25FcnJvciwgb25Qcm9ncmVzcyk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICgpID0+IHtcclxuICAgICAgICAgICAgICAgIEdMVEZMb2FkZXJCYXNlLkxvYWRCdWZmZXJBc3luYyhnbHRmUnVudGltZSwgaWQsIG9uU3VjY2Vzcywgb25FcnJvciwgb25Qcm9ncmVzcyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgTG9hZFRleHR1cmVBc3luYyhnbHRmUnVudGltZTogSUdMVEZSdW50aW1lLCBpZDogc3RyaW5nLCBvblN1Y2Nlc3M6ICh0ZXh0dXJlOiBUZXh0dXJlKSA9PiB2b2lkLCBvbkVycm9yOiAobWVzc2FnZTogc3RyaW5nKSA9PiB2b2lkKTogdm9pZCB7XHJcbiAgICAgICAgR0xURkxvYWRlckV4dGVuc2lvbi5fTG9hZFRleHR1cmVCdWZmZXJBc3luYyhcclxuICAgICAgICAgICAgZ2x0ZlJ1bnRpbWUsXHJcbiAgICAgICAgICAgIGlkLFxyXG4gICAgICAgICAgICAoYnVmZmVyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoYnVmZmVyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgR0xURkxvYWRlckV4dGVuc2lvbi5fQ3JlYXRlVGV4dHVyZUFzeW5jKGdsdGZSdW50aW1lLCBpZCwgYnVmZmVyLCBvblN1Y2Nlc3MsIG9uRXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBvbkVycm9yXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIExvYWRTaGFkZXJTdHJpbmdBc3luYyhnbHRmUnVudGltZTogSUdMVEZSdW50aW1lLCBpZDogc3RyaW5nLCBvblN1Y2Nlc3M6IChzaGFkZXJEYXRhOiBzdHJpbmcgfCBBcnJheUJ1ZmZlcikgPT4gdm9pZCwgb25FcnJvcjogKG1lc3NhZ2U6IHN0cmluZykgPT4gdm9pZCk6IHZvaWQge1xyXG4gICAgICAgIEdMVEZMb2FkZXJFeHRlbnNpb24uX0FwcGx5RXh0ZW5zaW9ucyhcclxuICAgICAgICAgICAgKGxvYWRlckV4dGVuc2lvbikgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGxvYWRlckV4dGVuc2lvbi5sb2FkU2hhZGVyU3RyaW5nQXN5bmMoZ2x0ZlJ1bnRpbWUsIGlkLCBvblN1Y2Nlc3MsIG9uRXJyb3IpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBHTFRGTG9hZGVyQmFzZS5Mb2FkU2hhZGVyU3RyaW5nQXN5bmMoZ2x0ZlJ1bnRpbWUsIGlkLCBvblN1Y2Nlc3MsIG9uRXJyb3IpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIExvYWRNYXRlcmlhbEFzeW5jKGdsdGZSdW50aW1lOiBJR0xURlJ1bnRpbWUsIGlkOiBzdHJpbmcsIG9uU3VjY2VzczogKG1hdGVyaWFsOiBNYXRlcmlhbCkgPT4gdm9pZCwgb25FcnJvcjogKG1lc3NhZ2U6IHN0cmluZykgPT4gdm9pZCk6IHZvaWQge1xyXG4gICAgICAgIEdMVEZMb2FkZXJFeHRlbnNpb24uX0FwcGx5RXh0ZW5zaW9ucyhcclxuICAgICAgICAgICAgKGxvYWRlckV4dGVuc2lvbikgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGxvYWRlckV4dGVuc2lvbi5sb2FkTWF0ZXJpYWxBc3luYyhnbHRmUnVudGltZSwgaWQsIG9uU3VjY2Vzcywgb25FcnJvcik7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICgpID0+IHtcclxuICAgICAgICAgICAgICAgIEdMVEZMb2FkZXJCYXNlLkxvYWRNYXRlcmlhbEFzeW5jKGdsdGZSdW50aW1lLCBpZCwgb25TdWNjZXNzLCBvbkVycm9yKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgX0xvYWRUZXh0dXJlQnVmZmVyQXN5bmMoXHJcbiAgICAgICAgZ2x0ZlJ1bnRpbWU6IElHTFRGUnVudGltZSxcclxuICAgICAgICBpZDogc3RyaW5nLFxyXG4gICAgICAgIG9uU3VjY2VzczogKGJ1ZmZlcjogTnVsbGFibGU8QXJyYXlCdWZmZXJWaWV3PikgPT4gdm9pZCxcclxuICAgICAgICBvbkVycm9yOiAobWVzc2FnZTogc3RyaW5nKSA9PiB2b2lkXHJcbiAgICApOiB2b2lkIHtcclxuICAgICAgICBHTFRGTG9hZGVyRXh0ZW5zaW9uLl9BcHBseUV4dGVuc2lvbnMoXHJcbiAgICAgICAgICAgIChsb2FkZXJFeHRlbnNpb24pID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBsb2FkZXJFeHRlbnNpb24ubG9hZFRleHR1cmVCdWZmZXJBc3luYyhnbHRmUnVudGltZSwgaWQsIG9uU3VjY2Vzcywgb25FcnJvcik7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICgpID0+IHtcclxuICAgICAgICAgICAgICAgIEdMVEZMb2FkZXJCYXNlLkxvYWRUZXh0dXJlQnVmZmVyQXN5bmMoZ2x0ZlJ1bnRpbWUsIGlkLCBvblN1Y2Nlc3MsIG9uRXJyb3IpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHN0YXRpYyBfQ3JlYXRlVGV4dHVyZUFzeW5jKFxyXG4gICAgICAgIGdsdGZSdW50aW1lOiBJR0xURlJ1bnRpbWUsXHJcbiAgICAgICAgaWQ6IHN0cmluZyxcclxuICAgICAgICBidWZmZXI6IEFycmF5QnVmZmVyVmlldyxcclxuICAgICAgICBvblN1Y2Nlc3M6ICh0ZXh0dXJlOiBUZXh0dXJlKSA9PiB2b2lkLFxyXG4gICAgICAgIG9uRXJyb3I6IChtZXNzYWdlOiBzdHJpbmcpID0+IHZvaWRcclxuICAgICk6IHZvaWQge1xyXG4gICAgICAgIEdMVEZMb2FkZXJFeHRlbnNpb24uX0FwcGx5RXh0ZW5zaW9ucyhcclxuICAgICAgICAgICAgKGxvYWRlckV4dGVuc2lvbikgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGxvYWRlckV4dGVuc2lvbi5jcmVhdGVUZXh0dXJlQXN5bmMoZ2x0ZlJ1bnRpbWUsIGlkLCBidWZmZXIsIG9uU3VjY2Vzcywgb25FcnJvcik7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICgpID0+IHtcclxuICAgICAgICAgICAgICAgIEdMVEZMb2FkZXJCYXNlLkNyZWF0ZVRleHR1cmVBc3luYyhnbHRmUnVudGltZSwgaWQsIGJ1ZmZlciwgb25TdWNjZXNzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgX0FwcGx5RXh0ZW5zaW9ucyhmdW5jOiAobG9hZGVyRXh0ZW5zaW9uOiBHTFRGTG9hZGVyRXh0ZW5zaW9uKSA9PiBib29sZWFuLCBkZWZhdWx0RnVuYzogKCkgPT4gdm9pZCk6IHZvaWQge1xyXG4gICAgICAgIGZvciAoY29uc3QgZXh0ZW5zaW9uTmFtZSBpbiBHTFRGTG9hZGVyLkV4dGVuc2lvbnMpIHtcclxuICAgICAgICAgICAgY29uc3QgbG9hZGVyRXh0ZW5zaW9uID0gR0xURkxvYWRlci5FeHRlbnNpb25zW2V4dGVuc2lvbk5hbWVdO1xyXG4gICAgICAgICAgICBpZiAoZnVuYyhsb2FkZXJFeHRlbnNpb24pKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGRlZmF1bHRGdW5jKCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbkdMVEZGaWxlTG9hZGVyLl9DcmVhdGVHTFRGMUxvYWRlciA9ICgpID0+IG5ldyBHTFRGTG9hZGVyKCk7XHJcbiIsImltcG9ydCB0eXBlIHsgQXNzZXRDb250YWluZXIgfSBmcm9tIFwiY29yZS9hc3NldENvbnRhaW5lclwiO1xyXG5pbXBvcnQgdHlwZSB7IEJvbmUgfSBmcm9tIFwiY29yZS9Cb25lcy9ib25lXCI7XHJcbmltcG9ydCB0eXBlIHsgU2tlbGV0b24gfSBmcm9tIFwiY29yZS9Cb25lcy9za2VsZXRvblwiO1xyXG5pbXBvcnQgdHlwZSB7IFRleHR1cmUgfSBmcm9tIFwiY29yZS9NYXRlcmlhbHMvVGV4dHVyZXMvdGV4dHVyZVwiO1xyXG5pbXBvcnQgdHlwZSB7IE5vZGUgfSBmcm9tIFwiY29yZS9ub2RlXCI7XHJcbmltcG9ydCB0eXBlIHsgU2NlbmUgfSBmcm9tIFwiY29yZS9zY2VuZVwiO1xyXG5pbXBvcnQgdHlwZSB7IE51bGxhYmxlIH0gZnJvbSBcImNvcmUvdHlwZXNcIjtcclxuXHJcbi8qKlxyXG4gKiBFbnVtc1xyXG4gKiBAaW50ZXJuYWxcclxuICovXHJcbmV4cG9ydCBlbnVtIEVDb21wb25lbnRUeXBlIHtcclxuICAgIEJZVEUgPSA1MTIwLFxyXG4gICAgVU5TSUdORURfQllURSA9IDUxMjEsXHJcbiAgICBTSE9SVCA9IDUxMjIsXHJcbiAgICBVTlNJR05FRF9TSE9SVCA9IDUxMjMsXHJcbiAgICBGTE9BVCA9IDUxMjYsXHJcbn1cclxuXHJcbi8qKiBAaW50ZXJuYWwgKi9cclxuZXhwb3J0IGVudW0gRVNoYWRlclR5cGUge1xyXG4gICAgRlJBR01FTlQgPSAzNTYzMixcclxuICAgIFZFUlRFWCA9IDM1NjMzLFxyXG59XHJcblxyXG4vKiogQGludGVybmFsICovXHJcbmV4cG9ydCBlbnVtIEVQYXJhbWV0ZXJUeXBlIHtcclxuICAgIEJZVEUgPSA1MTIwLFxyXG4gICAgVU5TSUdORURfQllURSA9IDUxMjEsXHJcbiAgICBTSE9SVCA9IDUxMjIsXHJcbiAgICBVTlNJR05FRF9TSE9SVCA9IDUxMjMsXHJcbiAgICBJTlQgPSA1MTI0LFxyXG4gICAgVU5TSUdORURfSU5UID0gNTEyNSxcclxuICAgIEZMT0FUID0gNTEyNixcclxuICAgIEZMT0FUX1ZFQzIgPSAzNTY2NCxcclxuICAgIEZMT0FUX1ZFQzMgPSAzNTY2NSxcclxuICAgIEZMT0FUX1ZFQzQgPSAzNTY2NixcclxuICAgIElOVF9WRUMyID0gMzU2NjcsXHJcbiAgICBJTlRfVkVDMyA9IDM1NjY4LFxyXG4gICAgSU5UX1ZFQzQgPSAzNTY2OSxcclxuICAgIEJPT0wgPSAzNTY3MCxcclxuICAgIEJPT0xfVkVDMiA9IDM1NjcxLFxyXG4gICAgQk9PTF9WRUMzID0gMzU2NzIsXHJcbiAgICBCT09MX1ZFQzQgPSAzNTY3MyxcclxuICAgIEZMT0FUX01BVDIgPSAzNTY3NCxcclxuICAgIEZMT0FUX01BVDMgPSAzNTY3NSxcclxuICAgIEZMT0FUX01BVDQgPSAzNTY3NixcclxuICAgIFNBTVBMRVJfMkQgPSAzNTY3OCxcclxufVxyXG5cclxuLyoqIEBpbnRlcm5hbCAqL1xyXG5leHBvcnQgZW51bSBFVGV4dHVyZVdyYXBNb2RlIHtcclxuICAgIENMQU1QX1RPX0VER0UgPSAzMzA3MSxcclxuICAgIE1JUlJPUkVEX1JFUEVBVCA9IDMzNjQ4LFxyXG4gICAgUkVQRUFUID0gMTA0OTcsXHJcbn1cclxuXHJcbi8qKiBAaW50ZXJuYWwgKi9cclxuZXhwb3J0IGVudW0gRVRleHR1cmVGaWx0ZXJUeXBlIHtcclxuICAgIE5FQVJFU1QgPSA5NzI4LFxyXG4gICAgTElORUFSID0gOTcyOCxcclxuICAgIE5FQVJFU1RfTUlQTUFQX05FQVJFU1QgPSA5OTg0LFxyXG4gICAgTElORUFSX01JUE1BUF9ORUFSRVNUID0gOTk4NSxcclxuICAgIE5FQVJFU1RfTUlQTUFQX0xJTkVBUiA9IDk5ODYsXHJcbiAgICBMSU5FQVJfTUlQTUFQX0xJTkVBUiA9IDk5ODcsXHJcbn1cclxuXHJcbi8qKiBAaW50ZXJuYWwgKi9cclxuZXhwb3J0IGVudW0gRVRleHR1cmVGb3JtYXQge1xyXG4gICAgQUxQSEEgPSA2NDA2LFxyXG4gICAgUkdCID0gNjQwNyxcclxuICAgIFJHQkEgPSA2NDA4LFxyXG4gICAgTFVNSU5BTkNFID0gNjQwOSxcclxuICAgIExVTUlOQU5DRV9BTFBIQSA9IDY0MTAsXHJcbn1cclxuXHJcbi8qKiBAaW50ZXJuYWwgKi9cclxuZXhwb3J0IGVudW0gRUN1bGxpbmdUeXBlIHtcclxuICAgIEZST05UID0gMTAyOCxcclxuICAgIEJBQ0sgPSAxMDI5LFxyXG4gICAgRlJPTlRfQU5EX0JBQ0sgPSAxMDMyLFxyXG59XHJcblxyXG4vKiogQGludGVybmFsICovXHJcbmV4cG9ydCBlbnVtIEVCbGVuZGluZ0Z1bmN0aW9uIHtcclxuICAgIFpFUk8gPSAwLFxyXG4gICAgT05FID0gMSxcclxuICAgIFNSQ19DT0xPUiA9IDc2OCxcclxuICAgIE9ORV9NSU5VU19TUkNfQ09MT1IgPSA3NjksXHJcbiAgICBEU1RfQ09MT1IgPSA3NzQsXHJcbiAgICBPTkVfTUlOVVNfRFNUX0NPTE9SID0gNzc1LFxyXG4gICAgU1JDX0FMUEhBID0gNzcwLFxyXG4gICAgT05FX01JTlVTX1NSQ19BTFBIQSA9IDc3MSxcclxuICAgIERTVF9BTFBIQSA9IDc3MixcclxuICAgIE9ORV9NSU5VU19EU1RfQUxQSEEgPSA3NzMsXHJcbiAgICBDT05TVEFOVF9DT0xPUiA9IDMyNzY5LFxyXG4gICAgT05FX01JTlVTX0NPTlNUQU5UX0NPTE9SID0gMzI3NzAsXHJcbiAgICBDT05TVEFOVF9BTFBIQSA9IDMyNzcxLFxyXG4gICAgT05FX01JTlVTX0NPTlNUQU5UX0FMUEhBID0gMzI3NzIsXHJcbiAgICBTUkNfQUxQSEFfU0FUVVJBVEUgPSA3NzYsXHJcbn1cclxuXHJcbi8qKiBAaW50ZXJuYWwgKi9cclxuZXhwb3J0IGludGVyZmFjZSBJR0xURlByb3BlcnR5IHtcclxuICAgIGV4dGVuc2lvbnM/OiB7IFtrZXk6IHN0cmluZ106IGFueSB9O1xyXG4gICAgZXh0cmFzPzogT2JqZWN0O1xyXG59XHJcblxyXG4vKiogQGludGVybmFsICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUdMVEZDaGlsZFJvb3RQcm9wZXJ0eSBleHRlbmRzIElHTFRGUHJvcGVydHkge1xyXG4gICAgbmFtZT86IHN0cmluZztcclxufVxyXG5cclxuLyoqIEBpbnRlcm5hbCAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElHTFRGQWNjZXNzb3IgZXh0ZW5kcyBJR0xURkNoaWxkUm9vdFByb3BlcnR5IHtcclxuICAgIGJ1ZmZlclZpZXc6IHN0cmluZztcclxuICAgIGJ5dGVPZmZzZXQ6IG51bWJlcjtcclxuICAgIGJ5dGVTdHJpZGU6IG51bWJlcjtcclxuICAgIGNvdW50OiBudW1iZXI7XHJcbiAgICB0eXBlOiBzdHJpbmc7XHJcbiAgICBjb21wb25lbnRUeXBlOiBFQ29tcG9uZW50VHlwZTtcclxuXHJcbiAgICBtYXg/OiBudW1iZXJbXTtcclxuICAgIG1pbj86IG51bWJlcltdO1xyXG4gICAgbmFtZT86IHN0cmluZztcclxufVxyXG5cclxuLyoqIEBpbnRlcm5hbCAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElHTFRGQnVmZmVyVmlldyBleHRlbmRzIElHTFRGQ2hpbGRSb290UHJvcGVydHkge1xyXG4gICAgYnVmZmVyOiBzdHJpbmc7XHJcbiAgICBieXRlT2Zmc2V0OiBudW1iZXI7XHJcbiAgICBieXRlTGVuZ3RoOiBudW1iZXI7XHJcbiAgICBieXRlU3RyaWRlOiBudW1iZXI7XHJcblxyXG4gICAgdGFyZ2V0PzogbnVtYmVyO1xyXG59XHJcblxyXG4vKiogQGludGVybmFsICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUdMVEZCdWZmZXIgZXh0ZW5kcyBJR0xURkNoaWxkUm9vdFByb3BlcnR5IHtcclxuICAgIHVyaTogc3RyaW5nO1xyXG5cclxuICAgIGJ5dGVMZW5ndGg/OiBudW1iZXI7XHJcbiAgICB0eXBlPzogc3RyaW5nO1xyXG59XHJcblxyXG4vKiogQGludGVybmFsICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUdMVEZTaGFkZXIgZXh0ZW5kcyBJR0xURkNoaWxkUm9vdFByb3BlcnR5IHtcclxuICAgIHVyaTogc3RyaW5nO1xyXG4gICAgdHlwZTogRVNoYWRlclR5cGU7XHJcbn1cclxuXHJcbi8qKiBAaW50ZXJuYWwgKi9cclxuZXhwb3J0IGludGVyZmFjZSBJR0xURlByb2dyYW0gZXh0ZW5kcyBJR0xURkNoaWxkUm9vdFByb3BlcnR5IHtcclxuICAgIGF0dHJpYnV0ZXM6IHN0cmluZ1tdO1xyXG4gICAgZnJhZ21lbnRTaGFkZXI6IHN0cmluZztcclxuICAgIHZlcnRleFNoYWRlcjogc3RyaW5nO1xyXG59XHJcblxyXG4vKiogQGludGVybmFsICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUdMVEZUZWNobmlxdWVQYXJhbWV0ZXIge1xyXG4gICAgdHlwZTogbnVtYmVyO1xyXG5cclxuICAgIGNvdW50PzogbnVtYmVyO1xyXG4gICAgc2VtYW50aWM/OiBzdHJpbmc7XHJcbiAgICBub2RlPzogc3RyaW5nO1xyXG4gICAgdmFsdWU/OiBudW1iZXIgfCBib29sZWFuIHwgc3RyaW5nIHwgQXJyYXk8YW55PjtcclxuICAgIHNvdXJjZT86IHN0cmluZztcclxuXHJcbiAgICBiYWJ5bG9uVmFsdWU/OiBhbnk7XHJcbn1cclxuXHJcbi8qKiBAaW50ZXJuYWwgKi9cclxuZXhwb3J0IGludGVyZmFjZSBJR0xURlRlY2huaXF1ZUNvbW1vblByb2ZpbGUge1xyXG4gICAgbGlnaHRpbmdNb2RlbDogc3RyaW5nO1xyXG4gICAgdGV4Y29vcmRCaW5kaW5nczogT2JqZWN0O1xyXG5cclxuICAgIHBhcmFtZXRlcnM/OiBBcnJheTxhbnk+O1xyXG59XHJcblxyXG4vKiogQGludGVybmFsICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUdMVEZUZWNobmlxdWVTdGF0ZXNGdW5jdGlvbnMge1xyXG4gICAgYmxlbmRDb2xvcj86IG51bWJlcltdO1xyXG4gICAgYmxlbmRFcXVhdGlvblNlcGFyYXRlPzogbnVtYmVyW107XHJcbiAgICBibGVuZEZ1bmNTZXBhcmF0ZT86IG51bWJlcltdO1xyXG4gICAgY29sb3JNYXNrOiBib29sZWFuW107XHJcbiAgICBjdWxsRmFjZTogbnVtYmVyW107XHJcbn1cclxuXHJcbi8qKiBAaW50ZXJuYWwgKi9cclxuZXhwb3J0IGludGVyZmFjZSBJR0xURlRlY2huaXF1ZVN0YXRlcyB7XHJcbiAgICBlbmFibGU6IG51bWJlcltdO1xyXG4gICAgZnVuY3Rpb25zOiBJR0xURlRlY2huaXF1ZVN0YXRlc0Z1bmN0aW9ucztcclxufVxyXG5cclxuLyoqIEBpbnRlcm5hbCAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElHTFRGVGVjaG5pcXVlIGV4dGVuZHMgSUdMVEZDaGlsZFJvb3RQcm9wZXJ0eSB7XHJcbiAgICBwYXJhbWV0ZXJzOiB7IFtrZXk6IHN0cmluZ106IElHTFRGVGVjaG5pcXVlUGFyYW1ldGVyIH07XHJcbiAgICBwcm9ncmFtOiBzdHJpbmc7XHJcblxyXG4gICAgYXR0cmlidXRlczogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfTtcclxuICAgIHVuaWZvcm1zOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9O1xyXG4gICAgc3RhdGVzOiBJR0xURlRlY2huaXF1ZVN0YXRlcztcclxufVxyXG5cclxuLyoqIEBpbnRlcm5hbCAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElHTFRGTWF0ZXJpYWwgZXh0ZW5kcyBJR0xURkNoaWxkUm9vdFByb3BlcnR5IHtcclxuICAgIHRlY2huaXF1ZT86IHN0cmluZztcclxuICAgIHZhbHVlczogc3RyaW5nW107XHJcbn1cclxuXHJcbi8qKiBAaW50ZXJuYWwgKi9cclxuZXhwb3J0IGludGVyZmFjZSBJR0xURk1lc2hQcmltaXRpdmUgZXh0ZW5kcyBJR0xURlByb3BlcnR5IHtcclxuICAgIGF0dHJpYnV0ZXM6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH07XHJcbiAgICBpbmRpY2VzOiBzdHJpbmc7XHJcbiAgICBtYXRlcmlhbDogc3RyaW5nO1xyXG5cclxuICAgIG1vZGU/OiBudW1iZXI7XHJcbn1cclxuXHJcbi8qKiBAaW50ZXJuYWwgKi9cclxuZXhwb3J0IGludGVyZmFjZSBJR0xURk1lc2ggZXh0ZW5kcyBJR0xURkNoaWxkUm9vdFByb3BlcnR5IHtcclxuICAgIHByaW1pdGl2ZXM6IElHTFRGTWVzaFByaW1pdGl2ZVtdO1xyXG59XHJcblxyXG4vKiogQGludGVybmFsICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUdMVEZJbWFnZSBleHRlbmRzIElHTFRGQ2hpbGRSb290UHJvcGVydHkge1xyXG4gICAgdXJpOiBzdHJpbmc7XHJcbn1cclxuXHJcbi8qKiBAaW50ZXJuYWwgKi9cclxuZXhwb3J0IGludGVyZmFjZSBJR0xURlNhbXBsZXIgZXh0ZW5kcyBJR0xURkNoaWxkUm9vdFByb3BlcnR5IHtcclxuICAgIG1hZ0ZpbHRlcj86IG51bWJlcjtcclxuICAgIG1pbkZpbHRlcj86IG51bWJlcjtcclxuICAgIHdyYXBTPzogbnVtYmVyO1xyXG4gICAgd3JhcFQ/OiBudW1iZXI7XHJcbn1cclxuXHJcbi8qKiBAaW50ZXJuYWwgKi9cclxuZXhwb3J0IGludGVyZmFjZSBJR0xURlRleHR1cmUgZXh0ZW5kcyBJR0xURkNoaWxkUm9vdFByb3BlcnR5IHtcclxuICAgIHNhbXBsZXI6IHN0cmluZztcclxuICAgIHNvdXJjZTogc3RyaW5nO1xyXG5cclxuICAgIGZvcm1hdD86IEVUZXh0dXJlRm9ybWF0O1xyXG4gICAgaW50ZXJuYWxGb3JtYXQ/OiBFVGV4dHVyZUZvcm1hdDtcclxuICAgIHRhcmdldD86IG51bWJlcjtcclxuICAgIHR5cGU/OiBudW1iZXI7XHJcblxyXG4gICAgLy8gQmFieWxvbi5qcyB2YWx1ZXMgKG9wdGltaXplKVxyXG4gICAgYmFieWxvblRleHR1cmU/OiBUZXh0dXJlO1xyXG59XHJcblxyXG4vKiogQGludGVybmFsICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUdMVEZBbWJpZW5MaWdodCB7XHJcbiAgICBjb2xvcj86IG51bWJlcltdO1xyXG59XHJcblxyXG4vKiogQGludGVybmFsICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUdMVEZEaXJlY3Rpb25hbExpZ2h0IHtcclxuICAgIGNvbG9yPzogbnVtYmVyW107XHJcbn1cclxuXHJcbi8qKiBAaW50ZXJuYWwgKi9cclxuZXhwb3J0IGludGVyZmFjZSBJR0xURlBvaW50TGlnaHQge1xyXG4gICAgY29sb3I/OiBudW1iZXJbXTtcclxuICAgIGNvbnN0YW50QXR0ZW51YXRpb24/OiBudW1iZXI7XHJcbiAgICBsaW5lYXJBdHRlbnVhdGlvbj86IG51bWJlcjtcclxuICAgIHF1YWRyYXRpY0F0dGVudWF0aW9uPzogbnVtYmVyO1xyXG59XHJcblxyXG4vKiogQGludGVybmFsICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUdMVEZTcG90TGlnaHQge1xyXG4gICAgY29sb3I/OiBudW1iZXJbXTtcclxuICAgIGNvbnN0YW50QXR0ZW51YXRpb24/OiBudW1iZXI7XHJcbiAgICBmYWxsT2ZBbmdsZT86IG51bWJlcjtcclxuICAgIGZhbGxPZmZFeHBvbmVudD86IG51bWJlcjtcclxuICAgIGxpbmVhckF0dGVudWF0aW9uPzogbnVtYmVyO1xyXG4gICAgcXVhZHJhdGljQXR0ZW51YXRpb24/OiBudW1iZXI7XHJcbn1cclxuXHJcbi8qKiBAaW50ZXJuYWwgKi9cclxuZXhwb3J0IGludGVyZmFjZSBJR0xURkxpZ2h0IGV4dGVuZHMgSUdMVEZDaGlsZFJvb3RQcm9wZXJ0eSB7XHJcbiAgICB0eXBlOiBzdHJpbmc7XHJcbn1cclxuXHJcbi8qKiBAaW50ZXJuYWwgKi9cclxuZXhwb3J0IGludGVyZmFjZSBJR0xURkNhbWVyYU9ydGhvZ3JhcGhpYyB7XHJcbiAgICB4bWFnOiBudW1iZXI7XHJcbiAgICB5bWFnOiBudW1iZXI7XHJcbiAgICB6ZmFyOiBudW1iZXI7XHJcbiAgICB6bmVhcjogbnVtYmVyO1xyXG59XHJcblxyXG4vKiogQGludGVybmFsICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUdMVEZDYW1lcmFQZXJzcGVjdGl2ZSB7XHJcbiAgICBhc3BlY3RSYXRpbzogbnVtYmVyO1xyXG4gICAgeWZvdjogbnVtYmVyO1xyXG4gICAgemZhcjogbnVtYmVyO1xyXG4gICAgem5lYXI6IG51bWJlcjtcclxufVxyXG5cclxuLyoqIEBpbnRlcm5hbCAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElHTFRGQ2FtZXJhIGV4dGVuZHMgSUdMVEZDaGlsZFJvb3RQcm9wZXJ0eSB7XHJcbiAgICB0eXBlOiBzdHJpbmc7XHJcbn1cclxuXHJcbi8qKiBAaW50ZXJuYWwgKi9cclxuZXhwb3J0IGludGVyZmFjZSBJR0xURkFuaW1hdGlvbkNoYW5uZWxUYXJnZXQge1xyXG4gICAgaWQ6IHN0cmluZztcclxuICAgIHBhdGg6IHN0cmluZztcclxufVxyXG5cclxuLyoqIEBpbnRlcm5hbCAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElHTFRGQW5pbWF0aW9uQ2hhbm5lbCB7XHJcbiAgICBzYW1wbGVyOiBzdHJpbmc7XHJcbiAgICB0YXJnZXQ6IElHTFRGQW5pbWF0aW9uQ2hhbm5lbFRhcmdldDtcclxufVxyXG5cclxuLyoqIEBpbnRlcm5hbCAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElHTFRGQW5pbWF0aW9uU2FtcGxlciB7XHJcbiAgICBpbnB1dDogc3RyaW5nO1xyXG4gICAgb3V0cHV0OiBzdHJpbmc7XHJcblxyXG4gICAgaW50ZXJwb2xhdGlvbj86IHN0cmluZztcclxufVxyXG5cclxuLyoqIEBpbnRlcm5hbCAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElHTFRGQW5pbWF0aW9uIGV4dGVuZHMgSUdMVEZDaGlsZFJvb3RQcm9wZXJ0eSB7XHJcbiAgICBjaGFubmVscz86IElHTFRGQW5pbWF0aW9uQ2hhbm5lbFtdO1xyXG4gICAgcGFyYW1ldGVycz86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH07XHJcbiAgICBzYW1wbGVycz86IHsgW2tleTogc3RyaW5nXTogSUdMVEZBbmltYXRpb25TYW1wbGVyIH07XHJcbn1cclxuXHJcbi8qKiBAaW50ZXJuYWwgKi9cclxuZXhwb3J0IGludGVyZmFjZSBJR0xURk5vZGVJbnN0YW5jZVNraW4ge1xyXG4gICAgc2tlbGV0b25zOiBzdHJpbmdbXTtcclxuICAgIHNraW46IHN0cmluZztcclxuICAgIG1lc2hlczogc3RyaW5nW107XHJcbn1cclxuXHJcbi8qKiBAaW50ZXJuYWwgKi9cclxuZXhwb3J0IGludGVyZmFjZSBJR0xURlNraW5zIGV4dGVuZHMgSUdMVEZDaGlsZFJvb3RQcm9wZXJ0eSB7XHJcbiAgICBiaW5kU2hhcGVNYXRyaXg6IG51bWJlcltdO1xyXG4gICAgaW52ZXJzZUJpbmRNYXRyaWNlczogc3RyaW5nO1xyXG4gICAgam9pbnROYW1lczogc3RyaW5nW107XHJcblxyXG4gICAgYmFieWxvblNrZWxldG9uPzogU2tlbGV0b247XHJcbn1cclxuXHJcbi8qKiBAaW50ZXJuYWwgKi9cclxuZXhwb3J0IGludGVyZmFjZSBJR0xURk5vZGUgZXh0ZW5kcyBJR0xURkNoaWxkUm9vdFByb3BlcnR5IHtcclxuICAgIGNhbWVyYT86IHN0cmluZztcclxuICAgIGNoaWxkcmVuOiBzdHJpbmdbXTtcclxuICAgIHNraW4/OiBzdHJpbmc7XHJcbiAgICBqb2ludE5hbWU/OiBzdHJpbmc7XHJcbiAgICBsaWdodD86IHN0cmluZztcclxuICAgIG1hdHJpeDogbnVtYmVyW107XHJcbiAgICBtZXNoPzogc3RyaW5nO1xyXG4gICAgbWVzaGVzPzogc3RyaW5nW107XHJcbiAgICByb3RhdGlvbj86IG51bWJlcltdO1xyXG4gICAgc2NhbGU/OiBudW1iZXJbXTtcclxuICAgIHRyYW5zbGF0aW9uPzogbnVtYmVyW107XHJcblxyXG4gICAgLy8gQmFieWxvbi5qcyB2YWx1ZXMgKG9wdGltaXplKVxyXG4gICAgYmFieWxvbk5vZGU/OiBOb2RlO1xyXG59XHJcblxyXG4vKiogQGludGVybmFsICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUdMVEZTY2VuZSBleHRlbmRzIElHTFRGQ2hpbGRSb290UHJvcGVydHkge1xyXG4gICAgbm9kZXM6IHN0cmluZ1tdO1xyXG59XHJcblxyXG4vKiogQGludGVybmFsICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUdMVEZSdW50aW1lIHtcclxuICAgIGV4dGVuc2lvbnM6IHsgW2tleTogc3RyaW5nXTogYW55IH07XHJcbiAgICBhY2Nlc3NvcnM6IHsgW2tleTogc3RyaW5nXTogSUdMVEZBY2Nlc3NvciB9O1xyXG4gICAgYnVmZmVyczogeyBba2V5OiBzdHJpbmddOiBJR0xURkJ1ZmZlciB9O1xyXG4gICAgYnVmZmVyVmlld3M6IHsgW2tleTogc3RyaW5nXTogSUdMVEZCdWZmZXJWaWV3IH07XHJcbiAgICBtZXNoZXM6IHsgW2tleTogc3RyaW5nXTogSUdMVEZNZXNoIH07XHJcbiAgICBsaWdodHM6IHsgW2tleTogc3RyaW5nXTogSUdMVEZMaWdodCB9O1xyXG4gICAgY2FtZXJhczogeyBba2V5OiBzdHJpbmddOiBJR0xURkNhbWVyYSB9O1xyXG4gICAgbm9kZXM6IHsgW2tleTogc3RyaW5nXTogSUdMVEZOb2RlIH07XHJcbiAgICBpbWFnZXM6IHsgW2tleTogc3RyaW5nXTogSUdMVEZJbWFnZSB9O1xyXG4gICAgdGV4dHVyZXM6IHsgW2tleTogc3RyaW5nXTogSUdMVEZUZXh0dXJlIH07XHJcbiAgICBzaGFkZXJzOiB7IFtrZXk6IHN0cmluZ106IElHTFRGU2hhZGVyIH07XHJcbiAgICBwcm9ncmFtczogeyBba2V5OiBzdHJpbmddOiBJR0xURlByb2dyYW0gfTtcclxuICAgIHNhbXBsZXJzOiB7IFtrZXk6IHN0cmluZ106IElHTFRGU2FtcGxlciB9O1xyXG4gICAgdGVjaG5pcXVlczogeyBba2V5OiBzdHJpbmddOiBJR0xURlRlY2huaXF1ZSB9O1xyXG4gICAgbWF0ZXJpYWxzOiB7IFtrZXk6IHN0cmluZ106IElHTFRGTWF0ZXJpYWwgfTtcclxuICAgIGFuaW1hdGlvbnM6IHsgW2tleTogc3RyaW5nXTogSUdMVEZBbmltYXRpb24gfTtcclxuICAgIHNraW5zOiB7IFtrZXk6IHN0cmluZ106IElHTFRGU2tpbnMgfTtcclxuXHJcbiAgICBjdXJyZW50U2NlbmU/OiBPYmplY3Q7XHJcbiAgICBzY2VuZXM6IHsgW2tleTogc3RyaW5nXTogSUdMVEZTY2VuZSB9OyAvLyB2MS4xXHJcblxyXG4gICAgZXh0ZW5zaW9uc1VzZWQ6IHN0cmluZ1tdO1xyXG4gICAgZXh0ZW5zaW9uc1JlcXVpcmVkPzogc3RyaW5nW107IC8vIHYxLjFcclxuXHJcbiAgICBidWZmZXJzQ291bnQ6IG51bWJlcjtcclxuICAgIHNoYWRlcnNjb3VudDogbnVtYmVyO1xyXG5cclxuICAgIHNjZW5lOiBTY2VuZTtcclxuICAgIHJvb3RVcmw6IHN0cmluZztcclxuXHJcbiAgICBsb2FkZWRCdWZmZXJDb3VudDogbnVtYmVyO1xyXG4gICAgbG9hZGVkQnVmZmVyVmlld3M6IHsgW25hbWU6IHN0cmluZ106IEFycmF5QnVmZmVyVmlldyB9O1xyXG5cclxuICAgIGxvYWRlZFNoYWRlckNvdW50OiBudW1iZXI7XHJcblxyXG4gICAgaW1wb3J0T25seU1lc2hlczogYm9vbGVhbjtcclxuICAgIGltcG9ydE1lc2hlc05hbWVzPzogc3RyaW5nW107XHJcblxyXG4gICAgZHVtbXlOb2RlczogTm9kZVtdO1xyXG5cclxuICAgIGFzc2V0Q29udGFpbmVyOiBOdWxsYWJsZTxBc3NldENvbnRhaW5lcj47XHJcbn1cclxuXHJcbi8qKiBAaW50ZXJuYWwgKi9cclxuZXhwb3J0IGludGVyZmFjZSBJTm9kZVRvUm9vdCB7XHJcbiAgICBib25lOiBCb25lO1xyXG4gICAgbm9kZTogSUdMVEZOb2RlO1xyXG4gICAgaWQ6IHN0cmluZztcclxufVxyXG5cclxuLyoqIEBpbnRlcm5hbCAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElKb2ludE5vZGUge1xyXG4gICAgbm9kZTogSUdMVEZOb2RlO1xyXG4gICAgaWQ6IHN0cmluZztcclxufVxyXG4iLCJpbXBvcnQgdHlwZSB7IElHTFRGVGVjaG5pcXVlUGFyYW1ldGVyLCBJR0xURkFjY2Vzc29yLCBJR0xURlJ1bnRpbWUsIElHTFRGQnVmZmVyVmlldyB9IGZyb20gXCIuL2dsVEZMb2FkZXJJbnRlcmZhY2VzXCI7XHJcbmltcG9ydCB7IEVQYXJhbWV0ZXJUeXBlLCBFVGV4dHVyZVdyYXBNb2RlLCBFVGV4dHVyZUZpbHRlclR5cGUsIEVDb21wb25lbnRUeXBlIH0gZnJvbSBcIi4vZ2xURkxvYWRlckludGVyZmFjZXNcIjtcclxuXHJcbmltcG9ydCB0eXBlIHsgTnVsbGFibGUgfSBmcm9tIFwiY29yZS90eXBlc1wiO1xyXG5pbXBvcnQgeyBWZWN0b3IyLCBWZWN0b3IzLCBWZWN0b3I0LCBNYXRyaXggfSBmcm9tIFwiY29yZS9NYXRocy9tYXRoLnZlY3RvclwiO1xyXG5pbXBvcnQgeyBDb2xvcjQgfSBmcm9tIFwiY29yZS9NYXRocy9tYXRoLmNvbG9yXCI7XHJcbmltcG9ydCB7IEVmZmVjdCB9IGZyb20gXCJjb3JlL01hdGVyaWFscy9lZmZlY3RcIjtcclxuaW1wb3J0IHsgU2hhZGVyTWF0ZXJpYWwgfSBmcm9tIFwiY29yZS9NYXRlcmlhbHMvc2hhZGVyTWF0ZXJpYWxcIjtcclxuaW1wb3J0IHsgVGV4dHVyZSB9IGZyb20gXCJjb3JlL01hdGVyaWFscy9UZXh0dXJlcy90ZXh0dXJlXCI7XHJcbmltcG9ydCB0eXBlIHsgTm9kZSB9IGZyb20gXCJjb3JlL25vZGVcIjtcclxuaW1wb3J0IHR5cGUgeyBTY2VuZSB9IGZyb20gXCJjb3JlL3NjZW5lXCI7XHJcblxyXG4vKipcclxuICogVXRpbHMgZnVuY3Rpb25zIGZvciBHTFRGXHJcbiAqIEBpbnRlcm5hbFxyXG4gKiBAZGVwcmVjYXRlZFxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIEdMVEZVdGlscyB7XHJcbiAgICAvKipcclxuICAgICAqIFNldHMgdGhlIGdpdmVuIFwicGFyYW1ldGVyXCIgbWF0cml4XHJcbiAgICAgKiBAcGFyYW0gc2NlbmUgdGhlIFNjZW5lIG9iamVjdFxyXG4gICAgICogQHBhcmFtIHNvdXJjZSB0aGUgc291cmNlIG5vZGUgd2hlcmUgdG8gcGljayB0aGUgbWF0cml4XHJcbiAgICAgKiBAcGFyYW0gcGFyYW1ldGVyIHRoZSBHTFRGIHRlY2huaXF1ZSBwYXJhbWV0ZXJcclxuICAgICAqIEBwYXJhbSB1bmlmb3JtTmFtZSB0aGUgbmFtZSBvZiB0aGUgc2hhZGVyJ3MgdW5pZm9ybVxyXG4gICAgICogQHBhcmFtIHNoYWRlck1hdGVyaWFsIHRoZSBzaGFkZXIgbWF0ZXJpYWxcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBTZXRNYXRyaXgoc2NlbmU6IFNjZW5lLCBzb3VyY2U6IE5vZGUsIHBhcmFtZXRlcjogSUdMVEZUZWNobmlxdWVQYXJhbWV0ZXIsIHVuaWZvcm1OYW1lOiBzdHJpbmcsIHNoYWRlck1hdGVyaWFsOiBTaGFkZXJNYXRlcmlhbCB8IEVmZmVjdCk6IHZvaWQge1xyXG4gICAgICAgIGxldCBtYXQ6IE51bGxhYmxlPE1hdHJpeD4gPSBudWxsO1xyXG5cclxuICAgICAgICBpZiAocGFyYW1ldGVyLnNlbWFudGljID09PSBcIk1PREVMXCIpIHtcclxuICAgICAgICAgICAgbWF0ID0gc291cmNlLmdldFdvcmxkTWF0cml4KCk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChwYXJhbWV0ZXIuc2VtYW50aWMgPT09IFwiUFJPSkVDVElPTlwiKSB7XHJcbiAgICAgICAgICAgIG1hdCA9IHNjZW5lLmdldFByb2plY3Rpb25NYXRyaXgoKTtcclxuICAgICAgICB9IGVsc2UgaWYgKHBhcmFtZXRlci5zZW1hbnRpYyA9PT0gXCJWSUVXXCIpIHtcclxuICAgICAgICAgICAgbWF0ID0gc2NlbmUuZ2V0Vmlld01hdHJpeCgpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAocGFyYW1ldGVyLnNlbWFudGljID09PSBcIk1PREVMVklFV0lOVkVSU0VUUkFOU1BPU0VcIikge1xyXG4gICAgICAgICAgICBtYXQgPSBNYXRyaXguVHJhbnNwb3NlKHNvdXJjZS5nZXRXb3JsZE1hdHJpeCgpLm11bHRpcGx5KHNjZW5lLmdldFZpZXdNYXRyaXgoKSkuaW52ZXJ0KCkpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAocGFyYW1ldGVyLnNlbWFudGljID09PSBcIk1PREVMVklFV1wiKSB7XHJcbiAgICAgICAgICAgIG1hdCA9IHNvdXJjZS5nZXRXb3JsZE1hdHJpeCgpLm11bHRpcGx5KHNjZW5lLmdldFZpZXdNYXRyaXgoKSk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChwYXJhbWV0ZXIuc2VtYW50aWMgPT09IFwiTU9ERUxWSUVXUFJPSkVDVElPTlwiKSB7XHJcbiAgICAgICAgICAgIG1hdCA9IHNvdXJjZS5nZXRXb3JsZE1hdHJpeCgpLm11bHRpcGx5KHNjZW5lLmdldFRyYW5zZm9ybU1hdHJpeCgpKTtcclxuICAgICAgICB9IGVsc2UgaWYgKHBhcmFtZXRlci5zZW1hbnRpYyA9PT0gXCJNT0RFTElOVkVSU0VcIikge1xyXG4gICAgICAgICAgICBtYXQgPSBzb3VyY2UuZ2V0V29ybGRNYXRyaXgoKS5pbnZlcnQoKTtcclxuICAgICAgICB9IGVsc2UgaWYgKHBhcmFtZXRlci5zZW1hbnRpYyA9PT0gXCJWSUVXSU5WRVJTRVwiKSB7XHJcbiAgICAgICAgICAgIG1hdCA9IHNjZW5lLmdldFZpZXdNYXRyaXgoKS5pbnZlcnQoKTtcclxuICAgICAgICB9IGVsc2UgaWYgKHBhcmFtZXRlci5zZW1hbnRpYyA9PT0gXCJQUk9KRUNUSU9OSU5WRVJTRVwiKSB7XHJcbiAgICAgICAgICAgIG1hdCA9IHNjZW5lLmdldFByb2plY3Rpb25NYXRyaXgoKS5pbnZlcnQoKTtcclxuICAgICAgICB9IGVsc2UgaWYgKHBhcmFtZXRlci5zZW1hbnRpYyA9PT0gXCJNT0RFTFZJRVdJTlZFUlNFXCIpIHtcclxuICAgICAgICAgICAgbWF0ID0gc291cmNlLmdldFdvcmxkTWF0cml4KCkubXVsdGlwbHkoc2NlbmUuZ2V0Vmlld01hdHJpeCgpKS5pbnZlcnQoKTtcclxuICAgICAgICB9IGVsc2UgaWYgKHBhcmFtZXRlci5zZW1hbnRpYyA9PT0gXCJNT0RFTFZJRVdQUk9KRUNUSU9OSU5WRVJTRVwiKSB7XHJcbiAgICAgICAgICAgIG1hdCA9IHNvdXJjZS5nZXRXb3JsZE1hdHJpeCgpLm11bHRpcGx5KHNjZW5lLmdldFRyYW5zZm9ybU1hdHJpeCgpKS5pbnZlcnQoKTtcclxuICAgICAgICB9IGVsc2UgaWYgKHBhcmFtZXRlci5zZW1hbnRpYyA9PT0gXCJNT0RFTElOVkVSU0VUUkFOU1BPU0VcIikge1xyXG4gICAgICAgICAgICBtYXQgPSBNYXRyaXguVHJhbnNwb3NlKHNvdXJjZS5nZXRXb3JsZE1hdHJpeCgpLmludmVydCgpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChtYXQpIHtcclxuICAgICAgICAgICAgc3dpdGNoIChwYXJhbWV0ZXIudHlwZSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSBFUGFyYW1ldGVyVHlwZS5GTE9BVF9NQVQyOlxyXG4gICAgICAgICAgICAgICAgICAgIHNoYWRlck1hdGVyaWFsLnNldE1hdHJpeDJ4Mih1bmlmb3JtTmFtZSwgTWF0cml4LkdldEFzTWF0cml4MngyKG1hdCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBFUGFyYW1ldGVyVHlwZS5GTE9BVF9NQVQzOlxyXG4gICAgICAgICAgICAgICAgICAgIHNoYWRlck1hdGVyaWFsLnNldE1hdHJpeDN4Myh1bmlmb3JtTmFtZSwgTWF0cml4LkdldEFzTWF0cml4M3gzKG1hdCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBFUGFyYW1ldGVyVHlwZS5GTE9BVF9NQVQ0OlxyXG4gICAgICAgICAgICAgICAgICAgIHNoYWRlck1hdGVyaWFsLnNldE1hdHJpeCh1bmlmb3JtTmFtZSwgbWF0KTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTZXRzIHRoZSBnaXZlbiBcInBhcmFtZXRlclwiIG1hdHJpeFxyXG4gICAgICogQHBhcmFtIHNoYWRlck1hdGVyaWFsIHRoZSBzaGFkZXIgbWF0ZXJpYWxcclxuICAgICAqIEBwYXJhbSB1bmlmb3JtIHRoZSBuYW1lIG9mIHRoZSBzaGFkZXIncyB1bmlmb3JtXHJcbiAgICAgKiBAcGFyYW0gdmFsdWUgdGhlIHZhbHVlIG9mIHRoZSB1bmlmb3JtXHJcbiAgICAgKiBAcGFyYW0gdHlwZSB0aGUgdW5pZm9ybSdzIHR5cGUgKEVQYXJhbWV0ZXJUeXBlIEZMT0FULCBWRUMyLCBWRUMzIG9yIFZFQzQpXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgU2V0VW5pZm9ybShzaGFkZXJNYXRlcmlhbDogU2hhZGVyTWF0ZXJpYWwgfCBFZmZlY3QsIHVuaWZvcm06IHN0cmluZywgdmFsdWU6IGFueSwgdHlwZTogbnVtYmVyKTogYm9vbGVhbiB7XHJcbiAgICAgICAgc3dpdGNoICh0eXBlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgRVBhcmFtZXRlclR5cGUuRkxPQVQ6XHJcbiAgICAgICAgICAgICAgICBzaGFkZXJNYXRlcmlhbC5zZXRGbG9hdCh1bmlmb3JtLCB2YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgY2FzZSBFUGFyYW1ldGVyVHlwZS5GTE9BVF9WRUMyOlxyXG4gICAgICAgICAgICAgICAgc2hhZGVyTWF0ZXJpYWwuc2V0VmVjdG9yMih1bmlmb3JtLCBWZWN0b3IyLkZyb21BcnJheSh2YWx1ZSkpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIGNhc2UgRVBhcmFtZXRlclR5cGUuRkxPQVRfVkVDMzpcclxuICAgICAgICAgICAgICAgIHNoYWRlck1hdGVyaWFsLnNldFZlY3RvcjModW5pZm9ybSwgVmVjdG9yMy5Gcm9tQXJyYXkodmFsdWUpKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICBjYXNlIEVQYXJhbWV0ZXJUeXBlLkZMT0FUX1ZFQzQ6XHJcbiAgICAgICAgICAgICAgICBzaGFkZXJNYXRlcmlhbC5zZXRWZWN0b3I0KHVuaWZvcm0sIFZlY3RvcjQuRnJvbUFycmF5KHZhbHVlKSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSZXR1cm5zIHRoZSB3cmFwIG1vZGUgb2YgdGhlIHRleHR1cmVcclxuICAgICAqIEBwYXJhbSBtb2RlIHRoZSBtb2RlIHZhbHVlXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgR2V0V3JhcE1vZGUobW9kZTogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgICAgICBzd2l0Y2ggKG1vZGUpIHtcclxuICAgICAgICAgICAgY2FzZSBFVGV4dHVyZVdyYXBNb2RlLkNMQU1QX1RPX0VER0U6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gVGV4dHVyZS5DTEFNUF9BRERSRVNTTU9ERTtcclxuICAgICAgICAgICAgY2FzZSBFVGV4dHVyZVdyYXBNb2RlLk1JUlJPUkVEX1JFUEVBVDpcclxuICAgICAgICAgICAgICAgIHJldHVybiBUZXh0dXJlLk1JUlJPUl9BRERSRVNTTU9ERTtcclxuICAgICAgICAgICAgY2FzZSBFVGV4dHVyZVdyYXBNb2RlLlJFUEVBVDpcclxuICAgICAgICAgICAgICAgIHJldHVybiBUZXh0dXJlLldSQVBfQUREUkVTU01PREU7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gVGV4dHVyZS5XUkFQX0FERFJFU1NNT0RFO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFJldHVybnMgdGhlIGJ5dGUgc3RyaWRlIGdpdmluZyBhbiBhY2Nlc3NvclxyXG4gICAgICogQHBhcmFtIGFjY2Vzc29yIHRoZSBHTFRGIGFjY2Vzc29yIG9iamV0XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgR2V0Qnl0ZVN0cmlkZUZyb21UeXBlKGFjY2Vzc29yOiBJR0xURkFjY2Vzc29yKTogbnVtYmVyIHtcclxuICAgICAgICAvLyBOZWVkcyB0aGlzIGZ1bmN0aW9uIHNpbmNlIFwiYnl0ZVN0cmlkZVwiIGlzbid0IHJlcXVpZXJlZCBpbiBnbFRGIGZvcm1hdFxyXG4gICAgICAgIGNvbnN0IHR5cGUgPSBhY2Nlc3Nvci50eXBlO1xyXG5cclxuICAgICAgICBzd2l0Y2ggKHR5cGUpIHtcclxuICAgICAgICAgICAgY2FzZSBcIlZFQzJcIjpcclxuICAgICAgICAgICAgICAgIHJldHVybiAyO1xyXG4gICAgICAgICAgICBjYXNlIFwiVkVDM1wiOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIDM7XHJcbiAgICAgICAgICAgIGNhc2UgXCJWRUM0XCI6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gNDtcclxuICAgICAgICAgICAgY2FzZSBcIk1BVDJcIjpcclxuICAgICAgICAgICAgICAgIHJldHVybiA0O1xyXG4gICAgICAgICAgICBjYXNlIFwiTUFUM1wiOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIDk7XHJcbiAgICAgICAgICAgIGNhc2UgXCJNQVQ0XCI6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gMTY7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gMTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSZXR1cm5zIHRoZSB0ZXh0dXJlIGZpbHRlciBtb2RlIGdpdmluZyBhIG1vZGUgdmFsdWVcclxuICAgICAqIEBwYXJhbSBtb2RlIHRoZSBmaWx0ZXIgbW9kZSB2YWx1ZVxyXG4gICAgICogQHJldHVybnMgdGhlIGZpbHRlciBtb2RlIChUT0RPIC0gbmVlZHMgdG8gYmUgYSB0eXBlPylcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBHZXRUZXh0dXJlRmlsdGVyTW9kZShtb2RlOiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgICAgIHN3aXRjaCAobW9kZSkge1xyXG4gICAgICAgICAgICBjYXNlIEVUZXh0dXJlRmlsdGVyVHlwZS5MSU5FQVI6XHJcbiAgICAgICAgICAgIGNhc2UgRVRleHR1cmVGaWx0ZXJUeXBlLkxJTkVBUl9NSVBNQVBfTkVBUkVTVDpcclxuICAgICAgICAgICAgY2FzZSBFVGV4dHVyZUZpbHRlclR5cGUuTElORUFSX01JUE1BUF9MSU5FQVI6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gVGV4dHVyZS5UUklMSU5FQVJfU0FNUExJTkdNT0RFO1xyXG4gICAgICAgICAgICBjYXNlIEVUZXh0dXJlRmlsdGVyVHlwZS5ORUFSRVNUOlxyXG4gICAgICAgICAgICBjYXNlIEVUZXh0dXJlRmlsdGVyVHlwZS5ORUFSRVNUX01JUE1BUF9ORUFSRVNUOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFRleHR1cmUuTkVBUkVTVF9TQU1QTElOR01PREU7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gVGV4dHVyZS5CSUxJTkVBUl9TQU1QTElOR01PREU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgR2V0QnVmZmVyRnJvbUJ1ZmZlclZpZXcoXHJcbiAgICAgICAgZ2x0ZlJ1bnRpbWU6IElHTFRGUnVudGltZSxcclxuICAgICAgICBidWZmZXJWaWV3OiBJR0xURkJ1ZmZlclZpZXcsXHJcbiAgICAgICAgYnl0ZU9mZnNldDogbnVtYmVyLFxyXG4gICAgICAgIGJ5dGVMZW5ndGg6IG51bWJlcixcclxuICAgICAgICBjb21wb25lbnRUeXBlOiBFQ29tcG9uZW50VHlwZVxyXG4gICAgKTogQXJyYXlCdWZmZXJWaWV3IHtcclxuICAgICAgICBieXRlT2Zmc2V0ID0gYnVmZmVyVmlldy5ieXRlT2Zmc2V0ICsgYnl0ZU9mZnNldDtcclxuXHJcbiAgICAgICAgY29uc3QgbG9hZGVkQnVmZmVyVmlldyA9IGdsdGZSdW50aW1lLmxvYWRlZEJ1ZmZlclZpZXdzW2J1ZmZlclZpZXcuYnVmZmVyXTtcclxuICAgICAgICBpZiAoYnl0ZU9mZnNldCArIGJ5dGVMZW5ndGggPiBsb2FkZWRCdWZmZXJWaWV3LmJ5dGVMZW5ndGgpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQnVmZmVyIGFjY2VzcyBpcyBvdXQgb2YgcmFuZ2VcIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBidWZmZXIgPSBsb2FkZWRCdWZmZXJWaWV3LmJ1ZmZlcjtcclxuICAgICAgICBieXRlT2Zmc2V0ICs9IGxvYWRlZEJ1ZmZlclZpZXcuYnl0ZU9mZnNldDtcclxuXHJcbiAgICAgICAgc3dpdGNoIChjb21wb25lbnRUeXBlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgRUNvbXBvbmVudFR5cGUuQllURTpcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgSW50OEFycmF5KGJ1ZmZlciwgYnl0ZU9mZnNldCwgYnl0ZUxlbmd0aCk7XHJcbiAgICAgICAgICAgIGNhc2UgRUNvbXBvbmVudFR5cGUuVU5TSUdORURfQllURTpcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgVWludDhBcnJheShidWZmZXIsIGJ5dGVPZmZzZXQsIGJ5dGVMZW5ndGgpO1xyXG4gICAgICAgICAgICBjYXNlIEVDb21wb25lbnRUeXBlLlNIT1JUOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBJbnQxNkFycmF5KGJ1ZmZlciwgYnl0ZU9mZnNldCwgYnl0ZUxlbmd0aCk7XHJcbiAgICAgICAgICAgIGNhc2UgRUNvbXBvbmVudFR5cGUuVU5TSUdORURfU0hPUlQ6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFVpbnQxNkFycmF5KGJ1ZmZlciwgYnl0ZU9mZnNldCwgYnl0ZUxlbmd0aCk7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IEZsb2F0MzJBcnJheShidWZmZXIsIGJ5dGVPZmZzZXQsIGJ5dGVMZW5ndGgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFJldHVybnMgYSBidWZmZXIgZnJvbSBpdHMgYWNjZXNzb3JcclxuICAgICAqIEBwYXJhbSBnbHRmUnVudGltZSB0aGUgR0xURiBydW50aW1lXHJcbiAgICAgKiBAcGFyYW0gYWNjZXNzb3IgdGhlIEdMVEYgYWNjZXNzb3JcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBHZXRCdWZmZXJGcm9tQWNjZXNzb3IoZ2x0ZlJ1bnRpbWU6IElHTFRGUnVudGltZSwgYWNjZXNzb3I6IElHTFRGQWNjZXNzb3IpOiBhbnkge1xyXG4gICAgICAgIGNvbnN0IGJ1ZmZlclZpZXc6IElHTFRGQnVmZmVyVmlldyA9IGdsdGZSdW50aW1lLmJ1ZmZlclZpZXdzW2FjY2Vzc29yLmJ1ZmZlclZpZXddO1xyXG4gICAgICAgIGNvbnN0IGJ5dGVMZW5ndGggPSBhY2Nlc3Nvci5jb3VudCAqIEdMVEZVdGlscy5HZXRCeXRlU3RyaWRlRnJvbVR5cGUoYWNjZXNzb3IpO1xyXG4gICAgICAgIHJldHVybiBHTFRGVXRpbHMuR2V0QnVmZmVyRnJvbUJ1ZmZlclZpZXcoZ2x0ZlJ1bnRpbWUsIGJ1ZmZlclZpZXcsIGFjY2Vzc29yLmJ5dGVPZmZzZXQsIGJ5dGVMZW5ndGgsIGFjY2Vzc29yLmNvbXBvbmVudFR5cGUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogRGVjb2RlcyBhIGJ1ZmZlciB2aWV3IGludG8gYSBzdHJpbmdcclxuICAgICAqIEBwYXJhbSB2aWV3IHRoZSBidWZmZXIgdmlld1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIERlY29kZUJ1ZmZlclRvVGV4dCh2aWV3OiBBcnJheUJ1ZmZlclZpZXcpOiBzdHJpbmcge1xyXG4gICAgICAgIGxldCByZXN1bHQgPSBcIlwiO1xyXG4gICAgICAgIGNvbnN0IGxlbmd0aCA9IHZpZXcuYnl0ZUxlbmd0aDtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7ICsraSkge1xyXG4gICAgICAgICAgICByZXN1bHQgKz0gU3RyaW5nLmZyb21DaGFyQ29kZSgoPGFueT52aWV3KVtpXSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUmV0dXJucyB0aGUgZGVmYXVsdCBtYXRlcmlhbCBvZiBnbHRmLiBSZWxhdGVkIHRvXHJcbiAgICAgKiBodHRwczovL2dpdGh1Yi5jb20vS2hyb25vc0dyb3VwL2dsVEYvdHJlZS9tYXN0ZXIvc3BlY2lmaWNhdGlvbi8xLjAjYXBwZW5kaXgtYS1kZWZhdWx0LW1hdGVyaWFsXHJcbiAgICAgKiBAcGFyYW0gc2NlbmUgdGhlIEJhYnlsb24uanMgc2NlbmVcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBHZXREZWZhdWx0TWF0ZXJpYWwoc2NlbmU6IFNjZW5lKTogU2hhZGVyTWF0ZXJpYWwge1xyXG4gICAgICAgIGlmICghR0xURlV0aWxzLl9EZWZhdWx0TWF0ZXJpYWwpIHtcclxuICAgICAgICAgICAgRWZmZWN0LlNoYWRlcnNTdG9yZVtcIkdMVEZEZWZhdWx0TWF0ZXJpYWxWZXJ0ZXhTaGFkZXJcIl0gPSBbXHJcbiAgICAgICAgICAgICAgICBcInByZWNpc2lvbiBoaWdocCBmbG9hdDtcIixcclxuICAgICAgICAgICAgICAgIFwiXCIsXHJcbiAgICAgICAgICAgICAgICBcInVuaWZvcm0gbWF0NCB3b3JsZFZpZXc7XCIsXHJcbiAgICAgICAgICAgICAgICBcInVuaWZvcm0gbWF0NCBwcm9qZWN0aW9uO1wiLFxyXG4gICAgICAgICAgICAgICAgXCJcIixcclxuICAgICAgICAgICAgICAgIFwiYXR0cmlidXRlIHZlYzMgcG9zaXRpb247XCIsXHJcbiAgICAgICAgICAgICAgICBcIlwiLFxyXG4gICAgICAgICAgICAgICAgXCJ2b2lkIG1haW4odm9pZClcIixcclxuICAgICAgICAgICAgICAgIFwie1wiLFxyXG4gICAgICAgICAgICAgICAgXCIgICAgZ2xfUG9zaXRpb24gPSBwcm9qZWN0aW9uICogd29ybGRWaWV3ICogdmVjNChwb3NpdGlvbiwgMS4wKTtcIixcclxuICAgICAgICAgICAgICAgIFwifVwiLFxyXG4gICAgICAgICAgICBdLmpvaW4oXCJcXG5cIik7XHJcblxyXG4gICAgICAgICAgICBFZmZlY3QuU2hhZGVyc1N0b3JlW1wiR0xURkRlZmF1bHRNYXRlcmlhbFBpeGVsU2hhZGVyXCJdID0gW1xyXG4gICAgICAgICAgICAgICAgXCJwcmVjaXNpb24gaGlnaHAgZmxvYXQ7XCIsXHJcbiAgICAgICAgICAgICAgICBcIlwiLFxyXG4gICAgICAgICAgICAgICAgXCJ1bmlmb3JtIHZlYzQgdV9lbWlzc2lvbjtcIixcclxuICAgICAgICAgICAgICAgIFwiXCIsXHJcbiAgICAgICAgICAgICAgICBcInZvaWQgbWFpbih2b2lkKVwiLFxyXG4gICAgICAgICAgICAgICAgXCJ7XCIsXHJcbiAgICAgICAgICAgICAgICBcIiAgICBnbF9GcmFnQ29sb3IgPSB1X2VtaXNzaW9uO1wiLFxyXG4gICAgICAgICAgICAgICAgXCJ9XCIsXHJcbiAgICAgICAgICAgIF0uam9pbihcIlxcblwiKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHNoYWRlclBhdGggPSB7XHJcbiAgICAgICAgICAgICAgICB2ZXJ0ZXg6IFwiR0xURkRlZmF1bHRNYXRlcmlhbFwiLFxyXG4gICAgICAgICAgICAgICAgZnJhZ21lbnQ6IFwiR0xURkRlZmF1bHRNYXRlcmlhbFwiLFxyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHtcclxuICAgICAgICAgICAgICAgIGF0dHJpYnV0ZXM6IFtcInBvc2l0aW9uXCJdLFxyXG4gICAgICAgICAgICAgICAgdW5pZm9ybXM6IFtcIndvcmxkVmlld1wiLCBcInByb2plY3Rpb25cIiwgXCJ1X2VtaXNzaW9uXCJdLFxyXG4gICAgICAgICAgICAgICAgc2FtcGxlcnM6IG5ldyBBcnJheTxzdHJpbmc+KCksXHJcbiAgICAgICAgICAgICAgICBuZWVkQWxwaGFCbGVuZGluZzogZmFsc2UsXHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICBHTFRGVXRpbHMuX0RlZmF1bHRNYXRlcmlhbCA9IG5ldyBTaGFkZXJNYXRlcmlhbChcIkdMVEZEZWZhdWx0TWF0ZXJpYWxcIiwgc2NlbmUsIHNoYWRlclBhdGgsIG9wdGlvbnMpO1xyXG4gICAgICAgICAgICBHTFRGVXRpbHMuX0RlZmF1bHRNYXRlcmlhbC5zZXRDb2xvcjQoXCJ1X2VtaXNzaW9uXCIsIG5ldyBDb2xvcjQoMC41LCAwLjUsIDAuNSwgMS4wKSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gR0xURlV0aWxzLl9EZWZhdWx0TWF0ZXJpYWw7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gVGhlIEdMVEYgZGVmYXVsdCBtYXRlcmlhbFxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgX0RlZmF1bHRNYXRlcmlhbDogTnVsbGFibGU8U2hhZGVyTWF0ZXJpYWw+ID0gbnVsbDtcclxufVxyXG4iLCJpbXBvcnQgeyBHTFRGTG9hZGVyRXh0ZW5zaW9uLCBHTFRGTG9hZGVyQmFzZSwgR0xURkxvYWRlciB9IGZyb20gXCIuL2dsVEZMb2FkZXJcIjtcclxuXHJcbmltcG9ydCB0eXBlIHsgSUdMVEZSdW50aW1lLCBJR0xURk1hdGVyaWFsIH0gZnJvbSBcIi4vZ2xURkxvYWRlckludGVyZmFjZXNcIjtcclxuXHJcbmltcG9ydCB7IFZlY3RvcjMgfSBmcm9tIFwiY29yZS9NYXRocy9tYXRoLnZlY3RvclwiO1xyXG5pbXBvcnQgeyBDb2xvcjMgfSBmcm9tIFwiY29yZS9NYXRocy9tYXRoLmNvbG9yXCI7XHJcbmltcG9ydCB7IFRvb2xzIH0gZnJvbSBcImNvcmUvTWlzYy90b29sc1wiO1xyXG5pbXBvcnQgeyBNYXRlcmlhbCB9IGZyb20gXCJjb3JlL01hdGVyaWFscy9tYXRlcmlhbFwiO1xyXG5pbXBvcnQgeyBTdGFuZGFyZE1hdGVyaWFsIH0gZnJvbSBcImNvcmUvTWF0ZXJpYWxzL3N0YW5kYXJkTWF0ZXJpYWxcIjtcclxuaW1wb3J0IHsgSGVtaXNwaGVyaWNMaWdodCB9IGZyb20gXCJjb3JlL0xpZ2h0cy9oZW1pc3BoZXJpY0xpZ2h0XCI7XHJcbmltcG9ydCB7IERpcmVjdGlvbmFsTGlnaHQgfSBmcm9tIFwiY29yZS9MaWdodHMvZGlyZWN0aW9uYWxMaWdodFwiO1xyXG5pbXBvcnQgeyBQb2ludExpZ2h0IH0gZnJvbSBcImNvcmUvTGlnaHRzL3BvaW50TGlnaHRcIjtcclxuaW1wb3J0IHsgU3BvdExpZ2h0IH0gZnJvbSBcImNvcmUvTGlnaHRzL3Nwb3RMaWdodFwiO1xyXG5cclxuaW50ZXJmYWNlIElHTFRGTWF0ZXJpYWxzQ29tbW9uRXh0ZW5zaW9uVmFsdWVzIHtcclxuICAgIGFtYmllbnQ/OiBudW1iZXJbXSB8IHN0cmluZztcclxuICAgIGRpZmZ1c2U/OiBudW1iZXJbXSB8IHN0cmluZztcclxuICAgIGVtaXNzaW9uPzogbnVtYmVyW10gfCBzdHJpbmc7XHJcbiAgICBzcGVjdWxhcj86IG51bWJlcltdIHwgc3RyaW5nO1xyXG4gICAgc2hpbmluZXNzPzogbnVtYmVyO1xyXG4gICAgdHJhbnNwYXJlbmN5PzogbnVtYmVyO1xyXG59XHJcblxyXG5pbnRlcmZhY2UgSUdMVEZNYXRlcmlhbHNDb21tb25FeHRlbnNpb24ge1xyXG4gICAgdGVjaG5pcXVlOiBzdHJpbmc7XHJcbiAgICB0cmFuc3BhcmVudD86IG51bWJlcjtcclxuICAgIGRvdWJsZVNpZGVkPzogYm9vbGVhbjtcclxuICAgIHZhbHVlczogSUdMVEZNYXRlcmlhbHNDb21tb25FeHRlbnNpb25WYWx1ZXM7XHJcbn1cclxuXHJcbmludGVyZmFjZSBJR0xURlJ1bnRpbWVDb21tb25FeHRlbnNpb24ge1xyXG4gICAgbGlnaHRzOiB7IFtrZXk6IHN0cmluZ106IElHTFRGTGlnaHRDb21tb25FeHRlbnNpb24gfTtcclxufVxyXG5cclxuaW50ZXJmYWNlIElHTFRGTGlnaHRDb21tb25FeHRlbnNpb24ge1xyXG4gICAgbmFtZTogc3RyaW5nO1xyXG4gICAgdHlwZTogc3RyaW5nO1xyXG5cclxuICAgIGFtYmllbnQ/OiBJR0xURkFtYmllbnRMaWdodENvbW1vbkV4dGVuc2lvbjtcclxuICAgIHBvaW50PzogSUdMVEZQb2ludExpZ2h0Q29tbW9uRXh0ZW5zaW9uO1xyXG4gICAgZGlyZWN0aW9uYWw/OiBJR0xURkRpcmVjdGlvbmFsTGlnaHRDb21tb25FeHRlbnNpb247XHJcbiAgICBzcG90PzogSUdMVEZTcG90TGlnaHRDb21tb25FeHRlbnNpb247XHJcbn1cclxuXHJcbmludGVyZmFjZSBJR0xURlBvaW50TGlnaHRDb21tb25FeHRlbnNpb24ge1xyXG4gICAgY29sb3I6IG51bWJlcltdO1xyXG4gICAgY29uc3RhbnRBdHRlbnVhdGlvbjogbnVtYmVyO1xyXG4gICAgbGluZWFyQXR0ZW51YXRpb246IG51bWJlcjtcclxuICAgIHF1YWRyYXRpY0F0dGVudWF0aW9uOiBudW1iZXI7XHJcbn1cclxuXHJcbmludGVyZmFjZSBJR0xURkFtYmllbnRMaWdodENvbW1vbkV4dGVuc2lvbiB7XHJcbiAgICBjb2xvcjogbnVtYmVyW107XHJcbn1cclxuXHJcbmludGVyZmFjZSBJR0xURkRpcmVjdGlvbmFsTGlnaHRDb21tb25FeHRlbnNpb24ge1xyXG4gICAgY29sb3I6IG51bWJlcltdO1xyXG59XHJcblxyXG5pbnRlcmZhY2UgSUdMVEZTcG90TGlnaHRDb21tb25FeHRlbnNpb24ge1xyXG4gICAgY29sb3I6IG51bWJlcltdO1xyXG4gICAgY29uc3RhbnRBdHRlbnVhdGlvbjogbnVtYmVyO1xyXG4gICAgZmFsbE9mZkFuZ2xlOiBudW1iZXI7XHJcbiAgICBmYWxsT2ZmRXhwb25lbnQ6IG51bWJlcjtcclxuICAgIGxpbmVhckF0dGVudWF0aW9uOiBudW1iZXI7XHJcbiAgICBxdWFkcmF0aWNBdHRlbnVhdGlvbjogbnVtYmVyO1xyXG59XHJcblxyXG4vKipcclxuICogQGludGVybmFsXHJcbiAqIEBkZXByZWNhdGVkXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgR0xURk1hdGVyaWFsc0NvbW1vbkV4dGVuc2lvbiBleHRlbmRzIEdMVEZMb2FkZXJFeHRlbnNpb24ge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoXCJLSFJfbWF0ZXJpYWxzX2NvbW1vblwiKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgbG9hZFJ1bnRpbWVFeHRlbnNpb25zQXN5bmMoZ2x0ZlJ1bnRpbWU6IElHTFRGUnVudGltZSk6IGJvb2xlYW4ge1xyXG4gICAgICAgIGlmICghZ2x0ZlJ1bnRpbWUuZXh0ZW5zaW9ucykge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBleHRlbnNpb246IElHTFRGUnVudGltZUNvbW1vbkV4dGVuc2lvbiA9IGdsdGZSdW50aW1lLmV4dGVuc2lvbnNbdGhpcy5uYW1lXTtcclxuICAgICAgICBpZiAoIWV4dGVuc2lvbikge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBDcmVhdGUgbGlnaHRzXHJcbiAgICAgICAgY29uc3QgbGlnaHRzID0gZXh0ZW5zaW9uLmxpZ2h0cztcclxuICAgICAgICBpZiAobGlnaHRzKSB7XHJcbiAgICAgICAgICAgIGZvciAoY29uc3QgdGhpbmcgaW4gbGlnaHRzKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBsaWdodDogSUdMVEZMaWdodENvbW1vbkV4dGVuc2lvbiA9IGxpZ2h0c1t0aGluZ107XHJcblxyXG4gICAgICAgICAgICAgICAgc3dpdGNoIChsaWdodC50eXBlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcImFtYmllbnRcIjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBhbWJpZW50TGlnaHQgPSBuZXcgSGVtaXNwaGVyaWNMaWdodChsaWdodC5uYW1lLCBuZXcgVmVjdG9yMygwLCAxLCAwKSwgZ2x0ZlJ1bnRpbWUuc2NlbmUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBhbWJpZW50ID0gbGlnaHQuYW1iaWVudDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGFtYmllbnQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFtYmllbnRMaWdodC5kaWZmdXNlID0gQ29sb3IzLkZyb21BcnJheShhbWJpZW50LmNvbG9yIHx8IFsxLCAxLCAxXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJwb2ludFwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHBvaW50TGlnaHQgPSBuZXcgUG9pbnRMaWdodChsaWdodC5uYW1lLCBuZXcgVmVjdG9yMygxMCwgMTAsIDEwKSwgZ2x0ZlJ1bnRpbWUuc2NlbmUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwb2ludCA9IGxpZ2h0LnBvaW50O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocG9pbnQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvaW50TGlnaHQuZGlmZnVzZSA9IENvbG9yMy5Gcm9tQXJyYXkocG9pbnQuY29sb3IgfHwgWzEsIDEsIDFdKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcImRpcmVjdGlvbmFsXCI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZGlyTGlnaHQgPSBuZXcgRGlyZWN0aW9uYWxMaWdodChsaWdodC5uYW1lLCBuZXcgVmVjdG9yMygwLCAtMSwgMCksIGdsdGZSdW50aW1lLnNjZW5lKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZGlyZWN0aW9uYWwgPSBsaWdodC5kaXJlY3Rpb25hbDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRpcmVjdGlvbmFsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXJMaWdodC5kaWZmdXNlID0gQ29sb3IzLkZyb21BcnJheShkaXJlY3Rpb25hbC5jb2xvciB8fCBbMSwgMSwgMV0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBjYXNlIFwic3BvdFwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHNwb3QgPSBsaWdodC5zcG90O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoc3BvdCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3BvdExpZ2h0ID0gbmV3IFNwb3RMaWdodChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaWdodC5uYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBWZWN0b3IzKDAsIDEwLCAwKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXcgVmVjdG9yMygwLCAtMSwgMCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3BvdC5mYWxsT2ZmQW5nbGUgfHwgTWF0aC5QSSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcG90LmZhbGxPZmZFeHBvbmVudCB8fCAwLjAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2x0ZlJ1bnRpbWUuc2NlbmVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcG90TGlnaHQuZGlmZnVzZSA9IENvbG9yMy5Gcm9tQXJyYXkoc3BvdC5jb2xvciB8fCBbMSwgMSwgMV0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBUb29scy5XYXJuKCdHTFRGIE1hdGVyaWFsIENvbW1vbiBleHRlbnNpb246IGxpZ2h0IHR5cGUgXCInICsgbGlnaHQudHlwZSArIFwi4oCdIG5vdCBzdXBwb3J0ZWRcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGxvYWRNYXRlcmlhbEFzeW5jKGdsdGZSdW50aW1lOiBJR0xURlJ1bnRpbWUsIGlkOiBzdHJpbmcsIG9uU3VjY2VzczogKG1hdGVyaWFsOiBNYXRlcmlhbCkgPT4gdm9pZCwgb25FcnJvcjogKG1lc3NhZ2U6IHN0cmluZykgPT4gdm9pZCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIGNvbnN0IG1hdGVyaWFsOiBJR0xURk1hdGVyaWFsID0gZ2x0ZlJ1bnRpbWUubWF0ZXJpYWxzW2lkXTtcclxuICAgICAgICBpZiAoIW1hdGVyaWFsIHx8ICFtYXRlcmlhbC5leHRlbnNpb25zKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGV4dGVuc2lvbjogSUdMVEZNYXRlcmlhbHNDb21tb25FeHRlbnNpb24gPSBtYXRlcmlhbC5leHRlbnNpb25zW3RoaXMubmFtZV07XHJcbiAgICAgICAgaWYgKCFleHRlbnNpb24pIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3Qgc3RhbmRhcmRNYXRlcmlhbCA9IG5ldyBTdGFuZGFyZE1hdGVyaWFsKGlkLCBnbHRmUnVudGltZS5zY2VuZSk7XHJcbiAgICAgICAgc3RhbmRhcmRNYXRlcmlhbC5zaWRlT3JpZW50YXRpb24gPSBNYXRlcmlhbC5Db3VudGVyQ2xvY2tXaXNlU2lkZU9yaWVudGF0aW9uO1xyXG5cclxuICAgICAgICBpZiAoZXh0ZW5zaW9uLnRlY2huaXF1ZSA9PT0gXCJDT05TVEFOVFwiKSB7XHJcbiAgICAgICAgICAgIHN0YW5kYXJkTWF0ZXJpYWwuZGlzYWJsZUxpZ2h0aW5nID0gdHJ1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHN0YW5kYXJkTWF0ZXJpYWwuYmFja0ZhY2VDdWxsaW5nID0gZXh0ZW5zaW9uLmRvdWJsZVNpZGVkID09PSB1bmRlZmluZWQgPyBmYWxzZSA6ICFleHRlbnNpb24uZG91YmxlU2lkZWQ7XHJcbiAgICAgICAgc3RhbmRhcmRNYXRlcmlhbC5hbHBoYSA9IGV4dGVuc2lvbi52YWx1ZXMudHJhbnNwYXJlbmN5ID09PSB1bmRlZmluZWQgPyAxLjAgOiBleHRlbnNpb24udmFsdWVzLnRyYW5zcGFyZW5jeTtcclxuICAgICAgICBzdGFuZGFyZE1hdGVyaWFsLnNwZWN1bGFyUG93ZXIgPSBleHRlbnNpb24udmFsdWVzLnNoaW5pbmVzcyA9PT0gdW5kZWZpbmVkID8gMC4wIDogZXh0ZW5zaW9uLnZhbHVlcy5zaGluaW5lc3M7XHJcblxyXG4gICAgICAgIC8vIEFtYmllbnRcclxuICAgICAgICBpZiAodHlwZW9mIGV4dGVuc2lvbi52YWx1ZXMuYW1iaWVudCA9PT0gXCJzdHJpbmdcIikge1xyXG4gICAgICAgICAgICB0aGlzLl9sb2FkVGV4dHVyZShnbHRmUnVudGltZSwgZXh0ZW5zaW9uLnZhbHVlcy5hbWJpZW50LCBzdGFuZGFyZE1hdGVyaWFsLCBcImFtYmllbnRUZXh0dXJlXCIsIG9uRXJyb3IpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHN0YW5kYXJkTWF0ZXJpYWwuYW1iaWVudENvbG9yID0gQ29sb3IzLkZyb21BcnJheShleHRlbnNpb24udmFsdWVzLmFtYmllbnQgfHwgWzAsIDAsIDBdKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIERpZmZ1c2VcclxuICAgICAgICBpZiAodHlwZW9mIGV4dGVuc2lvbi52YWx1ZXMuZGlmZnVzZSA9PT0gXCJzdHJpbmdcIikge1xyXG4gICAgICAgICAgICB0aGlzLl9sb2FkVGV4dHVyZShnbHRmUnVudGltZSwgZXh0ZW5zaW9uLnZhbHVlcy5kaWZmdXNlLCBzdGFuZGFyZE1hdGVyaWFsLCBcImRpZmZ1c2VUZXh0dXJlXCIsIG9uRXJyb3IpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHN0YW5kYXJkTWF0ZXJpYWwuZGlmZnVzZUNvbG9yID0gQ29sb3IzLkZyb21BcnJheShleHRlbnNpb24udmFsdWVzLmRpZmZ1c2UgfHwgWzAsIDAsIDBdKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIEVtaXNzaW9uXHJcbiAgICAgICAgaWYgKHR5cGVvZiBleHRlbnNpb24udmFsdWVzLmVtaXNzaW9uID09PSBcInN0cmluZ1wiKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2xvYWRUZXh0dXJlKGdsdGZSdW50aW1lLCBleHRlbnNpb24udmFsdWVzLmVtaXNzaW9uLCBzdGFuZGFyZE1hdGVyaWFsLCBcImVtaXNzaXZlVGV4dHVyZVwiLCBvbkVycm9yKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBzdGFuZGFyZE1hdGVyaWFsLmVtaXNzaXZlQ29sb3IgPSBDb2xvcjMuRnJvbUFycmF5KGV4dGVuc2lvbi52YWx1ZXMuZW1pc3Npb24gfHwgWzAsIDAsIDBdKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIFNwZWN1bGFyXHJcbiAgICAgICAgaWYgKHR5cGVvZiBleHRlbnNpb24udmFsdWVzLnNwZWN1bGFyID09PSBcInN0cmluZ1wiKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2xvYWRUZXh0dXJlKGdsdGZSdW50aW1lLCBleHRlbnNpb24udmFsdWVzLnNwZWN1bGFyLCBzdGFuZGFyZE1hdGVyaWFsLCBcInNwZWN1bGFyVGV4dHVyZVwiLCBvbkVycm9yKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBzdGFuZGFyZE1hdGVyaWFsLnNwZWN1bGFyQ29sb3IgPSBDb2xvcjMuRnJvbUFycmF5KGV4dGVuc2lvbi52YWx1ZXMuc3BlY3VsYXIgfHwgWzAsIDAsIDBdKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2xvYWRUZXh0dXJlKGdsdGZSdW50aW1lOiBJR0xURlJ1bnRpbWUsIGlkOiBzdHJpbmcsIG1hdGVyaWFsOiBTdGFuZGFyZE1hdGVyaWFsLCBwcm9wZXJ0eVBhdGg6IHN0cmluZywgb25FcnJvcjogKG1lc3NhZ2U6IHN0cmluZykgPT4gdm9pZCk6IHZvaWQge1xyXG4gICAgICAgIC8vIENyZWF0ZSBidWZmZXIgZnJvbSB0ZXh0dXJlIHVybFxyXG4gICAgICAgIEdMVEZMb2FkZXJCYXNlLkxvYWRUZXh0dXJlQnVmZmVyQXN5bmMoXHJcbiAgICAgICAgICAgIGdsdGZSdW50aW1lLFxyXG4gICAgICAgICAgICBpZCxcclxuICAgICAgICAgICAgKGJ1ZmZlcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgLy8gQ3JlYXRlIHRleHR1cmUgZnJvbSBidWZmZXJcclxuICAgICAgICAgICAgICAgIEdMVEZMb2FkZXJCYXNlLkNyZWF0ZVRleHR1cmVBc3luYyhnbHRmUnVudGltZSwgaWQsIGJ1ZmZlciwgKHRleHR1cmUpID0+ICgoPGFueT5tYXRlcmlhbClbcHJvcGVydHlQYXRoXSA9IHRleHR1cmUpKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgb25FcnJvclxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXHJcbkdMVEZMb2FkZXIuUmVnaXN0ZXJFeHRlbnNpb24obmV3IEdMVEZNYXRlcmlhbHNDb21tb25FeHRlbnNpb24oKSk7XHJcbiIsImV4cG9ydCAqIGZyb20gXCIuL2dsVEZCaW5hcnlFeHRlbnNpb25cIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vZ2xURkxvYWRlclwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9nbFRGTG9hZGVySW50ZXJmYWNlc1wiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9nbFRGTG9hZGVyVXRpbHNcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vZ2xURk1hdGVyaWFsc0NvbW1vbkV4dGVuc2lvblwiO1xyXG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnMgKi9cclxuLyogZXNsaW50LWRpc2FibGUgQHR5cGVzY3JpcHQtZXNsaW50L25hbWluZy1jb252ZW50aW9uICovXHJcbmltcG9ydCB0eXBlICogYXMgR0xURjIgZnJvbSBcImJhYnlsb25qcy1nbHRmMmludGVyZmFjZVwiO1xyXG5pbXBvcnQgdHlwZSB7IE51bGxhYmxlIH0gZnJvbSBcImNvcmUvdHlwZXNcIjtcclxuaW1wb3J0IHR5cGUgeyBPYnNlcnZlciB9IGZyb20gXCJjb3JlL01pc2Mvb2JzZXJ2YWJsZVwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcImNvcmUvTWlzYy9vYnNlcnZhYmxlXCI7XHJcbmltcG9ydCB7IFRvb2xzIH0gZnJvbSBcImNvcmUvTWlzYy90b29sc1wiO1xyXG5pbXBvcnQgdHlwZSB7IENhbWVyYSB9IGZyb20gXCJjb3JlL0NhbWVyYXMvY2FtZXJhXCI7XHJcbmltcG9ydCB0eXBlIHsgQmFzZVRleHR1cmUgfSBmcm9tIFwiY29yZS9NYXRlcmlhbHMvVGV4dHVyZXMvYmFzZVRleHR1cmVcIjtcclxuaW1wb3J0IHR5cGUgeyBNYXRlcmlhbCB9IGZyb20gXCJjb3JlL01hdGVyaWFscy9tYXRlcmlhbFwiO1xyXG5pbXBvcnQgdHlwZSB7IEFic3RyYWN0TWVzaCB9IGZyb20gXCJjb3JlL01lc2hlcy9hYnN0cmFjdE1lc2hcIjtcclxuaW1wb3J0IHR5cGUge1xyXG4gICAgSVNjZW5lTG9hZGVyUGx1Z2luRmFjdG9yeSxcclxuICAgIElTY2VuZUxvYWRlclBsdWdpbixcclxuICAgIElTY2VuZUxvYWRlclBsdWdpbkFzeW5jLFxyXG4gICAgSVNjZW5lTG9hZGVyUHJvZ3Jlc3NFdmVudCxcclxuICAgIElTY2VuZUxvYWRlclBsdWdpbkV4dGVuc2lvbnMsXHJcbiAgICBJU2NlbmVMb2FkZXJBc3luY1Jlc3VsdCxcclxufSBmcm9tIFwiY29yZS9Mb2FkaW5nL3NjZW5lTG9hZGVyXCI7XHJcbmltcG9ydCB7IFNjZW5lTG9hZGVyIH0gZnJvbSBcImNvcmUvTG9hZGluZy9zY2VuZUxvYWRlclwiO1xyXG5pbXBvcnQgeyBBc3NldENvbnRhaW5lciB9IGZyb20gXCJjb3JlL2Fzc2V0Q29udGFpbmVyXCI7XHJcbmltcG9ydCB0eXBlIHsgU2NlbmUsIElEaXNwb3NhYmxlIH0gZnJvbSBcImNvcmUvc2NlbmVcIjtcclxuaW1wb3J0IHR5cGUgeyBXZWJSZXF1ZXN0IH0gZnJvbSBcImNvcmUvTWlzYy93ZWJSZXF1ZXN0XCI7XHJcbmltcG9ydCB0eXBlIHsgSUZpbGVSZXF1ZXN0IH0gZnJvbSBcImNvcmUvTWlzYy9maWxlUmVxdWVzdFwiO1xyXG5pbXBvcnQgeyBMb2dnZXIgfSBmcm9tIFwiY29yZS9NaXNjL2xvZ2dlclwiO1xyXG5pbXBvcnQgdHlwZSB7IElEYXRhQnVmZmVyIH0gZnJvbSBcImNvcmUvTWlzYy9kYXRhUmVhZGVyXCI7XHJcbmltcG9ydCB7IERhdGFSZWFkZXIgfSBmcm9tIFwiY29yZS9NaXNjL2RhdGFSZWFkZXJcIjtcclxuaW1wb3J0IHsgR0xURlZhbGlkYXRpb24gfSBmcm9tIFwiLi9nbFRGVmFsaWRhdGlvblwiO1xyXG5pbXBvcnQgdHlwZSB7IExvYWRGaWxlRXJyb3IgfSBmcm9tIFwiY29yZS9NaXNjL2ZpbGVUb29sc1wiO1xyXG5pbXBvcnQgeyBEZWNvZGVCYXNlNjRVcmxUb0JpbmFyeSB9IGZyb20gXCJjb3JlL01pc2MvZmlsZVRvb2xzXCI7XHJcbmltcG9ydCB7IFJ1bnRpbWVFcnJvciwgRXJyb3JDb2RlcyB9IGZyb20gXCJjb3JlL01pc2MvZXJyb3JcIjtcclxuaW1wb3J0IHR5cGUgeyBUcmFuc2Zvcm1Ob2RlIH0gZnJvbSBcImNvcmUvTWVzaGVzL3RyYW5zZm9ybU5vZGVcIjtcclxuaW1wb3J0IHR5cGUgeyBNb3JwaFRhcmdldE1hbmFnZXIgfSBmcm9tIFwiY29yZS9Nb3JwaC9tb3JwaFRhcmdldE1hbmFnZXJcIjtcclxuXHJcbmludGVyZmFjZSBJRmlsZVJlcXVlc3RJbmZvIGV4dGVuZHMgSUZpbGVSZXF1ZXN0IHtcclxuICAgIF9sZW5ndGhDb21wdXRhYmxlPzogYm9vbGVhbjtcclxuICAgIF9sb2FkZWQ/OiBudW1iZXI7XHJcbiAgICBfdG90YWw/OiBudW1iZXI7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlYWRBc3luYyhhcnJheUJ1ZmZlcjogQXJyYXlCdWZmZXIsIGJ5dGVPZmZzZXQ6IG51bWJlciwgYnl0ZUxlbmd0aDogbnVtYmVyKTogUHJvbWlzZTxVaW50OEFycmF5PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUobmV3IFVpbnQ4QXJyYXkoYXJyYXlCdWZmZXIsIGJ5dGVPZmZzZXQsIGJ5dGVMZW5ndGgpKTtcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlYWRWaWV3QXN5bmMoYXJyYXlCdWZmZXJWaWV3OiBBcnJheUJ1ZmZlclZpZXcsIGJ5dGVPZmZzZXQ6IG51bWJlciwgYnl0ZUxlbmd0aDogbnVtYmVyKTogUHJvbWlzZTxVaW50OEFycmF5PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGlmIChhcnJheUJ1ZmZlclZpZXcuYnl0ZU9mZnNldCArIGJ5dGVPZmZzZXQgKyBieXRlTGVuZ3RoID4gYXJyYXlCdWZmZXJWaWV3LmJ1ZmZlci5ieXRlTGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkFycmF5IGxlbmd0aCBvdXQgb2YgYm91bmRzLlwiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUobmV3IFVpbnQ4QXJyYXkoYXJyYXlCdWZmZXJWaWV3LmJ1ZmZlciwgYXJyYXlCdWZmZXJWaWV3LmJ5dGVPZmZzZXQgKyBieXRlT2Zmc2V0LCBieXRlTGVuZ3RoKSk7XHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGUpO1xyXG4gICAgfVxyXG59XHJcblxyXG4vKipcclxuICogTW9kZSB0aGF0IGRldGVybWluZXMgdGhlIGNvb3JkaW5hdGUgc3lzdGVtIHRvIHVzZS5cclxuICovXHJcbmV4cG9ydCBlbnVtIEdMVEZMb2FkZXJDb29yZGluYXRlU3lzdGVtTW9kZSB7XHJcbiAgICAvKipcclxuICAgICAqIEF1dG9tYXRpY2FsbHkgY29udmVydCB0aGUgZ2xURiByaWdodC1oYW5kZWQgZGF0YSB0byB0aGUgYXBwcm9wcmlhdGUgc3lzdGVtIGJhc2VkIG9uIHRoZSBjdXJyZW50IGNvb3JkaW5hdGUgc3lzdGVtIG1vZGUgb2YgdGhlIHNjZW5lLlxyXG4gICAgICovXHJcbiAgICBBVVRPLFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU2V0cyB0aGUgdXNlUmlnaHRIYW5kZWRTeXN0ZW0gZmxhZyBvbiB0aGUgc2NlbmUuXHJcbiAgICAgKi9cclxuICAgIEZPUkNFX1JJR0hUX0hBTkRFRCxcclxufVxyXG5cclxuLyoqXHJcbiAqIE1vZGUgdGhhdCBkZXRlcm1pbmVzIHdoYXQgYW5pbWF0aW9ucyB3aWxsIHN0YXJ0LlxyXG4gKi9cclxuZXhwb3J0IGVudW0gR0xURkxvYWRlckFuaW1hdGlvblN0YXJ0TW9kZSB7XHJcbiAgICAvKipcclxuICAgICAqIE5vIGFuaW1hdGlvbiB3aWxsIHN0YXJ0LlxyXG4gICAgICovXHJcbiAgICBOT05FLFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhlIGZpcnN0IGFuaW1hdGlvbiB3aWxsIHN0YXJ0LlxyXG4gICAgICovXHJcbiAgICBGSVJTVCxcclxuXHJcbiAgICAvKipcclxuICAgICAqIEFsbCBhbmltYXRpb25zIHdpbGwgc3RhcnQuXHJcbiAgICAgKi9cclxuICAgIEFMTCxcclxufVxyXG5cclxuLyoqXHJcbiAqIEludGVyZmFjZSB0aGF0IGNvbnRhaW5zIHRoZSBkYXRhIGZvciB0aGUgZ2xURiBhc3NldC5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUdMVEZMb2FkZXJEYXRhIHtcclxuICAgIC8qKlxyXG4gICAgICogVGhlIG9iamVjdCB0aGF0IHJlcHJlc2VudHMgdGhlIGdsVEYgSlNPTi5cclxuICAgICAqL1xyXG4gICAganNvbjogT2JqZWN0O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhlIEJJTiBjaHVuayBvZiBhIGJpbmFyeSBnbFRGLlxyXG4gICAgICovXHJcbiAgICBiaW46IE51bGxhYmxlPElEYXRhQnVmZmVyPjtcclxufVxyXG5cclxuLyoqXHJcbiAqIEludGVyZmFjZSBmb3IgZXh0ZW5kaW5nIHRoZSBsb2FkZXIuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElHTFRGTG9hZGVyRXh0ZW5zaW9uIHtcclxuICAgIC8qKlxyXG4gICAgICogVGhlIG5hbWUgb2YgdGhpcyBleHRlbnNpb24uXHJcbiAgICAgKi9cclxuICAgIHJlYWRvbmx5IG5hbWU6IHN0cmluZztcclxuXHJcbiAgICAvKipcclxuICAgICAqIERlZmluZXMgd2hldGhlciB0aGlzIGV4dGVuc2lvbiBpcyBlbmFibGVkLlxyXG4gICAgICovXHJcbiAgICBlbmFibGVkOiBib29sZWFuO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogRGVmaW5lcyB0aGUgb3JkZXIgb2YgdGhpcyBleHRlbnNpb24uXHJcbiAgICAgKiBUaGUgbG9hZGVyIHNvcnRzIHRoZSBleHRlbnNpb25zIHVzaW5nIHRoZXNlIHZhbHVlcyB3aGVuIGxvYWRpbmcuXHJcbiAgICAgKi9cclxuICAgIG9yZGVyPzogbnVtYmVyO1xyXG59XHJcblxyXG4vKipcclxuICogTG9hZGVyIHN0YXRlLlxyXG4gKi9cclxuZXhwb3J0IGVudW0gR0xURkxvYWRlclN0YXRlIHtcclxuICAgIC8qKlxyXG4gICAgICogVGhlIGFzc2V0IGlzIGxvYWRpbmcuXHJcbiAgICAgKi9cclxuICAgIExPQURJTkcsXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgYXNzZXQgaXMgcmVhZHkgZm9yIHJlbmRlcmluZy5cclxuICAgICAqL1xyXG4gICAgUkVBRFksXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgYXNzZXQgaXMgY29tcGxldGVseSBsb2FkZWQuXHJcbiAgICAgKi9cclxuICAgIENPTVBMRVRFLFxyXG59XHJcblxyXG4vKiogQGludGVybmFsICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUdMVEZMb2FkZXIgZXh0ZW5kcyBJRGlzcG9zYWJsZSB7XHJcbiAgICBpbXBvcnRNZXNoQXN5bmM6IChcclxuICAgICAgICBtZXNoZXNOYW1lczogYW55LFxyXG4gICAgICAgIHNjZW5lOiBTY2VuZSxcclxuICAgICAgICBjb250YWluZXI6IE51bGxhYmxlPEFzc2V0Q29udGFpbmVyPixcclxuICAgICAgICBkYXRhOiBJR0xURkxvYWRlckRhdGEsXHJcbiAgICAgICAgcm9vdFVybDogc3RyaW5nLFxyXG4gICAgICAgIG9uUHJvZ3Jlc3M/OiAoZXZlbnQ6IElTY2VuZUxvYWRlclByb2dyZXNzRXZlbnQpID0+IHZvaWQsXHJcbiAgICAgICAgZmlsZU5hbWU/OiBzdHJpbmdcclxuICAgICkgPT4gUHJvbWlzZTxJU2NlbmVMb2FkZXJBc3luY1Jlc3VsdD47XHJcbiAgICBsb2FkQXN5bmM6IChzY2VuZTogU2NlbmUsIGRhdGE6IElHTFRGTG9hZGVyRGF0YSwgcm9vdFVybDogc3RyaW5nLCBvblByb2dyZXNzPzogKGV2ZW50OiBJU2NlbmVMb2FkZXJQcm9ncmVzc0V2ZW50KSA9PiB2b2lkLCBmaWxlTmFtZT86IHN0cmluZykgPT4gUHJvbWlzZTx2b2lkPjtcclxufVxyXG5cclxuLyoqXHJcbiAqIEZpbGUgbG9hZGVyIGZvciBsb2FkaW5nIGdsVEYgZmlsZXMgaW50byBhIHNjZW5lLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIEdMVEZGaWxlTG9hZGVyIGltcGxlbWVudHMgSURpc3Bvc2FibGUsIElTY2VuZUxvYWRlclBsdWdpbkFzeW5jLCBJU2NlbmVMb2FkZXJQbHVnaW5GYWN0b3J5IHtcclxuICAgIC8qKiBAaW50ZXJuYWwgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgX0NyZWF0ZUdMVEYxTG9hZGVyOiAocGFyZW50OiBHTFRGRmlsZUxvYWRlcikgPT4gSUdMVEZMb2FkZXI7XHJcblxyXG4gICAgLyoqIEBpbnRlcm5hbCAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBfQ3JlYXRlR0xURjJMb2FkZXI6IChwYXJlbnQ6IEdMVEZGaWxlTG9hZGVyKSA9PiBJR0xURkxvYWRlcjtcclxuXHJcbiAgICAvLyAtLS0tLS0tLS0tLS0tLVxyXG4gICAgLy8gQ29tbW9uIG9wdGlvbnNcclxuICAgIC8vIC0tLS0tLS0tLS0tLS0tXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSYWlzZWQgd2hlbiB0aGUgYXNzZXQgaGFzIGJlZW4gcGFyc2VkXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBvblBhcnNlZE9ic2VydmFibGUgPSBuZXcgT2JzZXJ2YWJsZTxJR0xURkxvYWRlckRhdGE+KCk7XHJcblxyXG4gICAgcHJpdmF0ZSBfb25QYXJzZWRPYnNlcnZlcjogTnVsbGFibGU8T2JzZXJ2ZXI8SUdMVEZMb2FkZXJEYXRhPj47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSYWlzZWQgd2hlbiB0aGUgYXNzZXQgaGFzIGJlZW4gcGFyc2VkXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzZXQgb25QYXJzZWQoY2FsbGJhY2s6IChsb2FkZXJEYXRhOiBJR0xURkxvYWRlckRhdGEpID0+IHZvaWQpIHtcclxuICAgICAgICBpZiAodGhpcy5fb25QYXJzZWRPYnNlcnZlcikge1xyXG4gICAgICAgICAgICB0aGlzLm9uUGFyc2VkT2JzZXJ2YWJsZS5yZW1vdmUodGhpcy5fb25QYXJzZWRPYnNlcnZlcik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX29uUGFyc2VkT2JzZXJ2ZXIgPSB0aGlzLm9uUGFyc2VkT2JzZXJ2YWJsZS5hZGQoY2FsbGJhY2spO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIC0tLS0tLS0tLS1cclxuICAgIC8vIFYxIG9wdGlvbnNcclxuICAgIC8vIC0tLS0tLS0tLS1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNldCB0aGlzIHByb3BlcnR5IHRvIGZhbHNlIHRvIGRpc2FibGUgaW5jcmVtZW50YWwgbG9hZGluZyB3aGljaCBkZWxheXMgdGhlIGxvYWRlciBmcm9tIGNhbGxpbmcgdGhlIHN1Y2Nlc3MgY2FsbGJhY2sgdW50aWwgYWZ0ZXIgbG9hZGluZyB0aGUgbWVzaGVzIGFuZCBzaGFkZXJzLlxyXG4gICAgICogVGV4dHVyZXMgYWx3YXlzIGxvYWRzIGFzeW5jaHJvbm91c2x5LiBGb3IgZXhhbXBsZSwgdGhlIHN1Y2Nlc3MgY2FsbGJhY2sgY2FuIGNvbXB1dGUgdGhlIGJvdW5kaW5nIGluZm9ybWF0aW9uIG9mIHRoZSBsb2FkZWQgbWVzaGVzIHdoZW4gaW5jcmVtZW50YWwgbG9hZGluZyBpcyBkaXNhYmxlZC5cclxuICAgICAqIERlZmF1bHRzIHRvIHRydWUuXHJcbiAgICAgKiBAaW50ZXJuYWxcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBJbmNyZW1lbnRhbExvYWRpbmcgPSB0cnVlO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogU2V0IHRoaXMgcHJvcGVydHkgdG8gdHJ1ZSBpbiBvcmRlciB0byB3b3JrIHdpdGggaG9tb2dlbmVvdXMgY29vcmRpbmF0ZXMsIGF2YWlsYWJsZSB3aXRoIHNvbWUgY29udmVydGVycyBhbmQgZXhwb3J0ZXJzLlxyXG4gICAgICogRGVmYXVsdHMgdG8gZmFsc2UuIFNlZSBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9Ib21vZ2VuZW91c19jb29yZGluYXRlcy5cclxuICAgICAqIEBpbnRlcm5hbFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIEhvbW9nZW5lb3VzQ29vcmRpbmF0ZXMgPSBmYWxzZTtcclxuXHJcbiAgICAvLyAtLS0tLS0tLS0tXHJcbiAgICAvLyBWMiBvcHRpb25zXHJcbiAgICAvLyAtLS0tLS0tLS0tXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgY29vcmRpbmF0ZSBzeXN0ZW0gbW9kZS4gRGVmYXVsdHMgdG8gQVVUTy5cclxuICAgICAqL1xyXG4gICAgcHVibGljIGNvb3JkaW5hdGVTeXN0ZW1Nb2RlID0gR0xURkxvYWRlckNvb3JkaW5hdGVTeXN0ZW1Nb2RlLkFVVE87XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgYW5pbWF0aW9uIHN0YXJ0IG1vZGUuIERlZmF1bHRzIHRvIEZJUlNULlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgYW5pbWF0aW9uU3RhcnRNb2RlID0gR0xURkxvYWRlckFuaW1hdGlvblN0YXJ0TW9kZS5GSVJTVDtcclxuXHJcbiAgICAvKipcclxuICAgICAqIERlZmluZXMgaWYgdGhlIGxvYWRlciBzaG91bGQgY29tcGlsZSBtYXRlcmlhbHMgYmVmb3JlIHJhaXNpbmcgdGhlIHN1Y2Nlc3MgY2FsbGJhY2suIERlZmF1bHRzIHRvIGZhbHNlLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgY29tcGlsZU1hdGVyaWFscyA9IGZhbHNlO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogRGVmaW5lcyBpZiB0aGUgbG9hZGVyIHNob3VsZCBhbHNvIGNvbXBpbGUgbWF0ZXJpYWxzIHdpdGggY2xpcCBwbGFuZXMuIERlZmF1bHRzIHRvIGZhbHNlLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgdXNlQ2xpcFBsYW5lID0gZmFsc2U7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBEZWZpbmVzIGlmIHRoZSBsb2FkZXIgc2hvdWxkIGNvbXBpbGUgc2hhZG93IGdlbmVyYXRvcnMgYmVmb3JlIHJhaXNpbmcgdGhlIHN1Y2Nlc3MgY2FsbGJhY2suIERlZmF1bHRzIHRvIGZhbHNlLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgY29tcGlsZVNoYWRvd0dlbmVyYXRvcnMgPSBmYWxzZTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIERlZmluZXMgaWYgdGhlIEFscGhhIGJsZW5kZWQgbWF0ZXJpYWxzIGFyZSBvbmx5IGFwcGxpZWQgYXMgY292ZXJhZ2UuXHJcbiAgICAgKiBJZiBmYWxzZSwgKGRlZmF1bHQpIFRoZSBsdW1pbmFuY2Ugb2YgZWFjaCBwaXhlbCB3aWxsIHJlZHVjZSBpdHMgb3BhY2l0eSB0byBzaW11bGF0ZSB0aGUgYmVoYXZpb3VyIG9mIG1vc3QgcGh5c2ljYWwgbWF0ZXJpYWxzLlxyXG4gICAgICogSWYgdHJ1ZSwgbm8gZXh0cmEgZWZmZWN0cyBhcmUgYXBwbGllZCB0byB0cmFuc3BhcmVudCBwaXhlbHMuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyB0cmFuc3BhcmVuY3lBc0NvdmVyYWdlID0gZmFsc2U7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBEZWZpbmVzIGlmIHRoZSBsb2FkZXIgc2hvdWxkIHVzZSByYW5nZSByZXF1ZXN0cyB3aGVuIGxvYWQgYmluYXJ5IGdsVEYgZmlsZXMgZnJvbSBIVFRQLlxyXG4gICAgICogRW5hYmxpbmcgd2lsbCBkaXNhYmxlIG9mZmxpbmUgc3VwcG9ydCBhbmQgZ2xURiB2YWxpZGF0b3IuXHJcbiAgICAgKiBEZWZhdWx0cyB0byBmYWxzZS5cclxuICAgICAqL1xyXG4gICAgcHVibGljIHVzZVJhbmdlUmVxdWVzdHMgPSBmYWxzZTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIERlZmluZXMgaWYgdGhlIGxvYWRlciBzaG91bGQgY3JlYXRlIGluc3RhbmNlcyB3aGVuIG11bHRpcGxlIGdsVEYgbm9kZXMgcG9pbnQgdG8gdGhlIHNhbWUgZ2xURiBtZXNoLiBEZWZhdWx0cyB0byB0cnVlLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgY3JlYXRlSW5zdGFuY2VzID0gdHJ1ZTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIERlZmluZXMgaWYgdGhlIGxvYWRlciBzaG91bGQgYWx3YXlzIGNvbXB1dGUgdGhlIGJvdW5kaW5nIGJveGVzIG9mIG1lc2hlcyBhbmQgbm90IHVzZSB0aGUgbWluL21heCB2YWx1ZXMgZnJvbSB0aGUgcG9zaXRpb24gYWNjZXNzb3IuIERlZmF1bHRzIHRvIGZhbHNlLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgYWx3YXlzQ29tcHV0ZUJvdW5kaW5nQm94ID0gZmFsc2U7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBJZiB0cnVlLCBsb2FkIGFsbCBtYXRlcmlhbHMgZGVmaW5lZCBpbiB0aGUgZmlsZSwgZXZlbiBpZiBub3QgdXNlZCBieSBhbnkgbWVzaC4gRGVmYXVsdHMgdG8gZmFsc2UuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBsb2FkQWxsTWF0ZXJpYWxzID0gZmFsc2U7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBJZiB0cnVlLCBsb2FkIG9ubHkgdGhlIG1hdGVyaWFscyBkZWZpbmVkIGluIHRoZSBmaWxlLiBEZWZhdWx0cyB0byBmYWxzZS5cclxuICAgICAqL1xyXG4gICAgcHVibGljIGxvYWRPbmx5TWF0ZXJpYWxzID0gZmFsc2U7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBJZiB0cnVlLCBkbyBub3QgbG9hZCBhbnkgbWF0ZXJpYWxzIGRlZmluZWQgaW4gdGhlIGZpbGUuIERlZmF1bHRzIHRvIGZhbHNlLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc2tpcE1hdGVyaWFscyA9IGZhbHNlO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogSWYgdHJ1ZSwgbG9hZCB0aGUgY29sb3IgKGdhbW1hIGVuY29kZWQpIHRleHR1cmVzIGludG8gc1JHQiBidWZmZXJzIChpZiBzdXBwb3J0ZWQgYnkgdGhlIEdQVSksIHdoaWNoIHdpbGwgeWllbGQgbW9yZSBhY2N1cmF0ZSByZXN1bHRzIHdoZW4gc2FtcGxpbmcgdGhlIHRleHR1cmUuIERlZmF1bHRzIHRvIHRydWUuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyB1c2VTUkdCQnVmZmVycyA9IHRydWU7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBXaGVuIGxvYWRpbmcgZ2xURiBhbmltYXRpb25zLCB3aGljaCBhcmUgZGVmaW5lZCBpbiBzZWNvbmRzLCB0YXJnZXQgdGhlbSB0byB0aGlzIEZQUy4gRGVmYXVsdHMgdG8gNjAuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyB0YXJnZXRGcHMgPSA2MDtcclxuXHJcbiAgICAvKipcclxuICAgICAqIERlZmluZXMgaWYgdGhlIGxvYWRlciBzaG91bGQgYWx3YXlzIGNvbXB1dGUgdGhlIG5lYXJlc3QgY29tbW9uIGFuY2VzdG9yIG9mIHRoZSBza2VsZXRvbiBqb2ludHMgaW5zdGVhZCBvZiB1c2luZyBgc2tpbi5za2VsZXRvbmAuIERlZmF1bHRzIHRvIGZhbHNlLlxyXG4gICAgICogU2V0IHRoaXMgdG8gdHJ1ZSBpZiBsb2FkaW5nIGFzc2V0cyB3aXRoIGludmFsaWQgYHNraW4uc2tlbGV0b25gIHZhbHVlcy5cclxuICAgICAqL1xyXG4gICAgcHVibGljIGFsd2F5c0NvbXB1dGVTa2VsZXRvblJvb3ROb2RlID0gZmFsc2U7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBGdW5jdGlvbiBjYWxsZWQgYmVmb3JlIGxvYWRpbmcgYSB1cmwgcmVmZXJlbmNlZCBieSB0aGUgYXNzZXQuXHJcbiAgICAgKiBAcGFyYW0gdXJsXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBwcmVwcm9jZXNzVXJsQXN5bmMgPSAodXJsOiBzdHJpbmcpID0+IFByb21pc2UucmVzb2x2ZSh1cmwpO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogT2JzZXJ2YWJsZSByYWlzZWQgd2hlbiB0aGUgbG9hZGVyIGNyZWF0ZXMgYSBtZXNoIGFmdGVyIHBhcnNpbmcgdGhlIGdsVEYgcHJvcGVydGllcyBvZiB0aGUgbWVzaC5cclxuICAgICAqIE5vdGUgdGhhdCB0aGUgb2JzZXJ2YWJsZSBpcyByYWlzZWQgYXMgc29vbiBhcyB0aGUgbWVzaCBvYmplY3QgaXMgY3JlYXRlZCwgbWVhbmluZyBzb21lIGRhdGEgbWF5IG5vdCBoYXZlIGJlZW4gc2V0dXAgeWV0IGZvciB0aGlzIG1lc2ggKHZlcnRleCBkYXRhLCBtb3JwaCB0YXJnZXRzLCBtYXRlcmlhbCwgLi4uKVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgcmVhZG9ubHkgb25NZXNoTG9hZGVkT2JzZXJ2YWJsZSA9IG5ldyBPYnNlcnZhYmxlPEFic3RyYWN0TWVzaD4oKTtcclxuXHJcbiAgICBwcml2YXRlIF9vbk1lc2hMb2FkZWRPYnNlcnZlcjogTnVsbGFibGU8T2JzZXJ2ZXI8QWJzdHJhY3RNZXNoPj47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDYWxsYmFjayByYWlzZWQgd2hlbiB0aGUgbG9hZGVyIGNyZWF0ZXMgYSBtZXNoIGFmdGVyIHBhcnNpbmcgdGhlIGdsVEYgcHJvcGVydGllcyBvZiB0aGUgbWVzaC5cclxuICAgICAqIE5vdGUgdGhhdCB0aGUgY2FsbGJhY2sgaXMgY2FsbGVkIGFzIHNvb24gYXMgdGhlIG1lc2ggb2JqZWN0IGlzIGNyZWF0ZWQsIG1lYW5pbmcgc29tZSBkYXRhIG1heSBub3QgaGF2ZSBiZWVuIHNldHVwIHlldCBmb3IgdGhpcyBtZXNoICh2ZXJ0ZXggZGF0YSwgbW9ycGggdGFyZ2V0cywgbWF0ZXJpYWwsIC4uLilcclxuICAgICAqL1xyXG4gICAgcHVibGljIHNldCBvbk1lc2hMb2FkZWQoY2FsbGJhY2s6IChtZXNoOiBBYnN0cmFjdE1lc2gpID0+IHZvaWQpIHtcclxuICAgICAgICBpZiAodGhpcy5fb25NZXNoTG9hZGVkT2JzZXJ2ZXIpIHtcclxuICAgICAgICAgICAgdGhpcy5vbk1lc2hMb2FkZWRPYnNlcnZhYmxlLnJlbW92ZSh0aGlzLl9vbk1lc2hMb2FkZWRPYnNlcnZlcik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX29uTWVzaExvYWRlZE9ic2VydmVyID0gdGhpcy5vbk1lc2hMb2FkZWRPYnNlcnZhYmxlLmFkZChjYWxsYmFjayk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDYWxsYmFjayByYWlzZWQgd2hlbiB0aGUgbG9hZGVyIGNyZWF0ZXMgYSBza2luIGFmdGVyIHBhcnNpbmcgdGhlIGdsVEYgcHJvcGVydGllcyBvZiB0aGUgc2tpbiBub2RlLlxyXG4gICAgICogQHNlZSBodHRwczovL2RvYy5iYWJ5bG9uanMuY29tL2ZlYXR1cmVzL2ZlYXR1cmVzRGVlcERpdmUvaW1wb3J0ZXJzL2dsVEYvZ2xURlNraW5uaW5nI2lnbm9yaW5nLXRoZS10cmFuc2Zvcm0tb2YtdGhlLXNraW5uZWQtbWVzaFxyXG4gICAgICogQHBhcmFtIG5vZGUgLSB0aGUgdHJhbnNmb3JtIG5vZGUgdGhhdCBjb3JyZXNwb25kcyB0byB0aGUgb3JpZ2luYWwgZ2xURiBza2luIG5vZGUgdXNlZCBmb3IgYW5pbWF0aW9uc1xyXG4gICAgICogQHBhcmFtIHNraW5uZWROb2RlIC0gdGhlIHRyYW5zZm9ybSBub2RlIHRoYXQgaXMgdGhlIHNraW5uZWQgbWVzaCBpdHNlbGYgb3IgdGhlIHBhcmVudCBvZiB0aGUgc2tpbm5lZCBtZXNoZXNcclxuICAgICAqL1xyXG4gICAgcHVibGljIHJlYWRvbmx5IG9uU2tpbkxvYWRlZE9ic2VydmFibGUgPSBuZXcgT2JzZXJ2YWJsZTx7IG5vZGU6IFRyYW5zZm9ybU5vZGU7IHNraW5uZWROb2RlOiBUcmFuc2Zvcm1Ob2RlIH0+KCk7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBPYnNlcnZhYmxlIHJhaXNlZCB3aGVuIHRoZSBsb2FkZXIgY3JlYXRlcyBhIHRleHR1cmUgYWZ0ZXIgcGFyc2luZyB0aGUgZ2xURiBwcm9wZXJ0aWVzIG9mIHRoZSB0ZXh0dXJlLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgcmVhZG9ubHkgb25UZXh0dXJlTG9hZGVkT2JzZXJ2YWJsZSA9IG5ldyBPYnNlcnZhYmxlPEJhc2VUZXh0dXJlPigpO1xyXG5cclxuICAgIHByaXZhdGUgX29uVGV4dHVyZUxvYWRlZE9ic2VydmVyOiBOdWxsYWJsZTxPYnNlcnZlcjxCYXNlVGV4dHVyZT4+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ2FsbGJhY2sgcmFpc2VkIHdoZW4gdGhlIGxvYWRlciBjcmVhdGVzIGEgdGV4dHVyZSBhZnRlciBwYXJzaW5nIHRoZSBnbFRGIHByb3BlcnRpZXMgb2YgdGhlIHRleHR1cmUuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzZXQgb25UZXh0dXJlTG9hZGVkKGNhbGxiYWNrOiAodGV4dHVyZTogQmFzZVRleHR1cmUpID0+IHZvaWQpIHtcclxuICAgICAgICBpZiAodGhpcy5fb25UZXh0dXJlTG9hZGVkT2JzZXJ2ZXIpIHtcclxuICAgICAgICAgICAgdGhpcy5vblRleHR1cmVMb2FkZWRPYnNlcnZhYmxlLnJlbW92ZSh0aGlzLl9vblRleHR1cmVMb2FkZWRPYnNlcnZlcik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX29uVGV4dHVyZUxvYWRlZE9ic2VydmVyID0gdGhpcy5vblRleHR1cmVMb2FkZWRPYnNlcnZhYmxlLmFkZChjYWxsYmFjayk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBPYnNlcnZhYmxlIHJhaXNlZCB3aGVuIHRoZSBsb2FkZXIgY3JlYXRlcyBhIG1hdGVyaWFsIGFmdGVyIHBhcnNpbmcgdGhlIGdsVEYgcHJvcGVydGllcyBvZiB0aGUgbWF0ZXJpYWwuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyByZWFkb25seSBvbk1hdGVyaWFsTG9hZGVkT2JzZXJ2YWJsZSA9IG5ldyBPYnNlcnZhYmxlPE1hdGVyaWFsPigpO1xyXG5cclxuICAgIHByaXZhdGUgX29uTWF0ZXJpYWxMb2FkZWRPYnNlcnZlcjogTnVsbGFibGU8T2JzZXJ2ZXI8TWF0ZXJpYWw+PjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIENhbGxiYWNrIHJhaXNlZCB3aGVuIHRoZSBsb2FkZXIgY3JlYXRlcyBhIG1hdGVyaWFsIGFmdGVyIHBhcnNpbmcgdGhlIGdsVEYgcHJvcGVydGllcyBvZiB0aGUgbWF0ZXJpYWwuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzZXQgb25NYXRlcmlhbExvYWRlZChjYWxsYmFjazogKG1hdGVyaWFsOiBNYXRlcmlhbCkgPT4gdm9pZCkge1xyXG4gICAgICAgIGlmICh0aGlzLl9vbk1hdGVyaWFsTG9hZGVkT2JzZXJ2ZXIpIHtcclxuICAgICAgICAgICAgdGhpcy5vbk1hdGVyaWFsTG9hZGVkT2JzZXJ2YWJsZS5yZW1vdmUodGhpcy5fb25NYXRlcmlhbExvYWRlZE9ic2VydmVyKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fb25NYXRlcmlhbExvYWRlZE9ic2VydmVyID0gdGhpcy5vbk1hdGVyaWFsTG9hZGVkT2JzZXJ2YWJsZS5hZGQoY2FsbGJhY2spO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogT2JzZXJ2YWJsZSByYWlzZWQgd2hlbiB0aGUgbG9hZGVyIGNyZWF0ZXMgYSBjYW1lcmEgYWZ0ZXIgcGFyc2luZyB0aGUgZ2xURiBwcm9wZXJ0aWVzIG9mIHRoZSBjYW1lcmEuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyByZWFkb25seSBvbkNhbWVyYUxvYWRlZE9ic2VydmFibGUgPSBuZXcgT2JzZXJ2YWJsZTxDYW1lcmE+KCk7XHJcblxyXG4gICAgcHJpdmF0ZSBfb25DYW1lcmFMb2FkZWRPYnNlcnZlcjogTnVsbGFibGU8T2JzZXJ2ZXI8Q2FtZXJhPj47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDYWxsYmFjayByYWlzZWQgd2hlbiB0aGUgbG9hZGVyIGNyZWF0ZXMgYSBjYW1lcmEgYWZ0ZXIgcGFyc2luZyB0aGUgZ2xURiBwcm9wZXJ0aWVzIG9mIHRoZSBjYW1lcmEuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzZXQgb25DYW1lcmFMb2FkZWQoY2FsbGJhY2s6IChjYW1lcmE6IENhbWVyYSkgPT4gdm9pZCkge1xyXG4gICAgICAgIGlmICh0aGlzLl9vbkNhbWVyYUxvYWRlZE9ic2VydmVyKSB7XHJcbiAgICAgICAgICAgIHRoaXMub25DYW1lcmFMb2FkZWRPYnNlcnZhYmxlLnJlbW92ZSh0aGlzLl9vbkNhbWVyYUxvYWRlZE9ic2VydmVyKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fb25DYW1lcmFMb2FkZWRPYnNlcnZlciA9IHRoaXMub25DYW1lcmFMb2FkZWRPYnNlcnZhYmxlLmFkZChjYWxsYmFjayk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBPYnNlcnZhYmxlIHJhaXNlZCB3aGVuIHRoZSBhc3NldCBpcyBjb21wbGV0ZWx5IGxvYWRlZCwgaW1tZWRpYXRlbHkgYmVmb3JlIHRoZSBsb2FkZXIgaXMgZGlzcG9zZWQuXHJcbiAgICAgKiBGb3IgYXNzZXRzIHdpdGggTE9EcywgcmFpc2VkIHdoZW4gYWxsIG9mIHRoZSBMT0RzIGFyZSBjb21wbGV0ZS5cclxuICAgICAqIEZvciBhc3NldHMgd2l0aG91dCBMT0RzLCByYWlzZWQgd2hlbiB0aGUgbW9kZWwgaXMgY29tcGxldGUsIGltbWVkaWF0ZWx5IGFmdGVyIHRoZSBsb2FkZXIgcmVzb2x2ZXMgdGhlIHJldHVybmVkIHByb21pc2UuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyByZWFkb25seSBvbkNvbXBsZXRlT2JzZXJ2YWJsZSA9IG5ldyBPYnNlcnZhYmxlPHZvaWQ+KCk7XHJcblxyXG4gICAgcHJpdmF0ZSBfb25Db21wbGV0ZU9ic2VydmVyOiBOdWxsYWJsZTxPYnNlcnZlcjx2b2lkPj47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDYWxsYmFjayByYWlzZWQgd2hlbiB0aGUgYXNzZXQgaXMgY29tcGxldGVseSBsb2FkZWQsIGltbWVkaWF0ZWx5IGJlZm9yZSB0aGUgbG9hZGVyIGlzIGRpc3Bvc2VkLlxyXG4gICAgICogRm9yIGFzc2V0cyB3aXRoIExPRHMsIHJhaXNlZCB3aGVuIGFsbCBvZiB0aGUgTE9EcyBhcmUgY29tcGxldGUuXHJcbiAgICAgKiBGb3IgYXNzZXRzIHdpdGhvdXQgTE9EcywgcmFpc2VkIHdoZW4gdGhlIG1vZGVsIGlzIGNvbXBsZXRlLCBpbW1lZGlhdGVseSBhZnRlciB0aGUgbG9hZGVyIHJlc29sdmVzIHRoZSByZXR1cm5lZCBwcm9taXNlLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc2V0IG9uQ29tcGxldGUoY2FsbGJhY2s6ICgpID0+IHZvaWQpIHtcclxuICAgICAgICBpZiAodGhpcy5fb25Db21wbGV0ZU9ic2VydmVyKSB7XHJcbiAgICAgICAgICAgIHRoaXMub25Db21wbGV0ZU9ic2VydmFibGUucmVtb3ZlKHRoaXMuX29uQ29tcGxldGVPYnNlcnZlcik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX29uQ29tcGxldGVPYnNlcnZlciA9IHRoaXMub25Db21wbGV0ZU9ic2VydmFibGUuYWRkKGNhbGxiYWNrKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIE9ic2VydmFibGUgcmFpc2VkIHdoZW4gYW4gZXJyb3Igb2NjdXJzLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgcmVhZG9ubHkgb25FcnJvck9ic2VydmFibGUgPSBuZXcgT2JzZXJ2YWJsZTxhbnk+KCk7XHJcblxyXG4gICAgcHJpdmF0ZSBfb25FcnJvck9ic2VydmVyOiBOdWxsYWJsZTxPYnNlcnZlcjxhbnk+PjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIENhbGxiYWNrIHJhaXNlZCB3aGVuIGFuIGVycm9yIG9jY3Vycy5cclxuICAgICAqL1xyXG4gICAgcHVibGljIHNldCBvbkVycm9yKGNhbGxiYWNrOiAocmVhc29uOiBhbnkpID0+IHZvaWQpIHtcclxuICAgICAgICBpZiAodGhpcy5fb25FcnJvck9ic2VydmVyKSB7XHJcbiAgICAgICAgICAgIHRoaXMub25FcnJvck9ic2VydmFibGUucmVtb3ZlKHRoaXMuX29uRXJyb3JPYnNlcnZlcik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX29uRXJyb3JPYnNlcnZlciA9IHRoaXMub25FcnJvck9ic2VydmFibGUuYWRkKGNhbGxiYWNrKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIE9ic2VydmFibGUgcmFpc2VkIGFmdGVyIHRoZSBsb2FkZXIgaXMgZGlzcG9zZWQuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyByZWFkb25seSBvbkRpc3Bvc2VPYnNlcnZhYmxlID0gbmV3IE9ic2VydmFibGU8dm9pZD4oKTtcclxuXHJcbiAgICBwcml2YXRlIF9vbkRpc3Bvc2VPYnNlcnZlcjogTnVsbGFibGU8T2JzZXJ2ZXI8dm9pZD4+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ2FsbGJhY2sgcmFpc2VkIGFmdGVyIHRoZSBsb2FkZXIgaXMgZGlzcG9zZWQuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzZXQgb25EaXNwb3NlKGNhbGxiYWNrOiAoKSA9PiB2b2lkKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX29uRGlzcG9zZU9ic2VydmVyKSB7XHJcbiAgICAgICAgICAgIHRoaXMub25EaXNwb3NlT2JzZXJ2YWJsZS5yZW1vdmUodGhpcy5fb25EaXNwb3NlT2JzZXJ2ZXIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl9vbkRpc3Bvc2VPYnNlcnZlciA9IHRoaXMub25EaXNwb3NlT2JzZXJ2YWJsZS5hZGQoY2FsbGJhY2spO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogT2JzZXJ2YWJsZSByYWlzZWQgYWZ0ZXIgYSBsb2FkZXIgZXh0ZW5zaW9uIGlzIGNyZWF0ZWQuXHJcbiAgICAgKiBTZXQgYWRkaXRpb25hbCBvcHRpb25zIGZvciBhIGxvYWRlciBleHRlbnNpb24gaW4gdGhpcyBldmVudC5cclxuICAgICAqL1xyXG4gICAgcHVibGljIHJlYWRvbmx5IG9uRXh0ZW5zaW9uTG9hZGVkT2JzZXJ2YWJsZSA9IG5ldyBPYnNlcnZhYmxlPElHTFRGTG9hZGVyRXh0ZW5zaW9uPigpO1xyXG5cclxuICAgIHByaXZhdGUgX29uRXh0ZW5zaW9uTG9hZGVkT2JzZXJ2ZXI6IE51bGxhYmxlPE9ic2VydmVyPElHTFRGTG9hZGVyRXh0ZW5zaW9uPj47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDYWxsYmFjayByYWlzZWQgYWZ0ZXIgYSBsb2FkZXIgZXh0ZW5zaW9uIGlzIGNyZWF0ZWQuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzZXQgb25FeHRlbnNpb25Mb2FkZWQoY2FsbGJhY2s6IChleHRlbnNpb246IElHTFRGTG9hZGVyRXh0ZW5zaW9uKSA9PiB2b2lkKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX29uRXh0ZW5zaW9uTG9hZGVkT2JzZXJ2ZXIpIHtcclxuICAgICAgICAgICAgdGhpcy5vbkV4dGVuc2lvbkxvYWRlZE9ic2VydmFibGUucmVtb3ZlKHRoaXMuX29uRXh0ZW5zaW9uTG9hZGVkT2JzZXJ2ZXIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl9vbkV4dGVuc2lvbkxvYWRlZE9ic2VydmVyID0gdGhpcy5vbkV4dGVuc2lvbkxvYWRlZE9ic2VydmFibGUuYWRkKGNhbGxiYWNrKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIERlZmluZXMgaWYgdGhlIGxvYWRlciBsb2dnaW5nIGlzIGVuYWJsZWQuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXQgbG9nZ2luZ0VuYWJsZWQoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2xvZ2dpbmdFbmFibGVkO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXQgbG9nZ2luZ0VuYWJsZWQodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgICAgICBpZiAodGhpcy5fbG9nZ2luZ0VuYWJsZWQgPT09IHZhbHVlKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuX2xvZ2dpbmdFbmFibGVkID0gdmFsdWU7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLl9sb2dnaW5nRW5hYmxlZCkge1xyXG4gICAgICAgICAgICB0aGlzLl9sb2cgPSB0aGlzLl9sb2dFbmFibGVkO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2xvZyA9IHRoaXMuX2xvZ0Rpc2FibGVkO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIERlZmluZXMgaWYgdGhlIGxvYWRlciBzaG91bGQgY2FwdHVyZSBwZXJmb3JtYW5jZSBjb3VudGVycy5cclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldCBjYXB0dXJlUGVyZm9ybWFuY2VDb3VudGVycygpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fY2FwdHVyZVBlcmZvcm1hbmNlQ291bnRlcnM7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldCBjYXB0dXJlUGVyZm9ybWFuY2VDb3VudGVycyh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgICAgIGlmICh0aGlzLl9jYXB0dXJlUGVyZm9ybWFuY2VDb3VudGVycyA9PT0gdmFsdWUpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5fY2FwdHVyZVBlcmZvcm1hbmNlQ291bnRlcnMgPSB2YWx1ZTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuX2NhcHR1cmVQZXJmb3JtYW5jZUNvdW50ZXJzKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3N0YXJ0UGVyZm9ybWFuY2VDb3VudGVyID0gdGhpcy5fc3RhcnRQZXJmb3JtYW5jZUNvdW50ZXJFbmFibGVkO1xyXG4gICAgICAgICAgICB0aGlzLl9lbmRQZXJmb3JtYW5jZUNvdW50ZXIgPSB0aGlzLl9lbmRQZXJmb3JtYW5jZUNvdW50ZXJFbmFibGVkO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3N0YXJ0UGVyZm9ybWFuY2VDb3VudGVyID0gdGhpcy5fc3RhcnRQZXJmb3JtYW5jZUNvdW50ZXJEaXNhYmxlZDtcclxuICAgICAgICAgICAgdGhpcy5fZW5kUGVyZm9ybWFuY2VDb3VudGVyID0gdGhpcy5fZW5kUGVyZm9ybWFuY2VDb3VudGVyRGlzYWJsZWQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogRGVmaW5lcyBpZiB0aGUgbG9hZGVyIHNob3VsZCB2YWxpZGF0ZSB0aGUgYXNzZXQuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyB2YWxpZGF0ZSA9IGZhbHNlO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogT2JzZXJ2YWJsZSByYWlzZWQgYWZ0ZXIgdmFsaWRhdGlvbiB3aGVuIHZhbGlkYXRlIGlzIHNldCB0byB0cnVlLiBUaGUgZXZlbnQgZGF0YSBpcyB0aGUgcmVzdWx0IG9mIHRoZSB2YWxpZGF0aW9uLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgcmVhZG9ubHkgb25WYWxpZGF0ZWRPYnNlcnZhYmxlID0gbmV3IE9ic2VydmFibGU8R0xURjIuSUdMVEZWYWxpZGF0aW9uUmVzdWx0cz4oKTtcclxuXHJcbiAgICBwcml2YXRlIF9vblZhbGlkYXRlZE9ic2VydmVyOiBOdWxsYWJsZTxPYnNlcnZlcjxHTFRGMi5JR0xURlZhbGlkYXRpb25SZXN1bHRzPj47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDYWxsYmFjayByYWlzZWQgYWZ0ZXIgYSBsb2FkZXIgZXh0ZW5zaW9uIGlzIGNyZWF0ZWQuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzZXQgb25WYWxpZGF0ZWQoY2FsbGJhY2s6IChyZXN1bHRzOiBHTFRGMi5JR0xURlZhbGlkYXRpb25SZXN1bHRzKSA9PiB2b2lkKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX29uVmFsaWRhdGVkT2JzZXJ2ZXIpIHtcclxuICAgICAgICAgICAgdGhpcy5vblZhbGlkYXRlZE9ic2VydmFibGUucmVtb3ZlKHRoaXMuX29uVmFsaWRhdGVkT2JzZXJ2ZXIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl9vblZhbGlkYXRlZE9ic2VydmVyID0gdGhpcy5vblZhbGlkYXRlZE9ic2VydmFibGUuYWRkKGNhbGxiYWNrKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9sb2FkZXI6IE51bGxhYmxlPElHTFRGTG9hZGVyPiA9IG51bGw7XHJcbiAgICBwcml2YXRlIF9zdGF0ZTogTnVsbGFibGU8R0xURkxvYWRlclN0YXRlPiA9IG51bGw7XHJcbiAgICBwcml2YXRlIF9wcm9ncmVzc0NhbGxiYWNrPzogKGV2ZW50OiBJU2NlbmVMb2FkZXJQcm9ncmVzc0V2ZW50KSA9PiB2b2lkO1xyXG4gICAgcHJpdmF0ZSBfcmVxdWVzdHMgPSBuZXcgQXJyYXk8SUZpbGVSZXF1ZXN0SW5mbz4oKTtcclxuXHJcbiAgICBwcml2YXRlIHN0YXRpYyBfTWFnaWNCYXNlNjRFbmNvZGVkID0gXCJaMnhVUmdcIjsgLy8gXCJnbFRGXCIgYmFzZTY0IGVuY29kZWQgKHdpdGhvdXQgdGhlIHF1b3RlcyEpXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBOYW1lIG9mIHRoZSBsb2FkZXIgKFwiZ2x0ZlwiKVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgbmFtZSA9IFwiZ2x0ZlwiO1xyXG5cclxuICAgIC8qKiBAaW50ZXJuYWwgKi9cclxuICAgIHB1YmxpYyBleHRlbnNpb25zOiBJU2NlbmVMb2FkZXJQbHVnaW5FeHRlbnNpb25zID0ge1xyXG4gICAgICAgIFwiLmdsdGZcIjogeyBpc0JpbmFyeTogZmFsc2UgfSxcclxuICAgICAgICBcIi5nbGJcIjogeyBpc0JpbmFyeTogdHJ1ZSB9LFxyXG4gICAgfTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIERpc3Bvc2VzIHRoZSBsb2FkZXIsIHJlbGVhc2VzIHJlc291cmNlcyBkdXJpbmcgbG9hZCwgYW5kIGNhbmNlbHMgYW55IG91dHN0YW5kaW5nIHJlcXVlc3RzLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZGlzcG9zZSgpOiB2b2lkIHtcclxuICAgICAgICBpZiAodGhpcy5fbG9hZGVyKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2xvYWRlci5kaXNwb3NlKCk7XHJcbiAgICAgICAgICAgIHRoaXMuX2xvYWRlciA9IG51bGw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmb3IgKGNvbnN0IHJlcXVlc3Qgb2YgdGhpcy5fcmVxdWVzdHMpIHtcclxuICAgICAgICAgICAgcmVxdWVzdC5hYm9ydCgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5fcmVxdWVzdHMubGVuZ3RoID0gMDtcclxuXHJcbiAgICAgICAgZGVsZXRlIHRoaXMuX3Byb2dyZXNzQ2FsbGJhY2s7XHJcblxyXG4gICAgICAgIHRoaXMucHJlcHJvY2Vzc1VybEFzeW5jID0gKHVybCkgPT4gUHJvbWlzZS5yZXNvbHZlKHVybCk7XHJcblxyXG4gICAgICAgIHRoaXMub25NZXNoTG9hZGVkT2JzZXJ2YWJsZS5jbGVhcigpO1xyXG4gICAgICAgIHRoaXMub25Ta2luTG9hZGVkT2JzZXJ2YWJsZS5jbGVhcigpO1xyXG4gICAgICAgIHRoaXMub25UZXh0dXJlTG9hZGVkT2JzZXJ2YWJsZS5jbGVhcigpO1xyXG4gICAgICAgIHRoaXMub25NYXRlcmlhbExvYWRlZE9ic2VydmFibGUuY2xlYXIoKTtcclxuICAgICAgICB0aGlzLm9uQ2FtZXJhTG9hZGVkT2JzZXJ2YWJsZS5jbGVhcigpO1xyXG4gICAgICAgIHRoaXMub25Db21wbGV0ZU9ic2VydmFibGUuY2xlYXIoKTtcclxuICAgICAgICB0aGlzLm9uRXh0ZW5zaW9uTG9hZGVkT2JzZXJ2YWJsZS5jbGVhcigpO1xyXG5cclxuICAgICAgICB0aGlzLm9uRGlzcG9zZU9ic2VydmFibGUubm90aWZ5T2JzZXJ2ZXJzKHVuZGVmaW5lZCk7XHJcbiAgICAgICAgdGhpcy5vbkRpc3Bvc2VPYnNlcnZhYmxlLmNsZWFyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAaW50ZXJuYWxcclxuICAgICAqL1xyXG4gICAgcHVibGljIGxvYWRGaWxlKFxyXG4gICAgICAgIHNjZW5lOiBTY2VuZSxcclxuICAgICAgICBmaWxlT3JVcmw6IEZpbGUgfCBzdHJpbmcgfCBBcnJheUJ1ZmZlclZpZXcsXHJcbiAgICAgICAgcm9vdFVybDogc3RyaW5nLFxyXG4gICAgICAgIG9uU3VjY2VzczogKGRhdGE6IGFueSwgcmVzcG9uc2VVUkw/OiBzdHJpbmcpID0+IHZvaWQsXHJcbiAgICAgICAgb25Qcm9ncmVzcz86IChldjogSVNjZW5lTG9hZGVyUHJvZ3Jlc3NFdmVudCkgPT4gdm9pZCxcclxuICAgICAgICB1c2VBcnJheUJ1ZmZlcj86IGJvb2xlYW4sXHJcbiAgICAgICAgb25FcnJvcj86IChyZXF1ZXN0PzogV2ViUmVxdWVzdCwgZXhjZXB0aW9uPzogTG9hZEZpbGVFcnJvcikgPT4gdm9pZCxcclxuICAgICAgICBuYW1lPzogc3RyaW5nXHJcbiAgICApOiBOdWxsYWJsZTxJRmlsZVJlcXVlc3Q+IHtcclxuICAgICAgICBpZiAoQXJyYXlCdWZmZXIuaXNWaWV3KGZpbGVPclVybCkpIHtcclxuICAgICAgICAgICAgdGhpcy5fbG9hZEJpbmFyeShzY2VuZSwgZmlsZU9yVXJsIGFzIEFycmF5QnVmZmVyVmlldywgcm9vdFVybCwgb25TdWNjZXNzLCBvbkVycm9yLCBuYW1lKTtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLl9wcm9ncmVzc0NhbGxiYWNrID0gb25Qcm9ncmVzcztcclxuXHJcbiAgICAgICAgY29uc3QgZmlsZU5hbWUgPSAoZmlsZU9yVXJsIGFzIEZpbGUpLm5hbWUgfHwgVG9vbHMuR2V0RmlsZW5hbWUoZmlsZU9yVXJsIGFzIHN0cmluZyk7XHJcblxyXG4gICAgICAgIGlmICh1c2VBcnJheUJ1ZmZlcikge1xyXG4gICAgICAgICAgICBpZiAodGhpcy51c2VSYW5nZVJlcXVlc3RzKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy52YWxpZGF0ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIExvZ2dlci5XYXJuKFwiZ2xURiB2YWxpZGF0aW9uIGlzIG5vdCBzdXBwb3J0ZWQgd2hlbiByYW5nZSByZXF1ZXN0cyBhcmUgZW5hYmxlZFwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBmaWxlUmVxdWVzdDogSUZpbGVSZXF1ZXN0ID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIGFib3J0OiAoKSA9PiB7fSxcclxuICAgICAgICAgICAgICAgICAgICBvbkNvbXBsZXRlT2JzZXJ2YWJsZTogbmV3IE9ic2VydmFibGU8SUZpbGVSZXF1ZXN0PigpLFxyXG4gICAgICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBkYXRhQnVmZmVyID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlYWRBc3luYzogKGJ5dGVPZmZzZXQ6IG51bWJlciwgYnl0ZUxlbmd0aDogbnVtYmVyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZTxBcnJheUJ1ZmZlclZpZXc+KChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2xvYWRGaWxlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjZW5lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGVPclVybCBhcyBGaWxlIHwgc3RyaW5nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUobmV3IFVpbnQ4QXJyYXkoZGF0YSBhcyBBcnJheUJ1ZmZlcikpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoZXJyb3IpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGVycm9yKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICh3ZWJSZXF1ZXN0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdlYlJlcXVlc3Quc2V0UmVxdWVzdEhlYWRlcihcIlJhbmdlXCIsIGBieXRlcz0ke2J5dGVPZmZzZXR9LSR7Ynl0ZU9mZnNldCArIGJ5dGVMZW5ndGggLSAxfWApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgYnl0ZUxlbmd0aDogMCxcclxuICAgICAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5fdW5wYWNrQmluYXJ5QXN5bmMobmV3IERhdGFSZWFkZXIoZGF0YUJ1ZmZlcikpLnRoZW4oXHJcbiAgICAgICAgICAgICAgICAgICAgKGxvYWRlckRhdGEpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmlsZVJlcXVlc3Qub25Db21wbGV0ZU9ic2VydmFibGUubm90aWZ5T2JzZXJ2ZXJzKGZpbGVSZXF1ZXN0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25TdWNjZXNzKGxvYWRlckRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgb25FcnJvciA/IChlcnJvcikgPT4gb25FcnJvcih1bmRlZmluZWQsIGVycm9yKSA6IHVuZGVmaW5lZFxyXG4gICAgICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmlsZVJlcXVlc3Q7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9sb2FkRmlsZShcclxuICAgICAgICAgICAgICAgIHNjZW5lLFxyXG4gICAgICAgICAgICAgICAgZmlsZU9yVXJsIGFzIEZpbGUgfCBzdHJpbmcsXHJcbiAgICAgICAgICAgICAgICAoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3ZhbGlkYXRlKHNjZW5lLCBuZXcgVWludDhBcnJheShkYXRhIGFzIEFycmF5QnVmZmVyKSwgcm9vdFVybCwgZmlsZU5hbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3VucGFja0JpbmFyeUFzeW5jKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXcgRGF0YVJlYWRlcih7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWFkQXN5bmM6IChieXRlT2Zmc2V0LCBieXRlTGVuZ3RoKSA9PiByZWFkQXN5bmMoZGF0YSBhcyBBcnJheUJ1ZmZlciwgYnl0ZU9mZnNldCwgYnl0ZUxlbmd0aCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBieXRlTGVuZ3RoOiAoZGF0YSBhcyBBcnJheUJ1ZmZlcikuYnl0ZUxlbmd0aCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICApLnRoZW4oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIChsb2FkZXJEYXRhKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvblN1Y2Nlc3MobG9hZGVyRGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uRXJyb3IgPyAoZXJyb3IpID0+IG9uRXJyb3IodW5kZWZpbmVkLCBlcnJvcikgOiB1bmRlZmluZWRcclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHRydWUsXHJcbiAgICAgICAgICAgICAgICBvbkVycm9yXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5fbG9hZEZpbGUoXHJcbiAgICAgICAgICAgIHNjZW5lLFxyXG4gICAgICAgICAgICBmaWxlT3JVcmwgYXMgRmlsZSB8IHN0cmluZyxcclxuICAgICAgICAgICAgKGRhdGEpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3ZhbGlkYXRlKHNjZW5lLCBuZXcgVWludDhBcnJheShkYXRhIGFzIEFycmF5QnVmZmVyKSwgcm9vdFVybCwgZmlsZU5hbWUpO1xyXG4gICAgICAgICAgICAgICAgb25TdWNjZXNzKHsganNvbjogdGhpcy5fcGFyc2VKc29uKGRhdGEgYXMgc3RyaW5nKSB9KTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgdXNlQXJyYXlCdWZmZXIsXHJcbiAgICAgICAgICAgIG9uRXJyb3JcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQGludGVybmFsXHJcbiAgICAgKi9cclxuICAgIF9sb2FkQmluYXJ5KFxyXG4gICAgICAgIHNjZW5lOiBTY2VuZSxcclxuICAgICAgICBkYXRhOiBBcnJheUJ1ZmZlclZpZXcsXHJcbiAgICAgICAgcm9vdFVybDogc3RyaW5nLFxyXG4gICAgICAgIG9uU3VjY2VzczogKGRhdGE6IGFueSwgcmVzcG9uc2VVUkw/OiBzdHJpbmcpID0+IHZvaWQsXHJcbiAgICAgICAgb25FcnJvcj86IChyZXF1ZXN0PzogV2ViUmVxdWVzdCwgZXhjZXB0aW9uPzogTG9hZEZpbGVFcnJvcikgPT4gdm9pZCxcclxuICAgICAgICBmaWxlTmFtZT86IHN0cmluZ1xyXG4gICAgKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5fdmFsaWRhdGUoc2NlbmUsIGRhdGEsIHJvb3RVcmwsIGZpbGVOYW1lKTtcclxuICAgICAgICB0aGlzLl91bnBhY2tCaW5hcnlBc3luYyhcclxuICAgICAgICAgICAgbmV3IERhdGFSZWFkZXIoe1xyXG4gICAgICAgICAgICAgICAgcmVhZEFzeW5jOiAoYnl0ZU9mZnNldCwgYnl0ZUxlbmd0aCkgPT4gcmVhZFZpZXdBc3luYyhkYXRhLCBieXRlT2Zmc2V0LCBieXRlTGVuZ3RoKSxcclxuICAgICAgICAgICAgICAgIGJ5dGVMZW5ndGg6IGRhdGEuYnl0ZUxlbmd0aCxcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICApLnRoZW4oXHJcbiAgICAgICAgICAgIChsb2FkZXJEYXRhKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBvblN1Y2Nlc3MobG9hZGVyRGF0YSk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIG9uRXJyb3IgPyAoZXJyb3IpID0+IG9uRXJyb3IodW5kZWZpbmVkLCBlcnJvcikgOiB1bmRlZmluZWRcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQGludGVybmFsXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBpbXBvcnRNZXNoQXN5bmMoXHJcbiAgICAgICAgbWVzaGVzTmFtZXM6IGFueSxcclxuICAgICAgICBzY2VuZTogU2NlbmUsXHJcbiAgICAgICAgZGF0YTogYW55LFxyXG4gICAgICAgIHJvb3RVcmw6IHN0cmluZyxcclxuICAgICAgICBvblByb2dyZXNzPzogKGV2ZW50OiBJU2NlbmVMb2FkZXJQcm9ncmVzc0V2ZW50KSA9PiB2b2lkLFxyXG4gICAgICAgIGZpbGVOYW1lPzogc3RyaW5nXHJcbiAgICApOiBQcm9taXNlPElTY2VuZUxvYWRlckFzeW5jUmVzdWx0PiB7XHJcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLm9uUGFyc2VkT2JzZXJ2YWJsZS5ub3RpZnlPYnNlcnZlcnMoZGF0YSk7XHJcbiAgICAgICAgICAgIHRoaXMub25QYXJzZWRPYnNlcnZhYmxlLmNsZWFyKCk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLl9sb2coYExvYWRpbmcgJHtmaWxlTmFtZSB8fCBcIlwifWApO1xyXG4gICAgICAgICAgICB0aGlzLl9sb2FkZXIgPSB0aGlzLl9nZXRMb2FkZXIoZGF0YSk7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9sb2FkZXIuaW1wb3J0TWVzaEFzeW5jKG1lc2hlc05hbWVzLCBzY2VuZSwgbnVsbCwgZGF0YSwgcm9vdFVybCwgb25Qcm9ncmVzcywgZmlsZU5hbWUpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQGludGVybmFsXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBsb2FkQXN5bmMoc2NlbmU6IFNjZW5lLCBkYXRhOiBhbnksIHJvb3RVcmw6IHN0cmluZywgb25Qcm9ncmVzcz86IChldmVudDogSVNjZW5lTG9hZGVyUHJvZ3Jlc3NFdmVudCkgPT4gdm9pZCwgZmlsZU5hbWU/OiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMub25QYXJzZWRPYnNlcnZhYmxlLm5vdGlmeU9ic2VydmVycyhkYXRhKTtcclxuICAgICAgICAgICAgdGhpcy5vblBhcnNlZE9ic2VydmFibGUuY2xlYXIoKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuX2xvZyhgTG9hZGluZyAke2ZpbGVOYW1lIHx8IFwiXCJ9YCk7XHJcbiAgICAgICAgICAgIHRoaXMuX2xvYWRlciA9IHRoaXMuX2dldExvYWRlcihkYXRhKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2xvYWRlci5sb2FkQXN5bmMoc2NlbmUsIGRhdGEsIHJvb3RVcmwsIG9uUHJvZ3Jlc3MsIGZpbGVOYW1lKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEBpbnRlcm5hbFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgbG9hZEFzc2V0Q29udGFpbmVyQXN5bmMoc2NlbmU6IFNjZW5lLCBkYXRhOiBhbnksIHJvb3RVcmw6IHN0cmluZywgb25Qcm9ncmVzcz86IChldmVudDogSVNjZW5lTG9hZGVyUHJvZ3Jlc3NFdmVudCkgPT4gdm9pZCwgZmlsZU5hbWU/OiBzdHJpbmcpOiBQcm9taXNlPEFzc2V0Q29udGFpbmVyPiB7XHJcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLm9uUGFyc2VkT2JzZXJ2YWJsZS5ub3RpZnlPYnNlcnZlcnMoZGF0YSk7XHJcbiAgICAgICAgICAgIHRoaXMub25QYXJzZWRPYnNlcnZhYmxlLmNsZWFyKCk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLl9sb2coYExvYWRpbmcgJHtmaWxlTmFtZSB8fCBcIlwifWApO1xyXG4gICAgICAgICAgICB0aGlzLl9sb2FkZXIgPSB0aGlzLl9nZXRMb2FkZXIoZGF0YSk7XHJcblxyXG4gICAgICAgICAgICAvLyBQcmVwYXJlIHRoZSBhc3NldCBjb250YWluZXIuXHJcbiAgICAgICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IG5ldyBBc3NldENvbnRhaW5lcihzY2VuZSk7XHJcblxyXG4gICAgICAgICAgICAvLyBHZXQgbWF0ZXJpYWxzL3RleHR1cmVzIHdoZW4gbG9hZGluZyB0byBhZGQgdG8gY29udGFpbmVyXHJcbiAgICAgICAgICAgIGNvbnN0IG1hdGVyaWFsczogQXJyYXk8TWF0ZXJpYWw+ID0gW107XHJcbiAgICAgICAgICAgIHRoaXMub25NYXRlcmlhbExvYWRlZE9ic2VydmFibGUuYWRkKChtYXRlcmlhbCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgbWF0ZXJpYWxzLnB1c2gobWF0ZXJpYWwpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgY29uc3QgdGV4dHVyZXM6IEFycmF5PEJhc2VUZXh0dXJlPiA9IFtdO1xyXG4gICAgICAgICAgICB0aGlzLm9uVGV4dHVyZUxvYWRlZE9ic2VydmFibGUuYWRkKCh0ZXh0dXJlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0ZXh0dXJlcy5wdXNoKHRleHR1cmUpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgY29uc3QgY2FtZXJhczogQXJyYXk8Q2FtZXJhPiA9IFtdO1xyXG4gICAgICAgICAgICB0aGlzLm9uQ2FtZXJhTG9hZGVkT2JzZXJ2YWJsZS5hZGQoKGNhbWVyYSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY2FtZXJhcy5wdXNoKGNhbWVyYSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgbW9ycGhUYXJnZXRNYW5hZ2VyczogQXJyYXk8TW9ycGhUYXJnZXRNYW5hZ2VyPiA9IFtdO1xyXG4gICAgICAgICAgICB0aGlzLm9uTWVzaExvYWRlZE9ic2VydmFibGUuYWRkKChtZXNoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAobWVzaC5tb3JwaFRhcmdldE1hbmFnZXIpIHtcclxuICAgICAgICAgICAgICAgICAgICBtb3JwaFRhcmdldE1hbmFnZXJzLnB1c2gobWVzaC5tb3JwaFRhcmdldE1hbmFnZXIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9sb2FkZXIuaW1wb3J0TWVzaEFzeW5jKG51bGwsIHNjZW5lLCBjb250YWluZXIsIGRhdGEsIHJvb3RVcmwsIG9uUHJvZ3Jlc3MsIGZpbGVOYW1lKS50aGVuKChyZXN1bHQpID0+IHtcclxuICAgICAgICAgICAgICAgIEFycmF5LnByb3RvdHlwZS5wdXNoLmFwcGx5KGNvbnRhaW5lci5nZW9tZXRyaWVzLCByZXN1bHQuZ2VvbWV0cmllcyk7XHJcbiAgICAgICAgICAgICAgICBBcnJheS5wcm90b3R5cGUucHVzaC5hcHBseShjb250YWluZXIubWVzaGVzLCByZXN1bHQubWVzaGVzKTtcclxuICAgICAgICAgICAgICAgIEFycmF5LnByb3RvdHlwZS5wdXNoLmFwcGx5KGNvbnRhaW5lci5wYXJ0aWNsZVN5c3RlbXMsIHJlc3VsdC5wYXJ0aWNsZVN5c3RlbXMpO1xyXG4gICAgICAgICAgICAgICAgQXJyYXkucHJvdG90eXBlLnB1c2guYXBwbHkoY29udGFpbmVyLnNrZWxldG9ucywgcmVzdWx0LnNrZWxldG9ucyk7XHJcbiAgICAgICAgICAgICAgICBBcnJheS5wcm90b3R5cGUucHVzaC5hcHBseShjb250YWluZXIuYW5pbWF0aW9uR3JvdXBzLCByZXN1bHQuYW5pbWF0aW9uR3JvdXBzKTtcclxuICAgICAgICAgICAgICAgIEFycmF5LnByb3RvdHlwZS5wdXNoLmFwcGx5KGNvbnRhaW5lci5tYXRlcmlhbHMsIG1hdGVyaWFscyk7XHJcbiAgICAgICAgICAgICAgICBBcnJheS5wcm90b3R5cGUucHVzaC5hcHBseShjb250YWluZXIudGV4dHVyZXMsIHRleHR1cmVzKTtcclxuICAgICAgICAgICAgICAgIEFycmF5LnByb3RvdHlwZS5wdXNoLmFwcGx5KGNvbnRhaW5lci5saWdodHMsIHJlc3VsdC5saWdodHMpO1xyXG4gICAgICAgICAgICAgICAgQXJyYXkucHJvdG90eXBlLnB1c2guYXBwbHkoY29udGFpbmVyLnRyYW5zZm9ybU5vZGVzLCByZXN1bHQudHJhbnNmb3JtTm9kZXMpO1xyXG4gICAgICAgICAgICAgICAgQXJyYXkucHJvdG90eXBlLnB1c2guYXBwbHkoY29udGFpbmVyLmNhbWVyYXMsIGNhbWVyYXMpO1xyXG4gICAgICAgICAgICAgICAgQXJyYXkucHJvdG90eXBlLnB1c2guYXBwbHkoY29udGFpbmVyLm1vcnBoVGFyZ2V0TWFuYWdlcnMsIG1vcnBoVGFyZ2V0TWFuYWdlcnMpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGNvbnRhaW5lcjtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAaW50ZXJuYWxcclxuICAgICAqL1xyXG4gICAgcHVibGljIGNhbkRpcmVjdExvYWQoZGF0YTogc3RyaW5nKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgKGRhdGEuaW5kZXhPZihcImFzc2V0XCIpICE9PSAtMSAmJiBkYXRhLmluZGV4T2YoXCJ2ZXJzaW9uXCIpICE9PSAtMSkgfHxcclxuICAgICAgICAgICAgZGF0YS5zdGFydHNXaXRoKFwiZGF0YTpiYXNlNjQsXCIgKyBHTFRGRmlsZUxvYWRlci5fTWFnaWNCYXNlNjRFbmNvZGVkKSB8fCAvLyB0aGlzIGlzIHRlY2huaWNhbGx5IGluY29ycmVjdCwgYnV0IHdpbGwgY29udGludWUgdG8gc3VwcG9ydCBmb3IgYmFja2NvbXBhdC5cclxuICAgICAgICAgICAgZGF0YS5zdGFydHNXaXRoKFwiZGF0YTo7YmFzZTY0LFwiICsgR0xURkZpbGVMb2FkZXIuX01hZ2ljQmFzZTY0RW5jb2RlZCkgfHxcclxuICAgICAgICAgICAgZGF0YS5zdGFydHNXaXRoKFwiZGF0YTphcHBsaWNhdGlvbi9vY3RldC1zdHJlYW07YmFzZTY0LFwiICsgR0xURkZpbGVMb2FkZXIuX01hZ2ljQmFzZTY0RW5jb2RlZCkgfHxcclxuICAgICAgICAgICAgZGF0YS5zdGFydHNXaXRoKFwiZGF0YTptb2RlbC9nbHRmLWJpbmFyeTtiYXNlNjQsXCIgKyBHTFRGRmlsZUxvYWRlci5fTWFnaWNCYXNlNjRFbmNvZGVkKVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAaW50ZXJuYWxcclxuICAgICAqL1xyXG4gICAgcHVibGljIGRpcmVjdExvYWQoc2NlbmU6IFNjZW5lLCBkYXRhOiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgICAgZGF0YS5zdGFydHNXaXRoKFwiYmFzZTY0LFwiICsgR0xURkZpbGVMb2FkZXIuX01hZ2ljQmFzZTY0RW5jb2RlZCkgfHwgLy8gdGhpcyBpcyB0ZWNobmljYWxseSBpbmNvcnJlY3QsIGJ1dCB3aWxsIGNvbnRpbnVlIHRvIHN1cHBvcnQgZm9yIGJhY2tjb21wYXQuXHJcbiAgICAgICAgICAgIGRhdGEuc3RhcnRzV2l0aChcIjtiYXNlNjQsXCIgKyBHTFRGRmlsZUxvYWRlci5fTWFnaWNCYXNlNjRFbmNvZGVkKSB8fFxyXG4gICAgICAgICAgICBkYXRhLnN0YXJ0c1dpdGgoXCJhcHBsaWNhdGlvbi9vY3RldC1zdHJlYW07YmFzZTY0LFwiICsgR0xURkZpbGVMb2FkZXIuX01hZ2ljQmFzZTY0RW5jb2RlZCkgfHxcclxuICAgICAgICAgICAgZGF0YS5zdGFydHNXaXRoKFwibW9kZWwvZ2x0Zi1iaW5hcnk7YmFzZTY0LFwiICsgR0xURkZpbGVMb2FkZXIuX01hZ2ljQmFzZTY0RW5jb2RlZClcclxuICAgICAgICApIHtcclxuICAgICAgICAgICAgY29uc3QgYXJyYXlCdWZmZXIgPSBEZWNvZGVCYXNlNjRVcmxUb0JpbmFyeShkYXRhKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuX3ZhbGlkYXRlKHNjZW5lLCBuZXcgVWludDhBcnJheShhcnJheUJ1ZmZlcikpO1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fdW5wYWNrQmluYXJ5QXN5bmMoXHJcbiAgICAgICAgICAgICAgICBuZXcgRGF0YVJlYWRlcih7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVhZEFzeW5jOiAoYnl0ZU9mZnNldCwgYnl0ZUxlbmd0aCkgPT4gcmVhZEFzeW5jKGFycmF5QnVmZmVyLCBieXRlT2Zmc2V0LCBieXRlTGVuZ3RoKSxcclxuICAgICAgICAgICAgICAgICAgICBieXRlTGVuZ3RoOiBhcnJheUJ1ZmZlci5ieXRlTGVuZ3RoLFxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuX3ZhbGlkYXRlKHNjZW5lLCBkYXRhKTtcclxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHsganNvbjogdGhpcy5fcGFyc2VKc29uKGRhdGEpIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhlIGNhbGxiYWNrIHRoYXQgYWxsb3dzIGN1c3RvbSBoYW5kbGluZyBvZiB0aGUgcm9vdCB1cmwgYmFzZWQgb24gdGhlIHJlc3BvbnNlIHVybC5cclxuICAgICAqIEBwYXJhbSByb290VXJsIHRoZSBvcmlnaW5hbCByb290IHVybFxyXG4gICAgICogQHBhcmFtIHJlc3BvbnNlVVJMIHRoZSByZXNwb25zZSB1cmwgaWYgYXZhaWxhYmxlXHJcbiAgICAgKiBAcmV0dXJucyB0aGUgbmV3IHJvb3QgdXJsXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyByZXdyaXRlUm9vdFVSTD8ocm9vdFVybDogc3RyaW5nLCByZXNwb25zZVVSTD86IHN0cmluZyk6IHN0cmluZztcclxuXHJcbiAgICAvKiogQGludGVybmFsICovXHJcbiAgICBwdWJsaWMgY3JlYXRlUGx1Z2luKCk6IElTY2VuZUxvYWRlclBsdWdpbiB8IElTY2VuZUxvYWRlclBsdWdpbkFzeW5jIHtcclxuICAgICAgICByZXR1cm4gbmV3IEdMVEZGaWxlTG9hZGVyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgbG9hZGVyIHN0YXRlIG9yIG51bGwgaWYgdGhlIGxvYWRlciBpcyBub3QgYWN0aXZlLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0IGxvYWRlclN0YXRlKCk6IE51bGxhYmxlPEdMVEZMb2FkZXJTdGF0ZT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9zdGF0ZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIE9ic2VydmFibGUgcmFpc2VkIHdoZW4gdGhlIGxvYWRlciBzdGF0ZSBjaGFuZ2VzLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgb25Mb2FkZXJTdGF0ZUNoYW5nZWRPYnNlcnZhYmxlID0gbmV3IE9ic2VydmFibGU8TnVsbGFibGU8R0xURkxvYWRlclN0YXRlPj4oKTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFJldHVybnMgYSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2hlbiB0aGUgYXNzZXQgaXMgY29tcGxldGVseSBsb2FkZWQuXHJcbiAgICAgKiBAcmV0dXJucyBhIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aGVuIHRoZSBhc3NldCBpcyBjb21wbGV0ZWx5IGxvYWRlZC5cclxuICAgICAqL1xyXG4gICAgcHVibGljIHdoZW5Db21wbGV0ZUFzeW5jKCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMub25Db21wbGV0ZU9ic2VydmFibGUuYWRkT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB0aGlzLm9uRXJyb3JPYnNlcnZhYmxlLmFkZE9uY2UoKHJlYXNvbikgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmVqZWN0KHJlYXNvbik7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQGludGVybmFsXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBfc2V0U3RhdGUoc3RhdGU6IEdMVEZMb2FkZXJTdGF0ZSk6IHZvaWQge1xyXG4gICAgICAgIGlmICh0aGlzLl9zdGF0ZSA9PT0gc3RhdGUpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5fc3RhdGUgPSBzdGF0ZTtcclxuICAgICAgICB0aGlzLm9uTG9hZGVyU3RhdGVDaGFuZ2VkT2JzZXJ2YWJsZS5ub3RpZnlPYnNlcnZlcnModGhpcy5fc3RhdGUpO1xyXG4gICAgICAgIHRoaXMuX2xvZyhHTFRGTG9hZGVyU3RhdGVbdGhpcy5fc3RhdGVdKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEBpbnRlcm5hbFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgX2xvYWRGaWxlKFxyXG4gICAgICAgIHNjZW5lOiBTY2VuZSxcclxuICAgICAgICBmaWxlT3JVcmw6IEZpbGUgfCBzdHJpbmcsXHJcbiAgICAgICAgb25TdWNjZXNzOiAoZGF0YTogc3RyaW5nIHwgQXJyYXlCdWZmZXIpID0+IHZvaWQsXHJcbiAgICAgICAgdXNlQXJyYXlCdWZmZXI/OiBib29sZWFuLFxyXG4gICAgICAgIG9uRXJyb3I/OiAocmVxdWVzdD86IFdlYlJlcXVlc3QpID0+IHZvaWQsXHJcbiAgICAgICAgb25PcGVuZWQ/OiAocmVxdWVzdDogV2ViUmVxdWVzdCkgPT4gdm9pZFxyXG4gICAgKTogSUZpbGVSZXF1ZXN0IHtcclxuICAgICAgICBjb25zdCByZXF1ZXN0ID0gc2NlbmUuX2xvYWRGaWxlKFxyXG4gICAgICAgICAgICBmaWxlT3JVcmwsXHJcbiAgICAgICAgICAgIG9uU3VjY2VzcyxcclxuICAgICAgICAgICAgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9vblByb2dyZXNzKGV2ZW50LCByZXF1ZXN0KTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgdHJ1ZSxcclxuICAgICAgICAgICAgdXNlQXJyYXlCdWZmZXIsXHJcbiAgICAgICAgICAgIG9uRXJyb3IsXHJcbiAgICAgICAgICAgIG9uT3BlbmVkXHJcbiAgICAgICAgKSBhcyBJRmlsZVJlcXVlc3RJbmZvO1xyXG4gICAgICAgIHJlcXVlc3Qub25Db21wbGV0ZU9ic2VydmFibGUuYWRkKChyZXF1ZXN0KSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuX3JlcXVlc3RzLnNwbGljZSh0aGlzLl9yZXF1ZXN0cy5pbmRleE9mKHJlcXVlc3QpLCAxKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLl9yZXF1ZXN0cy5wdXNoKHJlcXVlc3QpO1xyXG4gICAgICAgIHJldHVybiByZXF1ZXN0O1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX29uUHJvZ3Jlc3MoZXZlbnQ6IFByb2dyZXNzRXZlbnQsIHJlcXVlc3Q6IElGaWxlUmVxdWVzdEluZm8pOiB2b2lkIHtcclxuICAgICAgICBpZiAoIXRoaXMuX3Byb2dyZXNzQ2FsbGJhY2spIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmVxdWVzdC5fbGVuZ3RoQ29tcHV0YWJsZSA9IGV2ZW50Lmxlbmd0aENvbXB1dGFibGU7XHJcbiAgICAgICAgcmVxdWVzdC5fbG9hZGVkID0gZXZlbnQubG9hZGVkO1xyXG4gICAgICAgIHJlcXVlc3QuX3RvdGFsID0gZXZlbnQudG90YWw7XHJcblxyXG4gICAgICAgIGxldCBsZW5ndGhDb21wdXRhYmxlID0gdHJ1ZTtcclxuICAgICAgICBsZXQgbG9hZGVkID0gMDtcclxuICAgICAgICBsZXQgdG90YWwgPSAwO1xyXG4gICAgICAgIGZvciAoY29uc3QgcmVxdWVzdCBvZiB0aGlzLl9yZXF1ZXN0cykge1xyXG4gICAgICAgICAgICBpZiAocmVxdWVzdC5fbGVuZ3RoQ29tcHV0YWJsZSA9PT0gdW5kZWZpbmVkIHx8IHJlcXVlc3QuX2xvYWRlZCA9PT0gdW5kZWZpbmVkIHx8IHJlcXVlc3QuX3RvdGFsID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgbGVuZ3RoQ29tcHV0YWJsZSA9IGxlbmd0aENvbXB1dGFibGUgJiYgcmVxdWVzdC5fbGVuZ3RoQ29tcHV0YWJsZTtcclxuICAgICAgICAgICAgbG9hZGVkICs9IHJlcXVlc3QuX2xvYWRlZDtcclxuICAgICAgICAgICAgdG90YWwgKz0gcmVxdWVzdC5fdG90YWw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLl9wcm9ncmVzc0NhbGxiYWNrKHtcclxuICAgICAgICAgICAgbGVuZ3RoQ29tcHV0YWJsZTogbGVuZ3RoQ29tcHV0YWJsZSxcclxuICAgICAgICAgICAgbG9hZGVkOiBsb2FkZWQsXHJcbiAgICAgICAgICAgIHRvdGFsOiBsZW5ndGhDb21wdXRhYmxlID8gdG90YWwgOiAwLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX3ZhbGlkYXRlKHNjZW5lOiBTY2VuZSwgZGF0YTogc3RyaW5nIHwgQXJyYXlCdWZmZXJWaWV3LCByb290VXJsID0gXCJcIiwgZmlsZU5hbWUgPSBcIlwiKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKCF0aGlzLnZhbGlkYXRlKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuX3N0YXJ0UGVyZm9ybWFuY2VDb3VudGVyKFwiVmFsaWRhdGUgSlNPTlwiKTtcclxuICAgICAgICBHTFRGVmFsaWRhdGlvbi5WYWxpZGF0ZUFzeW5jKGRhdGEsIHJvb3RVcmwsIGZpbGVOYW1lLCAodXJpKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnByZXByb2Nlc3NVcmxBc3luYyhyb290VXJsICsgdXJpKS50aGVuKCh1cmwpID0+IHNjZW5lLl9sb2FkRmlsZUFzeW5jKHVybCwgdW5kZWZpbmVkLCB0cnVlLCB0cnVlKSBhcyBQcm9taXNlPEFycmF5QnVmZmVyPik7XHJcbiAgICAgICAgfSkudGhlbihcclxuICAgICAgICAgICAgKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fZW5kUGVyZm9ybWFuY2VDb3VudGVyKFwiVmFsaWRhdGUgSlNPTlwiKTtcclxuICAgICAgICAgICAgICAgIHRoaXMub25WYWxpZGF0ZWRPYnNlcnZhYmxlLm5vdGlmeU9ic2VydmVycyhyZXN1bHQpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5vblZhbGlkYXRlZE9ic2VydmFibGUuY2xlYXIoKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgKHJlYXNvbikgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fZW5kUGVyZm9ybWFuY2VDb3VudGVyKFwiVmFsaWRhdGUgSlNPTlwiKTtcclxuICAgICAgICAgICAgICAgIFRvb2xzLldhcm4oYEZhaWxlZCB0byB2YWxpZGF0ZTogJHtyZWFzb24ubWVzc2FnZX1gKTtcclxuICAgICAgICAgICAgICAgIHRoaXMub25WYWxpZGF0ZWRPYnNlcnZhYmxlLmNsZWFyKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2dldExvYWRlcihsb2FkZXJEYXRhOiBJR0xURkxvYWRlckRhdGEpOiBJR0xURkxvYWRlciB7XHJcbiAgICAgICAgY29uc3QgYXNzZXQgPSAoPGFueT5sb2FkZXJEYXRhLmpzb24pLmFzc2V0IHx8IHt9O1xyXG5cclxuICAgICAgICB0aGlzLl9sb2coYEFzc2V0IHZlcnNpb246ICR7YXNzZXQudmVyc2lvbn1gKTtcclxuICAgICAgICBhc3NldC5taW5WZXJzaW9uICYmIHRoaXMuX2xvZyhgQXNzZXQgbWluaW11bSB2ZXJzaW9uOiAke2Fzc2V0Lm1pblZlcnNpb259YCk7XHJcbiAgICAgICAgYXNzZXQuZ2VuZXJhdG9yICYmIHRoaXMuX2xvZyhgQXNzZXQgZ2VuZXJhdG9yOiAke2Fzc2V0LmdlbmVyYXRvcn1gKTtcclxuXHJcbiAgICAgICAgY29uc3QgdmVyc2lvbiA9IEdMVEZGaWxlTG9hZGVyLl9wYXJzZVZlcnNpb24oYXNzZXQudmVyc2lvbik7XHJcbiAgICAgICAgaWYgKCF2ZXJzaW9uKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgdmVyc2lvbjogXCIgKyBhc3NldC52ZXJzaW9uKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChhc3NldC5taW5WZXJzaW9uICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgY29uc3QgbWluVmVyc2lvbiA9IEdMVEZGaWxlTG9hZGVyLl9wYXJzZVZlcnNpb24oYXNzZXQubWluVmVyc2lvbik7XHJcbiAgICAgICAgICAgIGlmICghbWluVmVyc2lvbikge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBtaW5pbXVtIHZlcnNpb246IFwiICsgYXNzZXQubWluVmVyc2lvbik7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChHTFRGRmlsZUxvYWRlci5fY29tcGFyZVZlcnNpb24obWluVmVyc2lvbiwgeyBtYWpvcjogMiwgbWlub3I6IDAgfSkgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbmNvbXBhdGlibGUgbWluaW11bSB2ZXJzaW9uOiBcIiArIGFzc2V0Lm1pblZlcnNpb24pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBjcmVhdGVMb2FkZXJzOiB7IFtrZXk6IG51bWJlcl06IChwYXJlbnQ6IEdMVEZGaWxlTG9hZGVyKSA9PiBJR0xURkxvYWRlciB9ID0ge1xyXG4gICAgICAgICAgICAxOiBHTFRGRmlsZUxvYWRlci5fQ3JlYXRlR0xURjFMb2FkZXIsXHJcbiAgICAgICAgICAgIDI6IEdMVEZGaWxlTG9hZGVyLl9DcmVhdGVHTFRGMkxvYWRlcixcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBjb25zdCBjcmVhdGVMb2FkZXIgPSBjcmVhdGVMb2FkZXJzW3ZlcnNpb24ubWFqb3JdO1xyXG4gICAgICAgIGlmICghY3JlYXRlTG9hZGVyKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlVuc3VwcG9ydGVkIHZlcnNpb246IFwiICsgYXNzZXQudmVyc2lvbik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gY3JlYXRlTG9hZGVyKHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX3BhcnNlSnNvbihqc29uOiBzdHJpbmcpOiBPYmplY3Qge1xyXG4gICAgICAgIHRoaXMuX3N0YXJ0UGVyZm9ybWFuY2VDb3VudGVyKFwiUGFyc2UgSlNPTlwiKTtcclxuICAgICAgICB0aGlzLl9sb2coYEpTT04gbGVuZ3RoOiAke2pzb24ubGVuZ3RofWApO1xyXG4gICAgICAgIGNvbnN0IHBhcnNlZCA9IEpTT04ucGFyc2UoanNvbik7XHJcbiAgICAgICAgdGhpcy5fZW5kUGVyZm9ybWFuY2VDb3VudGVyKFwiUGFyc2UgSlNPTlwiKTtcclxuICAgICAgICByZXR1cm4gcGFyc2VkO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX3VucGFja0JpbmFyeUFzeW5jKGRhdGFSZWFkZXI6IERhdGFSZWFkZXIpOiBQcm9taXNlPElHTFRGTG9hZGVyRGF0YT4ge1xyXG4gICAgICAgIHRoaXMuX3N0YXJ0UGVyZm9ybWFuY2VDb3VudGVyKFwiVW5wYWNrIEJpbmFyeVwiKTtcclxuXHJcbiAgICAgICAgLy8gUmVhZCBtYWdpYyArIHZlcnNpb24gKyBsZW5ndGggKyBqc29uIGxlbmd0aCArIGpzb24gZm9ybWF0XHJcbiAgICAgICAgcmV0dXJuIGRhdGFSZWFkZXIubG9hZEFzeW5jKDIwKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgQmluYXJ5ID0ge1xyXG4gICAgICAgICAgICAgICAgTWFnaWM6IDB4NDY1NDZjNjcsXHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICBjb25zdCBtYWdpYyA9IGRhdGFSZWFkZXIucmVhZFVpbnQzMigpO1xyXG4gICAgICAgICAgICBpZiAobWFnaWMgIT09IEJpbmFyeS5NYWdpYykge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFJ1bnRpbWVFcnJvcihcIlVuZXhwZWN0ZWQgbWFnaWM6IFwiICsgbWFnaWMsIEVycm9yQ29kZXMuR0xURkxvYWRlclVuZXhwZWN0ZWRNYWdpY0Vycm9yKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY29uc3QgdmVyc2lvbiA9IGRhdGFSZWFkZXIucmVhZFVpbnQzMigpO1xyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMubG9nZ2luZ0VuYWJsZWQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2xvZyhgQmluYXJ5IHZlcnNpb246ICR7dmVyc2lvbn1gKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY29uc3QgbGVuZ3RoID0gZGF0YVJlYWRlci5yZWFkVWludDMyKCk7XHJcbiAgICAgICAgICAgIGlmICghdGhpcy51c2VSYW5nZVJlcXVlc3RzICYmIGxlbmd0aCAhPT0gZGF0YVJlYWRlci5idWZmZXIuYnl0ZUxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgTG9nZ2VyLldhcm4oYExlbmd0aCBpbiBoZWFkZXIgZG9lcyBub3QgbWF0Y2ggYWN0dWFsIGRhdGEgbGVuZ3RoOiAke2xlbmd0aH0gIT0gJHtkYXRhUmVhZGVyLmJ1ZmZlci5ieXRlTGVuZ3RofWApO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBsZXQgdW5wYWNrZWQ6IFByb21pc2U8SUdMVEZMb2FkZXJEYXRhPjtcclxuICAgICAgICAgICAgc3dpdGNoICh2ZXJzaW9uKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDE6IHtcclxuICAgICAgICAgICAgICAgICAgICB1bnBhY2tlZCA9IHRoaXMuX3VucGFja0JpbmFyeVYxQXN5bmMoZGF0YVJlYWRlciwgbGVuZ3RoKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNhc2UgMjoge1xyXG4gICAgICAgICAgICAgICAgICAgIHVucGFja2VkID0gdGhpcy5fdW5wYWNrQmluYXJ5VjJBc3luYyhkYXRhUmVhZGVyLCBsZW5ndGgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDoge1xyXG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlVuc3VwcG9ydGVkIHZlcnNpb246IFwiICsgdmVyc2lvbik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRoaXMuX2VuZFBlcmZvcm1hbmNlQ291bnRlcihcIlVucGFjayBCaW5hcnlcIik7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gdW5wYWNrZWQ7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfdW5wYWNrQmluYXJ5VjFBc3luYyhkYXRhUmVhZGVyOiBEYXRhUmVhZGVyLCBsZW5ndGg6IG51bWJlcik6IFByb21pc2U8SUdMVEZMb2FkZXJEYXRhPiB7XHJcbiAgICAgICAgY29uc3QgQ29udGVudEZvcm1hdCA9IHtcclxuICAgICAgICAgICAgSlNPTjogMCxcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBjb25zdCBjb250ZW50TGVuZ3RoID0gZGF0YVJlYWRlci5yZWFkVWludDMyKCk7XHJcbiAgICAgICAgY29uc3QgY29udGVudEZvcm1hdCA9IGRhdGFSZWFkZXIucmVhZFVpbnQzMigpO1xyXG5cclxuICAgICAgICBpZiAoY29udGVudEZvcm1hdCAhPT0gQ29udGVudEZvcm1hdC5KU09OKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgVW5leHBlY3RlZCBjb250ZW50IGZvcm1hdDogJHtjb250ZW50Rm9ybWF0fWApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgYm9keUxlbmd0aCA9IGxlbmd0aCAtIGRhdGFSZWFkZXIuYnl0ZU9mZnNldDtcclxuXHJcbiAgICAgICAgY29uc3QgZGF0YTogSUdMVEZMb2FkZXJEYXRhID0geyBqc29uOiB0aGlzLl9wYXJzZUpzb24oZGF0YVJlYWRlci5yZWFkU3RyaW5nKGNvbnRlbnRMZW5ndGgpKSwgYmluOiBudWxsIH07XHJcbiAgICAgICAgaWYgKGJvZHlMZW5ndGggIT09IDApIHtcclxuICAgICAgICAgICAgY29uc3Qgc3RhcnRCeXRlT2Zmc2V0ID0gZGF0YVJlYWRlci5ieXRlT2Zmc2V0O1xyXG4gICAgICAgICAgICBkYXRhLmJpbiA9IHtcclxuICAgICAgICAgICAgICAgIHJlYWRBc3luYzogKGJ5dGVPZmZzZXQsIGJ5dGVMZW5ndGgpID0+IGRhdGFSZWFkZXIuYnVmZmVyLnJlYWRBc3luYyhzdGFydEJ5dGVPZmZzZXQgKyBieXRlT2Zmc2V0LCBieXRlTGVuZ3RoKSxcclxuICAgICAgICAgICAgICAgIGJ5dGVMZW5ndGg6IGJvZHlMZW5ndGgsXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGRhdGEpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX3VucGFja0JpbmFyeVYyQXN5bmMoZGF0YVJlYWRlcjogRGF0YVJlYWRlciwgbGVuZ3RoOiBudW1iZXIpOiBQcm9taXNlPElHTFRGTG9hZGVyRGF0YT4ge1xyXG4gICAgICAgIGNvbnN0IENodW5rRm9ybWF0ID0ge1xyXG4gICAgICAgICAgICBKU09OOiAweDRlNGY1MzRhLFxyXG4gICAgICAgICAgICBCSU46IDB4MDA0ZTQ5NDIsXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgLy8gUmVhZCB0aGUgSlNPTiBjaHVuayBoZWFkZXIuXHJcbiAgICAgICAgY29uc3QgY2h1bmtMZW5ndGggPSBkYXRhUmVhZGVyLnJlYWRVaW50MzIoKTtcclxuICAgICAgICBjb25zdCBjaHVua0Zvcm1hdCA9IGRhdGFSZWFkZXIucmVhZFVpbnQzMigpO1xyXG4gICAgICAgIGlmIChjaHVua0Zvcm1hdCAhPT0gQ2h1bmtGb3JtYXQuSlNPTikge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJGaXJzdCBjaHVuayBmb3JtYXQgaXMgbm90IEpTT05cIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBCYWlsIGlmIHRoZXJlIGFyZSBubyBvdGhlciBjaHVua3MuXHJcbiAgICAgICAgaWYgKGRhdGFSZWFkZXIuYnl0ZU9mZnNldCArIGNodW5rTGVuZ3RoID09PSBsZW5ndGgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGRhdGFSZWFkZXIubG9hZEFzeW5jKGNodW5rTGVuZ3RoKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB7IGpzb246IHRoaXMuX3BhcnNlSnNvbihkYXRhUmVhZGVyLnJlYWRTdHJpbmcoY2h1bmtMZW5ndGgpKSwgYmluOiBudWxsIH07XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gUmVhZCB0aGUgSlNPTiBjaHVuayBhbmQgdGhlIGxlbmd0aCBhbmQgdHlwZSBvZiB0aGUgbmV4dCBjaHVuay5cclxuICAgICAgICByZXR1cm4gZGF0YVJlYWRlci5sb2FkQXN5bmMoY2h1bmtMZW5ndGggKyA4KS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgZGF0YTogSUdMVEZMb2FkZXJEYXRhID0geyBqc29uOiB0aGlzLl9wYXJzZUpzb24oZGF0YVJlYWRlci5yZWFkU3RyaW5nKGNodW5rTGVuZ3RoKSksIGJpbjogbnVsbCB9O1xyXG5cclxuICAgICAgICAgICAgY29uc3QgcmVhZEFzeW5jID0gKCk6IFByb21pc2U8SUdMVEZMb2FkZXJEYXRhPiA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjaHVua0xlbmd0aCA9IGRhdGFSZWFkZXIucmVhZFVpbnQzMigpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY2h1bmtGb3JtYXQgPSBkYXRhUmVhZGVyLnJlYWRVaW50MzIoKTtcclxuXHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKGNodW5rRm9ybWF0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBDaHVua0Zvcm1hdC5KU09OOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlVuZXhwZWN0ZWQgSlNPTiBjaHVua1wiKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBDaHVua0Zvcm1hdC5CSU46IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3RhcnRCeXRlT2Zmc2V0ID0gZGF0YVJlYWRlci5ieXRlT2Zmc2V0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhLmJpbiA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlYWRBc3luYzogKGJ5dGVPZmZzZXQsIGJ5dGVMZW5ndGgpID0+IGRhdGFSZWFkZXIuYnVmZmVyLnJlYWRBc3luYyhzdGFydEJ5dGVPZmZzZXQgKyBieXRlT2Zmc2V0LCBieXRlTGVuZ3RoKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ5dGVMZW5ndGg6IGNodW5rTGVuZ3RoLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhUmVhZGVyLnNraXBCeXRlcyhjaHVua0xlbmd0aCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGlnbm9yZSB1bnJlY29nbml6ZWQgY2h1bmtGb3JtYXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YVJlYWRlci5za2lwQnl0ZXMoY2h1bmtMZW5ndGgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGRhdGFSZWFkZXIuYnl0ZU9mZnNldCAhPT0gbGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRhdGFSZWFkZXIubG9hZEFzeW5jKDgpLnRoZW4ocmVhZEFzeW5jKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGRhdGEpO1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHJlYWRBc3luYygpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIF9wYXJzZVZlcnNpb24odmVyc2lvbjogc3RyaW5nKTogTnVsbGFibGU8eyBtYWpvcjogbnVtYmVyOyBtaW5vcjogbnVtYmVyIH0+IHtcclxuICAgICAgICBpZiAodmVyc2lvbiA9PT0gXCIxLjBcIiB8fCB2ZXJzaW9uID09PSBcIjEuMC4xXCIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIG1ham9yOiAxLFxyXG4gICAgICAgICAgICAgICAgbWlub3I6IDAsXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBtYXRjaCA9ICh2ZXJzaW9uICsgXCJcIikubWF0Y2goL14oXFxkKylcXC4oXFxkKykvKTtcclxuICAgICAgICBpZiAoIW1hdGNoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgbWFqb3I6IHBhcnNlSW50KG1hdGNoWzFdKSxcclxuICAgICAgICAgICAgbWlub3I6IHBhcnNlSW50KG1hdGNoWzJdKSxcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIF9jb21wYXJlVmVyc2lvbihhOiB7IG1ham9yOiBudW1iZXI7IG1pbm9yOiBudW1iZXIgfSwgYjogeyBtYWpvcjogbnVtYmVyOyBtaW5vcjogbnVtYmVyIH0pOiBudW1iZXIge1xyXG4gICAgICAgIGlmIChhLm1ham9yID4gYi5tYWpvcikge1xyXG4gICAgICAgICAgICByZXR1cm4gMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGEubWFqb3IgPCBiLm1ham9yKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAtMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGEubWlub3IgPiBiLm1pbm9yKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAxO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoYS5taW5vciA8IGIubWlub3IpIHtcclxuICAgICAgICAgICAgcmV0dXJuIC0xO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gMDtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHN0YXRpYyByZWFkb25seSBfbG9nU3BhY2VzID0gXCIgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiO1xyXG4gICAgcHJpdmF0ZSBfbG9nSW5kZW50TGV2ZWwgPSAwO1xyXG4gICAgcHJpdmF0ZSBfbG9nZ2luZ0VuYWJsZWQgPSBmYWxzZTtcclxuXHJcbiAgICAvKiogQGludGVybmFsICovXHJcbiAgICBwdWJsaWMgX2xvZyA9IHRoaXMuX2xvZ0Rpc2FibGVkO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQGludGVybmFsXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBfbG9nT3BlbihtZXNzYWdlOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLl9sb2cobWVzc2FnZSk7XHJcbiAgICAgICAgdGhpcy5fbG9nSW5kZW50TGV2ZWwrKztcclxuICAgIH1cclxuXHJcbiAgICAvKiogQGludGVybmFsICovXHJcbiAgICBwdWJsaWMgX2xvZ0Nsb3NlKCk6IHZvaWQge1xyXG4gICAgICAgIC0tdGhpcy5fbG9nSW5kZW50TGV2ZWw7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfbG9nRW5hYmxlZChtZXNzYWdlOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgICAgICBjb25zdCBzcGFjZXMgPSBHTFRGRmlsZUxvYWRlci5fbG9nU3BhY2VzLnN1YnN0cigwLCB0aGlzLl9sb2dJbmRlbnRMZXZlbCAqIDIpO1xyXG4gICAgICAgIExvZ2dlci5Mb2coYCR7c3BhY2VzfSR7bWVzc2FnZX1gKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9sb2dEaXNhYmxlZChtZXNzYWdlOiBzdHJpbmcpOiB2b2lkIHt9XHJcblxyXG4gICAgcHJpdmF0ZSBfY2FwdHVyZVBlcmZvcm1hbmNlQ291bnRlcnMgPSBmYWxzZTtcclxuXHJcbiAgICAvKiogQGludGVybmFsICovXHJcbiAgICBwdWJsaWMgX3N0YXJ0UGVyZm9ybWFuY2VDb3VudGVyID0gdGhpcy5fc3RhcnRQZXJmb3JtYW5jZUNvdW50ZXJEaXNhYmxlZDtcclxuXHJcbiAgICAvKiogQGludGVybmFsICovXHJcbiAgICBwdWJsaWMgX2VuZFBlcmZvcm1hbmNlQ291bnRlciA9IHRoaXMuX2VuZFBlcmZvcm1hbmNlQ291bnRlckRpc2FibGVkO1xyXG5cclxuICAgIHByaXZhdGUgX3N0YXJ0UGVyZm9ybWFuY2VDb3VudGVyRW5hYmxlZChjb3VudGVyTmFtZTogc3RyaW5nKTogdm9pZCB7XHJcbiAgICAgICAgVG9vbHMuU3RhcnRQZXJmb3JtYW5jZUNvdW50ZXIoY291bnRlck5hbWUpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX3N0YXJ0UGVyZm9ybWFuY2VDb3VudGVyRGlzYWJsZWQoY291bnRlck5hbWU6IHN0cmluZyk6IHZvaWQge31cclxuXHJcbiAgICBwcml2YXRlIF9lbmRQZXJmb3JtYW5jZUNvdW50ZXJFbmFibGVkKGNvdW50ZXJOYW1lOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgICAgICBUb29scy5FbmRQZXJmb3JtYW5jZUNvdW50ZXIoY291bnRlck5hbWUpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2VuZFBlcmZvcm1hbmNlQ291bnRlckRpc2FibGVkKGNvdW50ZXJOYW1lOiBzdHJpbmcpOiB2b2lkIHt9XHJcbn1cclxuXHJcbmlmIChTY2VuZUxvYWRlcikge1xyXG4gICAgU2NlbmVMb2FkZXIuUmVnaXN0ZXJQbHVnaW4obmV3IEdMVEZGaWxlTG9hZGVyKCkpO1xyXG59XHJcbiIsImltcG9ydCB0eXBlICogYXMgR0xURjIgZnJvbSBcImJhYnlsb25qcy1nbHRmMmludGVyZmFjZVwiO1xyXG5pbXBvcnQgeyBUb29scyB9IGZyb20gXCJjb3JlL01pc2MvdG9vbHNcIjtcclxuXHJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbmFtaW5nLWNvbnZlbnRpb25cclxuZGVjbGFyZSBsZXQgR0xURlZhbGlkYXRvcjogR0xURjIuSUdMVEZWYWxpZGF0b3I7XHJcblxyXG4vLyBXb3JrZXJHbG9iYWxTY29wZVxyXG5kZWNsYXJlIGZ1bmN0aW9uIGltcG9ydFNjcmlwdHMoLi4udXJsczogc3RyaW5nW10pOiB2b2lkO1xyXG5kZWNsYXJlIGZ1bmN0aW9uIHBvc3RNZXNzYWdlKG1lc3NhZ2U6IGFueSwgdHJhbnNmZXI/OiBhbnlbXSk6IHZvaWQ7XHJcblxyXG5mdW5jdGlvbiB2YWxpZGF0ZUFzeW5jKFxyXG4gICAgZGF0YTogc3RyaW5nIHwgQXJyYXlCdWZmZXIsXHJcbiAgICByb290VXJsOiBzdHJpbmcsXHJcbiAgICBmaWxlTmFtZTogc3RyaW5nLFxyXG4gICAgZ2V0RXh0ZXJuYWxSZXNvdXJjZTogKHVyaTogc3RyaW5nKSA9PiBQcm9taXNlPEFycmF5QnVmZmVyPlxyXG4pOiBQcm9taXNlPEdMVEYyLklHTFRGVmFsaWRhdGlvblJlc3VsdHM+IHtcclxuICAgIGNvbnN0IG9wdGlvbnM6IEdMVEYyLklHTFRGVmFsaWRhdGlvbk9wdGlvbnMgPSB7XHJcbiAgICAgICAgZXh0ZXJuYWxSZXNvdXJjZUZ1bmN0aW9uOiAodXJpKSA9PiBnZXRFeHRlcm5hbFJlc291cmNlKHVyaSkudGhlbigodmFsdWUpID0+IG5ldyBVaW50OEFycmF5KHZhbHVlKSksXHJcbiAgICB9O1xyXG5cclxuICAgIGlmIChmaWxlTmFtZSkge1xyXG4gICAgICAgIG9wdGlvbnMudXJpID0gcm9vdFVybCA9PT0gXCJmaWxlOlwiID8gZmlsZU5hbWUgOiByb290VXJsICsgZmlsZU5hbWU7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGRhdGEgaW5zdGFuY2VvZiBBcnJheUJ1ZmZlciA/IEdMVEZWYWxpZGF0b3IudmFsaWRhdGVCeXRlcyhuZXcgVWludDhBcnJheShkYXRhKSwgb3B0aW9ucykgOiBHTFRGVmFsaWRhdG9yLnZhbGlkYXRlU3RyaW5nKGRhdGEsIG9wdGlvbnMpO1xyXG59XHJcblxyXG4vKipcclxuICogVGhlIHdvcmtlciBmdW5jdGlvbiB0aGF0IGdldHMgY29udmVydGVkIHRvIGEgYmxvYiB1cmwgdG8gcGFzcyBpbnRvIGEgd29ya2VyLlxyXG4gKi9cclxuZnVuY3Rpb24gd29ya2VyRnVuYygpOiB2b2lkIHtcclxuICAgIGNvbnN0IHBlbmRpbmdFeHRlcm5hbFJlc291cmNlczogQXJyYXk8eyByZXNvbHZlOiAoZGF0YTogYW55KSA9PiB2b2lkOyByZWplY3Q6IChyZWFzb246IGFueSkgPT4gdm9pZCB9PiA9IFtdO1xyXG5cclxuICAgIG9ubWVzc2FnZSA9IChtZXNzYWdlKSA9PiB7XHJcbiAgICAgICAgY29uc3QgZGF0YSA9IG1lc3NhZ2UuZGF0YTtcclxuICAgICAgICBzd2l0Y2ggKGRhdGEuaWQpIHtcclxuICAgICAgICAgICAgY2FzZSBcImluaXRcIjoge1xyXG4gICAgICAgICAgICAgICAgaW1wb3J0U2NyaXB0cyhkYXRhLnVybCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlIFwidmFsaWRhdGVcIjoge1xyXG4gICAgICAgICAgICAgICAgdmFsaWRhdGVBc3luYyhcclxuICAgICAgICAgICAgICAgICAgICBkYXRhLmRhdGEsXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS5yb290VXJsLFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGEuZmlsZU5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgKHVyaSkgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaW5kZXggPSBwZW5kaW5nRXh0ZXJuYWxSZXNvdXJjZXMubGVuZ3RoO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGVuZGluZ0V4dGVybmFsUmVzb3VyY2VzLnB1c2goeyByZXNvbHZlLCByZWplY3QgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3N0TWVzc2FnZSh7IGlkOiBcImdldEV4dGVybmFsUmVzb3VyY2VcIiwgaW5kZXg6IGluZGV4LCB1cmk6IHVyaSB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICkudGhlbihcclxuICAgICAgICAgICAgICAgICAgICAodmFsdWUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zdE1lc3NhZ2UoeyBpZDogXCJ2YWxpZGF0ZS5yZXNvbHZlXCIsIHZhbHVlOiB2YWx1ZSB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIChyZWFzb24pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zdE1lc3NhZ2UoeyBpZDogXCJ2YWxpZGF0ZS5yZWplY3RcIiwgcmVhc29uOiByZWFzb24gfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgXCJnZXRFeHRlcm5hbFJlc291cmNlLnJlc29sdmVcIjoge1xyXG4gICAgICAgICAgICAgICAgcGVuZGluZ0V4dGVybmFsUmVzb3VyY2VzW2RhdGEuaW5kZXhdLnJlc29sdmUoZGF0YS52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlIFwiZ2V0RXh0ZXJuYWxSZXNvdXJjZS5yZWplY3RcIjoge1xyXG4gICAgICAgICAgICAgICAgcGVuZGluZ0V4dGVybmFsUmVzb3VyY2VzW2RhdGEuaW5kZXhdLnJlamVjdChkYXRhLnJlYXNvbik7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDb25maWd1cmF0aW9uIGZvciBnbFRGIHZhbGlkYXRpb25cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUdMVEZWYWxpZGF0aW9uQ29uZmlndXJhdGlvbiB7XHJcbiAgICAvKipcclxuICAgICAqIFRoZSB1cmwgb2YgdGhlIGdsVEYgdmFsaWRhdG9yLlxyXG4gICAgICovXHJcbiAgICB1cmw6IHN0cmluZztcclxufVxyXG5cclxuLyoqXHJcbiAqIGdsVEYgdmFsaWRhdGlvblxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIEdMVEZWYWxpZGF0aW9uIHtcclxuICAgIC8qKlxyXG4gICAgICogVGhlIGNvbmZpZ3VyYXRpb24uIERlZmF1bHRzIHRvIGB7IHVybDogXCJodHRwczovL2Nkbi5iYWJ5bG9uanMuY29tL2dsdGZfdmFsaWRhdG9yLmpzXCIgfWAuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgQ29uZmlndXJhdGlvbjogSUdMVEZWYWxpZGF0aW9uQ29uZmlndXJhdGlvbiA9IHtcclxuICAgICAgICB1cmw6IGAke1Rvb2xzLl9EZWZhdWx0Q2RuVXJsfS9nbHRmX3ZhbGlkYXRvci5qc2AsXHJcbiAgICB9O1xyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIF9Mb2FkU2NyaXB0UHJvbWlzZTogUHJvbWlzZTx2b2lkPjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFZhbGlkYXRlIGEgZ2xURiBhc3NldCB1c2luZyB0aGUgZ2xURi1WYWxpZGF0b3IuXHJcbiAgICAgKiBAcGFyYW0gZGF0YSBUaGUgSlNPTiBvZiBhIGdsVEYgb3IgdGhlIGFycmF5IGJ1ZmZlciBvZiBhIGJpbmFyeSBnbFRGXHJcbiAgICAgKiBAcGFyYW0gcm9vdFVybCBUaGUgcm9vdCB1cmwgZm9yIHRoZSBnbFRGXHJcbiAgICAgKiBAcGFyYW0gZmlsZU5hbWUgVGhlIGZpbGUgbmFtZSBmb3IgdGhlIGdsVEZcclxuICAgICAqIEBwYXJhbSBnZXRFeHRlcm5hbFJlc291cmNlIFRoZSBjYWxsYmFjayB0byBnZXQgZXh0ZXJuYWwgcmVzb3VyY2VzIGZvciB0aGUgZ2xURiB2YWxpZGF0b3JcclxuICAgICAqIEByZXR1cm5zIEEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdpdGggdGhlIGdsVEYgdmFsaWRhdGlvbiByZXN1bHRzIG9uY2UgY29tcGxldGVcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBWYWxpZGF0ZUFzeW5jKFxyXG4gICAgICAgIGRhdGE6IHN0cmluZyB8IEFycmF5QnVmZmVyVmlldyxcclxuICAgICAgICByb290VXJsOiBzdHJpbmcsXHJcbiAgICAgICAgZmlsZU5hbWU6IHN0cmluZyxcclxuICAgICAgICBnZXRFeHRlcm5hbFJlc291cmNlOiAodXJpOiBzdHJpbmcpID0+IFByb21pc2U8QXJyYXlCdWZmZXI+XHJcbiAgICApOiBQcm9taXNlPEdMVEYyLklHTFRGVmFsaWRhdGlvblJlc3VsdHM+IHtcclxuICAgICAgICBjb25zdCBkYXRhQ29weSA9IEFycmF5QnVmZmVyLmlzVmlldyhkYXRhKSA/IChkYXRhIGFzIFVpbnQ4QXJyYXkpLnNsaWNlKCkuYnVmZmVyIDogKGRhdGEgYXMgc3RyaW5nKTtcclxuXHJcbiAgICAgICAgaWYgKHR5cGVvZiBXb3JrZXIgPT09IFwiZnVuY3Rpb25cIikge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgd29ya2VyQ29udGVudCA9IGAke3ZhbGlkYXRlQXN5bmN9KCR7d29ya2VyRnVuY30pKClgO1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgd29ya2VyQmxvYlVybCA9IFVSTC5jcmVhdGVPYmplY3RVUkwobmV3IEJsb2IoW3dvcmtlckNvbnRlbnRdLCB7IHR5cGU6IFwiYXBwbGljYXRpb24vamF2YXNjcmlwdFwiIH0pKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHdvcmtlciA9IG5ldyBXb3JrZXIod29ya2VyQmxvYlVybCk7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3Qgb25FcnJvciA9IChlcnJvcjogRXJyb3JFdmVudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHdvcmtlci5yZW1vdmVFdmVudExpc3RlbmVyKFwiZXJyb3JcIiwgb25FcnJvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgd29ya2VyLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtZXNzYWdlXCIsIG9uTWVzc2FnZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGVycm9yKTtcclxuICAgICAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3Qgb25NZXNzYWdlID0gKG1lc3NhZ2U6IE1lc3NhZ2VFdmVudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBtZXNzYWdlLmRhdGE7XHJcbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChkYXRhLmlkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJnZXRFeHRlcm5hbFJlc291cmNlXCI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdldEV4dGVybmFsUmVzb3VyY2UoZGF0YS51cmkpLnRoZW4oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKHZhbHVlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdvcmtlci5wb3N0TWVzc2FnZSh7IGlkOiBcImdldEV4dGVybmFsUmVzb3VyY2UucmVzb2x2ZVwiLCBpbmRleDogZGF0YS5pbmRleCwgdmFsdWU6IHZhbHVlIH0sIFt2YWx1ZV0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKHJlYXNvbikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3b3JrZXIucG9zdE1lc3NhZ2UoeyBpZDogXCJnZXRFeHRlcm5hbFJlc291cmNlLnJlamVjdFwiLCBpbmRleDogZGF0YS5pbmRleCwgcmVhc29uOiByZWFzb24gfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJ2YWxpZGF0ZS5yZXNvbHZlXCI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdvcmtlci5yZW1vdmVFdmVudExpc3RlbmVyKFwiZXJyb3JcIiwgb25FcnJvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3b3JrZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1lc3NhZ2VcIiwgb25NZXNzYWdlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoZGF0YS52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3b3JrZXIudGVybWluYXRlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwidmFsaWRhdGUucmVqZWN0XCI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdvcmtlci5yZW1vdmVFdmVudExpc3RlbmVyKFwiZXJyb3JcIiwgb25FcnJvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3b3JrZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1lc3NhZ2VcIiwgb25NZXNzYWdlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdChkYXRhLnJlYXNvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3b3JrZXIudGVybWluYXRlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgICAgIHdvcmtlci5hZGRFdmVudExpc3RlbmVyKFwiZXJyb3JcIiwgb25FcnJvcik7XHJcbiAgICAgICAgICAgICAgICB3b3JrZXIuYWRkRXZlbnRMaXN0ZW5lcihcIm1lc3NhZ2VcIiwgb25NZXNzYWdlKTtcclxuXHJcbiAgICAgICAgICAgICAgICB3b3JrZXIucG9zdE1lc3NhZ2UoeyBpZDogXCJpbml0XCIsIHVybDogVG9vbHMuR2V0QmFieWxvblNjcmlwdFVSTCh0aGlzLkNvbmZpZ3VyYXRpb24udXJsKSB9KTtcclxuICAgICAgICAgICAgICAgIHdvcmtlci5wb3N0TWVzc2FnZSh7IGlkOiBcInZhbGlkYXRlXCIsIGRhdGE6IGRhdGFDb3B5LCByb290VXJsOiByb290VXJsLCBmaWxlTmFtZTogZmlsZU5hbWUgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5fTG9hZFNjcmlwdFByb21pc2UpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX0xvYWRTY3JpcHRQcm9taXNlID0gVG9vbHMuTG9hZEJhYnlsb25TY3JpcHRBc3luYyh0aGlzLkNvbmZpZ3VyYXRpb24udXJsKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX0xvYWRTY3JpcHRQcm9taXNlLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHZhbGlkYXRlQXN5bmMoZGF0YUNvcHksIHJvb3RVcmwsIGZpbGVOYW1lLCBnZXRFeHRlcm5hbFJlc291cmNlKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCAqIGFzIEZpbGVMb2FkZXIgZnJvbSBcImxvYWRlcnMvZ2xURi9nbFRGRmlsZUxvYWRlclwiO1xyXG5pbXBvcnQgKiBhcyBWYWxpZGF0aW9uIGZyb20gXCJsb2FkZXJzL2dsVEYvZ2xURlZhbGlkYXRpb25cIjtcclxuXHJcbi8qKlxyXG4gKiBUaGlzIGlzIHRoZSBlbnRyeSBwb2ludCBmb3IgdGhlIFVNRCBtb2R1bGUuXHJcbiAqIFRoZSBlbnRyeSBwb2ludCBmb3IgYSBmdXR1cmUgRVNNIHBhY2thZ2Ugc2hvdWxkIGJlIGluZGV4LnRzXHJcbiAqL1xyXG5jb25zdCBnbG9iYWxPYmplY3QgPSB0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiID8gZ2xvYmFsIDogdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvdyA6IHVuZGVmaW5lZDtcclxuaWYgKHR5cGVvZiBnbG9iYWxPYmplY3QgIT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICg8YW55Pmdsb2JhbE9iamVjdCkuQkFCWUxPTiA9ICg8YW55Pmdsb2JhbE9iamVjdCkuQkFCWUxPTiB8fCB7fTtcclxuICAgIGZvciAoY29uc3Qga2V5IGluIEZpbGVMb2FkZXIpIHtcclxuICAgICAgICAoPGFueT5nbG9iYWxPYmplY3QpLkJBQllMT05ba2V5XSA9ICg8YW55PkZpbGVMb2FkZXIpW2tleV07XHJcbiAgICB9XHJcbiAgICBmb3IgKGNvbnN0IGtleSBpbiBWYWxpZGF0aW9uKSB7XHJcbiAgICAgICAgKDxhbnk+Z2xvYmFsT2JqZWN0KS5CQUJZTE9OW2tleV0gPSAoPGFueT5WYWxpZGF0aW9uKVtrZXldO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgKiBmcm9tIFwibG9hZGVycy9nbFRGL2dsVEZGaWxlTG9hZGVyXCI7XHJcbmV4cG9ydCAqIGZyb20gXCJsb2FkZXJzL2dsVEYvZ2xURlZhbGlkYXRpb25cIjtcclxuIiwiLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L25vLWludGVybmFsLW1vZHVsZXMgKi9cclxuaW1wb3J0ICogYXMgR0xURjEgZnJvbSBcImxvYWRlcnMvZ2xURi8xLjAvaW5kZXhcIjtcclxuXHJcbi8qKlxyXG4gKiBUaGlzIGlzIHRoZSBlbnRyeSBwb2ludCBmb3IgdGhlIFVNRCBtb2R1bGUuXHJcbiAqIFRoZSBlbnRyeSBwb2ludCBmb3IgYSBmdXR1cmUgRVNNIHBhY2thZ2Ugc2hvdWxkIGJlIGluZGV4LnRzXHJcbiAqL1xyXG5jb25zdCBnbG9iYWxPYmplY3QgPSB0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiID8gZ2xvYmFsIDogdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvdyA6IHVuZGVmaW5lZDtcclxuaWYgKHR5cGVvZiBnbG9iYWxPYmplY3QgIT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICg8YW55Pmdsb2JhbE9iamVjdCkuQkFCWUxPTiA9ICg8YW55Pmdsb2JhbE9iamVjdCkuQkFCWUxPTiB8fCB7fTtcclxuICAgICg8YW55Pmdsb2JhbE9iamVjdCkuQkFCWUxPTi5HTFRGMSA9ICg8YW55Pmdsb2JhbE9iamVjdCkuQkFCWUxPTi5HTFRGMSB8fCB7fTtcclxuICAgIGZvciAoY29uc3Qga2V5IGluIEdMVEYxKSB7XHJcbiAgICAgICAgKDxhbnk+Z2xvYmFsT2JqZWN0KS5CQUJZTE9OLkdMVEYxW2tleV0gPSAoPGFueT5HTFRGMSlba2V5XTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IHsgR0xURjEgfTtcclxuIiwiLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9leHBvcnRcclxuZXhwb3J0ICogZnJvbSBcIi4vbGVnYWN5LWdsVEZcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vbGVnYWN5LWdsVEYxXCI7XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9iYWJ5bG9uanNfTWlzY19vYnNlcnZhYmxlX187IiwiLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uXG5cblBlcm1pc3Npb24gdG8gdXNlLCBjb3B5LCBtb2RpZnksIGFuZC9vciBkaXN0cmlidXRlIHRoaXMgc29mdHdhcmUgZm9yIGFueVxucHVycG9zZSB3aXRoIG9yIHdpdGhvdXQgZmVlIGlzIGhlcmVieSBncmFudGVkLlxuXG5USEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiIEFORCBUSEUgQVVUSE9SIERJU0NMQUlNUyBBTEwgV0FSUkFOVElFUyBXSVRIXG5SRUdBUkQgVE8gVEhJUyBTT0ZUV0FSRSBJTkNMVURJTkcgQUxMIElNUExJRUQgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFlcbkFORCBGSVRORVNTLiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SIEJFIExJQUJMRSBGT1IgQU5ZIFNQRUNJQUwsIERJUkVDVCxcbklORElSRUNULCBPUiBDT05TRVFVRU5USUFMIERBTUFHRVMgT1IgQU5ZIERBTUFHRVMgV0hBVFNPRVZFUiBSRVNVTFRJTkcgRlJPTVxuTE9TUyBPRiBVU0UsIERBVEEgT1IgUFJPRklUUywgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIE5FR0xJR0VOQ0UgT1Jcbk9USEVSIFRPUlRJT1VTIEFDVElPTiwgQVJJU0lORyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBVU0UgT1JcblBFUkZPUk1BTkNFIE9GIFRISVMgU09GVFdBUkUuXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqL1xuLyogZ2xvYmFsIFJlZmxlY3QsIFByb21pc2UsIFN1cHByZXNzZWRFcnJvciwgU3ltYm9sICovXG5cbnZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24oZCwgYikge1xuICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XG4gICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XG4gICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYiwgcCkpIGRbcF0gPSBiW3BdOyB9O1xuICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBfX2V4dGVuZHMoZCwgYikge1xuICBpZiAodHlwZW9mIGIgIT09IFwiZnVuY3Rpb25cIiAmJiBiICE9PSBudWxsKVxuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNsYXNzIGV4dGVuZHMgdmFsdWUgXCIgKyBTdHJpbmcoYikgKyBcIiBpcyBub3QgYSBjb25zdHJ1Y3RvciBvciBudWxsXCIpO1xuICBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xufVxuXG5leHBvcnQgdmFyIF9fYXNzaWduID0gZnVuY3Rpb24oKSB7XG4gIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiBfX2Fzc2lnbih0KSB7XG4gICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xuICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSkgdFtwXSA9IHNbcF07XG4gICAgICB9XG4gICAgICByZXR1cm4gdDtcbiAgfVxuICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIF9fcmVzdChzLCBlKSB7XG4gIHZhciB0ID0ge307XG4gIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSAmJiBlLmluZGV4T2YocCkgPCAwKVxuICAgICAgdFtwXSA9IHNbcF07XG4gIGlmIChzICE9IG51bGwgJiYgdHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09IFwiZnVuY3Rpb25cIilcbiAgICAgIGZvciAodmFyIGkgPSAwLCBwID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzKTsgaSA8IHAubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBpZiAoZS5pbmRleE9mKHBbaV0pIDwgMCAmJiBPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwocywgcFtpXSkpXG4gICAgICAgICAgICAgIHRbcFtpXV0gPSBzW3BbaV1dO1xuICAgICAgfVxuICByZXR1cm4gdDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIF9fZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcbiAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcbiAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcbiAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcbiAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIF9fcGFyYW0ocGFyYW1JbmRleCwgZGVjb3JhdG9yKSB7XG4gIHJldHVybiBmdW5jdGlvbiAodGFyZ2V0LCBrZXkpIHsgZGVjb3JhdG9yKHRhcmdldCwga2V5LCBwYXJhbUluZGV4KTsgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gX19lc0RlY29yYXRlKGN0b3IsIGRlc2NyaXB0b3JJbiwgZGVjb3JhdG9ycywgY29udGV4dEluLCBpbml0aWFsaXplcnMsIGV4dHJhSW5pdGlhbGl6ZXJzKSB7XG4gIGZ1bmN0aW9uIGFjY2VwdChmKSB7IGlmIChmICE9PSB2b2lkIDAgJiYgdHlwZW9mIGYgIT09IFwiZnVuY3Rpb25cIikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkZ1bmN0aW9uIGV4cGVjdGVkXCIpOyByZXR1cm4gZjsgfVxuICB2YXIga2luZCA9IGNvbnRleHRJbi5raW5kLCBrZXkgPSBraW5kID09PSBcImdldHRlclwiID8gXCJnZXRcIiA6IGtpbmQgPT09IFwic2V0dGVyXCIgPyBcInNldFwiIDogXCJ2YWx1ZVwiO1xuICB2YXIgdGFyZ2V0ID0gIWRlc2NyaXB0b3JJbiAmJiBjdG9yID8gY29udGV4dEluW1wic3RhdGljXCJdID8gY3RvciA6IGN0b3IucHJvdG90eXBlIDogbnVsbDtcbiAgdmFyIGRlc2NyaXB0b3IgPSBkZXNjcmlwdG9ySW4gfHwgKHRhcmdldCA/IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBjb250ZXh0SW4ubmFtZSkgOiB7fSk7XG4gIHZhciBfLCBkb25lID0gZmFsc2U7XG4gIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICB2YXIgY29udGV4dCA9IHt9O1xuICAgICAgZm9yICh2YXIgcCBpbiBjb250ZXh0SW4pIGNvbnRleHRbcF0gPSBwID09PSBcImFjY2Vzc1wiID8ge30gOiBjb250ZXh0SW5bcF07XG4gICAgICBmb3IgKHZhciBwIGluIGNvbnRleHRJbi5hY2Nlc3MpIGNvbnRleHQuYWNjZXNzW3BdID0gY29udGV4dEluLmFjY2Vzc1twXTtcbiAgICAgIGNvbnRleHQuYWRkSW5pdGlhbGl6ZXIgPSBmdW5jdGlvbiAoZikgeyBpZiAoZG9uZSkgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBhZGQgaW5pdGlhbGl6ZXJzIGFmdGVyIGRlY29yYXRpb24gaGFzIGNvbXBsZXRlZFwiKTsgZXh0cmFJbml0aWFsaXplcnMucHVzaChhY2NlcHQoZiB8fCBudWxsKSk7IH07XG4gICAgICB2YXIgcmVzdWx0ID0gKDAsIGRlY29yYXRvcnNbaV0pKGtpbmQgPT09IFwiYWNjZXNzb3JcIiA/IHsgZ2V0OiBkZXNjcmlwdG9yLmdldCwgc2V0OiBkZXNjcmlwdG9yLnNldCB9IDogZGVzY3JpcHRvcltrZXldLCBjb250ZXh0KTtcbiAgICAgIGlmIChraW5kID09PSBcImFjY2Vzc29yXCIpIHtcbiAgICAgICAgICBpZiAocmVzdWx0ID09PSB2b2lkIDApIGNvbnRpbnVlO1xuICAgICAgICAgIGlmIChyZXN1bHQgPT09IG51bGwgfHwgdHlwZW9mIHJlc3VsdCAhPT0gXCJvYmplY3RcIikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIk9iamVjdCBleHBlY3RlZFwiKTtcbiAgICAgICAgICBpZiAoXyA9IGFjY2VwdChyZXN1bHQuZ2V0KSkgZGVzY3JpcHRvci5nZXQgPSBfO1xuICAgICAgICAgIGlmIChfID0gYWNjZXB0KHJlc3VsdC5zZXQpKSBkZXNjcmlwdG9yLnNldCA9IF87XG4gICAgICAgICAgaWYgKF8gPSBhY2NlcHQocmVzdWx0LmluaXQpKSBpbml0aWFsaXplcnMudW5zaGlmdChfKTtcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKF8gPSBhY2NlcHQocmVzdWx0KSkge1xuICAgICAgICAgIGlmIChraW5kID09PSBcImZpZWxkXCIpIGluaXRpYWxpemVycy51bnNoaWZ0KF8pO1xuICAgICAgICAgIGVsc2UgZGVzY3JpcHRvcltrZXldID0gXztcbiAgICAgIH1cbiAgfVxuICBpZiAodGFyZ2V0KSBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBjb250ZXh0SW4ubmFtZSwgZGVzY3JpcHRvcik7XG4gIGRvbmUgPSB0cnVlO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIF9fcnVuSW5pdGlhbGl6ZXJzKHRoaXNBcmcsIGluaXRpYWxpemVycywgdmFsdWUpIHtcbiAgdmFyIHVzZVZhbHVlID0gYXJndW1lbnRzLmxlbmd0aCA+IDI7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgaW5pdGlhbGl6ZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YWx1ZSA9IHVzZVZhbHVlID8gaW5pdGlhbGl6ZXJzW2ldLmNhbGwodGhpc0FyZywgdmFsdWUpIDogaW5pdGlhbGl6ZXJzW2ldLmNhbGwodGhpc0FyZyk7XG4gIH1cbiAgcmV0dXJuIHVzZVZhbHVlID8gdmFsdWUgOiB2b2lkIDA7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gX19wcm9wS2V5KHgpIHtcbiAgcmV0dXJuIHR5cGVvZiB4ID09PSBcInN5bWJvbFwiID8geCA6IFwiXCIuY29uY2F0KHgpO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIF9fc2V0RnVuY3Rpb25OYW1lKGYsIG5hbWUsIHByZWZpeCkge1xuICBpZiAodHlwZW9mIG5hbWUgPT09IFwic3ltYm9sXCIpIG5hbWUgPSBuYW1lLmRlc2NyaXB0aW9uID8gXCJbXCIuY29uY2F0KG5hbWUuZGVzY3JpcHRpb24sIFwiXVwiKSA6IFwiXCI7XG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoZiwgXCJuYW1lXCIsIHsgY29uZmlndXJhYmxlOiB0cnVlLCB2YWx1ZTogcHJlZml4ID8gXCJcIi5jb25jYXQocHJlZml4LCBcIiBcIiwgbmFtZSkgOiBuYW1lIH0pO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIF9fbWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpIHtcbiAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0Lm1ldGFkYXRhID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBSZWZsZWN0Lm1ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIF9fYXdhaXRlcih0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIF9fZ2VuZXJhdG9yKHRoaXNBcmcsIGJvZHkpIHtcbiAgdmFyIF8gPSB7IGxhYmVsOiAwLCBzZW50OiBmdW5jdGlvbigpIHsgaWYgKHRbMF0gJiAxKSB0aHJvdyB0WzFdOyByZXR1cm4gdFsxXTsgfSwgdHJ5czogW10sIG9wczogW10gfSwgZiwgeSwgdCwgZztcbiAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XG4gIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxuICBmdW5jdGlvbiBzdGVwKG9wKSB7XG4gICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XG4gICAgICB3aGlsZSAoZyAmJiAoZyA9IDAsIG9wWzBdICYmIChfID0gMCkpLCBfKSB0cnkge1xuICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcbiAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gW29wWzBdICYgMiwgdC52YWx1ZV07XG4gICAgICAgICAgc3dpdGNoIChvcFswXSkge1xuICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcbiAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTtcbiAgICAgICAgICAgICAgY2FzZSA1OiBfLmxhYmVsKys7IHkgPSBvcFsxXTsgb3AgPSBbMF07IGNvbnRpbnVlO1xuICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XG4gICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICBpZiAoISh0ID0gXy50cnlzLCB0ID0gdC5sZW5ndGggPiAwICYmIHRbdC5sZW5ndGggLSAxXSkgJiYgKG9wWzBdID09PSA2IHx8IG9wWzBdID09PSAyKSkgeyBfID0gMDsgY29udGludWU7IH1cbiAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgIGlmICh0ICYmIF8ubGFiZWwgPCB0WzJdKSB7IF8ubGFiZWwgPSB0WzJdOyBfLm9wcy5wdXNoKG9wKTsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcbiAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7XG4gICAgICAgICAgfVxuICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xuICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfVxuICAgICAgaWYgKG9wWzBdICYgNSkgdGhyb3cgb3BbMV07IHJldHVybiB7IHZhbHVlOiBvcFswXSA/IG9wWzFdIDogdm9pZCAwLCBkb25lOiB0cnVlIH07XG4gIH1cbn1cblxuZXhwb3J0IHZhciBfX2NyZWF0ZUJpbmRpbmcgPSBPYmplY3QuY3JlYXRlID8gKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XG4gIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XG4gIHZhciBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihtLCBrKTtcbiAgaWYgKCFkZXNjIHx8IChcImdldFwiIGluIGRlc2MgPyAhbS5fX2VzTW9kdWxlIDogZGVzYy53cml0YWJsZSB8fCBkZXNjLmNvbmZpZ3VyYWJsZSkpIHtcbiAgICAgIGRlc2MgPSB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24oKSB7IHJldHVybiBtW2tdOyB9IH07XG4gIH1cbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIGsyLCBkZXNjKTtcbn0pIDogKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XG4gIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XG4gIG9bazJdID0gbVtrXTtcbn0pO1xuXG5leHBvcnQgZnVuY3Rpb24gX19leHBvcnRTdGFyKG0sIG8pIHtcbiAgZm9yICh2YXIgcCBpbiBtKSBpZiAocCAhPT0gXCJkZWZhdWx0XCIgJiYgIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvLCBwKSkgX19jcmVhdGVCaW5kaW5nKG8sIG0sIHApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gX192YWx1ZXMobykge1xuICB2YXIgcyA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBTeW1ib2wuaXRlcmF0b3IsIG0gPSBzICYmIG9bc10sIGkgPSAwO1xuICBpZiAobSkgcmV0dXJuIG0uY2FsbChvKTtcbiAgaWYgKG8gJiYgdHlwZW9mIG8ubGVuZ3RoID09PSBcIm51bWJlclwiKSByZXR1cm4ge1xuICAgICAgbmV4dDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGlmIChvICYmIGkgPj0gby5sZW5ndGgpIG8gPSB2b2lkIDA7XG4gICAgICAgICAgcmV0dXJuIHsgdmFsdWU6IG8gJiYgb1tpKytdLCBkb25lOiAhbyB9O1xuICAgICAgfVxuICB9O1xuICB0aHJvdyBuZXcgVHlwZUVycm9yKHMgPyBcIk9iamVjdCBpcyBub3QgaXRlcmFibGUuXCIgOiBcIlN5bWJvbC5pdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfX3JlYWQobywgbikge1xuICB2YXIgbSA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvW1N5bWJvbC5pdGVyYXRvcl07XG4gIGlmICghbSkgcmV0dXJuIG87XG4gIHZhciBpID0gbS5jYWxsKG8pLCByLCBhciA9IFtdLCBlO1xuICB0cnkge1xuICAgICAgd2hpbGUgKChuID09PSB2b2lkIDAgfHwgbi0tID4gMCkgJiYgIShyID0gaS5uZXh0KCkpLmRvbmUpIGFyLnB1c2goci52YWx1ZSk7XG4gIH1cbiAgY2F0Y2ggKGVycm9yKSB7IGUgPSB7IGVycm9yOiBlcnJvciB9OyB9XG4gIGZpbmFsbHkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgICBpZiAociAmJiAhci5kb25lICYmIChtID0gaVtcInJldHVyblwiXSkpIG0uY2FsbChpKTtcbiAgICAgIH1cbiAgICAgIGZpbmFsbHkgeyBpZiAoZSkgdGhyb3cgZS5lcnJvcjsgfVxuICB9XG4gIHJldHVybiBhcjtcbn1cblxuLyoqIEBkZXByZWNhdGVkICovXG5leHBvcnQgZnVuY3Rpb24gX19zcHJlYWQoKSB7XG4gIGZvciAodmFyIGFyID0gW10sIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKVxuICAgICAgYXIgPSBhci5jb25jYXQoX19yZWFkKGFyZ3VtZW50c1tpXSkpO1xuICByZXR1cm4gYXI7XG59XG5cbi8qKiBAZGVwcmVjYXRlZCAqL1xuZXhwb3J0IGZ1bmN0aW9uIF9fc3ByZWFkQXJyYXlzKCkge1xuICBmb3IgKHZhciBzID0gMCwgaSA9IDAsIGlsID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IGlsOyBpKyspIHMgKz0gYXJndW1lbnRzW2ldLmxlbmd0aDtcbiAgZm9yICh2YXIgciA9IEFycmF5KHMpLCBrID0gMCwgaSA9IDA7IGkgPCBpbDsgaSsrKVxuICAgICAgZm9yICh2YXIgYSA9IGFyZ3VtZW50c1tpXSwgaiA9IDAsIGpsID0gYS5sZW5ndGg7IGogPCBqbDsgaisrLCBrKyspXG4gICAgICAgICAgcltrXSA9IGFbal07XG4gIHJldHVybiByO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gX19zcHJlYWRBcnJheSh0bywgZnJvbSwgcGFjaykge1xuICBpZiAocGFjayB8fCBhcmd1bWVudHMubGVuZ3RoID09PSAyKSBmb3IgKHZhciBpID0gMCwgbCA9IGZyb20ubGVuZ3RoLCBhcjsgaSA8IGw7IGkrKykge1xuICAgICAgaWYgKGFyIHx8ICEoaSBpbiBmcm9tKSkge1xuICAgICAgICAgIGlmICghYXIpIGFyID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoZnJvbSwgMCwgaSk7XG4gICAgICAgICAgYXJbaV0gPSBmcm9tW2ldO1xuICAgICAgfVxuICB9XG4gIHJldHVybiB0by5jb25jYXQoYXIgfHwgQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoZnJvbSkpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gX19hd2FpdCh2KSB7XG4gIHJldHVybiB0aGlzIGluc3RhbmNlb2YgX19hd2FpdCA/ICh0aGlzLnYgPSB2LCB0aGlzKSA6IG5ldyBfX2F3YWl0KHYpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY0dlbmVyYXRvcih0aGlzQXJnLCBfYXJndW1lbnRzLCBnZW5lcmF0b3IpIHtcbiAgaWYgKCFTeW1ib2wuYXN5bmNJdGVyYXRvcikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0l0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcbiAgdmFyIGcgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSksIGksIHEgPSBbXTtcbiAgcmV0dXJuIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xuICBmdW5jdGlvbiB2ZXJiKG4pIHsgaWYgKGdbbl0pIGlbbl0gPSBmdW5jdGlvbiAodikgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKGEsIGIpIHsgcS5wdXNoKFtuLCB2LCBhLCBiXSkgPiAxIHx8IHJlc3VtZShuLCB2KTsgfSk7IH07IH1cbiAgZnVuY3Rpb24gcmVzdW1lKG4sIHYpIHsgdHJ5IHsgc3RlcChnW25dKHYpKTsgfSBjYXRjaCAoZSkgeyBzZXR0bGUocVswXVszXSwgZSk7IH0gfVxuICBmdW5jdGlvbiBzdGVwKHIpIHsgci52YWx1ZSBpbnN0YW5jZW9mIF9fYXdhaXQgPyBQcm9taXNlLnJlc29sdmUoci52YWx1ZS52KS50aGVuKGZ1bGZpbGwsIHJlamVjdCkgOiBzZXR0bGUocVswXVsyXSwgcik7IH1cbiAgZnVuY3Rpb24gZnVsZmlsbCh2YWx1ZSkgeyByZXN1bWUoXCJuZXh0XCIsIHZhbHVlKTsgfVxuICBmdW5jdGlvbiByZWplY3QodmFsdWUpIHsgcmVzdW1lKFwidGhyb3dcIiwgdmFsdWUpOyB9XG4gIGZ1bmN0aW9uIHNldHRsZShmLCB2KSB7IGlmIChmKHYpLCBxLnNoaWZ0KCksIHEubGVuZ3RoKSByZXN1bWUocVswXVswXSwgcVswXVsxXSk7IH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNEZWxlZ2F0b3Iobykge1xuICB2YXIgaSwgcDtcbiAgcmV0dXJuIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiLCBmdW5jdGlvbiAoZSkgeyB0aHJvdyBlOyB9KSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaTtcbiAgZnVuY3Rpb24gdmVyYihuLCBmKSB7IGlbbl0gPSBvW25dID8gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIChwID0gIXApID8geyB2YWx1ZTogX19hd2FpdChvW25dKHYpKSwgZG9uZTogZmFsc2UgfSA6IGYgPyBmKHYpIDogdjsgfSA6IGY7IH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNWYWx1ZXMobykge1xuICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xuICB2YXIgbSA9IG9bU3ltYm9sLmFzeW5jSXRlcmF0b3JdLCBpO1xuICByZXR1cm4gbSA/IG0uY2FsbChvKSA6IChvID0gdHlwZW9mIF9fdmFsdWVzID09PSBcImZ1bmN0aW9uXCIgPyBfX3ZhbHVlcyhvKSA6IG9bU3ltYm9sLml0ZXJhdG9yXSgpLCBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaSk7XG4gIGZ1bmN0aW9uIHZlcmIobikgeyBpW25dID0gb1tuXSAmJiBmdW5jdGlvbiAodikgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkgeyB2ID0gb1tuXSh2KSwgc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgdi5kb25lLCB2LnZhbHVlKTsgfSk7IH07IH1cbiAgZnVuY3Rpb24gc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgZCwgdikgeyBQcm9taXNlLnJlc29sdmUodikudGhlbihmdW5jdGlvbih2KSB7IHJlc29sdmUoeyB2YWx1ZTogdiwgZG9uZTogZCB9KTsgfSwgcmVqZWN0KTsgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gX19tYWtlVGVtcGxhdGVPYmplY3QoY29va2VkLCByYXcpIHtcbiAgaWYgKE9iamVjdC5kZWZpbmVQcm9wZXJ0eSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkoY29va2VkLCBcInJhd1wiLCB7IHZhbHVlOiByYXcgfSk7IH0gZWxzZSB7IGNvb2tlZC5yYXcgPSByYXc7IH1cbiAgcmV0dXJuIGNvb2tlZDtcbn07XG5cbnZhciBfX3NldE1vZHVsZURlZmF1bHQgPSBPYmplY3QuY3JlYXRlID8gKGZ1bmN0aW9uKG8sIHYpIHtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIFwiZGVmYXVsdFwiLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2IH0pO1xufSkgOiBmdW5jdGlvbihvLCB2KSB7XG4gIG9bXCJkZWZhdWx0XCJdID0gdjtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydFN0YXIobW9kKSB7XG4gIGlmIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpIHJldHVybiBtb2Q7XG4gIHZhciByZXN1bHQgPSB7fTtcbiAgaWYgKG1vZCAhPSBudWxsKSBmb3IgKHZhciBrIGluIG1vZCkgaWYgKGsgIT09IFwiZGVmYXVsdFwiICYmIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb2QsIGspKSBfX2NyZWF0ZUJpbmRpbmcocmVzdWx0LCBtb2QsIGspO1xuICBfX3NldE1vZHVsZURlZmF1bHQocmVzdWx0LCBtb2QpO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gX19pbXBvcnREZWZhdWx0KG1vZCkge1xuICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IGRlZmF1bHQ6IG1vZCB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gX19jbGFzc1ByaXZhdGVGaWVsZEdldChyZWNlaXZlciwgc3RhdGUsIGtpbmQsIGYpIHtcbiAgaWYgKGtpbmQgPT09IFwiYVwiICYmICFmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiUHJpdmF0ZSBhY2Nlc3NvciB3YXMgZGVmaW5lZCB3aXRob3V0IGEgZ2V0dGVyXCIpO1xuICBpZiAodHlwZW9mIHN0YXRlID09PSBcImZ1bmN0aW9uXCIgPyByZWNlaXZlciAhPT0gc3RhdGUgfHwgIWYgOiAhc3RhdGUuaGFzKHJlY2VpdmVyKSkgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCByZWFkIHByaXZhdGUgbWVtYmVyIGZyb20gYW4gb2JqZWN0IHdob3NlIGNsYXNzIGRpZCBub3QgZGVjbGFyZSBpdFwiKTtcbiAgcmV0dXJuIGtpbmQgPT09IFwibVwiID8gZiA6IGtpbmQgPT09IFwiYVwiID8gZi5jYWxsKHJlY2VpdmVyKSA6IGYgPyBmLnZhbHVlIDogc3RhdGUuZ2V0KHJlY2VpdmVyKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIF9fY2xhc3NQcml2YXRlRmllbGRTZXQocmVjZWl2ZXIsIHN0YXRlLCB2YWx1ZSwga2luZCwgZikge1xuICBpZiAoa2luZCA9PT0gXCJtXCIpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJQcml2YXRlIG1ldGhvZCBpcyBub3Qgd3JpdGFibGVcIik7XG4gIGlmIChraW5kID09PSBcImFcIiAmJiAhZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlByaXZhdGUgYWNjZXNzb3Igd2FzIGRlZmluZWQgd2l0aG91dCBhIHNldHRlclwiKTtcbiAgaWYgKHR5cGVvZiBzdGF0ZSA9PT0gXCJmdW5jdGlvblwiID8gcmVjZWl2ZXIgIT09IHN0YXRlIHx8ICFmIDogIXN0YXRlLmhhcyhyZWNlaXZlcikpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3Qgd3JpdGUgcHJpdmF0ZSBtZW1iZXIgdG8gYW4gb2JqZWN0IHdob3NlIGNsYXNzIGRpZCBub3QgZGVjbGFyZSBpdFwiKTtcbiAgcmV0dXJuIChraW5kID09PSBcImFcIiA/IGYuY2FsbChyZWNlaXZlciwgdmFsdWUpIDogZiA/IGYudmFsdWUgPSB2YWx1ZSA6IHN0YXRlLnNldChyZWNlaXZlciwgdmFsdWUpKSwgdmFsdWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfX2NsYXNzUHJpdmF0ZUZpZWxkSW4oc3RhdGUsIHJlY2VpdmVyKSB7XG4gIGlmIChyZWNlaXZlciA9PT0gbnVsbCB8fCAodHlwZW9mIHJlY2VpdmVyICE9PSBcIm9iamVjdFwiICYmIHR5cGVvZiByZWNlaXZlciAhPT0gXCJmdW5jdGlvblwiKSkgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCB1c2UgJ2luJyBvcGVyYXRvciBvbiBub24tb2JqZWN0XCIpO1xuICByZXR1cm4gdHlwZW9mIHN0YXRlID09PSBcImZ1bmN0aW9uXCIgPyByZWNlaXZlciA9PT0gc3RhdGUgOiBzdGF0ZS5oYXMocmVjZWl2ZXIpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gX19hZGREaXNwb3NhYmxlUmVzb3VyY2UoZW52LCB2YWx1ZSwgYXN5bmMpIHtcbiAgaWYgKHZhbHVlICE9PSBudWxsICYmIHZhbHVlICE9PSB2b2lkIDApIHtcbiAgICBpZiAodHlwZW9mIHZhbHVlICE9PSBcIm9iamVjdFwiICYmIHR5cGVvZiB2YWx1ZSAhPT0gXCJmdW5jdGlvblwiKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiT2JqZWN0IGV4cGVjdGVkLlwiKTtcbiAgICB2YXIgZGlzcG9zZTtcbiAgICBpZiAoYXN5bmMpIHtcbiAgICAgICAgaWYgKCFTeW1ib2wuYXN5bmNEaXNwb3NlKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jRGlzcG9zZSBpcyBub3QgZGVmaW5lZC5cIik7XG4gICAgICAgIGRpc3Bvc2UgPSB2YWx1ZVtTeW1ib2wuYXN5bmNEaXNwb3NlXTtcbiAgICB9XG4gICAgaWYgKGRpc3Bvc2UgPT09IHZvaWQgMCkge1xuICAgICAgICBpZiAoIVN5bWJvbC5kaXNwb3NlKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmRpc3Bvc2UgaXMgbm90IGRlZmluZWQuXCIpO1xuICAgICAgICBkaXNwb3NlID0gdmFsdWVbU3ltYm9sLmRpc3Bvc2VdO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIGRpc3Bvc2UgIT09IFwiZnVuY3Rpb25cIikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIk9iamVjdCBub3QgZGlzcG9zYWJsZS5cIik7XG4gICAgZW52LnN0YWNrLnB1c2goeyB2YWx1ZTogdmFsdWUsIGRpc3Bvc2U6IGRpc3Bvc2UsIGFzeW5jOiBhc3luYyB9KTtcbiAgfVxuICBlbHNlIGlmIChhc3luYykge1xuICAgIGVudi5zdGFjay5wdXNoKHsgYXN5bmM6IHRydWUgfSk7XG4gIH1cbiAgcmV0dXJuIHZhbHVlO1xufVxuXG52YXIgX1N1cHByZXNzZWRFcnJvciA9IHR5cGVvZiBTdXBwcmVzc2VkRXJyb3IgPT09IFwiZnVuY3Rpb25cIiA/IFN1cHByZXNzZWRFcnJvciA6IGZ1bmN0aW9uIChlcnJvciwgc3VwcHJlc3NlZCwgbWVzc2FnZSkge1xuICB2YXIgZSA9IG5ldyBFcnJvcihtZXNzYWdlKTtcbiAgcmV0dXJuIGUubmFtZSA9IFwiU3VwcHJlc3NlZEVycm9yXCIsIGUuZXJyb3IgPSBlcnJvciwgZS5zdXBwcmVzc2VkID0gc3VwcHJlc3NlZCwgZTtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBfX2Rpc3Bvc2VSZXNvdXJjZXMoZW52KSB7XG4gIGZ1bmN0aW9uIGZhaWwoZSkge1xuICAgIGVudi5lcnJvciA9IGVudi5oYXNFcnJvciA/IG5ldyBfU3VwcHJlc3NlZEVycm9yKGUsIGVudi5lcnJvciwgXCJBbiBlcnJvciB3YXMgc3VwcHJlc3NlZCBkdXJpbmcgZGlzcG9zYWwuXCIpIDogZTtcbiAgICBlbnYuaGFzRXJyb3IgPSB0cnVlO1xuICB9XG4gIGZ1bmN0aW9uIG5leHQoKSB7XG4gICAgd2hpbGUgKGVudi5zdGFjay5sZW5ndGgpIHtcbiAgICAgIHZhciByZWMgPSBlbnYuc3RhY2sucG9wKCk7XG4gICAgICB0cnkge1xuICAgICAgICB2YXIgcmVzdWx0ID0gcmVjLmRpc3Bvc2UgJiYgcmVjLmRpc3Bvc2UuY2FsbChyZWMudmFsdWUpO1xuICAgICAgICBpZiAocmVjLmFzeW5jKSByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHJlc3VsdCkudGhlbihuZXh0LCBmdW5jdGlvbihlKSB7IGZhaWwoZSk7IHJldHVybiBuZXh0KCk7IH0pO1xuICAgICAgfVxuICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICBmYWlsKGUpO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoZW52Lmhhc0Vycm9yKSB0aHJvdyBlbnYuZXJyb3I7XG4gIH1cbiAgcmV0dXJuIG5leHQoKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICBfX2V4dGVuZHMsXG4gIF9fYXNzaWduLFxuICBfX3Jlc3QsXG4gIF9fZGVjb3JhdGUsXG4gIF9fcGFyYW0sXG4gIF9fbWV0YWRhdGEsXG4gIF9fYXdhaXRlcixcbiAgX19nZW5lcmF0b3IsXG4gIF9fY3JlYXRlQmluZGluZyxcbiAgX19leHBvcnRTdGFyLFxuICBfX3ZhbHVlcyxcbiAgX19yZWFkLFxuICBfX3NwcmVhZCxcbiAgX19zcHJlYWRBcnJheXMsXG4gIF9fc3ByZWFkQXJyYXksXG4gIF9fYXdhaXQsXG4gIF9fYXN5bmNHZW5lcmF0b3IsXG4gIF9fYXN5bmNEZWxlZ2F0b3IsXG4gIF9fYXN5bmNWYWx1ZXMsXG4gIF9fbWFrZVRlbXBsYXRlT2JqZWN0LFxuICBfX2ltcG9ydFN0YXIsXG4gIF9faW1wb3J0RGVmYXVsdCxcbiAgX19jbGFzc1ByaXZhdGVGaWVsZEdldCxcbiAgX19jbGFzc1ByaXZhdGVGaWVsZFNldCxcbiAgX19jbGFzc1ByaXZhdGVGaWVsZEluLFxuICBfX2FkZERpc3Bvc2FibGVSZXNvdXJjZSxcbiAgX19kaXNwb3NlUmVzb3VyY2VzLFxufTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvZXhwb3J0XHJcbmltcG9ydCAqIGFzIGxvYWRlcnMgZnJvbSBcIkBsdHMvbG9hZGVycy9sZWdhY3kvbGVnYWN5LWdsVEYxRmlsZUxvYWRlclwiO1xyXG5leHBvcnQgeyBsb2FkZXJzIH07XHJcbmV4cG9ydCBkZWZhdWx0IGxvYWRlcnM7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==