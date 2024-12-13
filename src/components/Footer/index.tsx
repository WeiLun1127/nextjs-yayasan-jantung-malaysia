'use client'; 
import React, { useState } from 'react';
import styles from './styles.module.css';
import { FaPrint, FaFacebookF, FaGoogle, FaTwitter, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  const [showEmailDialog, setShowEmailDialog] = useState(false);

  const openEmailDialog = () => {
    setShowEmailDialog(true);
  };

  const closeEmailDialog = () => {
    setShowEmailDialog(false);
  };

  const handleEmailChoice = (url: string | URL | undefined) => {
    window.open(url, '_blank');
    closeEmailDialog();
  };

  const year = new Date().getFullYear();
  return (
    <footer className={styles.footer}>
      <div className={styles.socialIcons}>
        {/* Print Icon */}
        <a href="http://www.yjm.org.my/main_print.cfm?" target="_blank" rel="noopener noreferrer">
          <FaPrint size={20} />
        </a>

        {/* Email Icon */}
        <a href="#" onClick={openEmailDialog}>
          <FaEnvelope size={20} />
        </a>

        {/* Facebook Icon */}
        <a
          href="https://ws.sharethis.com/api/sharer.php?sessionID=1734082500346.67419&hostname=www.yjm.org.my&location=%252Findex.cfm&product=widget&stid=&fcmp=false&fcmpv2=false&publisher=4dc96495-8308-4b46-877b-8a2a83ffc3f6&refDomain=www.yjm.org.my&refQuery=index.cfm%253F%2526menuid%253D17&pview_had_consent=false&pview_url=https%3A%2F%2Fl.sharethis.com%2Flog%3Fevent%3Dwidget%26sessionID%3D1734082500346.67419%26hostname%3Dwww.yjm.org.my%26location%3D%252Findex.cfm%26product%3Dwidget%26fcmp%3Dfalse%26fcmpv2%3Dfalse%26publisher%3D4dc96495-8308-4b46-877b-8a2a83ffc3f6%26refDomain%3Dwww.yjm.org.my%26refQuery%3Dindex.cfm%253F%2526menuid%253D17%26pview_had_consent%3Dfalse%26pview_url%3Dhttps%3A%2F%2Fl.sharethis.com%2Fpview%3Fevent%3Dpview%26version%3Dbuttons.js%26lang%3Den%26sessionID%3D1734082500346.67419%26hostname%3Dwww.yjm.org.my%26location%3D%252Findex.cfm%26product%3Dwidget%26fcmp%3Dfalse%26fcmpv2%3Dfalse%26publisher%3Dur.00000000-0000-0000-0000-000000000000%26refDomain%3Dwww.yjm.org.my%26refQuery%3Dindex.cfm%253F%2526menuid%253D17%26url%3Dhttp%253A%252F%252Fwww.yjm.org.my%252Findex.cfm%26title%3DYayasan%2520Jantung%2520Malaysia%2520-%2520Welcome%26sop%3Dfalse%26description%3DYayasan%2520Jantung%2520Malaysia%2520(YJM)%2520-%2520Heart%2520Foundation%2520of%2520Malaysia%26shareHash%3Dsthash.5PKwWXSq.fnjm%26url%3Dhttp%253A%252F%252Fwww.yjm.org.my%252Findex.cfm%26buttonType%3Dchicklet%26destination%3Dfacebook&shareHash=sthash.5PKwWXSq.fnjm"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebookF size={20} />
        </a>

        {/* Google Icon */}
        <a
          href="https://ws.sharethis.com/api/sharer.php?sessionID=1734082500346.67419&hostname=www.yjm.org.my&location=%252Findex.cfm&product=widget&stid=&fcmp=false&fcmpv2=false&publisher=4dc96495-8308-4b46-877b-8a2a83ffc3f6&refDomain=www.yjm.org.my&refQuery=index.cfm%253F%2526menuid%253D17&pview_had_consent=false&pview_url=https%3A%2F%2Fl.sharethis.com%2Flog%3Fevent%3Dwidget%26sessionID%3D1734082500346.67419%26hostname%3Dwww.yjm.org.my%26location%3D%252Findex.cfm%26product%3Dwidget%26fcmp%3Dfalse%26fcmpv2%3Dfalse%26publisher%3D4dc96495-8308-4b46-877b-8a2a83ffc3f6%26refDomain%3Dwww.yjm.org.my%26refQuery%3Dindex.cfm%253F%2526menuid%253D17%26pview_had_consent%3Dfalse%26pview_url%3Dhttps%3A%2F%2Fl.sharethis.com%2Fpview%3Fevent%3Dpview%26version%3Dbuttons.js%26lang%3Den%26sessionID%3D1734082500346.67419%26hostname%3Dwww.yjm.org.my%26location%3D%252Findex.cfm%26product%3Dwidget%26fcmp%3Dfalse%26fcmpv2%3Dfalse%26publisher%3Dur.00000000-0000-0000-0000-000000000000%26refDomain%3Dwww.yjm.org.my%26refQuery%3Dindex.cfm%253F%2526menuid%253D17%26url%3Dhttp%253A%252F%252Fwww.yjm.org.my%252Findex.cfm%26title%3DYayasan%2520Jantung%2520Malaysia%2520-%2520Welcome%26sop%3Dfalse%26description%3DYayasan%2520Jantung%2520Malaysia%2520(YJM)%2520-%2520Heart%2520Foundation%2520of%2520Malaysia%26shareHash%3Dsthash.5PKwWXSq.fnjm%26url%3Dhttp%253A%252F%252Fwww.yjm.org.my%252Findex.cfm%26buttonType%3Dchicklet%26destination%3Dgoogleplus&source=chicklet4x"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGoogle size={20} />
        </a>

        {/* Twitter Icon */}
        <a
          href="https://ws.sharethis.com/api/sharer.php?sessionID=1734082500346.67419&hostname=www.yjm.org.my&location=%252Findex.cfm&product=widget&stid=&fcmp=false&fcmpv2=false&publisher=4dc96495-8308-4b46-877b-8a2a83ffc3f6&refDomain=www.yjm.org.my&refQuery=index.cfm%253F%2526menuid%253D17&pview_had_consent=false&pview_url=https%3A%2F%2Fl.sharethis.com%2Flog%3Fevent%3Dwidget%26sessionID%3D1734082500346.67419%26hostname%3Dwww.yjm.org.my%26location%3D%252Findex.cfm%26product%3Dwidget%26fcmp%3Dfalse%26fcmpv2%3Dfalse%26publisher%3D4dc96495-8308-4b46-877b-8a2a83ffc3f6%26refDomain%3Dwww.yjm.org.my%26refQuery%3Dindex.cfm%253F%2526menuid%253D17%26pview_had_consent%3Dfalse%26pview_url%3Dhttps%3A%2F%2Fl.sharethis.com%2Fpview%3Fevent%3Dpview%26version%3Dbuttons.js%26lang%3Den%26sessionID%3D1734082500346.67419%26hostname%3Dwww.yjm.org.my%26location%3D%252Findex.cfm%26product%3Dwidget%26fcmp%3Dfalse%26fcmpv2%3Dfalse%26publisher%3Dur.00000000-0000-0000-0000-000000000000%26refDomain%3Dwww.yjm.org.my%26refQuery%3Dindex.cfm%253F%2526menuid%253D17%26url%3Dhttp%253A%252F%252Fwww.yjm.org.my%252Findex.cfm%26title%3DYayasan%2520Jantung%2520Malaysia%2520-%2520Welcome%26sop%3Dfalse%26description%3DYayasan%2520Jantung%2520Malaysia%2520(YJM)%2520-%2520Heart%2520Foundation%2520of%2520Malaysia%26shareHash%3Dsthash.5PKwWXSq.fnjm"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTwitter size={20} />
        </a>
      </div>

      {/* Email Dialog */}
      {showEmailDialog && (
        <div className={styles.dialog}>
          <div className={styles.dialogContent}>
            <h3>Select Email Service</h3>
            <button onClick={() => handleEmailChoice("https://mail.google.com/mail/u/0/?su=Yayasan+Jantung+Malaysia+-+Welcome&to&body=https://shar.es/agY34p%0D%0A%0D%0AThis+message+was+sent+using+ShareThis+(https://www.sharethis.com)&fs=1&tf=cm")}>Gmail</button>
            <button onClick={() => handleEmailChoice("https://mail.yahoo.com/d/compose/4200174797?mrdparam=vlwAKwcfY_fMVRHBHW5OMQIHG5FkAb8edwrwrMS7o1aGnGQC4HjCvoZaAd2jg4wXSntb_DBxrVg8G.77z7dT_ZIGvHT3yf9.qIVZ.TVblHpPwAaE6m8JWkzFzojLkrVcCvHz00u6JuMeZp30TT_i8aawSfpE64i5PlKonmfwqSCe9CFu2SMEXwfoxdSh5Gu4CfFBZxzQ6bsAbbCu7XCrVM2AXl3lwY2l29jI9jUyK_zNfNXF0g--")}>Yahoo</button>
            <button onClick={() => handleEmailChoice("https://www.microsoft.com/en-us/microsoft-365/outlook/email-and-calendar-software-microsoft-outlook?deeplink=%2fowa%2f&sdf=0")}>Outlook</button>
            <button onClick={closeEmailDialog}>Close</button>
          </div>
        </div>
      )}

      <br />
      <div className={styles.copyright}>
        Copyright &#169; 1999 - {year} Yayasan Jantung Malaysia. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
