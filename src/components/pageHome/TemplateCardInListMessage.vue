<template>
  <div class="card mt-5 mb-7 pa-5 mr-2">
    <!-- card-header -->
    <div class="card__header">
      <div class="card__text mr-2">
        <!-- text-card -->
        {{ textInCard }}
      </div>
      <div class="card__wrapper-image">
        <!-- images -->
        <img class="card__image" :src="imageInCard" alt="" />
      </div>
    </div>
    <!-- end card-header -->
    <!-- gray line -->
    <div class="line-gray mt-2"></div>

    <!-- tooltip - подсказка при наведение -->
    <v-tooltip bottom>
      <template v-slot:activator="{ on, attrs }">
        <div v-bind="attrs" v-on="on" class="card__category mt-2 mb-2">
          <svg
            class="mr-2"
            width="12"
            height="13"
            viewBox="0 0 12 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              id="&#239;&#151;&#189;"
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M6.2494 6.44604L11.7089 3.96938C12.0968 3.79337 12.0968 3.20721 11.7089 3.0312L6.24966 0.554314C6.18406 0.52433 6.07227 0.5 6.00015 0.5C5.92803 0.5 5.81627 0.52433 5.75067 0.554314L0.290914 3.03097C-0.0969713 3.20698 -0.0969713 3.79337 0.290914 3.96938L5.75042 6.44604C5.90981 6.51846 6.09003 6.51846 6.2494 6.44604ZM6.2494 9.4507L11.7092 6.97594C12.097 6.80016 12.097 6.21423 11.7092 6.03845L10.3477 5.42134L6.55926 7.13861C6.38206 7.21899 6.19385 7.25978 6.00004 7.25978C5.80622 7.25978 5.61824 7.21899 5.44081 7.13861L1.65262 5.42134L0.290914 6.03845C-0.0969713 6.21423 -0.0969713 6.80016 0.290914 6.97594L5.75042 9.4507C5.90981 9.52289 6.09003 9.52289 6.2494 9.4507ZM11.7092 9.97124L6.2494 12.446C6.09003 12.5182 5.90981 12.5182 5.75042 12.446L0.290914 9.97124C-0.0969713 9.79546 -0.0969713 9.20953 0.290914 9.03375L1.64747 8.41899L5.44081 10.1386C5.61824 10.219 5.80622 10.2598 6.00004 10.2598C6.19385 10.2598 6.38206 10.219 6.55926 10.1386L10.3528 8.41899L11.7092 9.03375C12.097 9.20953 12.097 9.79546 11.7092 9.97124Z"
              fill="#97A4BA"
            />
          </svg>
          <!-- category -->
          {{ category }}
        </div>
      </template>
      <span>Информация</span>
    </v-tooltip>
    <!--end tooltip - подсказка при наведение -->

    <!-- gray-line -->
    <div class="line-gray mb-2"></div>

    <!-- footer-card -->
    <div class="card__footer">
      <!-- tooltip - подсказка при наведение -->
      <v-tooltip bottom>
        <template v-slot:activator="{ on, attrs }">
          <div v-bind="attrs" v-on="on" class="card__social-network">
            <svg
              class="mr-1"
              width="15"
              height="9"
              viewBox="0 0 15 9"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.8379 0.621094C13.9141 0.316406 13.8379 0.0625 13.3809 0.0625H11.8828C11.502 0.0625 11.3242 0.265625 11.2227 0.494141C11.2227 0.494141 10.4609 2.34766 9.39453 3.56641C9.03906 3.89648 8.88672 4.02344 8.68359 4.02344C8.60742 4.02344 8.45508 3.89648 8.45508 3.5918V0.621094C8.45508 0.240234 8.35352 0.0625 8.02344 0.0625H5.6875C5.43359 0.0625 5.30664 0.240234 5.30664 0.417969C5.30664 0.773438 5.83984 0.849609 5.89062 1.86523V4.07422C5.89062 4.55664 5.81445 4.6582 5.61133 4.6582C5.10352 4.6582 3.88477 2.7793 3.14844 0.646484C2.99609 0.240234 2.84375 0.0625 2.46289 0.0625H0.964844C0.558594 0.0625 0.457031 0.265625 0.457031 0.494141C0.457031 0.900391 0.964844 2.85547 2.81836 5.4707C4.0625 7.24805 5.81445 8.1875 7.38867 8.1875C8.32812 8.1875 8.45508 7.98438 8.45508 7.62891C8.45508 5.92773 8.37891 5.75 8.83594 5.75C9.06445 5.75 9.44531 5.87695 10.334 6.74023C11.3496 7.75586 11.5273 8.1875 12.0859 8.1875H13.584C14.0156 8.1875 14.2188 7.98438 14.0918 7.55273C13.8125 6.68945 11.9082 4.86133 11.8066 4.73438C11.5781 4.45508 11.6543 4.32812 11.8066 4.07422C11.8066 4.07422 13.6348 1.48438 13.8379 0.621094Z"
                fill="#97A4BA"
              />
            </svg>
            {{ socialNetworks }}
          </div>
        </template>
        <span>Информация 2</span>
      </v-tooltip>

      <!-- icons -->
      <div class="card__list-icons">
        <!-- btns -->
        <button class="card__icon-item">
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
        </button>
        <button class="card__icon-item">
          <svg
            width="23"
            height="23"
            viewBox="0 0 23 23"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="Group 5 Copy 4">
              <g id="Group 9">
                <rect
                  id="Rectangle"
                  width="23"
                  height="23"
                  rx="4"
                  fill="#C4CFDD"
                />
                <path
                  id="&#239;&#129;&#149;"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M17.7968 11.125C17.7968 14.6035 14.9785 17.4218 11.5 17.4218C8.02148 17.4218 5.20312 14.6035 5.20312 11.125C5.20312 7.64648 8.02148 4.82812 11.5 4.82812C14.9785 4.82812 17.7968 7.64648 17.7968 11.125ZM10.4844 14.4765C10.4844 14.6441 10.6215 14.7812 10.789 14.7812H12.2109C12.3785 14.7812 12.5156 14.6441 12.5156 14.4765V12.1406H14.8515C15.0191 12.1406 15.1562 12.0035 15.1562 11.8359V10.414C15.1562 10.2465 15.0191 10.1094 14.8515 10.1094H12.5156V7.77343C12.5156 7.60586 12.3785 7.46874 12.2109 7.46874H10.789C10.6215 7.46874 10.4844 7.60586 10.4844 7.77343V10.1094H8.14843C7.98086 10.1094 7.84374 10.2465 7.84374 10.414V11.8359C7.84374 12.0035 7.98086 12.1406 8.14843 12.1406H10.4844V14.4765Z"
                  fill="white"
                />
              </g>
            </g>
          </svg>
        </button>
        <button class="card__icon-item">
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
        </button>
      </div>

      <!-- checkbox -->
      <v-checkbox
        class="ml-auto mt-auto mb-auto"
        color="#1ABC9C"
        value="red"
        hide-details
      ></v-checkbox>
    </div>
    <!-- end footer-card -->
  </div>
