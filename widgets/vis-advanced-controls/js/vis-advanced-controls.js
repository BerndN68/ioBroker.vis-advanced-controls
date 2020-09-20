/*
    ioBroker.vis vis-advanced-controls Widget-Set

    version: "0.0.1"

    Copyright 2020 BerndN68 bernd.naegele@sih-solutions.de
*/
'use strict';

if (vis.editMode) {
    $.extend(systemDictionary, {
        "autoclose":    	{"en": "Auto close",            "de": "Auto-zu",                "ru": "Автозакрытие"},
        "modal":        	{"en": "Modal",                 "de": "Modal",                  "ru": "Модальное"},
        "invert_state": 	{"en": "Invert state",          "de": "Invertiere Zustand",     "ru": "Инвертировать состояние"},
        "asButton":     	{"en": "Button rectangle",      "de": "Knopf-Viereck",          "ru": "Фон кнопки"},
        "icon_off":     	{"en": "Icon for OFF",          "de": "Symbol für AUS",         "ru": "Иконка для ВЫКЛ"},
        "iconColor_off":	{"en": "Icon color for OFF",    "de": "Symbolfarbe für AUS",    "ru": "Цвет иконки для ВЫКЛ"},
        "icon_on":      	{"en": "Icon for ON",           "de": "Symbol für AN",          "ru": "Иконка для ВКЛ"},
        "iconColor_on": 	{"en": "Icon color for ON",     "de": "Symbolfarbe für AN",     "ru": "Цвет иконки для ВКЛ"},
        "closed_value": 	{"en": "Value for CLOSED",      "de": "Wert für ZU",            "ru": "Значение для ЗАКРЫТО"},
        "tilted_value": 	{"en": "Value for TILTED",      "de": "Wert für GEKIPPT",       "ru": "Значение для ОТКИНУТО"},
        "opened_value": 	{"en": "Value for OPENED",      "de": "Wert für AUF",           "ru": "Значение для ОТКРЫТО"},
        "closed_icon":  	{"en": "Icon for CLOSED",       "de": "Symbol für ZU",          "ru": "Иконка для ЗАКРЫТО"},
        "closed_iconColor":	{"en": "Icon color for CLOSED", "de": "Symbolfarbe für ZU",  "ru": "Цвет иконки для ЗАКРЫТО"},
        "tilted_icon":  	{"en": "Icon for TILTED",       "de": "Symbol für GEKIPPT",     "ru": "Иконка для ОТКИНУТО"},
        "tilted_iconColor":	{"en": "Icon color for TILTED", "de": "Symbolfarbe für GEKIPPT", "ru": "Цвет иконки для ОТКИНУТО"},
        "opened_icon":  	{"en": "Icon for OPENED",       "de": "Symbol für AUF",         "ru": "Иконка для ОТКРЫТО"},
        "opened_iconColor":	{"en": "Icon color for OPENED", "de": "Symbolfarbe für AUF", "ru": "Цвет иконки для ОТКРЫТО"},
        "invert_value": 	{"en": "Invert value",          "de": "Invertiere Wert",        "ru": "Инвертировать значение"},
        "show_active":  	{"en": "Show active background", "de": "Zeige aktiven Hintergrund", "ru": "Показать активный фон"},
        "set_oid":      	{"en": "Set temperature ID",    "de": "Soll-Temperature ID",    "ru": "ID задаваемой температуры"},
        "temp_oid":     	{"en": "Actual temperature ID", "de": "Ist-Temperature ID",     "ru": "ID актуальной температуры"},
        "drive_oid":    	{"en": "Valve position ID",     "de": "VentilID",               "ru": "ID Положения вентиля"},
        "label_set":    	{"en": "Label for 'set'",       "de": "Beschriftung für 'Soll'", "ru": "Надпись для 'задаваемой'"},
        "label_temp":   	{"en": "Label for 'actual'",    "de": "Beschriftung für 'Ist'", "ru": "Надпись для 'актуальной'"},
        "label_drive":  	{"en": "Label for position",    "de": "Beschriftung für Ventil", "ru": "Надпись для вентиля"},
        "src_url":      	{"en": "Stream URL",            "de": "Stream URL",             "ru": "URL потока"},
        "qtsrc_url":    	{"en": "Stream URL (qtsrc)",    "de": "Stream URL (qtsrc)",     "ru": "URL потока (qtsrc)"},
        "type_application": {"en": "Application mime-type", "de": "Applikationstyp (mime)",   "ru": "Тип приложения (mime)"},
        "plugin":       	{"en": "Plug-in",               "de": "Plugin",                 "ru": "Плагин"},
        "autoplay":     	{"en": "Auto-play",             "de": "Automatisch abspielen",  "ru": "Автостарт"},
        "url":          	{"en": "URL",                   "de": "URL",                    "ru": "URL"},
        "interval":     	{"en": "Update interval(ms)",   "de": "Update-Intervall(ms)",   "ru": "Интервал обновления (мс)"},
        "group_icons":  	{"en": "Icons",                 "de": "Symbole",                "ru": "Иконки"},
        "group_values": 	{"en": "Values",                "de": "Werte",                  "ru": "Значения"},
        "icon_interval": 	{"en": "Update interval(ms)",        "de": "Updateintervall(ms)", "ru": "Интервал обновления (мс)"},
        "iconColor":    	{"en": "Icon color",            "de": "Symbolfarbe",            "ru": "Цвет иконки"},
        "group_images": 	{"en": "Icons",                 "de": "Symbole",                "ru": "Картинки"},
        "group_colors": 	{"en": "Icon colors (SVG)",     "de": "Symbolfarben (SVG)",     "ru": "Цвета картинки (SVG)"},
        "icon0":        	{"en": "Icon 0%",               "de": "Symbol für 0%",          "ru": "Картинка для 0%"},
        "iconColor0":   	{"en": "Icon color 0%",         "de": "Symbolfarbe bei 0%",     "ru": "Цвет для 0%"},
        "iconValue0":   	{"en": "Icon value 0%",         "de": "Symbolwert für 0%",      "ru": "Значение для 0%"},
        "iconValue0_tooltip":   {
            "en": "Icon value when defined picture must be shown",
            "de": "Symbolwert bei welchem sollte das Bild erscheinen",
            "ru": "Значение, когда должна появлятся эта иконка"
        },
        "icon1":        	  {"en": "Icon 10%",              "de": "Symbol für 10%",         "ru": "Картинка 10%"},
        "iconColor1":   	  {"en": "Icon color 10%",        "de": "Symbolfarbe bei 10%",    "ru": "Цвет для 0%"},
        "iconValue1":   	  {"en": "Icon value 10%",        "de": "Symbolwert für 10%",     "ru": "Значение для 0%"},
        "icon2":        	  {"en": "Icon 20%",              "de": "Symbol für 20%",         "ru": "Картинка 20%"},
        "iconColor2":   	  {"en": "Icon color 20%",        "de": "Symbolfarbe bei 20%",    "ru": "Цвет для 0%"},
        "iconValue2":   	  {"en": "Icon value 20%",        "de": "Symbolwert für 20%",     "ru": "Значение для 0%"},
        "icon3":        	  {"en": "Icon 30%",              "de": "Symbol für 30%",         "ru": "Картинка 30%"},
        "iconColor3":   	  {"en": "Icon color 30%",        "de": "Symbolfarbe bei 30%",    "ru": "Цвет для 0%"},
        "iconValue3":   	  {"en": "Icon value 30%",        "de": "Symbolwert für 30%",     "ru": "Значение для 0%"},
        "icon4":        	  {"en": "Icon 40%",              "de": "Symbol für 40%",         "ru": "Картинка 40%"},
        "iconColor4":   	  {"en": "Icon color 40%",        "de": "Symbolfarbe bei 40%",    "ru": "Цвет для 0%"},
        "iconValue4":   	  {"en": "Icon value 40%",        "de": "Symbolwert für 40%",     "ru": "Значение для 0%"},
        "icon5":        	  {"en": "Icon 50%",              "de": "Symbol für 50%",         "ru": "Картинка 50%"},
        "iconColor5":   	  {"en": "Icon color 50%",        "de": "Symbolfarbe bei 50%",    "ru": "Цвет для 0%"},
        "iconValue5":   	  {"en": "Icon value 50%",        "de": "Symbolwert für 50%",     "ru": "Значение для 0%"},
        "icon6":        	  {"en": "Icon 60%",              "de": "Symbol für 60%",         "ru": "Картинка 60%"},
        "iconColor6":   	  {"en": "Icon color 60%",        "de": "Symbolfarbe bei 60%",    "ru": "Цвет для 0%"},
        "iconValue6":   	  {"en": "Icon value 60%",        "de": "Symbolwert für 60%",     "ru": "Значение для 0%"},
        "icon7":        	  {"en": "Icon 70%",              "de": "Symbol für 70%",         "ru": "Картинка 70%"},
        "iconColor7":   	  {"en": "Icon color 70%",        "de": "Symbolfarbe bei 70%",    "ru": "Цвет для 0%"},
        "iconValue7":   	  {"en": "Icon value 70%",        "de": "Symbolwert für 70%",     "ru": "Значение для 0%"},
        "icon8":        	  {"en": "Icon 80%",              "de": "Symbol für 80%",         "ru": "Картинка 80%"},
        "iconColor8":   	  {"en": "Icon color 80%",        "de": "Symbolfarbe bei 80%",    "ru": "Цвет для 0%"},
        "iconValue8":   	  {"en": "Icon value 80%",        "de": "Symbolwert für 80%",     "ru": "Значение для 0%"},
        "icon9":        	  {"en": "Icon 90%",              "de": "Symbol für 90%",         "ru": "Картинка 90%"},
        "iconColor9":   	  {"en": "Icon color 90%",        "de": "Symbolfarbe bei 90%",    "ru": "Цвет для 0%"},
        "iconValue9":   	  {"en": "Icon value 90%",        "de": "Symbolwert für 90%",     "ru": "Значение для 0%"},
        "icon10":       	  {"en": "Icon 100%",             "de": "Symbol für 100%",        "ru": "Картинка 100%"},
        "iconColor10":  	  {"en": "Icon color 100%",       "de": "Symbolfarbe bei 100%",   "ru": "Цвет для 0%"},
        "iconValue10":  	  {"en": "Icon value 100%",       "de": "Symbolwert für 100%",    "ru": "Значение для 0%"},
        "iconOff":      	  {"en": "Inactive Icon",         "de": "Inaktivbild",            "ru": "Неактиваня картинка"},
        "textOff":      	  {"en": "Text for Off",          "de": "Text für Aus",           "ru": "Надпись для Выкл"},
        "textOn":       	  {"en": "Text for On",           "de": "Text für Ein",           "ru": "Надпись для Вкл"},
        "iconColorOff": 	  {"en": "Inactive Icon color",   "de": "Inaktive Symbolfarbe",   "ru": "Цвет не активной иконки"},
        "iconColorOn":  	  {"en": "Active Icon color",     "de": "Aktive Symbolfarbe",     "ru": "Цвет активной иконки"},
        "show_value":   	  {"en": "Show value",            "de": "Wert zeigen",            "ru": "Показывать значение"},
        "units":        	  {"en": "Units",                 "de": "Einheit",                "ru": "Единицы измерения"},
        "roundnumber":  	  {"en": "Decimal Place",         "de": "Nachkommastellen",       "ru": "Decimal Place"},
        "slide_count":  	  {"en": "Slides count",      	  "de": "Flügelanzahl",           "ru": "Кол-во створок"},
        "slide_type":       {"en": "Slide type",        	  "de": "Flügeltyp",              "ru": "Тип створки"},
        "oid-slide-sensor": {"en": "Slide sensor",          "de": "Fensterblatt-Sensor",    "ru": "Сенсор на створке"}
    });
}

