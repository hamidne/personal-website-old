<template>
  <section
    class="ftco-about img ftco-section ftco-no-pt ftco-no-pb"
    id="about-section"
  >
    <b-container>
      <b-row class="d-flex no-gutters">
        <b-col md="6" class="d-flex">
          <div class="img-about img d-flex align-items-stretch">
            <div class="overlay"></div>
            <div
              class="img d-flex align-self-stretch align-items-center"
              id="personal-image"
            ></div>
          </div>
        </b-col>
        <b-col md="6" class="pr-md-5 py-5">
          <b-row class="justify-content-start pb-3">
            <b-col md="12" class="heading-section ">
              <h1 class="big">درباره</h1>
              <h2 class="mb-4">درباره من</h2>
              <p>
                رودخانه كوچك به نام دادن در جاي خود جاري مي شود و رجياليا لازم
                را تأمين مي كند.
              </p>
              <ul class="about-info mt-4 px-md-0 px-2">
                <li class="d-flex">
                  <span>نام:</span> <span>حمید نصر</span>
                </li>
                <li class="d-flex">
                  <span>محل سکونت:</span> <span>اصفهان</span>
                </li>
                <li class="d-flex">
                  <span>آدرس ایمیل:</span> <span>HamidNE@mail.ru</span>
                </li>
                <li class="d-flex">
                  <span>شماره موبایل: </span> <span dir="ltr">[+98] 920-408-4800</span>
                </li>
              </ul>
            </b-col>
          </b-row>
          <div class="counter-wrap d-flex mt-md-3">
            <div class="text">
              <p class="mb-4">
                <span>پروژه های انجام شده</span>
                <span class="number" data-number="120">0</span>
              </p>
              <p>
                <b-button variant="primary py-1 px-3">دانلود رزومه</b-button>
              </p>
            </div>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
#personal-image {
  background-image: url("../../../assets/img/about.jpeg");
}
</style>
