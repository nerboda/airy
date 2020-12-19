package co.airy.core.chat_plugin.payload;

import lombok.Data;
import lombok.NoArgsConstructor;

import javax.validation.constraints.NotNull;
import java.util.UUID;

@Data
@NoArgsConstructor
public class AuthenticationRequestPayload {
    private UUID channelId;
    private String resumeToken;
}