// add translations for edit mode
$.extend(
    true,
    systemDictionary,
    {
        // Add your translations here, e.g.:
        // "size": {
        // 	"en": "Size",
        // 	"de": "Größe",
        // 	"ru": "Размер",
        // 	"pt": "Tamanho",
        // 	"nl": "Grootte",
        // 	"fr": "Taille",
        // 	"it": "Dimensione",
        // 	"es": "Talla",
        // 	"pl": "Rozmiar",
        // 	"zh-cn": "尺寸"
        // }
    }
);


vis.binds.advancedui = {
    dialog: function (el, options, persistent, preload, html, closeOnClick) {
        var $dlg = $(el).parent().find('div.vis-widget-dialog');
        $dlg.data('preload', (!preload || preload === 'false') && !$dlg.html().replace(/\s/g, ''));
        $('[aria-describedby="' + $dlg.attr('id') + '"]').remove();

        console.log('vis-advanced-controls: vis.binds.advancedui.dialog');
        console.log('vis-advanced-controls: div.vis-widget-body => ' + $(el).parent().find('div.vis-widget-body')[0].className);
        console.log('vis-advanced-controls: div.mdw-list-desc => ' + $(el).parent().find('div.mdw-list-desc').className);

        options.width     = options.width  || options.dialog_width;
        options.height    = options.height || options.dialog_height;
        options.top       = options.top    || options.dialog_top;
        options.left      = options.left   || options.dialog_left;
        options.minHeight = options.height;
        options.minWidth  = options.width;

        // Show dialog in edit mode too
        if (1 || !vis.editMode) {
//            $(el).parent().find('div.vis-widget-body').on('click touchend', function (event) {
                $(el).parent().find('div.mdw-list-desc').on('click touchend', function (event) {

                console.log('Version vis-advanced-controls: click touchend');

                event.stopPropagation();
                // Protect against two events
                if (vis.detectBounce(this)) return;

                if ($dlg.data('preload')) $dlg.html(html);

                if (persistent) {
                    if (options.setId) vis.setValue(options.setId, options.setValue);
                    $dlg.dialog('open');
                    $dlg.parent().css('z-index', 998);
                    $dlg.parent().find('.ui-widget-header button .ui-button-text').html('');
                    if (options.minHeight)   $dlg.css('min-height', options.minHeight);
                    if (options.minWidth)    $dlg.css('min-width', options.minWidth);
                    if (options.top  || options.top  === 0 || options.top  === '0') $dlg.parent().css('top',  options.top);
                    if (options.left || options.left === 0 || options.left === '0') $dlg.parent().css('left', options.left);
                    if (options.overflowX) $dlg.css('overflow-x', options.overflowX);
                    if (options.overflowY) $dlg.css('overflow-y', options.overflowY);
                    if (options.noHeader) {
                        $dlg.parent().find('.ui-dialog-titlebar').css({background: 'rgba(0,0,0,0)', border: 0, color: 'rgba(0,0,0,0)'});
                        $dlg.parent().find('.ui-dialog-title').html('&nbsp;');
                    }
                    $dlg.parent().find('.ui-state-focus').blur();
                } else {
                    $dlg.dialog($.extend({
                        autoOpen: true,
                        open: function () {
                            $(this).parent().find('.ui-widget-header button .ui-button-text').html('');
                            if (options.setId) vis.setValue(options.setId, options.setValue);
                            $(this).parent().css('z-index', 998);
                            if (options.minHeight)   $(this).css('min-height', options.minHeight);
                            if (options.minWidth)    $(this).css('min-width', options.minWidth);
                            if (options.top  || options.top  === 0 || options.top  === '0') $(this).parent().css('top',  options.top);
                            if (options.left || options.left === 0 || options.left === '0') $(this).parent().css('left', options.left);
                            if (options.overflowX) $(this).css('overflow-x', options.overflowX);
                            if (options.overflowY) $(this).css('overflow-y', options.overflowY);
                            if (options.noHeader) {
                                $dlg.parent().find('.ui-dialog-titlebar').css({background: 'rgba(0,0,0,0)', border: 0, color: 'rgba(0,0,0,0)'});
                                $dlg.parent().find('.ui-dialog-title').html('&nbsp;');
                            }
                            $(this).parent().find('.ui-state-focus').blur();
                            //touchscreen fix
                            var $closeButton = $(this).parent().find('button.ui-dialog-titlebar-close');
                            $closeButton.off('touchend').on('touchend', function (event) {
                                event.stopPropagation();
                                $dlg.dialog('close');
                                return false;
                            });
                        },
                        close: function () {
                            if ($dlg.data('timer')) { clearTimeout($dlg.data('timer')); $dlg.data('timer', null)};
                            $dlg.dialog('destroy');
                            // Destroy content if not preloaded
                            if ($dlg.data('preload')) $dlg.html('');
                        }
                    }, options));

                    $dlg.data('inited', true);

                    if (closeOnClick) {
                        $dlg.off('click touchstart touchend').on('click touchend', function (event) {
                            event.stopPropagation();
                            $dlg.dialog('close');
                            return false;
                        });
                    }
                }
                return false;
            });
        }
        if (persistent) {
            $dlg.dialog($.extend({
                autoOpen: false,
                open: function () {
                    $dlg.parent().css({'z-index': 1000});
                    if ($dlg.data('preload')) $dlg.html(html);
                    //touchscreen fix
                    var $closeButton = $(this).parent().find('button.ui-dialog-titlebar-close');
                    $closeButton.off('touchend').on('touchend', function (event) {
                        event.stopPropagation();
                        $dlg.dialog('close');
                        return false;
                    });
                },
                close: function () {
                    if ($dlg.data('timer')) {
                        clearTimeout($dlg.data('timer'));
                        $dlg.data('timer', null);
                    }
                    // Destroy content if not preloaded
                    if ($dlg.data('preload')) $dlg.html('');
                }
            }, options));

            $dlg.data('inited', true);

            if (closeOnClick) {
                $dlg.off('click touchstart touchend').on('click touchend', function (event) {
                    event.stopPropagation();
                    $dlg.dialog('close');
                    return false;
                });
            }
        }
    }

};

