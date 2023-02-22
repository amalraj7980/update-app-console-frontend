
import logo from './logo.svg';
import './App.css';
import reactCSS from 'reactcss'
import React, { useState } from "react";
import { SketchPicker, ChromePicker } from 'react-color';
// import fs from 'fs';
// import path from 'path';

// https://casesandberg.github.io/react-color/

function App() {
  const appIconInputRef = React.useRef();
  const appLogoInputRef = React.useRef();
  const appLoginLogoInputRef = React.useRef();
  const appCaptchaIconInputRef = React.useRef();
  const appSplashImageInputRef = React.useRef();
  const appChatBackgroundInputRef = React.useRef();
  const accountBalanceIconInputRef = React.useRef();
  const accountStatementIconInputRef = React.useRef();
  const atmCardBlockIconInputRef = React.useRef();
  const fundTransferIconInputRef = React.useRef();
  const findIfscCodeIconInputRef = React.useRef();

  /**App assects states */
  const [appIcon, setAppIcon] = useState(require('./assets/feddy.png'));
  const [appLogo, setAppLogo] = useState(require('./assets/feddyFace.png'));
  const [appLoginLogo, setappLoginLogo] = useState(require('./assets/feddyman.png'));//
  const [appCaptchaIcon, setAppCaptchaIcon] = useState(require('./assets/captcha.jpg'));//
  const [appSplashImage, setAppSplashImage] = useState(require('./assets/splash.png'));
  const [appChatBackground, setAppChatBackground] = useState(require('./assets/bg.png'));//1

  const [accountBalanceIcon, setAccountBalanceIcon] = useState(require('./assets/acc_balance.png'));
  const [accountStatementIcon, setAccountStatementIcon] = useState(require('./assets/acc_statements.png'));
  const [atmCardBlockIcon, setAtmCardBlockIcon] = useState(require('./assets/block_card.png'));
  const [fundTransferIcon, setFundTransferIcon] = useState(require('./assets/fransfer_found.png'));
  const [findIfscCodeIcon, setFindIfscCodeIcon] = useState(require('./assets/IFSC_find.png'));

  function dataURLtoFile(dataurl, filename) {
    console.log("appChatBackground ------------------------------->", appChatBackground)
    var arr = dataurl.split(',')
    console.log("arr ================>", arr)
    var mime = arr[0].match(/:(.*?);/)[1]
    var bstr = atob(arr[1])
    var n = bstr.length
    var u8arr = new Uint8Array(n);

    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }

    return new File([u8arr], filename, { type: mime });
  }

  /**App assects functions  start*/
  function handleChangeAppIcon(e) {
    console.log(e.target.files);
    const img = {
      selected: true,
      preview: URL.createObjectURL(e.target.files[0]),
      data: e.target.files[0],
    }
    setAppIcon(img);
  }

  function handleChangeAppLogo(e) {
    console.log(e.target.files);
    const img = {
      selected: true,
      preview: URL.createObjectURL(e.target.files[0]),
      data: e.target.files[0],
    }
    setAppLogo(img);
  }
  function handleChangeAppLoginLogo(e) {
    console.log(e.target.files);
    const img = {
      selected: true,
      preview: URL.createObjectURL(e.target.files[0]),
      data: e.target.files[0],
    }
    setappLoginLogo(img);
  }
  function handleChangeAppCaptcha(e) {
    console.log(e.target.files);
    const img = {
      selected: true,
      preview: URL.createObjectURL(e.target.files[0]),
      data: e.target.files[0],
    }
    setAppCaptchaIcon(img);
  }

  function handleChangeAppSplash(e) {
    console.log(e.target.files);
    const img = {
      selected: true,
      preview: URL.createObjectURL(e.target.files[0]),
      data: e.target.files[0],
    }
    setAppSplashImage(img);
  }
  function handleChangeChatBackground(e) {
    console.log(e.target.files);
    const img = {
      selected: true,
      preview: URL.createObjectURL(e.target.files[0]),
      data: e.target.files[0],
    }
    setAppChatBackground(img);
  }

  /**Home menu icons */
  function handleChangeAccountBalance(e) {
    console.log(e.target.files);
    const img = {
      selected: true,
      preview: URL.createObjectURL(e.target.files[0]),
      data: e.target.files[0],
    }
    setAccountBalanceIcon(img);
  }
  function handleChangeAccountStatements(e) {
    console.log(e.target.files);
    const img = {
      selected: true,
      preview: URL.createObjectURL(e.target.files[0]),
      data: e.target.files[0],
    }
    setAccountStatementIcon(img);
  }
  function handleChangeBlockCard(e) {
    console.log(e.target.files);
    const img = {
      selected: true,
      preview: URL.createObjectURL(e.target.files[0]),
      data: e.target.files[0],
    }
    setAtmCardBlockIcon(img);
  }

  function handleChangeFundTransfer(e) {
    console.log(e.target.files);
    const img = {
      selected: true,
      preview: URL.createObjectURL(e.target.files[0]),
      data: e.target.files[0],
    }
    setFundTransferIcon(img);
  }
  function handleChangeFindIFSC(e) {
    console.log(e.target.files);
    const img = {
      selected: true,
      preview: URL.createObjectURL(e.target.files[0]),
      data: e.target.files[0],
    }
    setFindIfscCodeIcon(img);
  }
  /**App assects functions  end*/

  const [primary, setPrimary] = React.useState('#c4161c');
  const [secondary, setSecondary] = React.useState('#F5F5F5');
  const [black, setBlack] = React.useState('black');
  const [white, setWhite] = React.useState('#FFFFFF');
  const [chatInputBorder, setChatInputBorder] = React.useState('#F1F1F1');
  const [textInputBorder, setTextInputBorder] = React.useState('#E7E7E7');
  const [captchaBackground, setCaptchaBackground] = React.useState('#F9F9F9');
  const [captchaBorder, setCaptchaBorder] = React.useState('#DADADA');
  const [inputTextColor, setInputTextColor] = React.useState('#848485');
  const [loaderBackground, setLoaderBackground] = React.useState('#00000040');

  const [primaryColorPicker, setPrimaryColorPicker] = useState(false);
  const [secondaryColorPicker, setSecondaryColorPicker] = useState(false);
  const [blackColorPicker, setBlackColorPicker] = useState(false);
  const [whiteColorPicker, setWhiteColorPicker] = useState(false);
  const [chatInputBorderColorPicker, setChatInputBorderColorPicker] = useState(false);
  const [textInputBorderColorPicker, setTextInputBorderColorPicker] = useState(false);
  const [captchaBackgroundColorPicker, setCaptchaBackgroundColorPicker] = useState(false);
  const [captchaBorderColorPicker, setCaptchaBorderColorPicker] = useState(false);
  const [inputTextColorPicker, setInputTextColorPicker] = useState(false);
  const [loaderBackgroundColorPicker, setLoaderBackgroundColorPicker] = useState(false);



  const handleChangePrimary = (color) => {
    setPrimary(color.hex)
  };

  const handleChangeSecondary = (color) => {
    setSecondary(color.hex)
  };
  const handleChangeBlack = (color) => {
    setBlack(color.hex)
  };
  const handleChangewhite = (color) => {
    setWhite(color.hex)
  };
  const handleChangechatInputBorder = (color) => {
    setChatInputBorder(color.hex)
  }
  const handleTextInputBorder = (color) => {
    setTextInputBorder(color.hex)

  }
  const handleCaptchaBackground = (color) => {
    setCaptchaBackground(color.hex)
  }
  const handleCaptchaBorder = (color) => {
    setCaptchaBorder(color.hex)
  }
  const handleChangeInputTextColor = (color) => {
    setInputTextColor(color.hex)
  }
  const handleChangeloaderBackground = (color) => {
    setLoaderBackground(color.hex)
  }
  const primaryHandleClick = (e) => {
    console.log(e.target.className)
    setPrimaryColorPicker(true)
  }
  const primaryHandleClose = (e) => {
    setPrimaryColorPicker(false)

  };

  const handleChangeFontColor = () => {
    console.log("called")
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        primary: primary,
        secondary: secondary,
        black: black,
        white: white,
        chatInputBorder: chatInputBorder,
        textInputBorder: textInputBorder,
        captchaBackground: captchaBackground,
        captchaBorder: captchaBorder,
        inputTextColor: inputTextColor,
        loaderBackground: loaderBackground
      })
    };
    fetch('http://localhost:8000/change/fontcolour', requestOptions)
      .then(response => response.json())
  }


  const handleChangeAssectsImages = async (e) => {
    e.preventDefault();
    let headers = {};
    console.log(appIcon.data, 'appIcon data');

    console.log(appIcon, 'appIcon');
    console.log("applog ------------->", appLogo)
    const formData = new FormData();

    if (appIcon.selected) {
      console.log("called if==============", appIcon.data)
      formData.append('uploaded_file', appIcon.data);
      formData.append('name', "appIcon")
    } else {
      const defaultFile = dataURLtoFile(appIcon, 'feddy.png')
      formData.append('uploaded_file', defaultFile);
      formData.append('name', "appIcon")
    }

    if (appLogo.selected) {
      formData.append('uploaded_file', appLogo.data);
      formData.append('name', "appLogo")
    } else {
      const defaultFile = dataURLtoFile(appLogo, 'feddyFace.png')
      formData.append('uploaded_file', defaultFile);
      formData.append('name', "appLogo")
    }

    if (appLoginLogo.selected) {
      formData.append('uploaded_file', appLoginLogo.data);
      formData.append('name', "appLoginLogo")
    } else {
      headers['x-appLoginLogo'] = JSON.stringify({
        appLoginLogo: `require('../assets/feddyman.png')`
      })
    }

    // if (appCaptchaIcon.selected) {
    //   formData.append('uploaded_file', appCaptchaIcon.data);
    //   formData.append('name', "appCaptchaIcon")
    // } else {
    //   const defaultFile = dataURLtoFile(appCaptchaIcon, 'captcha.jpg')
    //   formData.append('uploaded_file', defaultFile);
    //   formData.append('name', "appCaptchaIcon")
    // }

    if (appSplashImage.selected) {
      formData.append('uploaded_file', appSplashImage.data);
      formData.append('name', "appSplashImage")
    } else {
      const defaultFile = dataURLtoFile(appSplashImage, 'splash.png')
      formData.append('uploaded_file', defaultFile);
      formData.append('name', "appSplashImage")
    }

    if (appChatBackground.selected) {
      formData.append('uploaded_file', appChatBackground.data);
      formData.append('name', "appChatBackground")
    } else {
      // const defaultFile = dataURLtoFile(appChatBackground, 'bg.png')
      // formData.append('uploaded_file', defaultFile);
      // formData.append('name', "appChatBackground")
      headers['x-appChatBackground'] = JSON.stringify({
        appChatBackground: `require('../assets/bg.png')`
      })
    }

    if (accountBalanceIcon.selected) {
      formData.append('uploaded_file', accountBalanceIcon.data);
      formData.append('name', "accountBalanceIcon")
    } else {
      const defaultFile = dataURLtoFile(accountBalanceIcon, 'acc_balance.png')
      formData.append('uploaded_file', defaultFile);
      formData.append('name', "accountBalanceIcon")
    }

    if (accountStatementIcon.selected) {
      formData.append('uploaded_file', accountStatementIcon.data);
      formData.append('name', "accountStatementIcon")
    } else {
      const defaultFile = dataURLtoFile(accountStatementIcon, 'acc_statement.png')
      formData.append('uploaded_file', defaultFile);
      formData.append('name', "accountStatementIcon")
    }

    if (atmCardBlockIcon.selected) {
      formData.append('uploaded_file', atmCardBlockIcon.data);
      formData.append('name', "atmCardBlockIcon")
    } else {
      const defaultFile = dataURLtoFile(atmCardBlockIcon, 'block_card.png')
      formData.append('uploaded_file', defaultFile);
      formData.append('name', "atmCardBlockIcon")
    }

    if (fundTransferIcon.selected) {
      formData.append('uploaded_file', fundTransferIcon.data);
      formData.append('name', "fundTransferIcon")
    } else {
      const defaultFile = dataURLtoFile(fundTransferIcon, 'fransfer_found.png')
      formData.append('uploaded_file', defaultFile);
      formData.append('name', "fundTransferIcon")
    }

    if (findIfscCodeIcon.selected) {
      formData.append('uploaded_file', findIfscCodeIcon.data);
      formData.append('name', "findIfscCodeIcon")
    } else {
      const defaultFile = dataURLtoFile(findIfscCodeIcon, 'IFSC_find.png')
      formData.append('uploaded_file', defaultFile);
      formData.append('name', "findIfscCodeIcon")
    }


    const response = await fetch('http://localhost:8000/upload/images', {
      method: 'POST',
      headers,
      body: formData
    });

    if (response.ok) {
      // Handle successful image upload
    } else {
      // Handle failed image upload
    }
  };
  // const handleChangeAssectsImages = () => {
  //   console.log('haiii', appIcon)
  //   const h = {}; //headers
  //   let data = new FormData();
  //   data.append('uploaded_file', appIcon);

  //   // data.append('accountBalanceIcon', accountBalanceIcon);
  //   // data.append('accountStatementIcon', accountStatementIcon);
  //   // data.append('atmCardBlockIcon', atmCardBlockIcon);
  //   // data.append('fundTransferIcon', fundTransferIcon);
  //   // data.append('findIfscCodeIcon', findIfscCodeIcon);
  //   // data.append('appIcon', appIcon);
  //   // data.append('appLogo', appLogo);
  //   // data.append('appLoginLogo', appLoginLogo);
  //   // data.append('appCaptchaIcon', appCaptchaIcon);
  //   // data.append('appSplashImage', appSplashImage);
  //   // data.append('appChatBackground', appChatBackground);

  //   console.log(appIconFileName ?? accountBalanceIcon, 'appIconFileName');
  //   console.log(appLogoFileName, 'appLogoFileName');
  //   console.log(appCaptchaIconFileName, 'appCaptchaIconFileName')
  //   console.log(appLoginLogoFileName, 'appLoginLogoFileName')
  //   console.log(appChatBackgroundFileName, 'appChatBackgroundFileName')
  //   console.log(appSplashImageFileName, 'appSplashImageFileName')
  //   console.log(accountBalanceIconFileName, 'appLogoFileName')
  //   console.log(accountStatementIconFileName, 'appLogoFileName')
  //   console.log(atmCardBlockIconFileName, 'atmCardBlockIconFileName')
  //   console.log(fundTransferIconFileName, 'fundTransferIconFileName')
  //   console.log(findIfscCodeIconFileName, 'findIfscCodeIconFileName')

  //   h.Accept = 'application/json'; //if you expect JSON response
  //   fetch('http://localhost:8000/upload/images', {
  //     method: 'POST',
  //     headers: h,

  //     body: JSON.stringify({
  //       'uploaded_file': appIcon
  //     })
  //   }).then(response => {

  //     console.log(response)
  //   }).catch(err => {
  //     console.log(err)
  //   });

  // }
  const styles = reactCSS({
    'default': {
      colorPrimary: {
        width: '54px',
        height: '25px',
        borderRadius: '2px',
        background: primary,
      },
      colorSecondary: {
        width: '54px',
        height: '25px',
        borderRadius: '2px',
        background: secondary,
      },
      colorBlack: {
        width: '54px',
        height: '25px',
        borderRadius: '2px',
        background: black,
      },
      colorWhite: {
        width: '54px',
        height: '25px',
        borderRadius: '2px',
        background: white,
      },
      colorChatInputBorder: {
        width: '54px',
        height: '25px',
        borderRadius: '2px',
        background: chatInputBorder,
      },
      colorTextInputBorder: {
        width: '54px',
        height: '25px',
        borderRadius: '2px',
        background: textInputBorder,
      },

      colorcaptchaBorder: {
        width: '54px',
        height: '25px',
        borderRadius: '2px',
        background: captchaBorder,
      },
      colorcaptchaBackground: {
        width: '54px',
        height: '25px',
        borderRadius: '2px',
        background: captchaBackground,
      },

      colorInputTextColor: {
        width: '54px',
        height: '25px',
        borderRadius: '2px',
        background: inputTextColor,
      },
      colorLoaderBackground: {
        width: '54px',
        height: '25px',
        borderRadius: '2px',
        background: loaderBackground,
      },
      swatch: {
        padding: '5px',
        background: '#fff',
        borderRadius: '1px',
        boxShadow: '0 0 0 1px rgba(0,0,0,.1)',
        display: 'inline-block',
        cursor: 'pointer',
      },
      popover: {
        right: 70,
        top: '31%',
        position: 'absolute',
        zIndex: 2,
      },
      cover: {
        position: 'fixed',
        top: '0px',
        right: '0px',
        bottom: '0px',
        left: '0px',
      },
    },
  });
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed" style={{ position: 'fixed', width: '100%', backgroundColor: '#e3f2fd' }} >
        <a className="navbar-brand" href="#">Chatbot</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" href="#">Update app dependency console</a>
            </li>
          </ul>
        </div>
      </nav>
      <div className="App">
        <h2>App dependency console</h2>
        {/* App image uploads ui section start */}
        <div style={{ display: "flex", flexDirection: "row", }}>
          <form>
            <div>
              <div className='image-div'>
                <label className='labels'>App icon :</label>
                <input className='input' ref={appIconInputRef} type="file" onChange={handleChangeAppIcon} accept="image/png, image/jpeg" />
                <img src={appIcon.preview ?? appIcon} style={{ height: 60, width: 60 }} />
              </div>
              <div className='image-div'>
                <label className='labels'>App logo :</label>
                <input className='input' ref={appLogoInputRef} type="file" onChange={handleChangeAppLogo} accept="image/png, image/jpeg" />
                <img src={appLogo.preview ?? appLogo} style={{ height: 60, width: 60 }} />
              </div>
              <div className='image-div'>
                <label className='labels' >App login logo :</label>
                <input className='input' ref={appLoginLogoInputRef} type="file" onChange={handleChangeAppLoginLogo} accept="image/png, image/jpeg" />
                <img src={appLoginLogo.preview ?? appLoginLogo} style={{ height: 60, width: 60 }} />
              </div>
              <div className='image-div'>
                <label className='labels'>Captcha image :</label>
                <input className='input' ref={appCaptchaIconInputRef} disabled type="file" onChange={handleChangeAppCaptcha} accept="image/png, image/jpeg" />
                <img src={appCaptchaIcon} style={{ height: 60, width: 60 }} />
              </div>
              <div className='image-div'>
                <label className='labels'>App Splash image :</label>
                <input className='input' ref={appSplashImageInputRef} type="file" onChange={handleChangeAppSplash} accept="image/png, image/jpeg" />
                <img src={appSplashImage.preview ?? appSplashImage} style={{ height: 60, width: 60 }} />
              </div>
              <div className='image-div'>
                <label className='labels' >Chat background :</label>
                <input className='input' ref={appChatBackgroundInputRef} type="file" onChange={handleChangeChatBackground} accept="image/png, image/jpeg" />
                <img src={appChatBackground.preview ?? appChatBackground} style={{ height: 60, width: 60 }} />
              </div>
              {/* Home menu image uploads ui section start */}
              <div className='image-div'>
                <label className='labels'>Account balance icon :</label>
                <input className='input' ref={accountBalanceIconInputRef} type="file" onChange={handleChangeAccountBalance} accept="image/png, image/jpeg" />
                <img src={accountBalanceIcon.preview ?? accountBalanceIcon} style={{ height: 60, width: 60 }} />
              </div>
              <div className='image-div'>
                <label className='labels' >Account statement icon :</label>
                <input className='input' ref={accountStatementIconInputRef} type="file" onChange={handleChangeAccountStatements} accept="image/png, image/jpeg" />
                <img src={accountStatementIcon.preview ?? accountStatementIcon} style={{ height: 60, width: 60 }} />
              </div>
              <div className='image-div'>
                <label className='labels'>Block debit card icon :</label>
                <input className='input' ref={atmCardBlockIconInputRef} type="file" onChange={handleChangeBlockCard} accept="image/png, image/jpeg" />
                <img src={atmCardBlockIcon.preview ?? atmCardBlockIcon} style={{ height: 60, width: 60 }} />
              </div>
              <div className='image-div'>
                <label className='labels'>fund TransferIcon :</label>
                <input className='input' ref={fundTransferIconInputRef} type="file" onChange={handleChangeFundTransfer} accept="image/png, image/jpeg" />
                <img src={fundTransferIcon.preview ?? fundTransferIcon} style={{ height: 60, width: 60 }} />
              </div>
              <div className='image-div'>
                <label className='labels' >Find ifsc code icon :</label>
                <input className='input' ref={findIfscCodeIconInputRef} type="file" onChange={handleChangeFindIFSC} accept="image/png, image/jpeg" />
                <img src={findIfscCodeIcon.preview ?? findIfscCodeIcon} style={{ height: 60, width: 60 }} />
              </div>
              <button type="button"
                onClick={handleChangeAssectsImages}
                className="btn btn-secondary btn-lg btn-block"
                style={{ marginBottom: 30 }}>Apply Image Changes</button>
              {/* Home menu image uploads ui section start */}
            </div>
          </form>

          {/* App image uploads ui section end */}

          <div>
            <div className='image-div'>
              <label className='labels'>Primary colour :</label>
              <div style={styles.swatch} onClick={(e) => primaryHandleClick(e)}>
                <div className='primary' style={styles.colorPrimary} />
              </div>
              <label style={{ height: 60, width: 60 }}></label>
              {primaryColorPicker ? <div style={styles.popover}>
                <div style={styles.cover} onClick={(e) => primaryHandleClose(e)} />
                <SketchPicker color={primary} onChange={handleChangePrimary} />
              </div> : null}
            </div>

            <div className='image-div'>
              <label className='labels'>Secondary colour :</label>
              <div style={styles.swatch} onClick={() => setSecondaryColorPicker(true)}>
                <div className='secondary' style={styles.colorSecondary} />
              </div>
              <label style={{ height: 60, width: 60 }}></label>
              {secondaryColorPicker ? <div style={styles.popover}>
                <div style={styles.cover} onClick={() => setSecondaryColorPicker(false)} />
                <SketchPicker color={secondary} onChange={handleChangeSecondary} />
              </div> : null}
            </div>

            <div className='image-div'>
              <label className='labels'>Black colour :</label>
              <div style={styles.swatch} onClick={() => setBlackColorPicker(true)}>
                <div className='black' style={styles.colorBlack} />
              </div>
              <label style={{ height: 60, width: 60 }}></label>
              {blackColorPicker ? <div style={styles.popover}>
                <div style={styles.cover} onClick={() => setBlackColorPicker(false)} />
                <SketchPicker color={black} onChange={handleChangeBlack} />
              </div> : null}
            </div>

            <div className='image-div'>
              <label className='labels'>white colour :</label>
              <div style={styles.swatch} onClick={() => setWhiteColorPicker(true)}>
                <div className='white' style={styles.colorWhite} />
              </div>
              <label style={{ height: 60, width: 60 }}></label>
              {whiteColorPicker ? <div style={styles.popover}>
                <div style={styles.cover} onClick={() => setWhiteColorPicker(false)} />
                <SketchPicker color={white} onChange={handleChangewhite} />
              </div> : null}
            </div>


            <div className='image-div'>
              <label className='labels'>Chat input border colour :</label>
              <div style={styles.swatch} onClick={() => setChatInputBorderColorPicker(true)}>
                <div className='chat-input-border' style={styles.colorChatInputBorder} />
              </div>
              <label style={{ height: 60, width: 60 }}></label>
              {chatInputBorderColorPicker ? <div style={styles.popover}>
                <div style={styles.cover} onClick={() => setChatInputBorderColorPicker(false)} />
                <SketchPicker color={chatInputBorder} onChange={handleChangechatInputBorder} />
              </div> : null}
            </div>


            <div className='image-div'>
              <label className='labels'>Input text colour :</label>
              <div style={styles.swatch} onClick={() => setInputTextColorPicker(true)}>
                <div className='input-text-color' style={styles.colorInputTextColor} />
              </div>
              <label style={{ height: 60, width: 60 }}></label>
              {inputTextColorPicker ? <div style={styles.popover}>
                <div style={styles.cover} onClick={() => setInputTextColorPicker(false)} />
                <SketchPicker color={inputTextColor} onChange={handleChangeInputTextColor} />
              </div> : null}
            </div>

            <div className='image-div'>
              <label className='labels'>Text input border colour :</label>
              <div style={styles.swatch} onClick={() => setTextInputBorderColorPicker(true)}>
                <div className='Text-input-border' style={styles.colorTextInputBorder} />
              </div>
              <label style={{ height: 60, width: 60 }}></label>
              {textInputBorderColorPicker ? <div style={styles.popover}>
                <div style={styles.cover} onClick={() => setTextInputBorderColorPicker(false)} />
                <SketchPicker color={textInputBorder} onChange={handleTextInputBorder} />
              </div> : null}
            </div>

            <div className='image-div'>
              <label className='labels'>loader background colour :</label>
              <div style={styles.swatch} onClick={() => setLoaderBackgroundColorPicker(true)}>
                <div className='loader-background-color' style={styles.colorLoaderBackground} />
              </div>
              <label style={{ height: 60, width: 60 }}></label>
              {loaderBackgroundColorPicker ? <div style={styles.popover}>
                <div style={styles.cover} onClick={() => setLoaderBackgroundColorPicker(false)} />
                <SketchPicker color={loaderBackground} onChange={handleChangeloaderBackground} />
              </div> : null}
            </div>





            <button type="button"
              className="btn btn-secondary btn-lg btn-block"
              style={{ marginBottom: 30 }}
              onClick={handleChangeFontColor}>Apply Colour Changes</button>
          </div>
        </div>
      </div>
    </>);


}
export default App;






// import React, { useState } from 'react';

// export default function App() {
//   const [image, setImage] = useState(null);

//   const handleImageChange = (e) => {
//     setImage(e.target.files[0]);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const formData = new FormData();
//     formData.append('uploaded_file', image);
//     console.log(formData)

//     const response = await fetch('http://localhost:8000/upload/images', {
//       method: 'POST',
//       body: formData
//     });

//     if (response.ok) {
//       // Handle successful image upload
//     } else {
//       // Handle failed image upload
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input type="file" onChange={handleImageChange} />
//       <button type="submit">Upload Image</button>
//     </form>
//   );
// }
