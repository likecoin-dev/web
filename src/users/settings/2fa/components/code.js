import React, { PureComponent } from 'react';
import qrcode from 'qrcode-generator';

class Code extends PureComponent {
  constructor(){
    super(...arguments);
    this.state = {
      url: ''
    }
  }
  componentDidMount() {
    const { url } = this.props;
    let qrcodeLay = this.refs.qrcode;
    let typeNumber = 4;
    let errorCorrectionLevel = 'L';
    let qr = qrcode(typeNumber, errorCorrectionLevel);
    qr.addData(url);
    qr.make();
    qrcodeLay.innerHTML = qr.createImgTag(5);
    this.setState({url: qrcodeLay.childNodes[0].src})
  }

  render() {
    return (
      <div className="code">
        <div  ref='qrcode' style={{textAlign: 'center'}}>

        </div>
        <div style={{marginTop: '18px', textAlign: 'center'}}>
          <a href={this.state.url} download="qrcode.gif" className="settings__form-item__button">Save QR code</a>
        </div>
      </div>
    )
  }
}

export default Code;