<style scoped>

ActionBar,
.action-bar {
    background-color: #28ADAA;
    padding-left: 0px;
    android-elevation: 0;
}

.action-bar-title {
    text-align: left;
    font-size: 18px;
    padding-right: 16;
    background-color: #28ADAA;
    vertical-alignment: middle;
}

.action-bar-right {
    text-align: right;
    font-size: 18px;
    padding-right: 16;
    background-color: #28ADAA;
    vertical-alignment: middle;
}

.action-bar-icon {
    font-size: 35px;
    width: 30;
}

.btn-circle {
    width: 50;
    height: 50;
    border-radius: 25;
    border-width: 1;
    border-color: white;
    background-color: white;
    color: #28ADAA;
}

.btn-circle:active {
    background-color: rgb(255,255,255,0.5);
    border-color: rgb(255,255,255,0.5);
}

.click {
  background-color: white;
}

.click:active {
    background-color: rgb(255,255,255,0.5);
    border-color: rgb(255,255,255,0.5);
}


</style>

<template>

<Page ref="page" actionBarHidden="false" backgroundColor="#28BAAA" backgroundSpanUnderStatusBar="true"  @loaded="onLoaded">

  <ActionBar ref="actionbar" color="white">
      <GridLayout width="100%" columns="auto, *, 60%">
          <Ripple rippleColor="#28ADAA" @tap="onBack">
              <Label :text="'ion-ios-arrow-back' | fonticon" class="action-bar-icon ion" />
          </Ripple>
          <Label @tap="onBack" class="action-bar-title" text="Kebiasaan" col="1" />
          <Label class="action-bar-right" text="1/2" col="2" />
      </GridLayout>
  </ActionBar>

    <!-- <ActionBar>
      <GridLayout width="100%" columns="auto, *, *">
        <Ripple rippleColor="orange" @tap="onNavigationButtonTap">
          <Label
            :text="String.fromCharCode('0xf3cf')"
            class="action-bar-icon ion"
          />
        </Ripple>
        <Label class="action-bar-title" text="Buat Laporan" col="1" />
        <Label
          class="action-bar-title"
          text="Ubah"
          @tap="onGotoPage"
          col="2"
        />
      </GridLayout>

    </ActionBar> -->

<GridLayout rows="*,auto">

    <ScrollView ref="Container" @scroll="onScroll" scrollBarIndicatorVisible="false" :isUserInteractionEnabled="isUserInteractionEnabled">
        <StackLayout id="stackList" ref="stackList">

            <!-- <GridLayout height="100px" width="100%" columns="auto, *, *" verticalAlignment="top">
                <Ripple rippleColor="orange" @tap="onNavigationButtonTap">
                    <Label :text="String.fromCharCode('0xf3cf')" class="action-bar-icon ion" />
                </Ripple>
                <Label class="action-bar-title" text="Profile Polisi" col="1" />
                <Label class="action-bar-title" text="Ubah" @tap="onGotoPage" col="2" />
            </GridLayout> -->
            <Gradient ref="Parallex" direction="top down" colors="#28ADAA, #28BAAA">
                <GridLayout columns="*,150,*">

                    <StackLayout col="0" verticalAlignment="middle">
                        <Button text="A" class="btn-circle" />
                    </StackLayout>

                    <StackLayout col="1">
                        <Image src="~/assets/images/love.jpg" stretch="aspectFill" borderRadius="75" borderWidth="5" borderColor="rgba(255,255,255,0.5)" width="150" height="150" />
                    </StackLayout>

                    <StackLayout col="2" verticalAlignment="middle">
                        <Button text="A" class="btn-circle" />
                    </StackLayout>

                </GridLayout>

                <StackLayout horizontalAlignment="center">

                    <Label text="Dessy Indah Fitri" fontSize="18px" fontWeight="bold" textAlignment="center" color="white" paddingTop="15px" paddingLeft="10" paddingRight="10" paddingBottom="15px" />

                    <Label text="1201 Westlake Avenue, Suite 205, Seattle, WA 98121 USA" fontSize="12px" color="white" width="100%" textWrap="true" paddingLeft="50" paddingRight="50" textAlignment="center" />

                    <FlexboxLayout alignItems="flex-starts" horizontalAlignment="center" marginTop="20" marginBottom="20">
                        <!-- Instagram -->
                        <Button :text="String.fromCharCode('0xf16d')" fontSize="20px" width="50" height="50" margin="10px" class="click fa" color="#28ADAA" backgroundColor="white" borderRadius="25%" borderColor="white" />
                        <!-- Twitter -->
                        <Button :text="String.fromCharCode('0xf099')" fontSize="20px" width="50" height="50" margin="10px" class="click fa" color="#28ADAA" backgroundColor="white" borderRadius="25%" borderColor="white" />
                        <!-- Facebook -->
                        <Button :text="String.fromCharCode('0xf09a')" fontSize="20px" width="50" height="50" margin="10px" class="click fa" color="#28ADAA" backgroundColor="white" borderRadius="25%" borderColor="white" />
                    </FlexboxLayout>

                </StackLayout>
            </Gradient>

            <StackLayout ref="content" height="1000">
              <!-- <ProfileSiswa /> -->
            <TabView backgroundColor="white" :selectedIndex="selectedIndex" @selectedIndexChange="indexChange">
                <TabViewItem title="Biodata">
                  <ScrollView @scroll="onScrollNested" height="100%">
                        <StackLayout id="stackListNested">
                        <Label v-for="i in 100" :key="i" text="Content for Tab 1" />
                      </StackLayout>
                  </ScrollView>
                </TabViewItem>
            </TabView>

          </StackLayout>

        </StackLayout>
    </ScrollView>

    <Fab @tap="onScrollTop" ref="fabButton" rowSpan="2" icon="~/assets/icons/baseline_add_white.png" rippleColor="#f1f1f1" class="fab-button"></Fab>
