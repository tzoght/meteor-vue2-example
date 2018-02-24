<template>
    <div>
        <h1>Contact Me</h1>
        <p>
        <ul>
            <li>Email:{{email}} </li>
            <li>Website: </li>
        </ul>
        </p>
    </div>
</template>

<script>
    export default {
        name: 'Contact',
        data(){
            return {
                email: 'foo@gmail.com',
                web: 'google.com',
            }
        }
    }
</script>