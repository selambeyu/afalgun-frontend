import { MainLayout } from "../../layouts/main-layout";
const Page =()=>{
    return (<p>Home page</p>)
}

Page.getLayout = (page) => <MainLayout>{page}</MainLayout>;

export default Page;