<template>
  <form class="job-message pa-5" @submit.prevent="">
    <!-- title -->
    <h6 class="job-message__title mb-5">Работа со сообщениями</h6>

    <!-- icons smile -->
    <div class="job-message__icons mb-5">
      <div class="job-message__icons-item mr-auto">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M24 12C24 18.629 18.629 24 12 24C5.37097 24 0 18.629 0 12C0 5.37097 5.37097 0 12 0C18.629 0 24 5.37097 24 12ZM6.58065 9.67742C6.58065 10.5339 7.27257 11.2258 8.12903 11.2258C8.98549 11.2258 9.67742 10.5339 9.67742 9.67742C9.67742 8.82096 8.98549 8.12903 8.12903 8.12903C7.27257 8.12903 6.58065 8.82096 6.58065 9.67742ZM15.871 11.2258C15.0145 11.2258 14.3226 10.5339 14.3226 9.67742C14.3226 8.82096 15.0145 8.12903 15.871 8.12903C16.7274 8.12903 17.4194 8.82096 17.4194 9.67742C17.4194 10.5339 16.7274 11.2258 15.871 11.2258ZM7.35484 15.871C6.32902 15.871 6.32902 17.4194 7.35484 17.4194H16.6452C17.671 17.4194 17.671 15.871 16.6452 15.871H7.35484Z"
            fill="#C4CFDD"
          />
        </svg>
      </div>
      <div class="job-message__icons-item mr-auto">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            id="&#239;&#132;&#152; copy"
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M24 12C24 18.629 18.629 24 12 24C5.37097 24 0 18.629 0 12C0 5.37097 5.37097 0 12 0C18.629 0 24 5.37097 24 12ZM14.3226 9.67742C14.3226 10.5339 15.0145 11.2258 15.871 11.2258C16.7274 11.2258 17.4194 10.5339 17.4194 9.67742C17.4194 8.82096 16.7274 8.12903 15.871 8.12903C15.0145 8.12903 14.3226 8.82096 14.3226 9.67742ZM8.12903 11.2258C7.27257 11.2258 6.58065 10.5339 6.58065 9.67742C6.58065 8.82096 7.27257 8.12903 8.12903 8.12903C8.98549 8.12903 9.67742 8.82096 9.67742 9.67742C9.67742 10.5339 8.98549 11.2258 8.12903 11.2258ZM6.44517 16.3645C7.8242 18.0194 9.84677 18.9677 12 18.9677C14.1532 18.9677 16.1758 18.0194 17.5548 16.3645C18.2081 15.5758 17.0129 14.5887 16.3645 15.3726C15.2806 16.6694 13.6935 17.4145 12 17.4145C10.3065 17.4145 8.71936 16.6742 7.63547 15.3726C6.97743 14.5887 5.78708 15.5758 6.44517 16.3645Z"
            fill="#C4CFDD"
          />
        </svg>
      </div>
      <div class="job-message__icons-item mr-auto">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            id="&#239;&#132;&#153; copy"
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M24 12C24 18.629 18.629 24 12 24C5.37097 24 0 18.629 0 12C0 5.37097 5.37097 0 12 0C18.629 0 24 5.37097 24 12ZM14.3226 9.67742C14.3226 10.5339 15.0145 11.2258 15.871 11.2258C16.7274 11.2258 17.4194 10.5339 17.4194 9.67742C17.4194 8.82096 16.7274 8.12903 15.871 8.12903C15.0145 8.12903 14.3226 8.82096 14.3226 9.67742ZM8.12903 11.2258C7.27257 11.2258 6.58065 10.5339 6.58065 9.67742C6.58065 8.82096 7.27257 8.12903 8.12903 8.12903C8.98549 8.12903 9.67742 8.82096 9.67742 9.67742C9.67742 10.5339 8.98549 11.2258 8.12903 11.2258ZM12 16.6452C13.6887 16.6452 15.2806 17.3903 16.3645 18.6871C17.0178 19.4758 18.2081 18.4839 17.55 17.7C16.1758 16.0451 14.1484 15.0968 12 15.0968C9.85159 15.0968 7.8242 16.0451 6.44517 17.6952C5.79194 18.4839 6.98225 19.4758 7.63547 18.6871C8.71936 17.3903 10.3113 16.6452 12 16.6452Z"
            fill="#C4CFDD"
          />
        </svg>
      </div>
      <div class="job-message__icons-item mr-auto">
        <svg
          width="23"
          height="23"
          viewBox="0 0 23 23"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="Group 5 Copy">
            <g id="Group 9">
              <rect
                id="Rectangle"
                width="23"
                height="23"
                rx="4"
                fill="#C4CFDD"
              />
              <path
                id="&#239;&#135;&#152;"
                d="M9.54807 17.4039L11.1604 15.4412L14.324 16.7666C14.6846 16.9189 15.0959 16.6929 15.1619 16.3045L16.99 5.33574C17.0764 4.82284 16.5254 4.45215 16.0861 4.70605L4.31761 11.4955C3.85805 11.7595 3.91644 12.3994 4.37347 12.5924L7.07249 13.7248L14.3672 7.29589C14.5068 7.17147 14.7049 7.3619 14.5856 7.50663L8.46897 14.9588V17.0027C8.46897 17.6019 9.1926 17.8381 9.54807 17.4039Z"
                fill="white"
              />
            </g>
          </g>
        </svg>
      </div>
    </div>

    <!-- textarea -->
    <textarea
      class="job-message__textarea mb-3"
      name=""
      id=""
      cols="30"
      rows="10"
    ></textarea>

    <!-- BTNS -->
    <button class="global-button-green mr-5">ОК</button>
    <button class="global-button-red">ОТКЛОНИТЬ</button>
  </form>
</template>

<script>
export default {};
</script>

<style lang="scss">
.job-message {
  margin-bottom: 20px;
  background: #ffffff;
  border: 1px solid #eff0f2;
  box-sizing: border-box;
  border-radius: 4px;

  &__title {
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 23px;
    color: #3e4956;
  }

  &__icons {
    display: flex !important;
  }

  &__icons-item svg:hover {
    cursor: pointer;
  }

  &__textarea {
    resize: none;
    width: 100%;
    background: #ffffff;
    border: 1px solid #dee5ef;
    box-sizing: border-box;
    border-radius: 4px;
  }
}

.global-button-green {
  padding: 10px 20px;
  background: #1abc9c;
  box-shadow: 0px 5px 10px -10px rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  transition: 0.5s;

  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  text-align: center;
  letter-spacing: 0.4px;
  text-transform: uppercase;
  color: #ffffff;

  &:hover {
    transition: 0.5s;
    background: #109177;
  }
}

.global-button-red {
  padding: 10px 20px;
  background: #f44336;
  box-shadow: 0px 5px 10px -10px rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  transition: 0.5s;

  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  text-align: center;
  letter-spacing: 0.4px;
  text-transform: uppercase;
  color: #ffffff;

  &:hover {
    transition: 0.5s;
    background: #c23127;
  }
}
</style>