</template>

<script>
export default {
  // пропсы из компонента listMessage
  props: {
    textInCard: {
      type: String,
    },
    imageInCard: {
      type: String,
    },
    socialNetworks: {
      type: String,
    },
    category: {
      type: String,
    },
  },
};
</script>

<style lang="scss">
.card {
  border: 1px solid #c4cfdd;
  border-radius: 4px;

  &__header {
    display: flex;
  }

  &__text {
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;
    color: #4a4f58;
  }

  &__image {
    width: 120px;
    height: 120px;
  }

  &__category {
    padding: 5px;
    background: #ffffff;
    border: 1px solid #c4cfdd;
    box-sizing: border-box;
    border-radius: 4px;
    max-width: 150px;
    display: flex;
    justify-content: center;
    align-items: center;

    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 14px;
    color: #67758d;
  }

  &__social-network {
    padding: 3px;
    margin-right: 10px;
    background: #ffffff;
    border: 1px solid #c4cfdd;
    box-sizing: border-box;
    border-radius: 4px;
    max-width: 90px;
    display: flex;
    justify-content: center;
    align-items: center;

    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 14px;
    color: #67758d;
  }

  &__list-icons {
    display: flex;
  }

  &__footer {
    display: flex;
  }

  &__icon-item {
    display: flex;
    align-items: center;
    margin-left: 5px;
  }
}

// vuetify style
.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: 0.5;
  position: absolute;
  width: 100%;
}
</style>