<template>
    <div>
        <p>
            You pressed the button {{count}} time(s).
        </p>
        <my-button :label="buttonLabel" @click="addOne"></my-button>
        <my-table></my-table>
        <chat></chat>
    </div>
</template>

<script>
    import Chat from '../components/Chat';
    import Test from '../components/Test';
    import {Session} from 'meteor/session';
    import MyTable from "../components/MyTable";

    Session.setDefault("counter", 0);

    let labels = ['Click me!', 'Click me again!', 'Here! Click here!', 'Again! Again!',
        'Don\'t click me! No, I\'m just kidding. You can.', 'You like that?',
        'Can you stratch me in the back please?', 'You are soooo nice! Click!',
        'Hmmmm...', 'You know, you are wasting time clicking me.',
        'No really, you can click me as much as you want.', 'Click me to level up!'];

    export default {
        data() {
            return {
                buttonLabel: 'Click me!',
                count: 0,
                user: 'foo',
            }
        },
        meteor: {
            data: {
                count () {
                    return Session.get('counter');
                },
                user () {
                    return Meteor.user()
                },
            }
        },
        methods: {
            addOne() {
                Session.set('counter', this.count + 1);
                this.buttonLabel = labels[Math.round(Math.random()*(labels.length - 1))];
            }
        },
        components: {
            MyTable,
            Chat,
            Test,
        },
        metaInfo: {
            title: 'Meteor + Vue',
        },
    };
</script>

<style>
    body {
        margin: 30px;
    }

    a {
        color: #40b883;
        text-decoration: none;
    }

    h1, h2 {
        font-weight: normal;
    }
</style>
