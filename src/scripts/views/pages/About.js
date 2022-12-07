const About = {
  async render() {
    return `
    <html>
    <body>
    <div class="container-fluid mt-5 px-5" style="width: 75%;">
    <h1 class="text-center">About Page!</h1>
    <div class="container-fluid mt-3">
      <h2>Background</h2>
      <p>Parenting ialah ilmu yang mempelajari tentang cara mendidik anak, mengasuh anak serta membimbing anak dengan cara yang baik dan tepat. Seperti yang telah kita ketahui bahwa, guru pertama kali dari seorang manusia adalah orang tuanya. Baik itu tentang cara anak itu berbicara, berperilaku, ataupun hal lainnya. Itu semua berawal dari lingkungan keluarga, dan yang paling berperan penting dalam lingkungan keluarga adalah seorang Ayah dan Ibu. Maka dari itu parenting sangatlah penting untuk dipelajari oleh siapapun yang akan menjadi orang tua atau bagi yang sudah menjadi orang tua.</p>
    </div>
    
    <div class="container-fluid mt-3">
        <h2>The Growth Familie Profile Team Member</h2>
        <div class="row gap-3 mt-3 d-flex justify-content-center">
            <h4>Back-end Team:</h4>
            <div class="card col-md-4 col-sm-2 col-xs-1" style="box-shadow: none";>
                <img src="./images/suhaefi.png" class="card-img-top mt-2" alt="profile-pic">
                <div class="card-body text-center ">
                  <h5>Suhaefi Fauzian</h5>
                  <p><span><strong>STMIK Bandung</strong></span></p>
                </div>
            </div>

            <div class="card col-md-4 col-sm-2 col-xs-1" style="box-shadow: none";>
                <img src="./images/taqiy.png" class="card-img-top mt-2" alt="profile-pic">
                <div class="card-body text-center">
                  <h5>Taqiy Gusdi</h5>
                  <p><span><strong>Universitas Padjadjaran</strong></span></p>
                </div>
            </div>
            
            <h4>Front-end Team:</h4>
            <div class="card col-md-4 col-sm-2 col-xs-1" style="box-shadow: none";>
                <img src="./images/fajrul.png" class="card-img-top mt-2" alt="profile-pic">
                <div class="card-body text-center">
                  <h5>Muhammad Fajrul Khaq</h5>
                  <p><span><strong>STMIK El Rahma</strong></span></p>
                </div>
            </div>

            <div class="card col-md-4 col-sm-2 col-xs-1" style="box-shadow: none";>
                <img src="./images/tya.png" class="card-img-top mt-2" alt="profile-pic">
                <div class="card-body text-center">
                  <h5>Setyawati Putri Nugraha</h5>
                  <p><span><strong>STMIK Bandung</strong></span></p>
                </div>
            </div>


        </div>
    </div>
    
    <div class="container-fluid mt-2">
        <h2>Article Reference</h2>
        <ul>
            <li><a href="www.alodokter.com">www.alodokter.com</a></li>
            <li><a href="hellosehat.com">hellosehat.com</a></li>
            <li><a href="www.halodoc.com">www.halodoc.com</a></li>
        </ul>
    </div>
    
    </div>
    </body>
    </html>
    `;
  },

  async afterRender() {
    return this.render;
  },
};

export default About;