$(document).ready(function () {

    $("#chemin").html(" <p><a href='index.html'>Accueil</a> > <a href='gestion.html'>Organisation de nos déchets</a></p> ");


    $(".top-img-one").append(`
    <div class="card" >
        <img class="card-img-top" src="./IMG/transport/navette.jpg" alt="Card image cap">
        <div class="card-body">
            <p class="card-text">Navettes électriques : découvrez la nouvelle ligne de la gare SNCF à la place Cornic !
            </p>
        </div>
    </div>`);


    $(".top-img-two").append(`
    <div class="card" >
        <img class="card-img-top" src="./IMG/transport/Velo.jpeg" alt="Card image cap">
        <div class="card-body">
            <p class="card-text">Prime achat Vélo à Assistance Electrique (VAE) 2023 : Lors de l'achat d'un vélo électrique, Morlaix Communauté vous accompagne !
            </p>
        </div>
    </div>`);



    $("#info1").append(`
    <div class="card-part" >
        <img class="card-img-top" src="./IMG/transport/bus.jpg" alt="Card image cap">
        <div class="card-body">
            <p class="card-text">Place au spectacle vivant, aux arts de rue dans toute leur diversité…

            </p>
        </div>
    </div>`);

    $("#info2").append(`
    <div class="card-part" >
        <img class="card-img-top" src="./IMG/transport/train.jpg" alt="Card image cap">
        <div class="card-body">
            <p class="card-text">
            L'abonnement TER Uzuel+ Bus fait bénéficier d'une réduction de 50% sur le réseau Linéotim de Morlaix Communauté
            </p>
        </div>
    </div>`);

    $("#info3").append(`
    <div class="card-part" >
        <img class="card-img-top" src="./IMG/transport/Ouestgo.jpg" alt="Card image cap">
        <div class="card-body">
            <p class="card-text">Plate-forme de covoiturage de proximité, convivial et solidaire.
            </p>
        </div>
    </div>`);

    // Deploiement des autres transports
    $("#more-transport").text("Autres rubriques...");
    $("#more-transport").css("cursor", "pointer");
    var moreTransp = 1;
    $("#more-transport").on("click", function () {
        if (moreTransp == 0) {
            $(".second-transport")[0].classList.remove("extend");
            $("#more-transport").text("Voir plus");
            moreTransp = 1;
        } else {
            $(".second-transport")[0].classList.add("extend");
            $("#more-transport").text("Voir moins");
            moreTransp = 0;
        }

    })


    $(window).on("scroll", reveal);
    function reveal() {
        var reveals = $(".reveal");
        for (var i = 0; i < reveals.length; i++) {
            var windowHeight = window.innerHeight;
            var revealTop = reveals[i].getBoundingClientRect().top;
            var revealpoint = 150;

            if (revealTop < windowHeight - revealpoint) {
                reveals[i].classList.add("active");
            } else {
                reveals[i].classList.remove("active");
            }
        }
    }




    (function () {

        L.Control.FullScreen = L.Control.extend({
            options: {
                position: 'topleft',
                title: 'Full Screen',
                forceSeparateButton: false,
                forcePseudoFullscreen: false
            },

            onAdd: function (map) {
                var className = 'leaflet-control-zoom-fullscreen', container;

                if (map.zoomControl && !this.options.forceSeparateButton) {
                    container = map.zoomControl._container;
                } else {
                    container = L.DomUtil.create('div', 'leaflet-bar');
                }

                this._createButton(this.options.title, className, container, this.toggleFullScreen, map);

                return container;
            },

            _createButton: function (title, className, container, fn, context) {
                var link = L.DomUtil.create('a', className, container);
                link.href = '#';
                link.title = title;

                L.DomEvent
                    .addListener(link, 'click', L.DomEvent.stopPropagation)
                    .addListener(link, 'click', L.DomEvent.preventDefault)
                    .addListener(link, 'click', fn, context);

                L.DomEvent
                    .addListener(container, fullScreenApi.fullScreenEventName, L.DomEvent.stopPropagation)
                    .addListener(container, fullScreenApi.fullScreenEventName, L.DomEvent.preventDefault)
                    .addListener(container, fullScreenApi.fullScreenEventName, this._handleEscKey, context);

                L.DomEvent
                    .addListener(document, fullScreenApi.fullScreenEventName, L.DomEvent.stopPropagation)
                    .addListener(document, fullScreenApi.fullScreenEventName, L.DomEvent.preventDefault)
                    .addListener(document, fullScreenApi.fullScreenEventName, this._handleEscKey, context);

                return link;
            },

            toggleFullScreen: function () {
                this._exitFired = false;
                var container = this._container;
                if (this._isFullscreen) {
                    if (fullScreenApi.supportsFullScreen && !this.options.forcePseudoFullscreen) {
                        fullScreenApi.cancelFullScreen(container);
                    } else {
                        L.DomUtil.removeClass(container, 'leaflet-pseudo-fullscreen');
                    }
                    this.invalidateSize();
                    this.fire('exitFullscreen');
                    this._exitFired = true;
                    this._isFullscreen = false;
                }
                else {
                    if (fullScreenApi.supportsFullScreen && !this.options.forcePseudoFullscreen) {
                        fullScreenApi.requestFullScreen(container);
                    } else {
                        L.DomUtil.addClass(container, 'leaflet-pseudo-fullscreen');
                    }
                    this.invalidateSize();
                    this.fire('enterFullscreen');
                    this._isFullscreen = true;
                }
            },

            _handleEscKey: function () {
                if (!fullScreenApi.isFullScreen(this) && !this._exitFired) {
                    this.fire('exitFullscreen');
                    this._exitFired = true;
                    this._isFullscreen = false;
                }
            }
        });

        L.Map.addInitHook(function () {
            if (this.options.fullscreenControl) {
                this.fullscreenControl = L.control.fullscreen(this.options.fullscreenControlOptions);
                this.addControl(this.fullscreenControl);
            }
        });

        L.control.fullscreen = function (options) {
            return new L.Control.FullScreen(options);
        };

        /*
        Native FullScreen JavaScript API
        -------------
        Assumes Mozilla naming conventions instead of W3C for now
        
        source : http://johndyer.name/native-fullscreen-javascript-api-plus-jquery-plugin/
        
        */

        var
            fullScreenApi = {
                supportsFullScreen: false,
                isFullScreen: function () { return false; },
                requestFullScreen: function () { },
                cancelFullScreen: function () { },
                fullScreenEventName: '',
                prefix: ''
            },
            browserPrefixes = 'webkit moz o ms khtml'.split(' ');

        // check for native support
        if (typeof document.exitFullscreen !== 'undefined') {
            fullScreenApi.supportsFullScreen = true;
        } else {
            // check for fullscreen support by vendor prefix
            for (var i = 0, il = browserPrefixes.length; i < il; i++) {
                fullScreenApi.prefix = browserPrefixes[i];
                if (typeof document[fullScreenApi.prefix + 'CancelFullScreen'] !== 'undefined') {
                    fullScreenApi.supportsFullScreen = true;
                    break;
                }
            }
        }

        // update methods to do something useful
        if (fullScreenApi.supportsFullScreen) {
            fullScreenApi.fullScreenEventName = fullScreenApi.prefix + 'fullscreenchange';
            fullScreenApi.isFullScreen = function () {
                switch (this.prefix) {
                    case '':
                        return document.fullScreen;
                    case 'webkit':
                        return document.webkitIsFullScreen;
                    default:
                        return document[this.prefix + 'FullScreen'];
                }
            };
            fullScreenApi.requestFullScreen = function (el) {
                return (this.prefix === '') ? el.requestFullscreen() : el[this.prefix + 'RequestFullScreen']();
            };
            fullScreenApi.cancelFullScreen = function (el) {
                return (this.prefix === '') ? document.exitFullscreen() : document[this.prefix + 'CancelFullScreen']();
            };
        }

        // jQuery plugin
        if (typeof jQuery !== 'undefined') {
            jQuery.fn.requestFullScreen = function () {
                return this.each(function () {
                    var el = jQuery(this);
                    if (fullScreenApi.supportsFullScreen) {
                        fullScreenApi.requestFullScreen(el);
                    }
                });
            };
        }

        // export api
        window.fullScreenApi = fullScreenApi;
    })();


    L.TileLayer.Zoomify = L.TileLayer.extend({
        options: {
            continuousWorld: true,
            tolerance: 1.1
        },

        initialize: function (url, options) {
            options = L.setOptions(this, options);

            // detecting retina displays, adjusting tileSize and zoom levels
            //if (options.detectRetina && L.Browser.retina && options.maxZoom > 0) {

            options.tileSize = Math.floor(options.tileSize / 2);
            options.zoomOffset++;

            if (options.minZoom > 0) {
                options.minZoom--;
            }
            this.options.maxZoom--;
            // }*/

            this._url = url;

            var imageSize = L.point(options.width, options.height),
                tileSize = options.tileSize;

            this._imageSize = [imageSize];
            this._gridSize = [this._getGridSize(imageSize)];

            while (parseInt(imageSize.x) > tileSize || parseInt(imageSize.y) > tileSize) {
                imageSize = imageSize.divideBy(2).floor();
                this._imageSize.push(imageSize);
                this._gridSize.push(this._getGridSize(imageSize));
            }

            this._imageSize.reverse();
            this._gridSize.reverse();

            this.options.maxZoom = this._gridSize.length - 1;
            if (options.detectRetina && L.Browser.retina && options.maxZoom > 0) {
                this.options.maxZoom--;
            }
        },

        onAdd: function (map) {
            L.TileLayer.prototype.onAdd.call(this, map);

            var mapSize = map.getSize(),
                zoom = this._getBestFitZoom(mapSize),
                imageSize = this._imageSize[zoom],
                /* center = map.options.crs.pointToLatLng(L.point(imageSize.x / 2, imageSize.y / 2), zoom);*/
                center = map.options.crs.pointToLatLng(L.point(imageSize.x / 2, imageSize.y / 2), zoom);

            map.setView(center, zoom, true);
        },

        _getGridSize: function (imageSize) {
            var tileSize = this.options.tileSize;
            return L.point(Math.ceil(imageSize.x / tileSize), Math.ceil(imageSize.y / tileSize));
        },

        _getBestFitZoom: function (mapSize) {
            var tolerance = this.options.tolerance,
                zoom = this._imageSize.length - 1,
                imageSize, zoom;

            while (zoom) {
                imageSize = this._imageSize[zoom];
                if (imageSize.x * tolerance < mapSize.x && imageSize.y * tolerance < mapSize.y) {
                    return zoom;
                }
                zoom--;
            }

            return zoom;
        },

        _tileShouldBeLoaded: function (tilePoint) {
            var gridSize = this._gridSize[this._map.getZoom()];
            return (tilePoint.x >= 0 && tilePoint.x < gridSize.x && tilePoint.y >= 0 && tilePoint.y < gridSize.y);
        },

        _addTile: function (tilePoint, container) {
            var tilePos = this._getTilePos(tilePoint),
                tile = this._getTile(),
                zoom = this._map.getZoom(),
                imageSize = this._imageSize[zoom],
                gridSize = this._gridSize[zoom],
                tileSize = this.options.tileSize;

            if (tilePoint.x === gridSize.x - 1) {
                tile.style.width = imageSize.x - (tileSize * (gridSize.x - 1)) + 'px';
            }

            if (tilePoint.y === gridSize.y - 1) {
                tile.style.height = imageSize.y - (tileSize * (gridSize.y - 1)) + 'px';
            }

            L.DomUtil.setPosition(tile, tilePos, L.Browser.chrome || L.Browser.android23);

            this._tiles[tilePoint.x + ':' + tilePoint.y] = tile;
            this._loadTile(tile, tilePoint);

            if (tile.parentNode !== this._tileContainer) {
                container.appendChild(tile);
            }
        },

        getTileUrl: function (tilePoint) {
            return this._url + 'TileGroup' + this._getTileGroup(tilePoint) + '/' + this._map.getZoom() + '-' + tilePoint.x + '-' + tilePoint.y + '.jpg';
        },

        _getTileGroup: function (tilePoint) {
            var zoom = this._map.getZoom(),
                num = 0,
                gridSize;

            for (z = 0; z < zoom; z++) {
                gridSize = this._gridSize[z];
                num += gridSize.x * gridSize.y;
            }

            num += tilePoint.y * this._gridSize[zoom].x + tilePoint.x;
            return Math.floor(num / 256);
        }


    });


    L.tileLayer.zoomify = function (url, options) {
        return new L.TileLayer.Zoomify(url, options);
    };



var markers = [];
            var resetCenter;
            var resetZoom;
            var markerIcon = L.icon({
                iconUrl: 'https://modules.actipage.net/pdftomap/img/marker-icon.png',

                iconSize: [25, 41], // size of the icon
                iconAnchor: [12, 41], // point of the icon which will correspond to marker's location
                popupAnchor: [0, -40]
            });
            var map = L.map('pdftoMap', {
                zoomControl: true,
                detectRetina: true,
                zoomControl: false
            }).setView(new L.LatLng(0, 0), 0);

            var zoomControl = new L.Control.Zoom({ position: 'topleft', zoomInTitle: "Zoomer", zoomOutTitle: "Dézoomer" }).addTo(map);

            var resetControl = L.Control.extend({
                options: {
                    position: 'topleft',
                    title: 'Réinitialiser'
                },
                onAdd: function (map) {
                    var container;

                    if (this.options.containerZoom != undefined) {
                        container = this.options.containerZoom;
                    } else {
                        container = L.DomUtil.create('div', 'leaflet-bar');
                    }

                    var link = L.DomUtil.create('a', "leaflet-control-reset", container);
                    link.title = "Réinitialiser";
                    link.href = "javascript:void(0)";
                    link.addEventListener("click", function () {
                        map.setView(resetCenter, resetZoom);
                    });
                    return container;
                }
            })

            map.addControl(new resetControl({ containerZoom: zoomControl._container }));

            setTimeout(function () {
                resetCenter = map.getCenter();
                resetZoom = map.getZoom();
                window.dispatchEvent(new Event('resize'));
            }, 200);


            L.control.fullscreen({
                position: 'topright', // change the position of the button can be topleft, topright, bottomright or bottomleft, defaut topleft
                title: 'Plein écran', // change the title of the button, default Full Screen
                forceSeparateButton: true, // force seperate button to detach from zoom buttons, default false
                forcePseudoFullscreen: true // force use of pseudo full screen even if full screen API is available, default false
            }).addTo(map);

            var downloadControl = L.Control.extend({
                options: {
                    position: 'bottomleft',
                    title: 'Télécharger le PDF'
                },
                onAdd: function (map) {
                    var container = L.DomUtil.create('div', 'leaflet-bar');

                    var link = L.DomUtil.create('a', "leaflet-control-download", container);
                    link.title = 'Télécharger le PDF';
                    link.href = 'https://www.lineotim.com/upload/pdftomap/10_plan.pdf';
                    link.target = "_blank";

                    return container;
                }
            });
            map.addControl(new downloadControl());

            function downloadURI(uri, name) {
                var link = document.createElement("a");
                link.download = name;
                link.href = uri;
                link.target = "_blank";
                link.click();
            }

            L.tileLayer.zoomify('https://pdf2map.swarm.actigraph.com/public/tim_10/', {
                width: 10000,
                height: 7333,
                detectRetina: true,
                attribution: 'Plan généré par <a href="http://actipage.net" target="_blank">ActiPAGE</a>'
            }).addTo(map);

            map._layersMaxZoom = map.getMaxZoom() - 1;
            for (var i = 0; i < markers.length; i++) {
                var element = markers[i];
                L.marker([element.lat, element.lng], { icon: markerIcon }).addTo(map)
                    .bindPopup("<div class='markerView'>" + element.nom + "<br/>" + element.description);
            }
            map.setZoom(2);


}
)
