<template>
  <section class="ftco-section contact-section ftco-no-pb" id="contact-section">
    <b-container>
      <b-row class="justify-content-center mb-5 pb-3">
        <b-col md="7" class="heading-section text-center">
          <h1 class="big big-2">تماس</h1>
          <h2 class="mb-4">تماس با من</h2>
          <p>
            خوشحال می شوم با شما هم صحبت بشوم.
          </p>
        </b-col>
      </b-row>

      <b-row class="d-flex contact-info mb-5">
        <b-col md="6" lg="3" class="d-flex">
          <div class="align-self-stretch box text-center p-4 shadow">
            <div class="icon d-flex align-items-center justify-content-center">
              <span class="icon-map-signs"></span>
            </div>
            <div>
              <h3 class="mb-4">آدرس</h3>
              <p>اصفهان</p>
            </div>
          </div>
        </b-col>
        <b-col md="6" lg="3" class="d-flex">
          <div class="align-self-stretch box text-center p-4 shadow">
            <div class="icon d-flex align-items-center justify-content-center">
              <span class="icon-phone2"></span>
            </div>
            <div>
              <h3 class="mb-4">شماره موبایل</h3>
              <p>
                <a href="tel://00989204084800" dir="ltr">+98 920 408 4800</a>
              </p>
            </div>
          </div>
        </b-col>
        <b-col md="6" lg="3" class="d-flex">
          <div class="align-self-stretch box text-center p-4 shadow">
            <div class="icon d-flex align-items-center justify-content-center">
              <span class="icon-paper-plane"></span>
            </div>
            <div>
              <h3 class="mb-4">آدرس ایمیل</h3>
              <p><a href="mailto:hamidne@mail.ru">hamidne@mail.ru</a></p>
            </div>
          </div>
        </b-col>
        <b-col md="6" lg="3" class="d-flex">
          <div class="align-self-stretch box text-center p-4 shadow">
            <div class="icon d-flex align-items-center justify-content-center">
              <span class="icon-globe"></span>
            </div>
            <div>
              <h3 class="mb-4">وب سایت</h3>
              <p><a href="https://hamidne.ir">hamidne.ir</a></p>
            </div>
          </div>
        </b-col>
      </b-row>

      <b-row class="no-gutters block-9">
        <b-col md="6" class="order-md-last d-flex">
          <form action="#" class="bg-light p-4 p-md-5 contact-form">
            <div class="form-group">
              <input
                type="text"
                name="name"
                class="form-control"
                placeholder="نام و نام خانوادگی"
              />
            </div>
            <div class="form-group">
              <input
                type="email"
                name="email"
                class="form-control"
                placeholder="آدرس ایمیل"
              />
            </div>
            <div class="form-group">
              <input
                type="text"
                name="subject"
                class="form-control"
                placeholder="موضوع"
              />
            </div>
            <div class="form-group">
              <textarea
                id=""
                cols="30"
                rows="7"
                name="message"
                class="form-control"
                placeholder="پیام"
              ></textarea>
            </div>
            <div class="form-group">
              <input
                type="submit"
                value="ارسال پیام"
                class="btn btn-primary py-1 px-3"
              />
            </div>
          </form>
        </b-col>

        <b-col md="6" class="d-flex">
          <div class="img" id="personal-image"></div>
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
  background-image: url("../../../assets/img/contact.jpeg");
}
</style>
