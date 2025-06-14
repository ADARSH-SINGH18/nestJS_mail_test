export default function UserProfile({params}: any) {
    return (
        <div>
            <h1>Profile</h1>
            <hr />
            <h1>Progile page {params.id}</h1>
        </div>
    )
}