/**
 * 
    _______    __    __    __         ______  ________  ________  _______   ________   ______  
  |        \ _/  \  |  \  |  \       /      \|        \|        \|       \ |        \ /      \ 
   \$$$$$$$$|   $$  | $$\ | $$      |  $$$$$$\\$$$$$$$$| $$$$$$$$| $$$$$$$\| $$$$$$$$|  $$$$$$\
     | $$    \$$$$  | $$$\| $$      | $$___\$$  | $$   | $$__    | $$__| $$| $$__    | $$  | $$
     | $$     | $$  | $$$$\ $$       \$$    \   | $$   | $$  \   | $$    $$| $$  \   | $$  | $$
     | $$     | $$  | $$\$$ $$       _\$$$$$$\  | $$   | $$$$$   | $$$$$$$\| $$$$$   | $$  | $$
     | $$    _| $$_ | $$ \$$$$      |  \__| $$  | $$   | $$_____ | $$  | $$| $$_____ | $$__/ $$
     | $$   |   $$ \| $$  \$$$       \$$    $$  | $$   | $$     \| $$  | $$| $$     \ \$$    $$
      \$$    \$$$$$$ \$$   \$$        \$$$$$$    \$$    \$$$$$$$$ \$$   \$$ \$$$$$$$$  \$$$$$$ 

      //best stereo on cord 
 * @name T1Nstereo
 * @author tinguy1
 * @version 1.0.1
 * @authorLink https://github.com/tinguy1
 * @invite 9bpbS4kjdf
 * @source https://github.com/tinguy1/T1Nstereo
**/
/*@cc_on @if (@_jscript)
var pluginName = WScript.ScriptName.split(".")[0];
var shell = WScript.CreateObject("WScript.Shell");
shell.Popup(
    "Do NOT run scripts from the internet with the Windows Script Host!\nMove this file to your BetterDiscord plugins folder.",
    0,
    pluginName + ": Warning!",
    0x1030
);
var fso = new ActiveXObject("Scripting.FileSystemObject");
var pluginsPath = shell.expandEnvironmentStrings("%appdata%\\BetterDiscord\\plugins");
if (!fso.FolderExists(pluginsPath)) {
    var popup = shell.Popup(
        "Unable to find BetterDiscord on your computer.\nOpen the download page of BetterDiscord?",
        0,
        pluginName + ": BetterDiscord not found",
        0x34
    );
    if (popup === 6) {
        shell.Exec("explorer \"https://betterdiscord.app\"");
    }
} else if (WScript.ScriptFullName === pluginsPath + "\\" + WScript.ScriptName) {
    shell.Popup(
        "This plugin is already in the correct folder.\nNavigate to the \"Plugins\" settings tab in Discord and enable it there. Have fun! - tinguy1",
        0,
        pluginName,
        0x40
    );
} else {
    var popup = shell.Popup(
        "Open the BetterDiscord plugin folder?",
        0,
        pluginName,
        0x34
    );
    if (popup === 6) {
        shell.Exec("explorer " + pluginsPath);
    }
}
WScript.Quit();
@else @*/
//variables for this code to work//they need to be defined up here or the code gets all fucking buggy and wont work but to make it neat-er i set them as vars to null to then be changed in the replacement section
var samplerate = null //dont touch
var channelmaxbitrate = null //dont touch
var bitrate = null //dont touch
var channelstereoornot = null //dont touch
var pbypass = null //dont touch
var audiopriority = null //dont touch
var audionormal = null //dont touch
var vadkrisp = null //dont touch
var decoderstereo = null //dont touch
var stereostereo = null //dont touch
var videobitrate = null //dont touch
var streambitrate = null //dont touch
var consolelogs = null //dont touch
var vctoast = null //dont touch
var attenuation1 = null //dont touch
var attenuation2 = null //dont touch
module.exports = (() => {
  const config = {
    info: {
      name: 'T1Nstereo', //dont try to change the name of the plugin or it wont work
      version: '1.0.1',
      description:
        'disable echo cancellation, noise reduction, noise suppression, Diagnostic audio recording, and Debug logging for this plugin to work, open plugin settings to see configurable settings.',
      authors: [
        {
          name: 'tinguy1'
        }
      ],
      authorlink: 'github.com/tinguy1',
      github: 'github.com/tinguy1',
      github_raw: 'https://raw.githubusercontent.com/tinguy1/T1Nstereo/main/T1Nstereo.plugin.js'
    },
    changelog: [
      {
        title: 'Release Changes',
        items: [
          'added back console logging',
          'added more shit idk i forgot',
          'got the plugin read for release',
          'tried to add catagorys to make the plugin settings look beter but there was some dumb problem that didnt let the plugins config build'
        ],
      },
      {
        title: 'Pre Release Changes',
        items: [
          'got rid of console logging due to console spam',
          'finalized the changes',
          'added a settings menu',
          'added drop downmenus',
          'added if statements just incase discord deletes anything in the future',
          'added stream and video bitrate options in case this plugin was not compatible with other plugins that can change those options',
          'made the code alot more pretty',
          'added a run sript for wetawds who just ran it after downloading it (if you did that and you are reading this its okay im sorry)',
          'jerked off again'
        ],
      },
      {
        title: 'Dev Changes',
        items: [
          'added more console logging to console for people to better understand the codeadded more console logging to console for people to better understand the code',
          'added experimental opus codec settigsn to change the codec name, identifier, bitrate, packetsize, sample rate etc',
          'fixed bitrate functionality and made it better',
          'added opus encoder/ decoder settings',
          'made it so attenuation does not affect your mic to others',
          'made it so people using priority speaker does not affect your mic volume to others',
          'added non complex plugin settings',
          'added forced priority speaker option',
          'also,there are future updates to come to this plugin',
          'added dropdownmenus',
          'jerked off'
        ]
      } //made by tinguy1 on github dont steal pussy
    ],
    defaultConfig: [
      {
        type: "category",
        id: "mainsettings",
        name: "Main Settings",
        settings: [
      {
        type: "dropdown",
        id: 'nutballman',
        name: "Audio Bitrate",
        note: "Select the voice KBPS value you want to set",
        value: 2,
        options: [
          {
            label: "8 kbps",
            value: 0
          },
          {
            label: "32 kbps",
            value: 1
          },
          {
            label: "128 kbps",
            value: 2
          },
          {
            label: "256 kbps",
            value: 3
          },
          {
            label: "510 kbps",
            value: 4
          }
        ],
      }, //made by tinguy1 on github dont steal pussy
      {
        type: "dropdown",
        id: 'nutballman2',
        name: "Sample Rate",
        note: "Change the sample rate for your inputs and outputs but be aware that the other person also needs this plugin and the setting on for it to work or be heard.",
        value: 1,
        options: [
          {
            label: "44.1 KHZ",
            value: 0
          },
          {
            label: "48 KHZ",
            value: 1
          },
          {
            label: "96 KHZ",
            value: 2
          },
          {
            label: "192 KHZ",
            value: 3
          }
        ],
      }, //made by tinguy1 on github dont steal pussy
      {
        type: "dropdown",
        id: "nutballman3",
        name: "Channel Max Available Bitrate ",
        note: 'Not the actual bitrate of things in the voice channel but the value of available bitrate',
        value: 1,
        options: [
          {
            label: "Defaultish discord value (hey im not bypassing discords default audio bitrate! i follow and abide by discords TOS!)",
            value: 0
          },
          {
            label: "T1Nstereo value (more)",
            value: 1
          }
        ]
      }, //made by tinguy1 on github dont steal pussy
      {
        type: "dropdown",
        id: 'nutballman4',
        name: "Video bitrate",
        note: "using other plugins that change any bitrate can interfere with this plugin so here are the video and stream bitrate fixes here",
        value: 2,
        options: [
          {
            label: "1000 kbps",
            value: 0
          },
          {
            label: "2000 kbps",
            value: 1
          },
          {
            label: "3000 kbps",
            value: 2
          },
          {
            label: "4000 kbps",
            value: 3
          },
          {
            label: "5000 kbps",
            value: 4
          }
        ],
      }, //made by tinguy1 on github dont steal pussy
      {
        type: "dropdown",
        id: 'nutballman5',
        name: "Stream bitrate",
        note: "using other plugins that change any bitrate can interfere with this plugin so here are the video and stream bitrate fixes here  ",
        value: 2,
        options: [
          {
            label: "1000 kbps",
            value: 0
          },
          {
            label: "2000 kbps",
            value: 1
          },
          {
            label: "3000 kbps",
            value: 2
          },
          {
            label: "4000 kbps",
            value: 3
          },
          {
            label: "5000 kbps",
            value: 4
          }
        ],
      }, //made by tinguy1 on github dont steal pussy
      {
        type: 'switch',
        id: 'consolelog',
        name: 'Console logging',
        note: '(Only turn this on if you know what its for/ debugging',
        value: false,
        disabled: true,
      }, //made by tinguy1 on github dont steal pussy 
    ]
  },
  {
  type: "category",
   id: "miscsettings",
    name: "Other settings",
    settings: [
      {
        type: 'switch',
        id: 'reconnectvc',
        name: 'Reconnect to Current Voice channel on Plugin Setting change',
        note: '(NOT IMPLEMENTED YET) Reconnects to the current vc on plugin change join the disco server and add feedback',
        value: false,
        disabled: true,
      }, //made by tinguy1 on github dont steal pussy 
      {
        type: 'switch',
        id: 'krispvad',
        name: 'Voice Activity Detection use Krisp',
        note: 'POSSIBLE DOESNT WORK OR EVEN DO ANYTHING/ Separate audio stream is used to determine the noise gate on discord turning on or off, this could be technically make it more accurate but probably not ',
        value: true          
      }, //made by tinguy1 on github dont steal pussy 
      {
        type: 'switch',
        id: 'stereodecoder',
        name: 'Stereo Output',
        note: 'Makes it so your discord voice channel output is stereo or mono(default discord value is on)',
        value: true
      }, //made by tinguy1 on github dont steal pussy       
      {
        type: 'switch',
        id: 'enableToasts',
        name: 'Enable Toasts',
        note: 'Allows the plugin to let you know it is working, and also warn you about voice settings, dont turn this off for the first week of using the plugin as it has helpfull reminders of the settings to configure',
        value: true
      }, //made by tinguy1 on github dont steal pussy
      {
        type: 'switch',
        id: 'stereomono',
        name: 'Stereo input',
        note: 'Make it so discord makes your input audio stereo, turning this off keeps all the other features of this plugin but makes your input only 1 channel',
        value: true
      }, //made by tinguy1 on github dont steal pussy
      {
        type: 'switch',
        id: 'poopmode',
        name: 'PoopMode',
        note: 'Makes it so your mic sounds like shit to others',
        value: false
      }, //made by tinguy1 on github dont steal pussy
      {
        type: 'switch',
        id: 'voiceattenuation',
        name: 'Voice attenuation bypass',
        note: 'sets attenuation to false (if you have attenuation on and you like it don turn this on) possibly makes it so people with attenuation on your voice level might not change to them)/might not work',
        value: false,
        disabled: true,
      }, //made by tinguy1 on github dont steal pussy
      {
        type: 'switch',
        id: 'prioritygetaround',
        name: 'Priority Speakers have no affect on your volume to others',
        note: 'Make it so when someone uses Priority Speaker your volume to others doesnt get lowered/ might work/not work',
        value: false,
        disabled: true,
      }, //made by tinguy1 on github dont steal pussy
      {
        type: 'switch',
        id: 'priorityaudio',
        name: 'Force Audio Priority in Voice Channels',
        note: 'Gives you priority speaker no matter on what perms you have/ might work/ not work',
        value: false,
        disabled: true,
      }, //made by tinguy1 on github dont steal pussy
      {
        type: 'textbox',
        id: 'vcjointoast',
        name: 'Voice channel join Toast',
        note: 'change the toast that shows when joining a voice channel',
        value: 'I love tinguy1 on github he is my daddy and i love him so much + T1Nstereo is the best plugin ever made',
        placeholder: 'I love tinguy1 on github he is my daddy and i love him so much + T1Nstereo is the best plugin ever made',
        //disabled: true,
      }, //made by tinguy1 on github dont steal pussy
    ]
  },
]
}
  //made by tinguy1 on github dont steal pussy
  stereostereo = 'T1Nstereo'
  return !global.ZeresPluginLibrary
    ? class {
      constructor() {
        this._config = config
      }
      getName() {
        return config.info.name
      }
      getAuthor() {
        return config.info.authors.map(a => a.name).join(', ')
      }
      getDescription() {
        return config.info.description
      }
      getVersion() {
        return config.info.version
      }
      load() {
        BdApi.showConfirmationModal(
          'Library Missing',
          `The library plugin needed for ${config.info.name} is missing. Please click Download Now to install it .`,
          {
            confirmText:
              'Download Now',
            cancelText: 'Cancel',
            onConfirm: () => {
              require('request').get(
                'https://rauenzi.github.io/BDPluginLibrary/release/0PluginLibrary.plugin.js',
                async (error, response, body) => {
                  if (error) {
                    console.log(`${config.info.name} zeres tried to download but a error occured but due to some of the links no longer working this is quite the problem to deal with and you should just download zerespluginlibrary from betterdiscord.app and send this error to the T1Nstereo support server`)
                    console.log(`${config.info.name} zeres tried to download but a error occured but due to some of the links no longer working this is quite the problem to deal with and you should just download zerespluginlibrary from betterdiscord.app and send this error to the T1Nstereo support server`)
                    console.log(`${config.info.name} zeres tried to download but a error occured but due to some of the links no longer working this is quite the problem to deal with and you should just download zerespluginlibrary from betterdiscord.app and send this error to the T1Nstereo support server`)
                    console.log(`${config.info.name} zeres tried to download but a error occured but due to some of the links no longer working this is quite the problem to deal with and you should just download zerespluginlibrary from betterdiscord.app and send this error to the T1Nstereo support server`)
                    console.log(`${config.info.name} zeres tried to download but a error occured but due to some of the links no longer working this is quite the problem to deal with and you should just download zerespluginlibrary from betterdiscord.app and send this error to the T1Nstereo support server`)
                  }
                  //repeated 5 times to be seen better in the console 
                  //idk if it really works ill test it later
                  //if (error)
                  //return require('electron').shell.openExternal(
                  //'https://betterdiscord.net/ghdl?url=https://raw.githubusercontent.com/rauenzi/BDPluginLibrary/master/release/0PluginLibrary.plugin.js'
                  //)
                  //removed this and replaced it with a console log cause it leads to some weird shit and doesnt work anymore
                  await new Promise(r =>
                    require('fs').writeFile(
                      require('path').join(
                        BdApi.Plugins.folder,
                        '0PluginLibrary.plugin.js'
                      ),
                      body,
                      r
                    )
                  )
                }
              )
              console.log(`${config.info.name} zerespluginlibrary is missing!.`)
            }
          }
        )
      }
      start() { }
      stop() { }
    }
    : (([Plugin, Api]) => {
      const plugin = (Plugin, Library) => {
        const { WebpackModules, Patcher, Toasts, Popouts, PluginUpdater, Logger, DiscordModules: { React, ChannelActions, LocaleManager }, } = Library
        //const Dispatcher =  WebpackModules.getByProps("dispatch", "_actionHandlers")
        return class T1Nstereo extends Plugin {
          async checkForUpdates() {
            if (this.settings.consolelog){
              Logger.info("Checking for updates, current version: " + config.info.version);
            }
            
            const SHC_U = await fetch(config.info.github_raw);
            if (!SHC_U.ok) return BdApi.showToast("(T1Nstereo) Failed to check for updates.", { type: "error" });
            const SHCContent = await SHC_U.text();
    
            if (SHCContent.match(/(?<=version: ").*(?=")/)[0] <= config.info.version) return Logger.info("No updates found.");
    
            BdApi.showConfirmationModal("Update available", `T1Nstereo has an update available. Would you like to update to version ${SHCContent.match(/(?<=version: ").*(?=")/)[0]}?`, {
              confirmText: "Update",
              cancelText: "Cancel",
              danger: false,
    
              onConfirm: () => {
                this.proceedWithUpdate(SHCContent);
              },
    
              onCancel: () => {
                BdApi.showToast("Update cancelled.", { type: "info" });
              }
            });
          }
    
          async proceedWithUpdate(SHCContent) {
            if (this.settings.consolelog){
              Logger.info("Update confirmed by the user, updating to version " + SHCContent.match(/(?<=version: ").*(?=")/)[0]);
            }
    
            try {
              const fs = require("fs");
              const path = require("path");
    
              await fs.writeFile(
                path.join(BdApi.Plugins.folder, "T1Nstereo.plugin.js"),
                SHCContent,
                (err) => {
                  if (err) return BdApi.showToast("(T1Nstereo) Failed to update.", { type: "error" });
                }
              );
    
              BdApi.showToast("T1Nstereo updated to version " + SHCContent.match(/(?<=version: ").*(?=")/)[0], { type: "success" });
            } catch (err) {
              return BdApi.showToast("(T1Nstereo) Failed to update.", { type: "error" });
            }
          }
          onStart() {
            this.checkForUpdates();
            //Dispatcher.subscribe("VOICE_CHANNEL_SELECT", this.PutButton);
            //ChannelActions.selectVoiceChannel(
            //voice.currentVoiceChannelId,
            // console.log(voice.currentVoiceChannelId)
            //);           
             if (!this.settingsWarning()) {         
            if (this.settings.enableToasts) {
              setTimeout(() => {
                Toasts.show(
                  `${config.info.name} on, open console if the plugin doesn't work join the server for support, this is a version of StereoSound that is highly configurable with more features`,
                  { timeout: 6000 },
                )
              }, 4000)
            }
          }
            if (!this.settingsWarning()) {   
            if (this.settings.enableToasts) {
              setTimeout(() => {
                Toasts.warning(
                  `Also just in case to remember, please disable echo cancellation, noise reduction, noise suppression, Diagnostic audio recording, and Debug logging for ${config.info.name}`,
                  { timeout: 7500 }
                )
              }, 10000)
            }
          }
            if (config.info.name === stereostereo) {
              const voiceModule = WebpackModules.getByPrototypes(
                'updateVideoQuality',
                'getActiveOutputSinkTrackingEnabled', //use this instead of updatevideoquality if updatevideoqualilty doesnt work overwriteQualityForTesting but this one causes more console logs
                'overwriteQualityForTesting',         //or this
                'setConnectionState',                 //or this lool
              )
              Patcher.after(
                voiceModule.prototype,
                'updateVideoQuality',
                this.replacement.bind(this)
              )        
            } else {
              process.abort(0)
            }
          }
          settingsWarning() {
            const voiceSettingsStore = WebpackModules.getByProps(
              'getEchoCancellation'
            )
            if (
              voiceSettingsStore.getNoiseSuppression() ||
              voiceSettingsStore.getNoiseCancellation() ||
              voiceSettingsStore.getEchoCancellation()
            ) {
              if (this.settings.enableToasts) {
                Toasts.show(
                  `Please disable echo cancellation, noise reduction, noise suppression, Diagnostic audio recording, and Debug logging for ${config.info.name}`,
                  { type: 'warning', timeout: 6000 }
                )
              }              
              return true
            } else {
              return false
            }
          }
          replacement(thisObj, _args, ret) {
            const setTINOptions = thisObj.conn.setTransportOptions
            const tin2 = thisObj
            const tin3 = thisObj.framerateReducer.sinkWants.qualityOverwrite
            const tintin = tin2.conn
            if (this.settings.miscsettings.poopmode) {
              bitrate = 8000
            } else {
              if (this.settings.mainsettings.nutballman === 0) {
                bitrate = 8000
              } //made by tinguy1 on github dont steal pussy
              if (this.settings.mainsettings.nutballman === 1) {
                bitrate = 32000
              } //made by tinguy1 on github dont steal pussy
              if (this.settings.mainsettings.nutballman === 2) {
                bitrate = 128000
              } //made by tinguy1 on github dont steal pussy
              if (this.settings.mainsettings.nutballman === 3) {
                bitrate = 256000
              } //made by tinguy1 on github dont steal pussy
              if (this.settings.mainsettings.nutballman === 4) {
                bitrate = 510000
              } //made by tinguy1 on github dont steal pussy
            }
            if (this.settings.mainsettings.nutballman2 === 0) {
              samplerate = 44100
            } //made by tinguy1 on github dont steal pussy
            if (this.settings.mainsettings.nutballman2 === 1) {
              samplerate = 48000
            } //made by tinguy1 on github dont steal pussy
            if (this.settings.mainsettings.nutballman2 === 2) {
              samplerate = 96000
            } //made by tinguy1 on github dont steal pussy
            if (this.settings.mainsettings.nutballman2 === 3) {
              samplerate = 192000
            } //made by tinguy1 on github dont steal pussy
            if (this.settings.mainsettings.nutballman3 === 0) {
              channelmaxbitrate = 7808000
            } //made by tinguy1 on github dont steal pussy
            if (this.settings.mainsettings.nutballman3 === 1) {
              channelmaxbitrate = 10000000
            } //made by tinguy1 on github dont steal pussy
            if (this.settings.mainsettings.nutballman4 === 0) {
              videobitrate = 1000000
            } //made by tinguy1 on github dont steal pussy
            if (this.settings.mainsettings.nutballman4 === 1) {
              videobitrate = 2000000
            } //made by tinguy1 on github dont steal pussy
            if (this.settings.mainsettings.nutballman4 === 2) {
              videobitrate = 3000000
            } //made by tinguy1 on github dont steal pussy
            if (this.settings.mainsettings.nutballman4 === 3) {
              videobitrate = 4000000
            } //made by tinguy1 on github dont steal pussy
            if (this.settings.mainsettings.nutballman4 === 4) {
              videobitrate = 5000000
            } //made by tinguy1 on github dont steal pussy
            if (this.settings.mainsettings.nutballman5 === 0) {
              streambitrate = 1000000
            } //made by tinguy1 on github dont steal pussy
            if (this.settings.mainsettings.nutballman5 === 1) {
              streambitrate = 2000000
            } //made by tinguy1 on github dont steal pussy
            if (this.settings.mainsettings.nutballman5 === 2) {
              streambitrate = 3000000
            } //made by tinguy1 on github dont steal pussy
            if (this.settings.mainsettings.nutballman5 === 3) {
              streambitrate = 4000000
            } //made by tinguy1 on github dont steal pussy
            if (this.settings.mainsettings.nutballman5 === 4) {
              streambitrate = 5000000
            } //made by tinguy1 on github dont steal pussy
            if (this.settings.miscsettings.stereomono) {
              channelstereoornot = 2
            } else { //made by tinguy1 on github dont steal pussy
              channelstereoornot = 1
            } //made by tinguy1 on github dont steal pussy
            if (this.settings.miscsettings.prioritygetaround) {
              pbypass = 0
            } else {
              pbypass = 0.1
            } //made by tinguy1 on github dont steal pussy
            if (this.settings.miscsettings.priorityaudio) {
              audiopriority = true
              audionormal = false
            } else {
              audionormal = true
              audiopriority = false
            } //made by tinguy1 on github dont steal pussy
            if (this.settings.miscsettings.krispvad) {
              vadkrisp = false
            } else {
              vadkrisp = true
            } //made by tinguy1 on github dont steal pussy
            if (this.settings.miscsettings.stereodecoder) {
              decoderstereo = 2
            } else {
              decoderstereo = 1
            } //made by tinguy1 on github dont steal pussy
            if (this.settings.mainsettings.consolelog) {
              consolelogs = true
            } else {
              consolelogs = false
            }
            if (this.settings.miscsettings.voiceattenuation) {
             attenuation1 = 0
             attenuation2 = false
            } else {
              attenuation1 = 0.1
              attenuation2 = true
            }
            vctoast = this.settings.miscsettings.vcjointoast
            tintin.setTransportOptions = function (tin) {
              if (tin.audioEncoder) {
                tin.audioEncoder.params = {
                  stereo: 2
                } //doesnt really matter but there just in case - tinguy1
              }
              tin2.forceAudioPriority = audiopriority
              //made by tinguy1 on github dont steal pussy
              tin2.forceAudioNormal = audionormal
              //made by tinguy1 on github dont steal pussy
              tin2.voiceBitrate = bitrate
              //made by tinguy1 on github dont steal pussy
              tin2.vadUseKrisp = vadkrisp
              //made by tinguy1 on github dont steal pussy
              //tin2.inputModeOptions.vadUseKrisp = vadkrisp
              //made by tinguy1 on github dont steal pussy
              //tin2.stats.transport.outboundBitrateEstimate = 600
              //made by tinguy1 on github dont steal pussy
              //tin2.stats.transport.localAddress = 'T1Nstereo is the best'
              if (tin.audioEncoder) {
                if (tin.audioEncoder.channels) {
                  tin.audioEncoder.channels = channelstereoornot
                }
                if (tin.audioEncoder.freq) {
                  tin.audioEncoder.freq = samplerate
                }
                if (tin.audioEncoder.rate) {
                  tin.audioEncoder.rate = bitrate
                }
                if (tin.audioEncoder.type) {
                  tin.audioEncoder.type = 120
                } //dont change or it wont work - tinguy1
                if (tin.audioEncoder.pacsize) {
                  tin.audioEncoder.pacsize = 960 //default is 960
                }
                if (tin.audioEncoder.name) {
                  tin.audioEncoder.name = 'opus'
                } //dont change or it wont work - tinguy1
              }
              //made by tinguy1 on github dont steal pussy
              //decoders for customization not really neededed - T1N#0001
              if (tin.audioDecoders) {
                if (tin.audioDecoders.freq) {
                  tin.audioDecoders.freq = samplerate
                }
                if (tin.audioDecoders.channels) {
                  tin.audioDecoders.channels = decoderstereo
                }
                if (tin.audioDecoders.name) {
                  tin.audioDecoders.name = 'opus'
                } //dont know why you would want to change this and dont change or it wont work - tinguy1
                if (tin.audioDecoders.type) {
                  tin.audioDecoders.type = 120
                }
              } // dont change or it wont work - tinguy1
              //made by tinguy1 on github dont steal pussy
              if (tin.fec) {
                tin.fec = false
              }
              if (tin.encodingVoiceBitRate) {
                tin.encodingVoiceBitRate = bitrate
              } //made by tinguy1 on github dont steal pussy
              if (tin.attenuationFactor) {
                tin.attenuationFactor = attenuation1
                tin2.attenuationFactor = attenuation1
              } //made by tinguy1 on github dont steal pussy
              if (tin.attenuation) {
                tin.attenuation = attenuation2
              } //made by tinguy1 on github dont steal pussy
              if (tin.prioritySpeakerDucking) {
                tin.prioritySpeakerDucking = pbypass
              } //made by tinguy1 on github dont steal pussy
              if (tin.callBitRate) {
                tin.callBitRate = channelmaxbitrate
              } //made by tinguy1 on github dont steal pussy
              if (tin.callMinBitRate) {
                tin.callMinBitRate = channelmaxbitrate
              } //made by tinguy1 on github dont steal pussy
              if (tin.encodingVideoMinBitRate) {
                tin.encodingVideoMinBitRate = channelmaxbitrate
              } //made by tinguy1 on github dont steal pussy
              if (tin.encodingVideoMaxBitRate) {
                tin.encodingVideoMaxBitRate = channelmaxbitrate
              } //made by tinguy1 on github dont steal pussy
              if (tin.encodingVideoBitRate) {
                tin.encodingVideoBitRate = videobitrate
              } //made by tinguy1 on github dont steal pussy
              tin3.bitrateMin = streambitrate
              tin3.bitrateMax = streambitrate
              tin3.bitrateTarget = streambitrate
              //made by tinguy1 on github dont steal pussy
              if (tin.streamParameters) {
                tin.streamParameters[0].maxBitrate = streambitrate
              } //made by tinguy1 on github dont steal pussy
              if (consolelogs === true) {
                console.log(`${config.info.name} what tin is`, tin)
                console.log(`${config.info.name} what tin2 is`, tin2)
              } //made by tinguy1 on github dont steal pussy
              setTINOptions.call(tin2, tin,)
            }  //made by tinguy1 on github dont steal pussy
            if (!this.settingsWarning()) {
              if (this.settings.enableToasts) {
                Toasts.show(
                  `T1Nstereo- ${vctoast}  `,
                )
              } //made by tinguy1 on github dont steal pussy
            }
            return ret
          }
          onStop() {
            Patcher.unpatchAll()
            //Dispatcher.unsubscribe("VOICE_CHANNEL_SELECT", this.PutButton);
          }
          getSettingsPanel() {
            const panel = this.buildSettingsPanel()
            return panel.getElement()
          }
        }
      }
      return plugin(Plugin, Api)
    })(global.ZeresPluginLibrary.buildPlugin(config))
})()
/*@end@*/
