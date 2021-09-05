<template>

    <div>

        <slot name="before" />

        <div class="flex-grow flex flex-col">

            <div class="hidden md:block h-32 bg-rounded bg-white dark:bg-greener-700" />

            <div class="flex-grow flex flex-col justify-between bg-green-100 dark:bg-greener-600 -mt-px">

                <div class="container mx-auto mt-12">
                    <slot />
                </div>

                <Footer />

            </div>

        </div>

    </div>

</template>