// this code can be placed directly in vis-advanced-controls.html
vis.binds['vis-advanced-controls'] = {
    version: '0.0.32',
    showVersion: function () {
        if (vis.binds['vis-advanced-controls'].version) {
            console.log('Version vis-advanced-controls: ' + vis.binds['vis-advanced-controls'].version);
            vis.binds['vis-advanced-controls'].version = null;
        }
    },
    isNotEmpty: function (val) {
        return val !== '' && val !== null && val !== undefined;
    },
    removeSvg: function (wid) {
        $('#' + wid).find('svg').remove();
    },
    createWidget: function (widgetID, view, data, style) {
        var $div = $('#' + widgetID);
        // if nothing found => wait
        if (!$div.length) {
            return setTimeout(function () {
                vis.binds['vis-advanced-controls'].createWidget(widgetID, view, data, style);
            }, 100);
        }

        var text = '';
        text += 'OID: ' + data.oid + '</div><br>';
        text += 'OID value: <span class="vis-advanced-controls-value">' + vis.states[data.oid + '.val'] + '</span><br>';
        text += 'Color: <span style="color: ' + data.myColor + '">' + data.myColor + '</span><br>';
        text += 'extraAttr: ' + data.extraAttr + '<br>';
        text += 'Browser instance: ' + vis.instance + '<br>';
        text += 'htmlText: <textarea readonly style="width:100%">' + (data.htmlText || '') + '</textarea><br>';

        $('#' + widgetID).html(text);

        // subscribe on updates of value
        function onChange(e, newVal, oldVal) {
            $div.find('.template-value').html(newVal);
        }
        if (data.oid) {
            vis.states.bind(data.oid + '.val', onChange);
            //remember bound state that vis can release if didnt needed
            $div.data('bound', [data.oid + '.val']);
            //remember onchange handler to release bound states
            $div.data('bindHandler', onChange);
        }
    },
    tplVacShutterDialog2: function (widgetID, view, data) {
        /*   const srcOff = 'widgets/vis-advanced-controls/img/light_light_dim_00.png';
          const srcOn = 'widgets/vis-advanced-controls/img/light_light_dim_100.png'; */
        var $div = $('#' + widgetID);

        // Default-Bild anzeigen
        const src = 'widgets/vis-advanced-controls/img/fts_shutter_NaN0.png';
        $div.find('.mdw-list-icon').find('img').attr('src', src);

        // if nothing found => wait
        if (!$div.length) {
            return setTimeout(function () {
                vis.binds['vis-advanced-controls'].tplVacShutterDialog2(widgetID, view, data);
            }, 100);
        }

        var $buttonDown = $div.find('.mdw-list-value').find('button')[0];
        var $buttonUp = $div.find('.mdw-list-value').find('button')[1];

        $buttonDown.addEventListener('click', buttonDown);
        $buttonUp.addEventListener('click', buttonUp);

        function buttonDown(){
            console.log('vis-advanced-controls - tplVacShutterDialog2 - button down clicked')
        }

        function buttonUp(){
            console.log('vis-advanced-controls - tplVacShutterDialog2 - button down clicked')
        }

        function update(state) {
            var percent = Math.ceil(state / 10);
            var name;

            console.log("Status: " + state);

            if (data.attr('inverted') == true) {

                name = 10 - parseInt(percent);
                console.log('Inverted -> name: ' + name);
            } else {
                name = percent;
            }

            var src = 'widgets/vis-advanced-controls/img/fts_shutter_' + name + '0.png';
            console.log(' name : ' + name + " Icon : " + src);
            $div.find('.mdw-list-icon').find('img').attr('src', src);
            if (data.attr('readOnly')) {

                $div.find('.mdw-list-value').html(state + "%");

            }
        }

        /* if (!vis.editMode) {
            var $this = $('#' + widgetID + '_slider');
            $this.change(function () {
                var $this_ = $(this);
                vis.setValue($this_.data('oid'), $this_.prop('checked'));
            });
        } */

        if (data.oid) {
            // subscribe on updates of value
            vis.states.bind(data.oid + '.val', function (e, newVal, oldVal) {
                update(newVal);
            });

            // set current value
            update(vis.states[data.oid + '.val']);
        }
    }


};

vis.binds['vis-advanced-controls'].showVersion();