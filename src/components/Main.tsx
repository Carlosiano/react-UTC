import { CSSProperties } from "react";
import {
  heroBg,
  heroBanner1,
  heroBanner2,
  heroShape2,
  aboutBanner,
  aboutShape1,
  aboutShape2,
  aboutShape3,
  aboutShape4,
  videoBg,
  videoBanner,
  videoShape1,
  videoShape2,
  blogBg,
  blogShape,
  arrowForwardOutline,
  checkmarkDoneOutline,
  play,
} from "../assets/images";
import { alasanKuliah, categories, fasilitas, infoPMB, kampus } from "../assets/js/data";

export default function Main() {
  return (
    <>
      <main>
        <article>
          {/* - #HERO */}

          <section
            className="section hero has-bg-image"
            id="home"
            aria-label="home"
            style={{ backgroundImage: `url(${heroBg})` }}
          >
            <div className="container">
              <div className="hero-content">
                <h1 className="h1 section-title">
                  Masa depan <span className="span">cerah</span> Anda adalah
                  misi kami
                </h1>

                <p className="hero-text">
                  Excepteur sint occaecat cupidatat non proident sunt in culpa
                  qui officia deserunt mollit.
                </p>

                <div style={{ display: "flex", gap: "1rem" }}>
                  <a href="#" className="btn has-before">
                    <span className="span">Daftar Sekarang</span>
                  </a>

                  <a href="#" className="btn-second has-before">
                    <span className="span">Panduan PMB</span>

                    <div
                      className="ion-icon"
                      style={{ maskImage: `url(${arrowForwardOutline})` }}
                      aria-hidden="true"
                    ></div>
                  </a>
                </div>
              </div>

              <figure className="hero-banner">
                <div
                  className="img-holder one"
                  style={{ "--width": 270, "--height": 300 } as CSSProperties}
                >
                  <img
                    src={heroBanner1}
                    width="270"
                    height="300"
                    alt="hero banner"
                    className="img-cover"
                  />
                </div>

                <div
                  className="img-holder two"
                  style={{ "--width": 240, "--height": 370 } as CSSProperties}
                >
                  <img
                    src={heroBanner2}
                    width="240"
                    height="370"
                    alt="hero banner"
                    className="img-cover"
                  />
                </div>

                <img
                  src={heroShape2}
                  width="622"
                  height="551"
                  alt=""
                  className="shape hero-shape-2"
                />
              </figure>
            </div>
          </section>

          {/* - #CATEGORY */}

          <section
            className="section category"
            id="jenjang"
            aria-label="category"
          >
            <div className="container">
              <p className="section-subtitle">Pilihan Jenjang Pendidikan</p>

              <h2 className="h2 section-title">
                Fakultas Ilmu Komputer <span className="span">(FIK)</span>
              </h2>

              <p className="section-text">Program Sarjana (S1)</p>

              <ul className="grid-list">
                {categories[0].map((item, index) => (
                  <li key={index}>
                    <div
                      className="category-card"
                      style={
                        {
                          "--color": `${item.color[0]}, ${item.color[1]}%, ${item.color[2]}%`,
                        } as CSSProperties
                      }
                    >
                      <div className="card-icon">
                        <img
                          src={item.img}
                          width="40"
                          height="40"
                          loading="lazy"
                          alt={item.title}
                          className="img"
                        />
                      </div>

                      <h3 className="h3">
                        <a href="#" className="card-title">
                          {item.title}
                        </a>
                      </h3>

                      <p className="card-text">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>

              <p className="section-text">Program Diploma (D3)</p>

              <ul className="grid-list">
                {categories[0].map((item, index) => (
                  <li key={index}>
                    <div
                      className="category-card"
                      style={
                        {
                          "--color": `${item.color[0]}, ${item.color[1]}%, ${item.color[2]}%`,
                        } as CSSProperties
                      }
                    >
                      <div className="card-icon">
                        <img
                          src={item.img}
                          width="40"
                          height="40"
                          loading="lazy"
                          alt={item.title}
                          className="img"
                        />
                      </div>

                      <h3 className="h3">
                        <a href="#" className="card-title">
                          {item.title}
                        </a>
                      </h3>

                      <p className="card-text">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* - #ABOUT */}

          <section className="section about" id="why" aria-label="about">
            <div className="container">
              <figure className="about-banner">
                <div
                  className="img-holder"
                  style={{ "--width": 520, "--height": 370 } as CSSProperties}
                >
                  <img
                    src={aboutBanner}
                    width="520"
                    height="370"
                    loading="lazy"
                    alt="about banner"
                    className="img-cover"
                  />
                </div>

                <img
                  src={aboutShape1}
                  width="360"
                  height="420"
                  loading="lazy"
                  alt=""
                  className="shape about-shape-1"
                />

                <img
                  src={aboutShape2}
                  width="371"
                  height="220"
                  loading="lazy"
                  alt=""
                  className="shape about-shape-2"
                />

                <img
                  src={aboutShape3}
                  width="722"
                  height="528"
                  loading="lazy"
                  alt=""
                  className="shape about-shape-3"
                />
              </figure>

              <div className="about-content">
                <p className="section-subtitle">Why?</p>

                <h2 className="h2 section-title">
                  Alasan <span className="span">Mengapa</span> Kuliah di UTC?
                </h2>

                <p className="section-text"></p>

                <ul className="about-list">
                  {alasanKuliah.map( (item, index)=> (
                  <li className="about-item" key={index}>
                    <div
                      className="ion-icon"
                      style={{ maskImage: `url(${checkmarkDoneOutline})` }}
                      aria-hidden="true"
                    ></div>
                    <span className="span">
                      {item}
                    </span>
                  </li>
                  ) )}
                </ul>

                <img
                  src={aboutShape4}
                  width="100"
                  height="100"
                  loading="lazy"
                  alt=""
                  className="shape about-shape-4"
                />
              </div>
            </div>
          </section>

          {/* - #Fasilitas */}

          <section
            className="section course"
            id="fasilitas"
            aria-label="course"
          >
            <div className="container">
              <p className="section-subtitle">Fasilitas Kampus</p>

              <h2 className="h2 section-title">
                Nikmati fasilitas yang tersedia
              </h2>

              <ul className="grid-list">
                {fasilitas.map((item, index) => (
                  <li key={index}>
                    <div className="course-card">
                      <figure
                        className="card-banner img-holder"
                        style={
                          { "--width": 370, "--height": 220 } as CSSProperties
                        }
                      >
                        <img
                          src={item.img}
                          width="370"
                          height="220"
                          loading="lazy"
                          alt="Build Responsive Real- World Websites with HTML and CSS"
                          className="img-cover"
                        />
                      </figure>
                      <div className="card-content">
                        <span className="badge">{item.title}</span>

                        <h3 className="h3">
                          <a href="#" className="card-title-fasilitas">
                            {item.desc}
                          </a>
                        </h3>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>

              <a href="#" className="btn has-before">
                <span className="span">Lihat lebih banyak</span>

                <div
                  className="ion-icon"
                  style={{ maskImage: `url(${arrowForwardOutline})` }}
                  aria-hidden="true"
                ></div>
              </a>
            </div>
          </section>

          {/* INFO PMB */}

          <section className="section course" id="info" aria-label="course">
            <div className="container">
              <p className="section-subtitle">Info PMB</p>
              <h2 className="h2 section-title">Informasi seputar PMB</h2>
              <ul className="grid-list">
                {infoPMB.map((item, index) => (
                  <li style={{ paddingTop: "100px" }} key={index}>
                    <div className="blog-card">
                      <div className="card-content">
                        <a href="#" className="card-btn" aria-label="read more">
                          <div
                            className="ion-icon"
                            style={{ maskImage: `url(${arrowForwardOutline})` }}
                            aria-hidden="true"
                          ></div>
                        </a>
                        <h3 className="h3">
                          <a href="#" className="card-title">
                            {item}
                          </a>
                        </h3>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
              <a href="#" className="btn-second has-before">
                <div
                  className="ion-icon"
                  style={{ maskImage: `url(${arrowForwardOutline})` }}
                  aria-hidden="true"
                ></div>
              </a>
            </div>
          </section>

          {/* - #VIDEO */}

          <section
            className="video has-bg-image"
            aria-label="video"
            style={{ backgroundImage: `url(${videoBg})` }}
          >
            <div className="container">
              <div className="video-card">
                <div
                  className="video-banner img-holder has-after"
                  style={{ "--width": " ", "--height": " " } as CSSProperties}
                >
                  <img
                    src={videoBanner}
                    width="970"
                    height="550"
                    loading="lazy"
                    alt="video banner"
                    className="img-cover"
                  />

                  <button className="play-btn" aria-label="play video">
                    <div
                      className="ion-icon"
                      style={{ maskImage: `url(${play})` }}
                      aria-hidden="true"
                    ></div>
                  </button>
                </div>

                <img
                  src={videoShape1}
                  width="1089"
                  height="605"
                  loading="lazy"
                  alt=""
                  className="shape video-shape-1"
                />

                <img
                  src={videoShape2}
                  width="158"
                  height="174"
                  loading="lazy"
                  alt=""
                  className="shape video-shape-2"
                />
              </div>
            </div>
          </section>

          {/* - #BLOG */}

          <section
            className="section blog has-bg-image"
            id="blog"
            aria-label="blog"
            style={{ backgroundImage: `url(${blogBg})` }}
          >
            <div className="container">
              <p className="section-subtitle">Kampus</p>

              <h2 className="h2 section-title">Cabang Kampus</h2>

              <ul className="grid-list">
                {kampus.map((item, index) => (
                  <li key={index}>
                    <div className="blog-card">
                      <figure
                        className="card-banner img-holder has-after"
                        style={
                          { "--width": 370, "--height": 370 } as CSSProperties
                        }
                      >
                        <img
                          src={item.img}
                          width="370"
                          height="370"
                          loading="lazy"
                          alt="Become A Better Blogger: Content Planning"
                          className="img-cover"
                        />
                      </figure>

                      <div className="card-content">
                        <a href="#" className="card-btn" aria-label="read more">
                          <div
                            className="ion-icon"
                            style={{ maskImage: `url(${arrowForwardOutline})` }}
                            aria-hidden="true"
                          ></div>
                        </a>

                        <a href="#" className="card-subtitle">
                          {item.title}
                        </a>

                        <h3 className="h3">
                          <a href="#" className="card-title">
                            {item.alamat}
                          </a>
                        </h3>
                        <p className="card-text">{item.telp}</p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>

              <img
                src={blogShape}
                width="186"
                height="186"
                loading="lazy"
                alt=""
                className="shape blog-shape"
              />
            </div>
          </section>
        </article>
      </main>
    </>
  );
}
