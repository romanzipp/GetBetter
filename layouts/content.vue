<template>

    <div class="min-h-screen flex flex-col border-16 border-green-100">

        <Navbar />

        <div class="flex-grow flex flex-col">

            <div class="hidden md:block h-32 bg-rounded" />

            <div class="flex-grow flex flex-col justify-between bg-green-100 -mt-px">

                <div class="container mx-auto mt-12">
                    <Nuxt class="content" />
                </div>

                <Footer />

            </div>

        </div>

    </div>

</template>
