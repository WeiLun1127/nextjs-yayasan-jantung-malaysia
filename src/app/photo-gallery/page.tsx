import styles from './styles.module.css';

const PhotoGallery = () => {
  return (
    <div>
      <h1 className={styles.title}>Photo Gallery</h1>
      <div className={styles.cardContainer}>
        <div className={styles.card}>
          <a href="https://photos.google.com/share/AF1QipM7DhvunjZayhr-fa9bpd-8gQK5YGscGABRloRxl4lkLPV6SsVYfo2wwCaBIhh2PQ?key=OEZMOXNldDVlV2F3b1lvSl9jbkVCV1NybnRWTDZ3" target="_blank" rel="noopener noreferrer">
            <div className={styles.imageWrapper}>
              <img
                src="/images/photo-gallery/1.jpeg"
                alt="Halfway House 2018"
                className={styles.cardImage}
              />
              <img
                src="/images/photo-gallery/2.jpg" // Replace with hover image if needed
                alt="Hover Image"
                className={styles.hoverImage}
              />
            </div>
            <p className={styles.description}>Halfway House 2018</p>
          </a>
        </div>

        {/* Repeat for other cards with the same pattern */}
        <div className={styles.card}>
          <a href="https://photos.google.com/share/AF1QipN5zBU73tNAlVFxGXlkgFWjn5YBACbpW4aoF8KVKr-OgPaPHpHFeih2kHNMHUVjWQ?key=Q1dDV1NhNTZmT28wLVctYmMtWV9ad3RrZ2xWeUl3" target="_blank" rel="noopener noreferrer">
            <div className={styles.imageWrapper}>
              <img
                src="/images/photo-gallery/2.jpg"
                alt="MQA, Petaling Jaya, Selangor"
                className={styles.cardImage}
              />
              <img
                src="/images/photo-gallery/2.jpg" // Replace with hover image if needed
                alt="Hover Image"
                className={styles.hoverImage}
              />
            </div>
            <p className={styles.description}>Lubok Merbau Kedah (5 Jan 2013)</p>
          </a>
        </div>
        
        <div className={styles.card}>
          <a href="https://photos.google.com/share/AF1QipMoOIpfpuNUkN3q0vegefuaU1czIwcuRAPWH0RZr_cEnD7HoMb3zAx_dTCL5GtQzA?key=dUVfVnMwQW1rbzVUZXlCdXJSWm5JcjNzUVJiQk93" target="_blank" rel="noopener noreferrer">
            <div className={styles.imageWrapper}>
              <img
                src="/images/photo-gallery/3.jpg"
                alt="World Heart Day 2015, Lake Garden, Kuala Lumpur ( 27 September 2015)"
                className={styles.cardImage}
              />
              <img
                src="/images/photo-gallery/3.jpg" // Replace with hover image if needed
                alt="Hover Image"
                className={styles.hoverImage}
              />
            </div>
            <p className={styles.description}>World Heart Day 2015, Lake Garden, Kuala Lumpur ( 27 September 2015)</p>
          </a>
        </div>

        <div className={styles.card}>
          <a href="https://photos.google.com/share/AF1QipNz6qe3BW0FCpZgKiFYeZcX6FjWyKNczsX6g4ZLi0lQ9mYDoASkgUJwEz_o3K6Kbg?key=cmNPQ09XTUhRdC1Tcy1kWXVLZGhFSVM2RVRsT3Vn" target="_blank" rel="noopener noreferrer">
            <div className={styles.imageWrapper}>
              <img
                src="/images/photo-gallery/4.jpg"
                alt="Taiping Heart Week, Taiping, Perak (9-13 September 2015)"
                className={styles.cardImage}
              />
              <img
                src="/images/photo-gallery/4.jpg" // Replace with hover image if needed
                alt="Hover Image"
                className={styles.hoverImage}
              />
            </div>
            <p className={styles.description}>Taiping Heart Week, Taiping, Perak (9-13 September 2015)</p>
          </a>
        </div>

        <div className={styles.card}>
          <a href="https://photos.google.com/share/AF1QipOuPc2NmtTAiuFzfldhIt-j4myfuLJwYczhmqvYVTNjbDIYGwu4x5IbtvwoouqcFQ?key=ckNTeGM3WVdWeTM4bmlIbXl4WGJzWXcyblhSamdB" target="_blank" rel="noopener noreferrer">
            <div className={styles.imageWrapper}>
              <img
                src="/images/photo-gallery/5.jpg"
                alt="Community Taman Sendayan Indah, N.9 ( 29 August 2015)"
                className={styles.cardImage}
              />
              <img
                src="/images/photo-gallery/5.jpg" // Replace with hover image if needed
                alt="Hover Image"
                className={styles.hoverImage}
              />
            </div>
            <p className={styles.description}>Community Taman Sendayan Indah, N.9 ( 29 August 2015)</p>
          </a>
        </div>

        <div className={styles.card}>
          <a href="https://photos.google.com/share/AF1QipPPaex2HCE-eF6gBHX03iZ2cUJHpdr8TaJRXagsSoks-td7CJ9IFe6oXNycjPXeoQ?key=c0ZUMmlNQWJRbWg4eEplUkRSenN5MWxkajdzWkl3" target="_blank" rel="noopener noreferrer">
            <div className={styles.imageWrapper}>
              <img
                src="/images/photo-gallery/6.jpg"
                alt="Adam Tan Huang Chew"
                className={styles.cardImage}
              />
              <img
                src="/images/photo-gallery/6.jpg" // Replace with hover image if needed
                alt="Hover Image"
                className={styles.hoverImage}
              />
            </div>
            <p className={styles.description}>Kinrara Metta Buddhist Society (9 August 2015)</p>
          </a>
        </div>

        <div className={styles.card}>
          <a href="https://photos.google.com/share/AF1QipOrX0jDg6OXfiIPy4lUANwDc2stEdQrPhV5FOhtjArarHu1iwIGDNbL8sWgPg1nXg?key=VDN0eUlKVXBlcnVVTkxJdnFjQlMwUFdPekNvenRR" target="_blank" rel="noopener noreferrer">
            <div className={styles.imageWrapper}>
              <img
                src="/images/photo-gallery/7.jpg"
                alt="Adam Tan Huang Chew"
                className={styles.cardImage}
              />
              <img
                src="/images/photo-gallery/7.jpg" // Replace with hover image if needed
                alt="Hover Image"
                className={styles.hoverImage}
              />
            </div>
            <p className={styles.description}>S.M. Westley Methodist K.L (6 August 2015)</p>
          </a>
        </div>

        <div className={styles.card}>
          <a href="https://photos.google.com/share/AF1QipMfLIZcvTZCtaRx57_Vp_wk4sWTMYHpYBqMdu8TpfUH4XkVm4MUhsP8gNhL17XQLg?key=U0xRdkNZWmN0RE95dzl2cXlENkw5RUU2dWwyTGV3" target="_blank" rel="noopener noreferrer">
            <div className={styles.imageWrapper}>
              <img
                src="/images/photo-gallery/8.jpg"
                alt="Adam Tan Huang Chew"
                className={styles.cardImage}
              />
              <img
                src="/images/photo-gallery/8.jpg" // Replace with hover image if needed
                alt="Hover Image"
                className={styles.hoverImage}
              />
            </div>
            <p className={styles.description}>PTPL Ampang (5 August 2015)</p>
          </a>
        </div>
        <div className={styles.card}>
          <a href="https://photos.google.com/share/AF1QipOFXoPzYRhbr_OJpwiNT2Ruo2yd2l6hx6HU8kjxojaSq4tH6srINbDovefBSDXsOw?key=b2lZNlBEQlRpQWRDeTUzZ2MxSHZsb2xZNERtQ1Rn" target="_blank" rel="noopener noreferrer">
            <div className={styles.imageWrapper}>
              <img
                src="/images/photo-gallery/9.jpg"
                alt="Adam Tan Huang Chew"
                className={styles.cardImage}
              />
              <img
                src="/images/photo-gallery/9.jpg" // Replace with hover image if needed
                alt="Hover Image"
                className={styles.hoverImage}
              />
            </div>
            <p className={styles.description}>INTEL Health Talk (29 July 2015)</p>
          </a>
        </div>
        <div className={styles.card}>
          <a href="https://photos.google.com/share/AF1QipO4IFaU6A7rwjyRJyQXAQXQrZjcVNZOU5DpOyH0_IavdnAlE408lYQkmBOj1YEPLA?key=Y1FPYWpLTEIyRG1hU0l0dURWNTRFZUpoei1Dd3d3" target="_blank" rel="noopener noreferrer">
            <div className={styles.imageWrapper}>
              <img
                src="/images/photo-gallery/10.jpg"
                alt="Adam Tan Huang Chew"
                className={styles.cardImage}
              />
              <img
                src="/images/photo-gallery/10.jpg" // Replace with hover image if needed
                alt="Hover Image"
                className={styles.hoverImage}
              />
            </div>
            <p className={styles.description}>Geomatika University College (3 August 2015)</p>
          </a>
        </div>
        <div className={styles.card}>
          <a href="https://photos.google.com/share/AF1QipM5yfZ-Sep9cGbnw6v8RyJgMTIJj6JJ3Iok3WviwfE8T8bi5wnoxy9egnWna-bBPw?key=MWlQN3lmWVlSSFpYeHRxT19rZnZoejdNNzhWT2xB" target="_blank" rel="noopener noreferrer">
            <div className={styles.imageWrapper}>
              <img
                src="/images/photo-gallery/11.jpg"
                alt="Adam Tan Huang Chew"
                className={styles.cardImage}
              />
              <img
                src="/images/photo-gallery/11.jpg" // Replace with hover image if needed
                alt="Hover Image"
                className={styles.hoverImage}
              />
            </div>
            <p className={styles.description}>PTPL Penang (28 July 2015)</p>
          </a>
        </div>
        <div className={styles.card}>
          <a href="https://photos.google.com/share/AF1QipPFB0WekHx0OCTRpqU1ldgRFoAjdq3QberTltRHNO-EQVOdCYqkfwne9ouBKcnQDQ?key=c1hpQVlUTXdJQ0dhTWk5X09fUWNxTy1LWmpCMUJ3" target="_blank" rel="noopener noreferrer">
            <div className={styles.imageWrapper}>
              <img
                src="/images/photo-gallery/12.jpg"
                alt="Adam Tan Huang Chew"
                className={styles.cardImage}
              />
              <img
                src="/images/photo-gallery/12.jpg" // Replace with hover image if needed
                alt="Hover Image"
                className={styles.hoverImage}
              />
            </div>
            <p className={styles.description}>Community Ayer Panas, Setapak, Kuala Lumpur (27 June 2015)</p>
          </a>
        </div>
        <div className={styles.card}>
          <a href="https://photos.google.com/share/AF1QipN7cdiThU0yW7aHlmjskIbevWd5Fgh4eZ42ur_mdjdFwYRHizwbrG7w7l81nPhmkQ?key=UDlFZ09MZTR0djdTaVdpa0lZdURLMWRnRktDQW1n" target="_blank" rel="noopener noreferrer">
            <div className={styles.imageWrapper}>
              <img
                src="/images/photo-gallery/13.jpg"
                alt="Adam Tan Huang Chew"
                className={styles.cardImage}
              />
              <img
                src="/images/photo-gallery/13.jpg" // Replace with hover image if needed
                alt="Hover Image"
                className={styles.hoverImage}
              />
            </div>
            <p className={styles.description}>School Program - SMK Seremban 2, Negeri Sembilan (16-17 June 2015)</p>
          </a>
        </div>
        <div className={styles.card}>
          <a href="https://photos.google.com/share/AF1QipNJ87mEVfteI-UbyTY0GE900WTAvDTQ7c4sCkICuO72SqfM4qlTvZxO2kOubAqtxg?key=Q0ZqaVZxNWlEcEFMVnNSb0xraHZXT0N5OEpRYkNB" target="_blank" rel="noopener noreferrer">
            <div className={styles.imageWrapper}>
              <img
                src="/images/photo-gallery/14.jpg"
                alt="Adam Tan Huang Chew"
                className={styles.cardImage}
              />
              <img
                src="/images/photo-gallery/14.jpg" // Replace with hover image if needed
                alt="Hover Image"
                className={styles.hoverImage}
              />
            </div>
            <p className={styles.description}>Cheque Presentation from IM4U, Putrajaya (14 June 2015)</p>
          </a>
        </div>
        <div className={styles.card}>
          <a href="https://photos.google.com/share/AF1QipO83T2aE284yYT4j5MuENHUiSxVzcrN-CFoCFVc8KgG-Fo-2ruHuIPjK2CevjBkcQ?key=SUlpSFA2OHNjbGZEVWZLVi1xQWxZeE9mdVE4eFZB" target="_blank" rel="noopener noreferrer">
            <div className={styles.imageWrapper}>
              <img
                src="/images/photo-gallery/15.jpg"
                alt="Adam Tan Huang Chew"
                className={styles.cardImage}
              />
              <img
                src="/images/photo-gallery/15.jpg" // Replace with hover image if needed
                alt="Hover Image"
                className={styles.hoverImage}
              />
            </div>
            <p className={styles.description}>Invitation - Kayuh Padu, Pejabat Pendidikan Hulu Langat, Kajang, Selangor (13 June 2015)</p>
          </a>
        </div>
        <div className={styles.card}>
          <a href="https://photos.google.com/share/AF1QipMgFBruP9Ck8jHasAT0FiMIDxOjDTPZdMhR_02HbTbaSt3WhHbwR7T78ucsvg7wGw?key=VW9Ta1BMbE1sdjhxR0FoY09sMDlKaEJCbDBGYWd3" target="_blank" rel="noopener noreferrer">
            <div className={styles.imageWrapper}>
              <img
                src="/images/photo-gallery/16.jpg"
                alt="Adam Tan Huang Chew"
                className={styles.cardImage}
              />
              <img
                src="/images/photo-gallery/16.jpg" // Replace with hover image if needed
                alt="Hover Image"
                className={styles.hoverImage}
              />
            </div>
            <p className={styles.description}>Colour My Heart Run, Dataran Merdeka, Kuala Lumpur (24 may 2015)</p>
          </a>
        </div>
        <div className={styles.card}>
          <a href="https://photos.google.com/share/AF1QipOqDL-MEy-_iW4H68eVuCm_mxlcdvWQvhwWTJy9TZXeQ8mYZY6g7nVi1YOtqsMOrA?key=TS13bzRtcU93a0ZsODRTOTdlQTNQenZKdkc4QlRn" target="_blank" rel="noopener noreferrer">
            <div className={styles.imageWrapper}>
              <img
                src="/images/photo-gallery/17.jpg"
                alt="Adam Tan Huang Chew"
                className={styles.cardImage}
              />
              <img
                src="/images/photo-gallery/17.jpg" // Replace with hover image if needed
                alt="Hover Image"
                className={styles.hoverImage}
              />
            </div>
            <p className={styles.description}>Colour My Heart Run, Padang Kota Lama, Penang (19 April 2104)</p>
          </a>
        </div>
        <div className={styles.card}>
          <a href="https://photos.google.com/share/AF1QipOhiATkju_ABCBtIAjlUff1IM5jjG9llX0fOfns1tKyaO2hmFtApofjQMzCwFdiSQ?key=V0VLemJtOEUxcFNKTWkzMDFmRW1pMXRaamlFQ0hB" target="_blank" rel="noopener noreferrer">
            <div className={styles.imageWrapper}>
              <img
                src="/images/photo-gallery/18.jpg"
                alt="Adam Tan Huang Chew"
                className={styles.cardImage}
              />
              <img
                src="/images/photo-gallery/18.jpg" // Replace with hover image if needed
                alt="Hover Image"
                className={styles.hoverImage}
              />
            </div>
            <p className={styles.description}>Community - Felda Lakum, Lanchang, Pahang (17 May 2015)</p>
          </a>
        </div>
        <div className={styles.card}>
          <a href="https://photos.google.com/share/AF1QipOdbZRpivgQ9TvAywoF0o_nS6B5Wi5h373kg-QdUGVuVRupNp3bLqNRqzyk8BK1ZA?key=dkJCcmxRbUJ2TDcwOFhrQkZwN0FTWnp2dDJJeExn" target="_blank" rel="noopener noreferrer">
            <div className={styles.imageWrapper}>
              <img
                src="/images/photo-gallery/19.jpg"
                alt="Adam Tan Huang Chew"
                className={styles.cardImage}
              />
              <img
                src="/images/photo-gallery/19.jpg" // Replace with hover image if needed
                alt="Hover Image"
                className={styles.hoverImage}
              />
            </div>
            <p className={styles.description}>Community - Sook, Keningau, Sabah (4 April 2015)</p>
          </a>
        </div>
        <div className={styles.card}>
          <a href="https://photos.google.com/share/AF1QipNj7jup-fPQJqULWWAqCH6leSs_lX_TTQjixU5AMhdE2eY1DVnoRF8WIDNGawJ8BQ?key=bDZwUlFmWEZnVUZ1UU1RdDdPN01VRnhfV0M4bFpn" target="_blank" rel="noopener noreferrer">
            <div className={styles.imageWrapper}>
              <img
                src="/images/photo-gallery/20.jpg"
                alt="Adam Tan Huang Chew"
                className={styles.cardImage}
              />
              <img
                src="/images/photo-gallery/20.jpg" // Replace with hover image if needed
                alt="Hover Image"
                className={styles.hoverImage}
              />
            </div>
            <p className={styles.description}>Heart Week Permas Jaya, Johor Bahru (26-30 March 2015)</p>
          </a>
        </div>
        <div className={styles.card}>
          <a href="https://photos.google.com/share/AF1QipPvghr_nCm27Z7FuaSCwgwdnM4CgG-A3rT8BFGRUzfn6g2c4WxexWSOE4dKn5CPkw?key=ZHo1OFZZX2dEZXZqZkZVcGx6aklWanZQbm5wQzVB" target="_blank" rel="noopener noreferrer">
            <div className={styles.imageWrapper}>
              <img
                src="/images/photo-gallery/21.jpg"
                alt="Adam Tan Huang Chew"
                className={styles.cardImage}
              />
              <img
                src="/images/photo-gallery/21.jpg" // Replace with hover image if needed
                alt="Hover Image"
                className={styles.hoverImage}
              />
            </div>
            <p className={styles.description}>School - Malaysian Art Institut, Tmn Melawati, KL (19 March 2015)</p>
          </a>
        </div>
        <div className={styles.card}>
          <a href="https://photos.google.com/share/AF1QipM2zWXDOSg44nRdXbIOrkkezLpnk3Uks5fSXlcjxKhEYSigAvF5JtQ4R_XmhThGtA?key=NURWZmZzaUpDQUtkQnB1cnNONWJtQm1PVEkxQWRR" target="_blank" rel="noopener noreferrer">
            <div className={styles.imageWrapper}>
              <img
                src="/images/photo-gallery/22.jpg"
                alt="Adam Tan Huang Chew"
                className={styles.cardImage}
              />
              <img
                src="/images/photo-gallery/22.jpg" // Replace with hover image if needed
                alt="Hover Image"
                className={styles.hoverImage}
              />
            </div>
            <p className={styles.description}>Workplace - Takaful Ikhlas, South Bangsar</p>
          </a>
        </div>
        <div className={styles.card}>
          <a href="https://photos.google.com/share/AF1QipM_1W6y3xfwSMXj6bqCj8jF4KsmORwneqGTl_sNCxeADlZKfVVIj6cEdIePvwWvlA?key=Z0Rlb1pSZ05QU0tqMVF2SzQxTkdhRDhJelBVRUh3" target="_blank" rel="noopener noreferrer">
            <div className={styles.imageWrapper}>
              <img
                src="/images/photo-gallery/23.jpg"
                alt="Adam Tan Huang Chew"
                className={styles.cardImage}
              />
              <img
                src="/images/photo-gallery/23.jpg" // Replace with hover image if needed
                alt="Hover Image"
                className={styles.hoverImage}
              />
            </div>
            <p className={styles.description}>Community Linggi (15 March 2015)</p>
          </a>
        </div>
        <div className={styles.card}>
          <a href="https://photos.google.com/share/AF1QipOqGeGVJvtEX8uUukl98RvmMh7KKxlGbacqMZUEiunWL-aTPudRX7e-nTCbg66WOA?key=YTkwclMtRnlhZUdRcWVxaUhEUVloTkttNWFyQ0lB" target="_blank" rel="noopener noreferrer">
            <div className={styles.imageWrapper}>
              <img
                src="/images/photo-gallery/24.jpg"
                alt="Adam Tan Huang Chew"
                className={styles.cardImage}
              />
              <img
                src="/images/photo-gallery/24.jpg" // Replace with hover image if needed
                alt="Hover Image"
                className={styles.hoverImage}
              />
            </div>
            <p className={styles.description}>MNRB, Damansara Heights, KL (10-12 March 2015)</p>
          </a>
        </div>
        <div className={styles.card}>
          <a href="https://photos.google.com/share/AF1QipMMrSRJaaR_Tkk8acUMsd-Rfbz0z1hGOHJIO_CG-HJYCBxS30F22pg_j8c5Pcd_Yg?key=WXg0aG9FQTMwcVZuYzdKaVVmeVluV2E3NFhXR1J3" target="_blank" rel="noopener noreferrer">
            <div className={styles.imageWrapper}>
              <img
                src="/images/photo-gallery/25.jpg"
                alt="Adam Tan Huang Chew"
                className={styles.cardImage}
              />
              <img
                src="/images/photo-gallery/25.jpg" // Replace with hover image if needed
                alt="Hover Image"
                className={styles.hoverImage}
              />
            </div>
            <p className={styles.description}>School - KPTM Bangi, Selangor (2 March 2015)</p>
          </a>
        </div>
        <div className={styles.card}>
          <a href="https://photos.google.com/share/AF1QipORK4EfJi56PRB6RXDh5kbO5df2pboQXA3nlvxrluo6fvlUAeM84VTXB1lcshLD-A?key=THE1R3d1bDZrM2FIck9UNkF2RzBaZkhJUjVvSW9R" target="_blank" rel="noopener noreferrer">
            <div className={styles.imageWrapper}>
              <img
                src="/images/photo-gallery/20150215_112647.jpg"
                alt="Adam Tan Huang Chew"
                className={styles.cardImage}
              />
              <img
                src="/images/photo-gallery/20150215_112647.jpg" // Replace with hover image if needed
                alt="Hover Image"
                className={styles.hoverImage}
              />
            </div>
            <p className={styles.description}>School - Kolej Bestari, Setiu, Terengganu (15 February 2015)</p>
          </a>
        </div>
        <div className={styles.card}>
          <a href="https://photos.google.com/share/AF1QipM-wKYm2wdR6xsfaNCAqD23qxkb_y8UxWX2_o7Wzq93jWeqAmiY-cz9W-AlD4f8oQ?key=Si1vT0dOWWxmcGNkTTViZVhpTzZWWHQyQTN4SG53" target="_blank" rel="noopener noreferrer">
            <div className={styles.imageWrapper}>
              <img
                src="/images/photo-gallery/20150214_092433.jpg"
                alt="Adam Tan Huang Chew"
                className={styles.cardImage}
              />
              <img
                src="/images/photo-gallery/20150214_092433.jpg" // Replace with hover image if needed
                alt="Hover Image"
                className={styles.hoverImage}
              />
            </div>
            <p className={styles.description}>Community Kuala Terengganu</p>
          </a>
        </div>
        <div className={styles.card}>
          <a href="https://photos.google.com/share/AF1QipOovQ-Qo2NinKv208AeJzOC72BU1wIyQFACto1wlLrB6-uUK99uUbtd32Fx1dtQpQ?key=LUp1N2VLWEt0bTBhVTZnTXpEajlob3lFYzBXTjRn" target="_blank" rel="noopener noreferrer">
            <div className={styles.imageWrapper}>
              <img
                src="/images/photo-gallery/26.jpg"
                alt="Adam Tan Huang Chew"
                className={styles.cardImage}
              />
              <img
                src="/images/photo-gallery/26.jpg" // Replace with hover image if needed
                alt="Hover Image"
                className={styles.hoverImage}
              />
            </div>
            <p className={styles.description}>Community Rengit (8 February 2015)</p>
          </a>
        </div>
        <div className={styles.card}>
          <a href="https://photos.google.com/share/AF1QipOg3rXyi6y0LIouHOiOSb8KZctx6X2G2_SFVIifeDYqr3GAacKd-cdTiM_znUPBMA?key=RHdva2lsWnFDQ0xoZHFUc05lX1dLRHdhQXhyc1Z3" target="_blank" rel="noopener noreferrer">
            <div className={styles.imageWrapper}>
              <img
                src="/images/photo-gallery/29.jpg"
                alt="Adam Tan Huang Chew"
                className={styles.cardImage}
              />
              <img
                src="/images/photo-gallery/29.jpg" // Replace with hover image if needed
                alt="Hover Image"
                className={styles.hoverImage}
              />
            </div>
            <p className={styles.description}>Alor Setar Heart Week, Kedah ( 8-11 January 2015 )</p>
          </a>
        </div>
        <div className={styles.card}>
          <a href="https://photos.google.com/share/AF1QipMmOXgnS8HnvxxGXXBqyHFHlefGzpPO758v6mJHB58VJFG0zT2FwYSs_H_ky6Dq5A?key=d3Q5Z1RuRkdLX3ZDWkZVMW1QNHZhc210MDZLcFB3" target="_blank" rel="noopener noreferrer">
            <div className={styles.imageWrapper}>
              <img
                src="/images/photo-gallery/30.jpg"
                alt="Adam Tan Huang Chew"
                className={styles.cardImage}
              />
              <img
                src="/images/photo-gallery/30.jpg" // Replace with hover image if needed
                alt="Hover Image"
                className={styles.hoverImage}
              />
            </div>
            <p className={styles.description}>Dewan Jubli Intan, Kluang, Johor (4 January 2015)</p>
          </a>
        </div>
        <div className={styles.card}>
          <a href="https://photos.google.com/share/AF1QipPtYLZyy2l29mbVeoC6sCzkb13g0hSLhb_GjQNTNENRilxPZYXkjJrN45sEqYKkRQ?key=RjRZNG82QnlTWkwwTW8zRWV2MTBPd2NDRE1UVEpR" target="_blank" rel="noopener noreferrer">
            <div className={styles.imageWrapper}>
              <img
                src="/images/photo-gallery/31.jpg"
                alt="Adam Tan Huang Chew"
                className={styles.cardImage}
              />
              <img
                src="/images/photo-gallery/31.jpg" // Replace with hover image if needed
                alt="Hover Image"
                className={styles.hoverImage}
              />
            </div>
            <p className={styles.description}>Taman Paroi Jaya, Seremban (28 Disember 2014)</p>
          </a>
        </div>
        <div className={styles.card}>
          <a href="https://photos.google.com/share/AF1QipPBe87lr74-FEhxtTVKPOgYIVdHXthyEiFn4wmO7pkr8RGpf73Vb81iQkP2dkKJNw?key=ZGRyQUtTaktHUzZWQlRJeS1fckdrTWk3SXoxbjJB" target="_blank" rel="noopener noreferrer">
            <div className={styles.imageWrapper}>
              <img
                src="/images/photo-gallery/32.jpg"
                alt="Adam Tan Huang Chew"
                className={styles.cardImage}
              />
              <img
                src="/images/photo-gallery/32.jpg" // Replace with hover image if needed
                alt="Hover Image"
                className={styles.hoverImage}
              />
            </div>
            <p className={styles.description}>Tanjung Piandang, Perak ( 14 December 2014)</p>
          </a>
        </div>
        <div className={styles.card}>
          <a href="https://photos.google.com/share/AF1QipOL2Jhqb4UmBXLMS6l1NMMxS982X8iLNbZc3IBdiPDYKYK0m0-kQCcxB5E0CV-jbA?key=MS0yMHhlSVU2ckhZZk81SGhZeDltVzhpT0ZLeE5n" target="_blank" rel="noopener noreferrer">
            <div className={styles.imageWrapper}>
              <img
                src="/images/photo-gallery/33.jpg"
                alt="Adam Tan Huang Chew"
                className={styles.cardImage}
              />
              <img
                src="/images/photo-gallery/33.jpg" // Replace with hover image if needed
                alt="Hover Image"
                className={styles.hoverImage}
              />
            </div>
            <p className={styles.description}>Simpang Pertang, Jelebu, Negeri Sembilan (30 November 2014)</p>
          </a>
        </div>
        <div className={styles.card}>
          <a href="https://photos.google.com/share/AF1QipNz7JNYE01eHo7h-NQ_Y9LKEQny0XqgPqLfqF1rHMFZB9JT_sS1nhyenlOcjrJpdg?key=QmRfX3ZyOU80VTQzcVJCM0pNajliandDalAyNzNR" target="_blank" rel="noopener noreferrer">
            <div className={styles.imageWrapper}>
              <img
                src="/images/photo-gallery/34.jpg"
                alt="Adam Tan Huang Chew"
                className={styles.cardImage}
              />
              <img
                src="/images/photo-gallery/34.jpg" // Replace with hover image if needed
                alt="Hover Image"
                className={styles.hoverImage}
              />
            </div>
            <p className={styles.description}>Workplace - SHARP Electronics (M) Sdn.Bhd. (26 November 2014)</p>
          </a>
        </div>
        <div className={styles.card}>
          <a href="https://photos.google.com/share/AF1QipOHvRVFgFJyh7rVtWbIELLjB8fUWP0gxS_1fbiDqfOJiZKF9T1RPnCTmmDcSEk11g?key=VHNwcmhEcWZsajBHcDg2R2FuMUROazhjX3BTMGFn" target="_blank" rel="noopener noreferrer">
            <div className={styles.imageWrapper}>
              <img
                src="/images/photo-gallery/35.jpg"
                alt="Adam Tan Huang Chew"
                className={styles.cardImage}
              />
              <img
                src="/images/photo-gallery/35.jpg" // Replace with hover image if needed
                alt="Hover Image"
                className={styles.hoverImage}
              />
            </div>
            <p className={styles.description}>Mentakab Heart Week, Metakab Star Mall, Mentakab, Pahang (7-9 November 2014)</p>
          </a>
        </div>
        <div className={styles.card}>
          <a href="https://photos.google.com/share/AF1QipNpaeFDBBstvj5QIvssMcR-ITgD7oki5kivnTg1HRKVT7b4JsOP3K_OMpvu4FUF2A?key=N2xVdjFveE1MaXZ0RVgwOEhQdURpMUZFUjlaVV9B" target="_blank" rel="noopener noreferrer">
            <div className={styles.imageWrapper}>
              <img
                src="/images/photo-gallery/36.jpg"
                alt="Adam Tan Huang Chew"
                className={styles.cardImage}
              />
              <img
                src="/images/photo-gallery/36.jpg" // Replace with hover image if needed
                alt="Hover Image"
                className={styles.hoverImage}
              />
            </div>
            <p className={styles.description}>Taiping Heart Week, Taiping Mall, Taiping, Perak (31-2 November 2014)</p>
          </a>
        </div>
        <div className={styles.card}>
          <a href="https://photos.google.com/share/AF1QipM7wl5bgLVanN63a2LJ1qmNSR6w5QMJEYSXtfjebZCrVWBZlw7xs3HhlVzYq6L2Iw?key=Y1l4NGhkakV2dVctaWV4eHY5TUdrU1dXWHpLZHl3" target="_blank" rel="noopener noreferrer">
            <div className={styles.imageWrapper}>
              <img
                src="/images/photo-gallery/37.jpg"
                alt="Adam Tan Huang Chew"
                className={styles.cardImage}
              />
              <img
                src="/images/photo-gallery/37.jpg" // Replace with hover image if needed
                alt="Hover Image"
                className={styles.hoverImage}
              />
            </div>
            <p className={styles.description}>SMK Air Putih, Kuantan, Pahang (28 October 2014)</p>
          </a>
        </div>
        <div className={styles.card}>
          <a href="https://photos.google.com/share/AF1QipMDIvIRFzbvgJftZlmLcX7JrapA2ubwLJyHLgTdiK2_OmERy5L1GzoXmlyUGREB2Q?key=Si1MNTgzVXI4UGlIN2M5Um4zVTZEbWJTVl90QWJ3" target="_blank" rel="noopener noreferrer">
            <div className={styles.imageWrapper}>
              <img
                src="/images/photo-gallery/38.jpg"
                alt="Adam Tan Huang Chew"
                className={styles.cardImage}
              />
              <img
                src="/images/photo-gallery/38.jpg" // Replace with hover image if needed
                alt="Hover Image"
                className={styles.hoverImage}
              />
            </div>
            <p className={styles.description}>Community Sg. Air Tawar, Sabak Bernam, Selangor (26 October 2014)</p>
          </a>
        </div>
        <div className={styles.card}>
          <a href="https://photos.google.com/share/AF1QipOsGCRXRD3tpjZX-MeSe8A7pKK_KqObssGl7Koi_ClZl0LRio-Kq8oeqkif8VPFoA?key=VDlMSlBISmlhV2tWSlRsazVaRmVHZVE2dXh1MTJ3" target="_blank" rel="noopener noreferrer">
            <div className={styles.imageWrapper}>
              <img
                src="/images/photo-gallery/39.jpg"
                alt="Adam Tan Huang Chew"
                className={styles.cardImage}
              />
              <img
                src="/images/photo-gallery/39.jpg" // Replace with hover image if needed
                alt="Hover Image"
                className={styles.hoverImage}
              />
            </div>
            <p className={styles.description}>World Heart Day 2014, Taman Tasik Titiwangsa, KL (28 September 2014)</p>
          </a>
        </div>
        <div className={styles.card}>
          <a href="https://photos.google.com/share/AF1QipN03s9m7Uo4sd0hHGqQujF05UmKR0xscyvH-e-j0Db-9fFXntgJshbLNPzK3XXH3A?key=WnAwVGIyVjNvMlVjcnFxOEpPbUE4dldIYnlxWVlR" target="_blank" rel="noopener noreferrer">
            <div className={styles.imageWrapper}>
              <img
                src="/images/photo-gallery/40.jpg"
                alt="Adam Tan Huang Chew"
                className={styles.cardImage}
              />
              <img
                src="/images/photo-gallery/40.jpg" // Replace with hover image if needed
                alt="Hover Image"
                className={styles.hoverImage}
              />
            </div>
            <p className={styles.description}>KPT Mara Batu Pahat, Johor (14 October 2014)</p>
          </a>
        </div>
        <div className={styles.card}>
          <a href="https://photos.google.com/share/AF1QipMpoqmzRF6cz1HgwpfVUU20arQjLk2O1MK7-W0zj9-MLmnn2KNrbSp5k31ZtAXCgA?key=MTNiYlU0eFVYd3ZuWHJvQWtMT0dqTEFDaWFfZURB" target="_blank" rel="noopener noreferrer">
            <div className={styles.imageWrapper}>
              <img
                src="/images/photo-gallery/41.jpg"
                alt="Adam Tan Huang Chew"
                className={styles.cardImage}
              />
              <img
                src="/images/photo-gallery/41.jpg" // Replace with hover image if needed
                alt="Hover Image"
                className={styles.hoverImage}
              />
            </div>
            <p className={styles.description}>The Heart Exhibition, Mid Valley (27 September 2014)</p>
          </a>
        </div>
        <div className={styles.card}>
          <a href="https://photos.google.com/share/AF1QipPAVaqh1IhmRi5NuG_xTyENItUH0NcdLlO_0FvVYlUM8QhjhSxGrA7qrEbYAXd1Aw?key=U05pSURXd2xUa1dyS2lNUy1LSi05c1FqRUZQaDR3" target="_blank" rel="noopener noreferrer">
            <div className={styles.imageWrapper}>
              <img
                src="/images/photo-gallery/42.jpg"
                alt="Adam Tan Huang Chew"
                className={styles.cardImage}
              />
              <img
                src="/images/photo-gallery/42.jpg" // Replace with hover image if needed
                alt="Hover Image"
                className={styles.hoverImage}
              />
            </div>
            <p className={styles.description}>Community - Beranang, Selangor (21 September 2014)</p>
          </a>
        </div>
        <div className={styles.card}>
          <a href="https://photos.google.com/share/AF1QipOx_VHN7Cc7AKo23Km_E2pH46ZgCYSsTTPnou5wDumY_6AdfSg08wyghhZY4Yie3g?key=YnN5N2U5dVVWSVI3dkJDNFhRNHF2aWczSDR0ZWNR" target="_blank" rel="noopener noreferrer">
            <div className={styles.imageWrapper}>
              <img
                src="/images/photo-gallery/43.jpg"
                alt="Adam Tan Huang Chew"
                className={styles.cardImage}
              />
              <img
                src="/images/photo-gallery/43.jpg" // Replace with hover image if needed
                alt="Hover Image"
                className={styles.hoverImage}
              />
            </div>
            <p className={styles.description}>Go Red for Women Pontian, Johor (6 September 2014)</p>
          </a>
        </div>
        <div className={styles.card}>
          <a href="https://photos.google.com/share/AF1QipMsDp3jR2whK4XSMKiOsFD6d0Pkyw5cTHLXB13zJSoK8lPk8po8bQxSgX-TojiCzw?key=X2g5dVBvbWF2M0pfclZEbVM2dXdvaWw0d1kyTWR3" target="_blank" rel="noopener noreferrer">
            <div className={styles.imageWrapper}>
              <img
                src="/images/photo-gallery/44.jpg"
                alt="Adam Tan Huang Chew"
                className={styles.cardImage}
              />
              <img
                src="/images/photo-gallery/44.jpg" // Replace with hover image if needed
                alt="Hover Image"
                className={styles.hoverImage}
              />
            </div>
            <p className={styles.description}>AEON Bukit Mertajam (21-24 August 2014)</p>
          </a>
        </div>
        <div className={styles.card}>
          <a href="https://photos.google.com/share/AF1QipPRQsnifMXoMDPo_cr08XdkO0tCuUebxvFaOKz7h-zw09kJCE6Ew8IaZtDNbWz9jA?key=ZmtrbmJXVWlXcDZXZ3hMaVAwQjZNNkc1SG5nS2Nn" target="_blank" rel="noopener noreferrer">
            <div className={styles.imageWrapper}>
              <img
                src="/images/photo-gallery/45.jpg"
                alt="Adam Tan Huang Chew"
                className={styles.cardImage}
              />
              <img
                src="/images/photo-gallery/45.jpg" // Replace with hover image if needed
                alt="Hover Image"
                className={styles.hoverImage}
              />
            </div>
            <p className={styles.description}>SM Methodist Wesley, KL (13 August 2014)</p>
          </a>
        </div>
        <div className={styles.card}>
          <a href="https://photos.google.com/share/AF1QipOORWD1NkIGcTUR0jl3keuewR_cuU24auMhCydWY4NwMnYt54WzeUUtEDso_yD4-A?key=SVJQVjRlVmRGSk43Q0ZKZldzNWJMRnJTNXZsTWFR" target="_blank" rel="noopener noreferrer">
            <div className={styles.imageWrapper}>
              <img
                src="/images/photo-gallery/46.jpg"
                alt="Adam Tan Huang Chew"
                className={styles.cardImage}
              />
              <img
                src="/images/photo-gallery/46.jpg" // Replace with hover image if needed
                alt="Hover Image"
                className={styles.hoverImage}
              />
            </div>
            <p className={styles.description}>Taman Ayer Panas, Setapak, Kuala Lumpur ( 13 July 2014 )</p>
          </a>
        </div>
        <div className={styles.card}>
          <a href="https://photos.google.com/share/AF1QipMn7fl06ymgc1j7tnWL5d8jxJxWs6TzmLibjhkV4HPqWZ42alWcZZ2Lv7J0xh5V2Q?key=M19tZFZRcEJEekNsVW1ycFlDUTZLMWNRVWs4dnBn" target="_blank" rel="noopener noreferrer">
            <div className={styles.imageWrapper}>
              <img
                src="/images/photo-gallery/47.jpg"
                alt="Adam Tan Huang Chew"
                className={styles.cardImage}
              />
              <img
                src="/images/photo-gallery/47.jpg" // Replace with hover image if needed
                alt="Hover Image"
                className={styles.hoverImage}
              />
            </div>
            <p className={styles.description}>SMK Permatang Rawa, Bukit Mertajam, Penang (25 June 2014)</p>
          </a>
        </div>
        <div className={styles.card}>
          <a href="https://photos.google.com/share/AF1QipOWH_VdWzifkB24qbsFDzZHjWoOFEOsJ2gsbqVPoKM2tw0d3UcIv9eWLD1tmpWcMQ?key=VDFIUDdxV1l3X2UwcTl2YTFFdXhNZm1qanEtUkNn" target="_blank" rel="noopener noreferrer">
            <div className={styles.imageWrapper}>
              <img
                src="/images/photo-gallery/48.jpg"
                alt="Adam Tan Huang Chew"
                className={styles.cardImage}
              />
              <img
                src="/images/photo-gallery/48.jpg" // Replace with hover image if needed
                alt="Hover Image"
                className={styles.hoverImage}
              />
            </div>
            <p className={styles.description}>SM Sin Min (Persendirian), Alor Setar, Kedah ( 24 June 2014)</p>
          </a>
        </div>
        <div className={styles.card}>
          <a href="https://photos.google.com/share/AF1QipPuoE2PdVBONTtfHWMrN9aX5q2v2zCUkW9BY_7zBx--z2KzAyKIR2FCvJHmG1LqBQ?key=c2tuVkNhQkY2blVxSy1TTDZhZko1b3FsOFlvaGdB" target="_blank" rel="noopener noreferrer">
            <div className={styles.imageWrapper}>
              <img
                src="/images/photo-gallery/49.jpg"
                alt="Adam Tan Huang Chew"
                className={styles.cardImage}
              />
              <img
                src="/images/photo-gallery/49.jpg" // Replace with hover image if needed
                alt="Hover Image"
                className={styles.hoverImage}
              />
            </div>
            <p className={styles.description}>Community Perda, Bukit Mertajam, Penang (22 June 2014)</p>
          </a>
        </div>
        <div className={styles.card}>
          <a href="https://photos.google.com/share/AF1QipPkiZfc51_il5jvNA2_TxT9UJt9v1y5BjalsBXi7QDjeK04Obcj5tEu1hQvyGXrJg?key=cDFxeXVqVlVKb0tpby1kbU5kbTk2Uzc4SWQtSm9n" target="_blank" rel="noopener noreferrer">
            <div className={styles.imageWrapper}>
              <img
                src="/images/photo-gallery/50.jpg"
                alt="Adam Tan Huang Chew"
                className={styles.cardImage}
              />
              <img
                src="/images/photo-gallery/50.jpg" // Replace with hover image if needed
                alt="Hover Image"
                className={styles.hoverImage}
              />
            </div>
            <p className={styles.description}>June 17, 2014</p>
          </a>
        </div>
        <div className={styles.card}>
          <a href="https://photos.google.com/share/AF1QipOx6TuvNfQ5-kekR0OkfqN0NvmQX376EyImhEhrdefF51D3jZP4stVxqYDQ_0iPdw?key=akRJYXhkRFBMMjRxM3JnNmE5TkYtZEtCNDZQa25R" target="_blank" rel="noopener noreferrer">
            <div className={styles.imageWrapper}>
              <img
                src="/images/photo-gallery/51.jpg"
                alt="Adam Tan Huang Chew"
                className={styles.cardImage}
              />
              <img
                src="/images/photo-gallery/51.jpg" // Replace with hover image if needed
                alt="Hover Image"
                className={styles.hoverImage}
              />
            </div>
            <p className={styles.description}>Aeon Kulaijaya (28 - 1 June 2014)</p>
          </a>
        </div>
        <div className={styles.card}>
          <a href="https://photos.google.com/share/AF1QipNKC7hIvid8hRqeYP-nZXEvLfHXzW1Pkn5T7y3hO121WsiCVYTDQCkHq3e3sC_CnA?key=OXFHS1RlSDRzNy1mOHJaaEEzekZvX1RlNDlrSlhn" target="_blank" rel="noopener noreferrer">
            <div className={styles.imageWrapper}>
              <img
                src="/images/photo-gallery/52.jpg"
                alt="Adam Tan Huang Chew"
                className={styles.cardImage}
              />
              <img
                src="/images/photo-gallery/52.jpg" // Replace with hover image if needed
                alt="Hover Image"
                className={styles.hoverImage}
              />
            </div>
            <p className={styles.description}>Chenor, Pahang (17 May 2014)</p>
          </a>
        </div>
        <div className={styles.card}>
          <a href="https://photos.google.com/share/AF1QipPVfSLFhHN7qTdSJTlsPPcnemWryxzT7_8-Hm1Ky4Y_RD4rVFNd_TKNl7iORQCsLg?key=d1R1djRjTWdsMDcwS3A4UTROX24tbDBZQ1dxMGJn" target="_blank" rel="noopener noreferrer">
            <div className={styles.imageWrapper}>
              <img
                src="/images/photo-gallery/53.jpg"
                alt="Adam Tan Huang Chew"
                className={styles.cardImage}
              />
              <img
                src="/images/photo-gallery/53.jpg" // Replace with hover image if needed
                alt="Hover Image"
                className={styles.hoverImage}
              />
            </div>
            <p className={styles.description}>Kg.Bolok Hulu,Lanchang,Pahang (11 May 2014)</p>
          </a>
        </div>
        <div className={styles.card}>
          <a href="https://photos.google.com/share/AF1QipP-v81iJn3iqEXfPWc4Pv8kCbRQ5Hq4tjqNI0LFo2Wzu-ayBpFk-9v1Uam_xFU7FA?key=V3I5UU9pc2wxallqZUZPSDJHcnlKX1ZsWXpfUE1n" target="_blank" rel="noopener noreferrer">
            <div className={styles.imageWrapper}>
              <img
                src="/images/photo-gallery/54.jpg"
                alt="Adam Tan Huang Chew"
                className={styles.cardImage}
              />
              <img
                src="/images/photo-gallery/54.jpg" // Replace with hover image if needed
                alt="Hover Image"
                className={styles.hoverImage}
              />
            </div>
            <p className={styles.description}>SM Chung Hua,Klang (6 May 2014)</p>
          </a>
        </div>
        <div className={styles.card}>
          <a href="https://photos.google.com/share/AF1QipO8HoVfqtuWsQ8rpuWhPItkUJNa-qjpiaIS9ITsahPra17XgL3iDRUm0KBrn8vQlQ?key=YWJnbGwtX1VqUGdwM0h2ZkJrcGowSEF6Z1FWVVlR" target="_blank" rel="noopener noreferrer">
            <div className={styles.imageWrapper}>
              <img
                src="/images/photo-gallery/55.jpg"
                alt="Adam Tan Huang Chew"
                className={styles.cardImage}
              />
              <img
                src="/images/photo-gallery/55.jpg" // Replace with hover image if needed
                alt="Hover Image"
                className={styles.hoverImage}
              />
            </div>
            <p className={styles.description}>Kg. Bestari Jaya (3 May 2014)</p>
          </a>
        </div>
        <div className={styles.card}>
          <a href="https://photos.google.com/share/AF1QipMXIqGVaFdyOCwGS0mHimNY_PoelmLt-zwPCANCghogyAv5zvh-C1Hjd9O4TkbR2Q?key=V2FVQmlnRFA4ZXAwdTVJdGg3UEdCZ0pLU2tfRF9B" target="_blank" rel="noopener noreferrer">
            <div className={styles.imageWrapper}>
              <img
                src="/images/photo-gallery/56.jpg"
                alt="Adam Tan Huang Chew"
                className={styles.cardImage}
              />
              <img
                src="/images/photo-gallery/56.jpg" // Replace with hover image if needed
                alt="Hover Image"
                className={styles.hoverImage}
              />
            </div>
            <p className={styles.description}>Heart Week Kuantan,Pahang (26-30 April 2014)</p>
          </a>
        </div>
        <div className={styles.card}>
          <a href="https://photos.google.com/share/AF1QipNoKt5ranwjC2LknXiQQVsBEWlvqTvdg7oBLuSJmx5-jSHEgGjSehQR06S224U88g?key=RzBCTzdyWnE5eE03N1JhMUEzeGhTNEZ6ZGFJQ2hB" target="_blank" rel="noopener noreferrer">
            <div className={styles.imageWrapper}>
              <img
                src="/images/photo-gallery/57.jpg"
                alt="Adam Tan Huang Chew"
                className={styles.cardImage}
              />
              <img
                src="/images/photo-gallery/57.jpg" // Replace with hover image if needed
                alt="Hover Image"
                className={styles.hoverImage}
              />
            </div>
            <p className={styles.description}>Labuan's Go Red forWomen (13 April 2014)</p>
          </a>
        </div>
        <div className={styles.card}>
          <a href="https://photos.google.com/share/AF1QipM7mE2zb3ptz8zisu6YNUke8Xndp9_vK4nwQ2hQGPAAiaVrhBc1UN1Cylw29BlhIQ?key=YUh4cnJKNHFqd2ItLUVaNzhVZ05BVzNqdDcxRGFR" target="_blank" rel="noopener noreferrer">
            <div className={styles.imageWrapper}>
              <img
                src="/images/photo-gallery/58.jpg"
                alt="Adam Tan Huang Chew"
                className={styles.cardImage}
              />
              <img
                src="/images/photo-gallery/58.jpg" // Replace with hover image if needed
                alt="Hover Image"
                className={styles.hoverImage}
              />
            </div>
            <p className={styles.description}>PUSPANITA (9 April 2014)</p>
          </a>
        </div>
        <div className={styles.card}>
          <a href="https://photos.google.com/share/AF1QipNmmCUs_9tlVkWWZSujAsJmdiwnqTbEGIMdda4F4PWG9kvkVkCCCeac0WeUwtmaBg?key=UVFqaGVsWjc2U3BtU2k0YnFfRGtTWVlFWGdSZUln" target="_blank" rel="noopener noreferrer">
            <div className={styles.imageWrapper}>
              <img
                src="/images/photo-gallery/59.jpg"
                alt="Adam Tan Huang Chew"
                className={styles.cardImage}
              />
              <img
                src="/images/photo-gallery/59.jpg" // Replace with hover image if needed
                alt="Hover Image"
                className={styles.hoverImage}
              />
            </div>
            <p className={styles.description}>Community Bestari Jaya (15 February 2014)</p>
          </a>
        </div>
        <div className={styles.card}>
          <a href="https://photos.google.com/share/AF1QipNiLvdfj26KWZbqC39xYQeOkHC6EOM0uXgTt_cTH-aIwKFwbKsJdDLlGD-jcTSa8w?key=T0c5bmRnbGZmMHNvWEJMSlNuUXJ6M1ZGR2pMWG13" target="_blank" rel="noopener noreferrer">
            <div className={styles.imageWrapper}>
              <img
                src="/images/photo-gallery/60.jpg"
                alt="Adam Tan Huang Chew"
                className={styles.cardImage}
              />
              <img
                src="/images/photo-gallery/60.jpg" // Replace with hover image if needed
                alt="Hover Image"
                className={styles.hoverImage}
              />
            </div>
            <p className={styles.description}>Sekolah Beaconhouse Sri Murni, Batu 9, Cheras, Selangor (11 February 2014)</p>
          </a>
        </div>

        <div className={styles.card}>
          <a href="https://photos.google.com/share/AF1QipMLqhkqfNkOhLe1LPFMWABWP_r59o_mnSkDUfiB9Vb1jpdkARNMnBKhL0tMwVt1uQ?key=ZkEtUGVOcEItTHZScWEwTDBYYkk4bEs5RzJjMHdB" target="_blank" rel="noopener noreferrer">
            <div className={styles.imageWrapper}>
              <img
                src="/images/photo-gallery/61.jpg"
                alt="Adam Tan Huang Chew"
                className={styles.cardImage}
              />
              <img
                src="/images/photo-gallery/61.jpg" // Replace with hover image if needed
                alt="Hover Image"
                className={styles.hoverImage}
              />
            </div>
            <p className={styles.description}>Tanjong Karang, Selangor (5 January 2014)</p>
          </a>
        </div>
        <div className={styles.card}>
          <a href="https://photos.google.com/share/AF1QipN8X6kbzDRoo5COznHVbKwxYcB8i_tcBnbB77zoBc_e6gQkafG1a8AqXuBlRYjdyQ?key=cWxmR3Y5aE55QVZtTmJMTFJETWRncU9MbWNjREFB" target="_blank" rel="noopener noreferrer">
            <div className={styles.imageWrapper}>
              <img
                src="/images/photo-gallery/62.jpg"
                alt="Adam Tan Huang Chew"
                className={styles.cardImage}
              />
              <img
                src="/images/photo-gallery/62.jpg" // Replace with hover image if needed
                alt="Hover Image"
                className={styles.hoverImage}
              />
            </div>
            <p className={styles.description}>Chukai, Kemaman, Terengganu (26 October 2013)</p>
          </a>
        </div>
        <div className={styles.card}>
          <a href="https://photos.google.com/share/AF1QipOEsCoH7vfWeFiJoO55xqVXrAnkHLSYi52eyE6WrUc4yM5c2q_k6AOkDgW0YalTAA?key=aU5sZkJLQzZQZHVDRnc0QlVIM0dNNDZTTjltNG5R" target="_blank" rel="noopener noreferrer">
            <div className={styles.imageWrapper}>
              <img
                src="/images/photo-gallery/63.jpg"
                alt="Adam Tan Huang Chew"
                className={styles.cardImage}
              />
              <img
                src="/images/photo-gallery/63.jpg" // Replace with hover image if needed
                alt="Hover Image"
                className={styles.hoverImage}
              />
            </div>
            <p className={styles.description}>Poster Exhibition, Hotel Sunway Putra (14 & 15 December 2013)</p>
          </a>
        </div>
        <div className={styles.card}>
          <a href="https://photos.google.com/share/AF1QipN_8DeG-NIL6cE4FPYeKzfOyKsz3qIhMlQna-DpP8Zylhdylh-4lIXrYU5DvbWDqQ?key=ZHBRNW5OcllaemJ3NkFDWkRHbXg4VVgtMlNid0NB" target="_blank" rel="noopener noreferrer">
            <div className={styles.imageWrapper}>
              <img
                src="/images/photo-gallery/64.jpg"
                alt="Adam Tan Huang Chew"
                className={styles.cardImage}
              />
              <img
                src="/images/photo-gallery/64.jpg" // Replace with hover image if needed
                alt="Hover Image"
                className={styles.hoverImage}
              />
            </div>
            <p className={styles.description}>Heart Week Manjung (22-24 November 2013)</p>
          </a>
        </div>
        <div className={styles.card}>
          <a href="https://photos.google.com/share/AF1QipPXcupeRhrp3YiGjno6yeC-2dvQNNcAwNWIquh7LCrFsYQI4167gpqQD7QpIK1omw?key=Q1dDQ3BNZ0lyYWlLbHdRTGNhMTlDUkR2Zk4zSHNB" target="_blank" rel="noopener noreferrer">
            <div className={styles.imageWrapper}>
              <img
                src="/images/photo-gallery/65.jpg"
                alt="Adam Tan Huang Chew"
                className={styles.cardImage}
              />
              <img
                src="/images/photo-gallery/65.jpg" // Replace with hover image if needed
                alt="Hover Image"
                className={styles.hoverImage}
              />
            </div>
            <p className={styles.description}>Heart Week Kluang (8-10 November 2013)</p>
          </a>
        </div>
        <div className={styles.card}>
          <a href="https://photos.google.com/share/AF1QipP022irUp-6zGgENKHu7mYjfCfylN9IGAiYjT2ob2QTkjsObceywfnTiT0KQcxCSw?key=QnltUzE3OUJFcnkyLWpqS3gzdUMxZVVNdGJ3ZHJB" target="_blank" rel="noopener noreferrer">
            <div className={styles.imageWrapper}>
              <img
                src="/images/photo-gallery/66.jpg"
                alt="Adam Tan Huang Chew"
                className={styles.cardImage}
              />
              <img
                src="/images/photo-gallery/66.jpg" // Replace with hover image if needed
                alt="Hover Image"
                className={styles.hoverImage}
              />
            </div>
            <p className={styles.description}>Chukai, Kemaman, Terengganu (26 October 2013)</p>
          </a>
        </div>
        <div className={styles.card}>
          <a href="https://photos.google.com/share/AF1QipNyjKHzrtzG3h1SiE1wOCekfkK_7fig46B5dd9YaGea1GjsSAIbOXQD8Io9CdaRlA?key=WE1RMlhUR1dKREx4ZEtENnFpU2t2QXJicUNoYklR" target="_blank" rel="noopener noreferrer">
            <div className={styles.imageWrapper}>
              <img
                src="/images/photo-gallery/67.jpg"
                alt="Adam Tan Huang Chew"
                className={styles.cardImage}
              />
              <img
                src="/images/photo-gallery/67.jpg" // Replace with hover image if needed
                alt="Hover Image"
                className={styles.hoverImage}
              />
            </div>
            <p className={styles.description}>November 12, 2013</p>
          </a>
        </div>
        <div className={styles.card}>
          <a href="https://photos.google.com/share/AF1QipMrr9pI8vDMOGb-Hz41BNJF2K_KJg2Z1Yzvqo4McQTBp3EFCr_sLWYj5Ce1yCxEMA?key=UE9lRk5oNW5kdGllMHhSdFgzN0s4Vlo4Qk9aZk5B" target="_blank" rel="noopener noreferrer">
            <div className={styles.imageWrapper}>
              <img
                src="/images/photo-gallery/68.jpg"
                alt="Adam Tan Huang Chew"
                className={styles.cardImage}
              />
              <img
                src="/images/photo-gallery/68.jpg" // Replace with hover image if needed
                alt="Hover Image"
                className={styles.hoverImage}
              />
            </div>
            <p className={styles.description}>School Program - MRSM Muar (22 October 2013)</p>
          </a>
        </div>
        <div className={styles.card}>
          <a href="https://photos.google.com/share/AF1QipPkzNFfjjRIZU3EYzCSLewpRHPrn4T6JgAhX3SOKTaSXPLALR3xi-KU_ndr5j99yw?key=eGhIaHZ4MGhOSWJDYjA0Z3A4RW9od2wyanlnNFJ3" target="_blank" rel="noopener noreferrer">
            <div className={styles.imageWrapper}>
              <img
                src="/images/photo-gallery/69.jpg"
                alt="Adam Tan Huang Chew"
                className={styles.cardImage}
              />
              <img
                src="/images/photo-gallery/69.jpg" // Replace with hover image if needed
                alt="Hover Image"
                className={styles.hoverImage}
              />
            </div>
            <p className={styles.description}>Elken (9 October 2013)</p>
          </a>
        </div>
        <div className={styles.card}>
          <a href="https://photos.google.com/share/AF1QipPO9IsiOVKqnWgM_JZZMNtwRfFtRn5lRJZd-j8Bx2S0yC7SxbqnfVkVASNQhlBbCg?key=enZHaVJHREl6SG5mWm4tRE4zOFZSUTZGWExGczNn" target="_blank" rel="noopener noreferrer">
            <div className={styles.imageWrapper}>
              <img
                src="/images/photo-gallery/70.jpg"
                alt="Adam Tan Huang Chew"
                className={styles.cardImage}
              />
              <img
                src="/images/photo-gallery/70.jpg" // Replace with hover image if needed
                alt="Hover Image"
                className={styles.hoverImage}
              />
            </div>
            <p className={styles.description}>Sg. Jerik,Jengka, Pahang (6 October 2013)</p>
          </a>
        </div>
        <div className={styles.card}>
          <a href="https://photos.google.com/share/AF1QipOSRsx_J8KC4bKz5Hx2_XqB3GwGBTa0L0AgQSloJjDJyPWQxVKKsIudxcdqli6E-w?key=RDJ5UVp5Y3NYeTlCMG8zYUxnQk0wUndfdGdNclp3" target="_blank" rel="noopener noreferrer">
            <div className={styles.imageWrapper}>
              <img
                src="/images/photo-gallery/71.jpg"
                alt="Adam Tan Huang Chew"
                className={styles.cardImage}
              />
              <img
                src="/images/photo-gallery/71.jpg" // Replace with hover image if needed
                alt="Hover Image"
                className={styles.hoverImage}
              />
            </div>
            <p className={styles.description}>World Heart Day 2013</p>
          </a>
        </div>
        <div className={styles.card}>
          <a href="https://photos.google.com/share/AF1QipORXfMuRwgNkHtkGVkQ5d8DRcaOh34u5Klgb_k7IVTYXbj8bDsdiO7WZQIwt2-4Ag?key=WkZ2cWFTRXFYTUtHVjhuWW5JVkpUbHI0cllzQ3N3" target="_blank" rel="noopener noreferrer">
            <div className={styles.imageWrapper}>
              <img
                src="/images/photo-gallery/72.jpg"
                alt="Adam Tan Huang Chew"
                className={styles.cardImage}
              />
              <img
                src="/images/photo-gallery/72.jpg" // Replace with hover image if needed
                alt="Hover Image"
                className={styles.hoverImage}
              />
            </div>
            <p className={styles.description}>Kota Marudu's Go Red For Women, Sabah (24-25 August 2013)</p>
          </a>
        </div>
        <div className={styles.card}>
          <a href="https://photos.google.com/share/AF1QipM2gPSKVDzUa3gkGrgysL8aUhNOKFbrKLE2aD_-pfH_FnTrKlnK_7d_sLvNTKU1Tg?key=Y01mUU5LbGdWdE1LQmlzTjlOQXo0WHVWUThNVGx3" target="_blank" rel="noopener noreferrer">
            <div className={styles.imageWrapper}>
              <img
                src="/images/photo-gallery/73.jpg"
                alt="Adam Tan Huang Chew"
                className={styles.cardImage}
              />
              <img
                src="/images/photo-gallery/73.jpg" // Replace with hover image if needed
                alt="Hover Image"
                className={styles.hoverImage}
              />
            </div>
            <p className={styles.description}>Kota Kinabalu Heart Week, Sabah (17 - 22 August 2013)</p>
          </a>
        </div>
        <div className={styles.card}>
          <a href="https://photos.google.com/share/AF1QipOmIFx3mddWqVCsDxjeVOm8g7zFcc1tPEzn0TBkZ6o8gxBBBobQjUr72Wruw6ga9w?key=S1R0ZTUzTjMzUmcxYTdidzdUTmRQTy0zcEl6cDZB" target="_blank" rel="noopener noreferrer">
            <div className={styles.imageWrapper}>
              <img
                src="/images/photo-gallery/74.jpg"
                alt="Adam Tan Huang Chew"
                className={styles.cardImage}
              />
              <img
                src="/images/photo-gallery/74.jpg" // Replace with hover image if needed
                alt="Hover Image"
                className={styles.hoverImage}
              />
            </div>
            <p className={styles.description}>YMCA Kuala Lumpur (6 July 2013)</p>
          </a>
        </div>
        <div className={styles.card}>
          <a href="https://photos.google.com/share/AF1QipPSs5An9RjPnOqqXImfo7amkKTNoJUOHAjtswZZVQVKkZA1Q9Xc_s-UMA-vwdeFAQ?key=TG5sb1FFWkxoTjBKblNkNGVuclVkUkNTTmJWT1h3" target="_blank" rel="noopener noreferrer">
            <div className={styles.imageWrapper}>
              <img
                src="/images/photo-gallery/75.jpg"
                alt="Adam Tan Huang Chew"
                className={styles.cardImage}
              />
              <img
                src="/images/photo-gallery/75.jpg" // Replace with hover image if needed
                alt="Hover Image"
                className={styles.hoverImage}
              />
            </div>
            <p className={styles.description}>SMK Seremban 2, Negeri Sembilan</p>
          </a>
        </div>
        <div className={styles.card}>
          <a href="https://photos.google.com/share/AF1QipM5HCC6NZrVrIoKoVZhtLqUsmtEAUpyneMB8Hwr3nxXVbvaBOy9cSoUMGksMclXjw?key=VFNwaEp3WjVWclExaEltYWx4dFlUSWRsTjVoN2FB" target="_blank" rel="noopener noreferrer">
            <div className={styles.imageWrapper}>
              <img
                src="/images/photo-gallery/76.jpg"
                alt="Adam Tan Huang Chew"
                className={styles.cardImage}
              />
              <img
                src="/images/photo-gallery/76.jpg" // Replace with hover image if needed
                alt="Hover Image"
                className={styles.hoverImage}
              />
            </div>
            <p className={styles.description}>Sri Jaya,Maran, Pahang (23 Jun 2013)</p>
          </a>
        </div>
        <div className={styles.card}>
          <a href="https://photos.google.com/share/AF1QipOTeQ5LIgbUkg5MiDiUmMezSkCXoENmyO5HpG2r8mEvVOScof6OAandCXlX6l_iJw?key=dGR5Zy1raFBqYThwQlZYZS1CdXFfbHdVTngzTGVR" target="_blank" rel="noopener noreferrer">
            <div className={styles.imageWrapper}>
              <img
                src="/images/photo-gallery/77.jpg"
                alt="Adam Tan Huang Chew"
                className={styles.cardImage}
              />
              <img
                src="/images/photo-gallery/77.jpg" // Replace with hover image if needed
                alt="Hover Image"
                className={styles.hoverImage}
              />
            </div>
            <p className={styles.description}>Kg. Panchor, Seremban (16 Jun 2013)</p>
          </a>
        </div>
        <div className={styles.card}>
          <a href="https://photos.google.com/share/AF1QipPYa3tm0aOSu7gQAtsKFZF1xyfIP0ge7Xkj-sZfkF8Yd9xa0DotxYF-xFCyggmNaA?key=ZGM5dm1QbFZQRWFTMFlESmZJQkFfTXI0Tk5VcVJR" target="_blank" rel="noopener noreferrer">
            <div className={styles.imageWrapper}>
              <img
                src="/images/photo-gallery/78.jpg"
                alt="Adam Tan Huang Chew"
                className={styles.cardImage}
              />
              <img
                src="/images/photo-gallery/78.jpg" // Replace with hover image if needed
                alt="Hover Image"
                className={styles.hoverImage}
              />
            </div>
            <p className={styles.description}>Mini Heart Week AEON Bukit Indah, Johor (7-9 June 2013)</p>
          </a>
        </div>
        <div className={styles.card}>
          <a href="https://photos.google.com/share/AF1QipMyN9Z-Ho4p2Iae97FVpLM_PhLYLizjIiiiCxElSQa7iyD8POtRJNv0f16aUgRjUg?key=OTRuWG5NYTFaS1l4VjlqR0NWX2FCMi1VY0F3QlZB" target="_blank" rel="noopener noreferrer">
            <div className={styles.imageWrapper}>
              <img
                src="/images/photo-gallery/79.jpg"
                alt="Adam Tan Huang Chew"
                className={styles.cardImage}
              />
              <img
                src="/images/photo-gallery/79.jpg" // Replace with hover image if needed
                alt="Hover Image"
                className={styles.hoverImage}
              />
            </div>
            <p className={styles.description}>BOD and Staff</p>
          </a>
        </div>
        <div className={styles.card}>
          <a href="https://photos.google.com/share/AF1QipNCQ7PdXl3rYbK9gUVtkEqqstVr4VUPaf1Wah-mgBF820HCY-RAtGVRK4-1ZYT4AA?key=Ym5fZ1MtWDhFQ0NPd2xHclRURm9UYzg4LVNnN0RR" target="_blank" rel="noopener noreferrer">
            <div className={styles.imageWrapper}>
              <img
                src="/images/photo-gallery/80.jpg"
                alt="Adam Tan Huang Chew"
                className={styles.cardImage}
              />
              <img
                src="/images/photo-gallery/80.jpg" // Replace with hover image if needed
                alt="Hover Image"
                className={styles.hoverImage}
              />
            </div>
            <p className={styles.description}>Consist Training Centre (26 March 2013)</p>
          </a>
        </div>
        <div className={styles.card}>
          <a href="https://photos.google.com/share/AF1QipPS3of35gK9bNNYlKFlgu9DxKyo8WKQ1QEd33EfwMRDd7OJgzkv-YId2NU681x4Bg?key=S2JoVFVoY09QOEdITnNRYTk1dzBSU1Y1bXd3MUpR" target="_blank" rel="noopener noreferrer">
            <div className={styles.imageWrapper}>
              <img
                src="/images/photo-gallery/81.jpg"
                alt="Adam Tan Huang Chew"
                className={styles.cardImage}
              />
              <img
                src="/images/photo-gallery/81.jpg" // Replace with hover image if needed
                alt="Hover Image"
                className={styles.hoverImage}
              />
            </div>
            <p className={styles.description}>Heart Week Alor Setar, Kedah (16-19 May 2013)</p>
          </a>
        </div>
        <div className={styles.card}>
          <a href="https://photos.google.com/share/AF1QipPKAKAvJgpMGvDroxzqbdRg8WrjBQ1-_GZ0GXRmkSsoJ06KdmrxSU_4wt86x66XXw?key=LWZWWDZNQkVQV19UV3B3X1lWeW5jRDVrcE9EWEZR" target="_blank" rel="noopener noreferrer">
            <div className={styles.imageWrapper}>
              <img
                src="/images/photo-gallery/82.jpg"
                alt="Adam Tan Huang Chew"
                className={styles.cardImage}
              />
              <img
                src="/images/photo-gallery/82.jpg" // Replace with hover image if needed
                alt="Hover Image"
                className={styles.hoverImage}
              />
            </div>
            <p className={styles.description}>Activities</p>
          </a>
        </div>
        <div className={styles.card}>
          <a href="https://photos.google.com/share/AF1QipPzEB163q-WmtgXs03YU8YbJ_0LHpEsVL530QhvkIZvtainy2em2yPRIr3nPLN1sA?key=a2JRUXBjaUVvdjhlWEJJWXNUVFJPMUF2akEzcm93" target="_blank" rel="noopener noreferrer">
            <div className={styles.imageWrapper}>
              <img
                src="/images/photo-gallery/82.jpg"
                alt="Adam Tan Huang Chew"
                className={styles.cardImage}
              />
              <img
                src="/images/photo-gallery/82.jpg" // Replace with hover image if needed
                alt="Hover Image"
                className={styles.hoverImage}
              />
            </div>
            <p className={styles.description}>About YJM</p>
          </a>
        </div>
        <div className={styles.card}>
          <a href="https://photos.google.com/share/AF1QipOG6QsNPOuAYM70OlGhtSh30ZYhzfrHX75GlG8bos71MsHRI74kXWu7pscGIlVYsg?key=Vy0tU2xlVHdLM3p2NmZHcktLaEx3dmxLOXZxQlZn" target="_blank" rel="noopener noreferrer">
            <div className={styles.imageWrapper}>
              <img
                src="/images/photo-gallery/83.jpg"
                alt="Adam Tan Huang Chew"
                className={styles.cardImage}
              />
              <img
                src="/images/photo-gallery/83.jpg" // Replace with hover image if needed
                alt="Hover Image"
                className={styles.hoverImage}
              />
            </div>
            <p className={styles.description}>Cheras Perdana (21 April 2013)</p>
          </a>
        </div>
        <div className={styles.card}>
          <a href="https://photos.google.com/share/AF1QipNixV5YnUNJFbnPMjevb2t4uVucTbg2s8tZJFeJrjlGPnB3B-xjFm0sgPk2MR7jEQ?key=Y2x5OEVWMTh6T0tWNVQwZ3BzSDgzVnVwM3lqSVV3" target="_blank" rel="noopener noreferrer">
            <div className={styles.imageWrapper}>
              <img
                src="/images/photo-gallery/84.jpg"
                alt="Adam Tan Huang Chew"
                className={styles.cardImage}
              />
              <img
                src="/images/photo-gallery/84.jpg" // Replace with hover image if needed
                alt="Hover Image"
                className={styles.hoverImage}
              />
            </div>
            <p className={styles.description}>Maktab Sultan Abu Bakar/English College, Johor Bahru (16-17 April 2013)</p>
          </a>
        </div>
        <div className={styles.card}>
          <a href="https://photos.google.com/share/AF1QipOAM1Bx3jTI_CYAvLUtxelI4u1tk4CN6MNQbK8XOR7MoIOAPyT9-HP_fxPN9YXTFQ?key=N3UzVF9FSXRxaHJLUGNaSDlCZnhzanVrNmJscEt3" target="_blank" rel="noopener noreferrer">
            <div className={styles.imageWrapper}>
              <img
                src="/images/photo-gallery/85.jpg"
                alt="Adam Tan Huang Chew"
                className={styles.cardImage}
              />
              <img
                src="/images/photo-gallery/85.jpg" // Replace with hover image if needed
                alt="Hover Image"
                className={styles.hoverImage}
              />
            </div>
            <p className={styles.description}>Rincing/Masai Johor (14 April 2013)</p>
          </a>
        </div>
        <div className={styles.card}>
          <a href="https://photos.google.com/share/AF1QipNO-PS-zhZCFCHfjIq8LbQY9cooO7ItEvKvvLZN3DXsJar1z5bV6yBN2WUx5xibMw?key=SXRNc0ZtWVZudGJUeUlIa1hpeURiY0tvdThhdmZR" target="_blank" rel="noopener noreferrer">
            <div className={styles.imageWrapper}>
              <img
                src="/images/photo-gallery/86.jpg"
                alt="Adam Tan Huang Chew"
                className={styles.cardImage}
              />
              <img
                src="/images/photo-gallery/86.jpg" // Replace with hover image if needed
                alt="Hover Image"
                className={styles.hoverImage}
              />
            </div>
            <p className={styles.description}>At Monash University Sunway Campus (11 April 2013)</p>
          </a>
        </div>
        <div className={styles.card}>
          <a href="https://photos.google.com/share/AF1QipMjhXgxh5wlrGj4fvdnK9sxpK_AwdiNL1hEAo77ZYRmo3NftU6t4asee-1mvFP_Wg?key=cU1rRllmRkwtSGlxbnhhN2FnSUtvbmZXTW82c1hn" target="_blank" rel="noopener noreferrer">
            <div className={styles.imageWrapper}>
              <img
                src="/images/photo-gallery/87.jpg"
                alt="Adam Tan Huang Chew"
                className={styles.cardImage}
              />
              <img
                src="/images/photo-gallery/87.jpg" // Replace with hover image if needed
                alt="Hover Image"
                className={styles.hoverImage}
              />
            </div>
            <p className={styles.description}>MNRB Holdings (19-21 March 2013)</p>
          </a>
        </div>
        <div className={styles.card}>
          <a href="https://photos.google.com/share/AF1QipOGntBccfT23ClBekUGtum0IC7PJhhA5yuCXUEOoqFl6PTS3y83NKrzGdqFodicsQ?key=eE5CYktIRHhlYlp2azVzS3p6emUtcGlHRXhFSlNR" target="_blank" rel="noopener noreferrer">
            <div className={styles.imageWrapper}>
              <img
                src="/images/photo-gallery/88.jpg"
                alt="Adam Tan Huang Chew"
                className={styles.cardImage}
              />
              <img
                src="/images/photo-gallery/88.jpg" // Replace with hover image if needed
                alt="Hover Image"
                className={styles.hoverImage}
              />
            </div>
            <p className={styles.description}>Go Red for Women - PERLIS (7-8 Mar 2013)</p>
          </a>
        </div>
        <div className={styles.card}>
          <a href="https://photos.google.com/share/AF1QipOSgMhPtHYZgMOel8Uizrq7HGKh8vqcHQRM8jpWF5Fc-40bnq2395W7nJjsCq6Bqg?key=MlktUVAycVk4UVdGLUdRVHlIelRuOGNYTTh0d3hB" target="_blank" rel="noopener noreferrer">
            <div className={styles.imageWrapper}>
              <img
                src="/images/photo-gallery/89.jpg"
                alt="Adam Tan Huang Chew"
                className={styles.cardImage}
              />
              <img
                src="/images/photo-gallery/89.jpg" // Replace with hover image if needed
                alt="Hover Image"
                className={styles.hoverImage}
              />
            </div>
            <p className={styles.description}>Kolej Komuniti Hulu Langat (27 Feb 2013)</p>
          </a>
        </div>
        <div className={styles.card}>
          <a href="https://photos.google.com/share/AF1QipMrWwtU55z3kWUVONkcI_k3l_2rjtAjaDEl-9KrlrZf3qum2wivFABvFX7ibrfoFQ?key=WWFTS2RXVU91b1ZxdjlEYkRWQ0M0QXMzT2Z6MUN3" target="_blank" rel="noopener noreferrer">
            <div className={styles.imageWrapper}>
              <img
                src="/images/photo-gallery/90.jpg"
                alt="Adam Tan Huang Chew"
                className={styles.cardImage}
              />
              <img
                src="/images/photo-gallery/90.jpg" // Replace with hover image if needed
                alt="Hover Image"
                className={styles.hoverImage}
              />
            </div>
            <p className={styles.description}>SMK Berapit (5-6 Feb 2013)</p>
          </a>
        </div>
        <div className={styles.card}>
          <a href="https://photos.google.com/share/AF1QipNJsRY_8emJTvg1pYjGtgl-XZPjkVirmCyFyPIPkPkwJiGhm2EsKP06vSjlTYohwA?key=bkpaV3lwOGkwczV4MmwtMVY2RDEwa2lkNjVGUVRn" target="_blank" rel="noopener noreferrer">
            <div className={styles.imageWrapper}>
              <img
                src="/images/photo-gallery/91.jpg"
                alt="Adam Tan Huang Chew"
                className={styles.cardImage}
              />
              <img
                src="/images/photo-gallery/91.jpg" // Replace with hover image if needed
                alt="Hover Image"
                className={styles.hoverImage}
              />
            </div>
            <p className={styles.description}>Community Program - Tmn Melati, Gombak KL (19 Jan 2013)</p>
          </a>
        </div>
        <div className={styles.card}>
          <a href="https://photos.google.com/share/AF1QipN0Ki1yfDC2ZOJIyXO2sOpcXOHa8u19jzCJGp60ufvNh9lSwxtU3uXA7Qpq7KaI5w?key=SFNZRTJyX000NVJQekNxRFlZT2JROGx4MmNGLXNB" target="_blank" rel="noopener noreferrer">
            <div className={styles.imageWrapper}>
              <img
                src="/images/photo-gallery/92.jpg"
                alt="Adam Tan Huang Chew"
                className={styles.cardImage}
              />
              <img
                src="/images/photo-gallery/92.jpg" // Replace with hover image if needed
                alt="Hover Image"
                className={styles.hoverImage}
              />
            </div>
            <p className={styles.description}>SMK Agama Yan Kedah (7-8 Jan 2013)</p>
          </a>
        </div>
        <div className={styles.card}>
          <a href="https://photos.google.com/share/AF1QipO8t0ST-NCpl_Svgz2fCX1Z6WuYObhojxvJbWIjUh8lSc3oJvZDahYwsgAcTvIaHA?key=RXV2UEw1ckxNb1VMNWdSOVVUYkhnSk5Ga0FLVEhB" target="_blank" rel="noopener noreferrer">
            <div className={styles.imageWrapper}>
              <img
                src="/images/photo-gallery/93.jpg"
                alt="Adam Tan Huang Chew"
                className={styles.cardImage}
              />
              <img
                src="/images/photo-gallery/93.jpg" // Replace with hover image if needed
                alt="Hover Image"
                className={styles.hoverImage}
              />
            </div>
            <p className={styles.description}>Naka Kedah (6 Jan 2013)</p>
          </a>
        </div>
        <div className={styles.card}>
          <a href="https://photos.google.com/share/AF1QipPZz_Np51Eu97lo30CjHnXDh9i1mmqUl8-oBKxpdZCy5NgkoPLe0jrdaJT14K5Jrg?key=YUdSakF3cERyWmVPazZMOUlISnRMTG0tZXM0ck1n" target="_blank" rel="noopener noreferrer">
            <div className={styles.imageWrapper}>
              <img
                src="/images/photo-gallery/94.jpg"
                alt="Adam Tan Huang Chew"
                className={styles.cardImage}
              />
              <img
                src="/images/photo-gallery/94.jpg" // Replace with hover image if needed
                alt="Hover Image"
                className={styles.hoverImage}
              />
            </div>
            <p className={styles.description}>Lubok Merbau Kedah (5 Jan 2013)</p>
          </a>
        </div>
        <div className={styles.card}>
          <a href="https://photos.google.com/share/AF1QipOXHyWb_gR0JeM-ABT3792gXgYcSrMSsuzHHcEju3F68WubJ89MgKciMTYYh-idAg?key=VkxITUxEaVpSQXRPUVBzMDg3UXRQNDdWOVBoVWFB" target="_blank" rel="noopener noreferrer">
            <div className={styles.imageWrapper}>
              <img
                src="/images/photo-gallery/28.jpg"
                alt="Adam Tan Huang Chew"
                className={styles.cardImage}
              />
              <img
                src="/images/photo-gallery/28.jpg" // Replace with hover image if needed
                alt="Hover Image"
                className={styles.hoverImage}
              />
            </div>
            <p className={styles.description}>Hall Rental</p>
          </a>
        </div>
        <div className={styles.card}>
          <a href="https://photos.google.com/share/AF1QipMl16j3jgKoN-ql-IKA2B3o0hbvRH5zergpigZfce6AFMh-oQc-Brl1yaB8up-jjg?key=c1JzS3V2OFFEd2gzUURSa1JuZ1JrSlJ0aVljSGJR" target="_blank" rel="noopener noreferrer">
            <div className={styles.imageWrapper}>
              <img
                src="/images/photo-gallery/27.jpg"
                alt="Adam Tan Huang Chew"
                className={styles.cardImage}
              />
              <img
                src="/images/photo-gallery/27.jpg" // Replace with hover image if needed
                alt="Hover Image"
                className={styles.hoverImage}
              />
            </div>
            <p className={styles.description}>Half Way House</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default PhotoGallery;
