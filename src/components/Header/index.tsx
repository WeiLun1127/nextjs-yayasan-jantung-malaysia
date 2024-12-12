import Image from 'next/image';
import Link from 'next/link';
import styles from './styles.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <Link href="/">
        <picture className={styles.logo}>
          <Image fill alt="logo" src="/images/logo.png" sizes="602px" />
        </picture>
      </Link>

      <nav className={styles.nav}>
        <div className={styles.dropdown}>
          <a href="/about-yjm">About YJM</a>
          <ul className={styles.dropdownMenu}>
            <li><Link href="/about/history">Patron & Board of Directory</Link></li>
            <li><Link href="/about/team">Supporting Staff</Link></li>
            <li><Link href="/our-aspiration">Our Aspiration</Link></li>
            <li><Link href="/our-future">Our Future</Link></li>
            <li><Link href="/our-activities">Our Activities</Link></li>
            <li><Link href="/promoting-health">Promoting Health</Link></li>
            <li><Link href="/research">Research - The Heart of A Revolution</Link></li>
            <li><Link href="/cpr">CPR (Cardio Pulmonary Resuscitation)</Link></li>
            <li><Link href="/friends-of-the-foundation">Friends of the Foundation</Link></li>
            <li><Link href="/how-you-can-help">How You Can Help</Link></li>
            <li><Link href="/you-can-make-a-difference">You Can Make A Difference</Link></li>
          </ul>
        </div>

        <div className={styles.dropdown}>
          <a>Facilities</a>
          <ul className={styles.dropdownMenu}>
            <li><Link href="/facilities/labs">Hall Rental</Link></li>
            <li><Link href="/facilities/rooms">Halway House</Link></li>
          </ul>
        </div>

        <div className={styles.dropdown}>
          <a>Health Articles</a>
          <ul className={styles.dropdownMenu}>
            <li><Link href="/Articles/how-does-human-heart-works">How Does the Human Heart Work?</Link></li>
            <li><Link href="/Articles/four-ways-to-prevent-heart-attack">Four Ways to Prevent Heart Attack</Link></li>
            <li><Link href="/Articles/heart-disease">Heart Disease Warning</Link></li>
            <li><Link href="/Articles/how-does-exercise-impact-weight-loss">How Does Exercise Impact Weight Loss</Link></li>
            <li><Link href="/Articles/heart-basics">Heart Basics</Link></li>
            <li><Link href="/Articles/steps-to-better-health">Steps to Better Health</Link></li>
            <li><Link href="/Articles/tobacco-and-your-health">Tobacco and Your Health</Link></li>
            <li><Link href="/Articles/heart-attack">Heart Attack</Link></li>
            <li><Link href="/Articles/heart-disease">Heart Disease - Not somebody else's business</Link></li>
            <li><Link href="/Articles/arrhythmias">Arrhythmias and Sudden Cardiac Death</Link></li>
            <li><Link href="/Articles/inherited-cholesterol">Inherited Cholesterol Disorder</Link></li>
          </ul>
        </div>

        <div className={styles.dropdown}>
          <a>Activities</a>
          <ul className={styles.dropdownMenu}>
            <li><Link href="/activities/events">Photo Gallery - Albums</Link></li>
            <li><Link href="/Activities/cpr">CPR (Cardio Pulmonary Resuscitation)</Link></li>
            <li><Link href="/Activities/axa-hearts-in-action-run">AXA Hearts in Action Run 2020</Link></li>
            <li><Link href="/Activities/classes">Walk A Million Miles 2020</Link></li>
            <li><Link href="/Activities/world-heart-day">World Heart Day</Link></li>
            <li><Link href="/Activities/go-red">Go Red For Women</Link></li>
          </ul>
        </div>

        <div className={styles.dropdown}>
          <a>Bulletin</a>
          <ul className={styles.dropdownMenu}>
          <li><Link href="/bulletin/news">Berita YJM 60</Link></li>
          <li><Link href="/bulletin/news">Berita YJM 59</Link></li>
          <li><Link href="/bulletin/news">Berita YJM 58</Link></li>
          <li><Link href="/bulletin/news">Berita YJM 57</Link></li>
          <li><Link href="/bulletin/news">Berita YJM 56</Link></li>
          <li><Link href="/bulletin/news">Berita YJM 55</Link></li>
          <li><Link href="/bulletin/news">Berita YJM 54</Link></li>
          <li><Link href="/bulletin/news">Berita YJM 53</Link></li>
          <li><Link href="/bulletin/news">Berita YJM 52</Link></li>
          <li><Link href="/bulletin/news">Berita YJM 51</Link></li>
          <li><Link href="/bulletin/news">Berita YJM 50</Link></li>
          <li><Link href="/bulletin/news">Berita YJM 49</Link></li>
          <li><Link href="/bulletin/news">Berita YJM 48</Link></li>
          <li><Link href="/bulletin/news">Berita YJM 47</Link></li>
          <li><Link href="/bulletin/news">Berita YJM 46</Link></li>
          <li><Link href="/bulletin/news">Berita YJM 45</Link></li>
          <li><Link href="/bulletin/news">Berita YJM 44</Link></li>
          <li><Link href="/bulletin/news">Berita YJM 43</Link></li>
          <li><Link href="/bulletin/news">Berita YJM 42</Link></li>
          <li><Link href="/bulletin/news">Berita YJM 41</Link></li>
          <li><Link href="/bulletin/news">Berita YJM 40</Link></li>
          <li><Link href="/bulletin/news">Berita YJM 39</Link></li>
          <li><Link href="/bulletin/news">Berita YJM 38</Link></li>
          <li><Link href="/bulletin/news">Berita YJM 37</Link></li>
          <li><Link href="/bulletin/news">Berita YJM 36</Link></li>
          <li><Link href="/bulletin/news">Berita YJM 35</Link></li>
          <li><Link href="/bulletin/news">Berita YJM 34</Link></li>
          <li><Link href="/bulletin/news">Berita YJM 33</Link></li>
          <li><Link href="/bulletin/news">Berita YJM 32</Link></li>
          <li><Link href="/bulletin/news">Berita YJM 31</Link></li>
          <li><Link href="/bulletin/news">Berita YJM 30</Link></li>
          <li><Link href="/bulletin/news">Berita YJM 29</Link></li>
          <li><Link href="/bulletin/news">Useful Links</Link></li>
          </ul>
        </div>

        <div className={styles.dropdown}>
          <a>Contact Us</a>
          <ul className={styles.dropdownMenu}>
            <li><Link href="/contact-us">Contact Us</Link></li>
            <li><Link href="/membership">Membership</Link></li>
            <li><Link href="/donation">Donation</Link></li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
