<template>
    <Page class="page" actionBarHidden="true">
        <ActionBar title="Login"></ActionBar>

        <Gradient direction="to right" colors="#39B994, #337FC7">
            <FlexboxLayout flexDirection="column" justifyContent="center" class="full-height">
                <Image src="~/assets/images/nsvue_logo.png" class="logo-container"></Image>

                <StackLayout class="container">
                    <FlexboxLayout alignItems="center" class="border-bottom">
                        <Image src="~/assets/images/icon_user.png" class="icon"></Image>
                        <TextField v-model="usernameInput" hint="Username" class="form-input"></TextField>
                    </FlexboxLayout>

                    <FlexboxLayout alignItems="center" class="border-bottom">
                        <Image src="~/assets/images/icon_lock.png" class="icon"></Image>
                        <TextField v-model="passwordInput" hint="Password" secure="true" class="form-input"></TextField>
                    </FlexboxLayout>

                    <Button text="Login" @tap="login()" class="my-button"></Button>

                    <FlexboxLayout alignItems="center" justifyContent="space-between" class="auth-buttons">
                        <Label horizontalAlignment="left" text="Create Account"></Label>
                        <Label horizontalAlignment="right" text="Forgot Password"></Label>
                    </FlexboxLayout>
                </StackLayout>
            </FlexboxLayout>
        </Gradient>
    </Page>
</template>

<script>
    import { isIOS } from 'tns-core-modules/platform';

    export default {
        created() {
            if (!isIOS) {
                this.platform = 'android';
            }
        },
        data() {
            return {
                platform: 'iOS',
                usernameInput: '',
                passwordInput: '',
            };
        },
        methods: {
            login() {

            }
        },
    }
</script>

<style lang="scss" module>
    .auth-buttons {
        color: #fff;
        font-size: 14;
    }

    .border-bottom {
        border-bottom-color: #fff;
        border-bottom-width: 1;
        margin-bottom: 40;
        padding-bottom: 8;
    }

    .container {
        margin-left: 34;
        margin-right: 34;
    }

    .form-input {
        background-color: transparent;
        color: #fff;
        placeholder-color: #fff;
    }

    .full-height {
        height: 100%;
    }

    .icon {
        height: 16;
        margin-right: 10;
        width: 16;
    }

    .logo-container {
        margin-bottom: 60;
        width: 150;
    }

    .my-button {
        background-color: #4bd5dc;
        border-radius: 25;
        color: #fff;
        font-weight: bold;
        letter-spacing: 0.1;
        margin-bottom: 20;
        margin-top: 10;
        padding-bottom: 14;
        padding-top: 14;
        text-transform: uppercase;
    }
</style>