</GridLayout>
</Page>

</template>

<script>

import {
    Frame
}
from "tns-core-modules/ui/frame";

const Vue = require('nativescript-vue')

// import ProfileSiswa from "./profile/view-profile-siswa"

export default {
  components: {
    // ProfileSiswa
  },
  data() {
      return {
          isUserInteractionEnabled: true,

          bus: new Vue(),
          scrollView: null,
      }
  },
        methods: {
            onScrollTop() {
                this.$refs.Container.nativeView.scrollToVerticalOffset(0, true)
                this.isUserInteractionEnabled = true;
                this.$refs.fabButton.nativeView.animate({
                    translate: {
                        x: 0,
                        y: 100
                    },
                    opacity: 1
                })
                .then(() => {}, () => {});
            },
            onScrollNested(args) {
              // if(!this.isUserInteractionEnabled) {
                console.log(args.scrollY)
                if(args.scrollY <= 0) {
                    this.isUserInteractionEnabled = true;
                }

              // }
            },
            onScroll(args) {
                const scrollView = this.$refs.Container.nativeView
                // this.scrollView = this.$refs.Container.nativeView

                // if the offset is less than the height of the header.
                if (scrollView.verticalOffset < this.$refs.Parallex.nativeView.getActualSize().height) {

                    this.onScrollParallex(scrollView.verticalOffset / 2);
                    // this.bus.$emit('onScrollParent', this.scrollView.verticalOffset / 2)
                }

                // BOTTOM
                if(args.scrollY >= (args.object.getViewById("stackList").getActualSize().height - args.object.getActualSize().height)) {

                  // args.object.isUserInteractionEnabled = false;
                  this.isUserInteractionEnabled = false;

                  this.$refs.fabButton.nativeView.animate({
                      translate: {
                          x: 0,
                          y: 0
                      },
                      opacity: 1
                  })
                  .then(() => {}, () => {});
                }


                if(args.scrollY <= (args.object.getViewById("stackList").getActualSize().height - args.object.getActualSize().height) - 5) {
                  this.$refs.fabButton.nativeView.animate({
                      translate: {
                          x: 0,
                          y: 100
                      },
                      opacity: 1
                  })
                  .then(() => {}, () => {});
                }
            },
            onScrollParallex(offset) {
                console.log('onScrollParent', offset)
                const scrollView = this.$refs.Container.nativeView

                // const vm = this

                const Parallex = this.$refs.Parallex.nativeView

                if (scrollView.ios) {
                    // iOS adjust the position with an animation to create a smother scrolling effect.
                    Parallex.animate({
                        translate: {
                            x: 0,
                            y: offset
                        }
                    }).then(() => {}, () => {});
                } else {
                    // Android, animations are jerky so instead just adjust the position without animation.
                    Parallex.translateY = Math.floor(offset);
                }
            },

            onLoaded(args) {
                    this.$refs.fabButton.nativeView.translateY = 100;

                    setTimeout(() => {
                        console.log(this.$refs.Parallex.nativeView.getActualSize().height);
                        console.log(this.$refs.page.nativeView.getActualSize().height);
                        console.log(this.$refs.content.nativeView.getActualSize().height);
                        console.log(this.$refs.actionbar.nativeView.getActualSize().height);

                        this.$refs.content.nativeView.height = (this.$refs.page.nativeView.getActualSize().height - this.$refs.actionbar.nativeView.getActualSize().height)
                    }, 200)
                },

                // TABVIEW
                indexChange: function(args) {
                    let newIndex = args.value
                    console.log('Current tab index: ' + newIndex)
                },
        }
};

</script>
