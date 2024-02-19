export interface RecipientsDisplayProps {
    recipients: string;
}

export default function RecipientsDisplay({ recipients } : RecipientsDisplayProps) {
    console.log(recipients);

    return <span>{recipients}</span>
}
