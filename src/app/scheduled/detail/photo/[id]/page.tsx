import { UpdatePostForm } from "@/components"

export default async function PhotoDetail({ params }: { params: { id: string } }) {

    return (
        <div className="h-[90vh] flex md:items-center md:justify-center">
            <UpdatePostForm type="photo" id={params.id} />
        </div>
    )
}
